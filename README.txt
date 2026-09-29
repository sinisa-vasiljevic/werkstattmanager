WERKSTATTMANAGER PWA 4.1

Alle Dateien aus dem ZIP direkt in das Hauptverzeichnis des GitHub-Repositorys hochladen.

Pflicht: index.html, manifest.webmanifest, sw.js, apple-touch-icon.png, icon-192.png, icon-512.png

Auf dem iPhone: Seite in Safari öffnen, Teilen, Zum Home-Bildschirm, Als Web-App öffnen, Hinzufügen.

Vor späteren Updates immer unter Optionen ein Backup exportieren.
Die Materialimport_Vorlage.csv kann direkt als Vorlage für den Materialimport verwendet werden.

Versionsanzeige im Header: WERKSTATTMANAGER v 2.1

Funktionsgeprüfte Wartungsversion 2.4.1: TÜV-Grenzen werden automatisch konsistent gehalten.

Version 3.0.1 basiert auf der funktionsgeprüften 2.4.1 und ergänzt Fahrzeugkategorien, Klassen-Stundensätze, Richtzeiten je Klasse, Schnell-KVA und erzwungene PWA-Aktualisierung.

Version 4.1 FINAL: Praxisdatenbank mit Motorvarianten, sichtbarer Übernahme, Fahrzeugdetails und Sicherheitsabfragen.

Version 4.2 FINAL: KI-Rechercheauftrag, JSON-Prüfimport und Richtzeiten für alle Leistungen.

Version 4.2.3: sichtbarer roter Importweg und Parser für Backslash-Formate aus kopierten ChatGPT-Antworten.

Version 4.3.1: Familien-Badge gelb/schwarz. Dauerhafter Kunden- und Familienrabatt ausschließlich auf Arbeitskosten. Zusätzlicher Auftragsrabatt ebenfalls nur Arbeit und auf vorhandene Arbeitskosten begrenzt. Materialkosten werden nie rabattiert. KI-Richtzeit bleibt erste Priorität.

Version 4.3.3: Kundenansicht mit verknüpften Fahrzeugen und Direktaktionen. WhatsApp beim Kunden wiederhergestellt. Kunde kann während der Fahrzeuganlage angelegt werden; Fahrzeugdaten werden zwischengespeichert und danach wiederhergestellt. Fahrzeug-Badges inklusive Familienfahrzeug zentralisiert.

Version 4.3.4: Offene Kunden-Fahrzeug-Ablauflücken geschlossen. Fahrzeugentwurf wird in sessionStorage gesichert, X und Hintergrund führen zurück zum Entwurf, bewusstes Verwerfen ist doppelt bestätigt. Fahrzeugaktionen beim Kunden speichern aktuelle Kundendaten. WhatsApp nutzt die aktuelle Feldeingabe, wird dynamisch angezeigt und validiert die Rufnummer.

Version 4.3.5: Materialmengen korrigiert. Nur eindeutig erkanntes Motoröl in Liter übernimmt die Fahrzeug-Ölfüllmenge; Ölfilter und andere Stückartikel starten mit Menge 1. Kundenaufträge verwenden einheitlich den aktuellen Stundensatz der Fahrzeugklasse. Bei bestehenden Aufträgen werden gespeicherter und aktueller Stundensatz sichtbar verglichen; beim erneuten Speichern gilt der aktuelle Fahrzeugklassen-Stundensatz.

Version 4.3.6: Auftragsbearbeitung vollständig überarbeitet. Leistungen und Materialien können durch Abwählen entfernt werden. Jeder Auftrag ist vollständig bearbeitbar und doppelt bestätigt löschbar. Eigene Fahrzeuge berechnen ausschließlich konkrete Materialien plus direkten Kosteneintrag; Richtzeiten erzeugen keine Arbeitskosten oder versteckten Leistungskosten. Auftragskarten und Live-Vorschau zeigen die vollständige Kostenaufteilung. Alte, nicht aufgeschlüsselte Kostenanteile werden sichtbar markiert und entfallen beim erneuten Speichern.

Version 4.3.7: Leistungen im Auftragsformular werden stabil nach Leistungskategorien gruppiert. Leistungen können explizite Pflichtmaterialien besitzen. Beim Auswählen einer Leistung werden erforderliche Materialien samt korrekter Menge automatisch aktiviert; Pflichtmaterial kann nicht versehentlich entfernt werden. Vor dem Speichern erfolgt eine Vollständigkeitsprüfung. Bestehende Standardleistungen erhalten einmalig eindeutige Materialzuordnungen, und die Zuordnung ist im Leistungseditor anpassbar.

Version 4.3.8: Getriebe-Workflow mit Getriebeart, Code, Oelspezifikation, Freigabe, Servicefuellmenge, Filter und Hinweisen. KI-Vorschlaege werden geprueft oder geaendert und erst nach Bestaetigung gespeichert. Getriebeoel wird in Liter, Filter in Stueck angelegt und Leistungen zugeordnet. Leistungen sind mit Nutzungspruefung und doppelter Abfrage loeschbar; alte Auftraege bleiben erhalten.

Version 4.3.9: Getriebeart, Getriebetyp/Getriebefamilie und konkreter Getriebekennbuchstabe werden getrennt erfasst. Fahrzeug und KI-Prüfmaske zeigen den Identifikationsstatus rot, gelb oder grün. Materialübernahme bei fehlendem Kennbuchstaben erfordert eine zusätzliche Warnbestätigung. KI-Recherche fordert Familie und konkreten Kennbuchstaben ausdrücklich getrennt an.

Version 4.3.10: Liqui-Moly-Produkte erst nach Bestaetigung der Getriebedaten. Aenderungen setzen die Freigabe zurueck. Produkt wird separat bestaetigt; ohne belastbaren Vorschlag wird nichts erfunden. Preis startet bei 0,00 Euro mit Warnung.


V4.3.11: Bereinigungs-, Zuordnungs- und Offline-Patch. Getriebezuordnung, KI-Import-Rollback, Leistungsfilter, Pflichtmaterialprüfung, historische Aufträge, Materialverknüpfungen, beschädigte Daten und Service Worker wurden abgesichert.
