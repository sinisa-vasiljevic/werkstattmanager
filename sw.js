'use strict';
const CACHE='werkstattmanager-v4.3.18';
const PREFIX='werkstattmanager-';
const CORE=['./index.html'];
const OPTIONAL=['./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
async function fetchAndStore(cache,url,required=false){
 try{const response=await fetch(url,{cache:'reload'});if(!response.ok)throw new Error(url+' '+response.status);await cache.put(url,response.clone());return true}
 catch(error){console.warn('Precache fehlgeschlagen:',url,error);if(required)throw error;return false}
}
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);for(const url of CORE)await fetchAndStore(cache,url,true);await Promise.all(OPTIONAL.map(url=>fetchAndStore(cache,url,false)));await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})()));
async function cachedIndex(){const cache=await caches.open(CACHE);return (await cache.match('./index.html',{ignoreSearch:true}))||(await cache.match(new URL('./index.html',self.location.href).href,{ignoreSearch:true}))}
self.addEventListener('fetch',event=>{const request=event.request,url=new URL(request.url);if(request.method!=='GET'||url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){event.respondWith((async()=>{try{const response=await fetch(request);if(response.ok)(await caches.open(CACHE)).put('./index.html',response.clone());return response}catch(error){return (await cachedIndex())||new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><body style="font-family:system-ui;padding:24px"><h1>Werkstattmanager</h1><p>Offline-Startdatei fehlt. Bitte die App einmal online öffnen.</p></body>',{status:503,headers:{'Content-Type':'text/html; charset=utf-8'}})}})());return}
 event.respondWith((async()=>{const cache=await caches.open(CACHE),hit=await cache.match(request,{ignoreSearch:true});if(hit)return hit;try{const response=await fetch(request);if(response.ok)await cache.put(request,response.clone());return response}catch(error){return new Response('',{status:503,statusText:'Offline'})}})())
});
