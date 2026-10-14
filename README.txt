WERKSTATTMANAGER PWA 4.3.45

Alle Dateien aus dem ZIP direkt in das Hauptverzeichnis des GitHub-Repositorys hochladen.

Pflicht: index.html, manifest.webmanifest, sw.js, apple-touch-icon.png, icon-192.png, icon-512.png

Auf dem iPhone: Seite in Safari öffnen, Teilen, Zum Home-Bildschirm, Als Web-App öffnen, Hinzufügen.

Vor späteren Updates immer unter Optionen ein Backup exportieren.
Die Materialimport_Vorlage.csv kann direkt als Vorlage für den Materialimport verwendet werden.

Versionsanzeige im Header: WERKSTATTMANAGER v 4.3.16

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

V4.3.13: Fahrzeug-/Getriebespeicherung gegen Abbruch und Teiländerungen abgesichert; historische gelöschte Leistungen werden nach Wiederherstellung vollständig neu berechnet; Service-Worker-Precache prüft jetzt alle Pflichtdateien; Offline-Text und Versionsangaben korrigiert.

V4.3.14: Historische Aufträge verwenden wieder vollständig dieselbe Arbeitsrabatt-Logik wie aktuelle Aufträge. Angebotstexte historischer Positionen zeigen Arbeitszeit und Herkunft statt eines falschen Positionspreises von 0,00 EUR. Der Service Worker prüft nun jede Pflichtdatei des Precache-Vorgangs. Cache und sichtbare Versionsnummer wurden auf 4.3.14 erhöht.

V4.3.16: Reparatur des Offline-Starts. Sichtbare Startprüfung statt schwarzem Bildschirm, globaler Fehlerhinweis mit Kopierfunktion, gehärtete Alt-Daten-Normalisierung, Service-Worker ohne automatische Reload-Schleife, neuer Cache 4.3.16 und toleranter Precache für optionale Dateien.


Version 4.3.16: Fahrzeug-Loeschfunktion unter Fahrzeugdetails und Fahrzeug bearbeiten wiederhergestellt. Auftraege bleiben als historische Nachweise erhalten.


Version 4.3.17: TÜV-Grenzwerte dauerhaft abgesichert (Rot kleiner/gleich Gelb kleiner/gleich Gesamtzeitraum). Manifest wieder in das Release-Paket aufgenommen. Fahrzeug-Löschfunktion aus 4.3.16 unverändert erhalten.

Version 4.3.18: Kundenlöschung mit Fahrzeug- und Historienprüfung; mobile Fahrzeugaktionen korrigiert.

Version 4.3.24: Echte PDF-Datei per Teilen/Drucken, VIN eigene Zeile, mobile Einspalten-Darstellung, Materialvorschau mit Einzelliste und strikte Getriebeöl-Sicherheitsprüfung. Getriebeöle werden niemals automatisch zugeordnet.

Version 4.3.26: Fahrzeugzentrale mit Übersicht, Aufträgen, Wartung, Material, Dokumenten und Fahrzeugdaten.

Version 4.3.29: Robuste Übernahme gefundener Filter aus unterschiedlichen KI-JSON-Strukturen; MANN-FILTER wird bei mehreren Treffern bevorzugt. Alle Filter werden strikt dem recherchierten Fahrzeug zugeordnet.

Version 4.3.29 Gesamtprüfung: fehlende Wartungsplan-Funktion repariert; fahrzeugspezifische Getriebeöl-/Filterzuordnung und manuelle Servicefüllmenge wiederhergestellt; alte globale Getriebematerialien quarantänisiert.

Version 4.3.31:
- Familienfahrzeug als dritte Fahrzeugart fest im aktiven Fahrzeugformular eingebaut.
- Auswahl und Speicherung als type=family.
- Familienkontakte und reguläre Kunden getrennt gefiltert.
- Drei Schaltflächen bleiben nebeneinander; Beschriftungen dürfen umbrechen und werden nicht abgeschnitten.

Version 4.3.31 Abschlusskorrektur:
- Ausgangspunkt ist ausschließlich der hochgeladene 4.3.31-Stand.
- Drei Fahrzeugarten bleiben unverändert vorhanden und funktional.
- Nur die sichtbaren Beschriftungen wurden mit festen, kontrollierten Zeilenumbrüchen versehen.
- Keine Änderung an Auswahl-, Speicher-, Filter-, Kunden- oder Fahrzeuglogik.

Version 4.3.32:
- Grundlage ist ausschließlich der zuletzt hochgeladene Stand 4.3.31.
- Fahrzeugkarten unterscheiden jetzt direkt nach vehicle.type: own, family und customer.
- Familienfahrzeuge erhalten die gelbe Klasse family und den Text Familienfahrzeug.
- Filter-, Auswahl- und Speicherlogik wurden nicht verändert.


Version 4.3.33:
- Nur mobile Sichtbarkeit beim Kopieren/Teilen korrigiert.
- Rechercheinhalt, Rechercheumfang und Antwortschema unverändert.

Version 4.3.34:
- Rechercheauftrag erhält vor Kopieren/Teilen echte Zeilenumbrüche bei maximal etwa 64 Zeichen.
- Umbruch erfolgt an Wortgrenzen; Wörter, Teilenummern und URLs werden nicht zerrissen.
- Vorhandene Absätze, Listen, Fahrzeugdaten und JSON-Einrückungen bleiben erhalten.
- Rechercheinhalt und Suchlogik bleiben unverändert; nur die Textformatierung wurde angepasst.


Version 4.3.36:
- 22-Zeichen-Umbruch bleibt aktiv.
- iOS-Teilen-Dialog zu ChatGPT entfernt, weil dessen eingebettete Webansicht überbreit bleibt.
- Neuer Hauptablauf kopiert den Auftrag und öffnet ChatGPT separat.
- In ChatGPT nur noch ins Eingabefeld tippen und Einfügen wählen.

Version 4.3.37:
- Tatsächliche Ursache der breiten ChatGPT-Eingabe beseitigt: Der bisherige große JSON-Schemablock enthielt untrennbare Schlüsselzeilen und wurde trotz 22-Zeichen-Umbruch nicht getrennt.
- Der Rechercheauftrag enthält keinen ausgeschriebenen JSON-Musterblock mehr.
- Erwartete JSON-Felder werden einzeln aufgeführt; dadurch keine künstlich breite Eingabezeile.
- Die zuvor getriebelastige Recherche wurde wieder um vollständige Motor-, Öl-, Filter- und Fahrzeugidentifikation ergänzt.
- VIN, HSN/TSN, Motorcode, Bauzeit, Filterregeln, MANN-FILTER, Motoröl, Getriebe und alle Leistungen bleiben enthalten.

Version 4.3.39:
- Harte 22-Zeichen-Zeilenumbrüche im finalen Rechercheauftrag entfernt; normaler Browserumbruch statt hunderter kurzer Zeilen.
- Motor und Getriebe gleichwertig, mehrere plausible Kandidaten und Markenalternativen.
- LIQUI MOLY Ölwegweiser für Motor und Getriebe verpflichtend.
- LIQUI-MOLY-Getriebe-Ölwechselmenge muss in transmission.oil.serviceFillLiters, Gesamtfüllmenge in dryFillLiters.
- Eine eindeutige fahrzeugspezifische LIQUI-MOLY-Angabe reicht für confidence medium und benötigt keine zweite Quelle.
- Produkt-Gebindegröße darf nicht als Fahrzeug-Füllmenge verwendet werden.

Version 4.3.40:
- Früheren direkten ChatGPT-Ablauf wiederhergestellt.
- Rechercheauftrag kopieren, teilen und ChatGPT öffnen sind wieder getrennte Aktionen.
- ChatGPT wird direkt mit https://chatgpt.com geöffnet.
- Kein about:blank, keine nachträgliche Weiterleitung und keine gekoppelte Kopieren-und-Öffnen-Funktion.
- Beim Kopieren und Teilen wird aiPrompt unverändert übernommen.
- Erweiterte Recherche aus 4.3.39 einschließlich Motor/Getriebe, Kandidaten, MANN-FILTER und LIQUI-MOLY-Mengenlogik unverändert erhalten.

Version 4.3.41:
- Letzte untrennbare Langbegriffe im sichtbaren Rechercheauftrag entfernt oder sprachlich getrennt.
- Die langen Pfade transmission.oil.serviceFillLiters und transmission.oil.dryFillLiters werden nicht mehr als zusammenhängende Zeichenfolgen ausgegeben.
- Schemafelder serviceFillLiters und dryFillLiters bleiben unverändert verlangt und importkompatibel.
- LIQUI-MOLY-Mengenlogik, erweiterte Motor-/Getrieberecherche und direkter ChatGPT-Ablauf bleiben erhalten.

Version 4.3.42:
- LIQUI-MOLY-Mengenrecherche als konkreten Navigations- und Ausleseablauf formuliert.
- Produktkarten müssen bis zum Abschnitt Füllmenge geprüft werden; Trockenfüllung und Servicebefüllung werden getrennt übernommen.
- Verkaufsgebinde bei Artikelnummern werden ausdrücklich von Fahrzeugfüllmengen getrennt.
- Getriebe: Servicebefüllung -> serviceFillLiters, Trockenfüllung -> dryFillLiters.
- Motor: Einzelwert -> capacityWithFilterLiters; Bereiche zusätzlich in capacityMinLiters, capacityMaxLiters und capacityText.
- Dynamisch nicht lesbare LIQUI-MOLY-Seite darf nicht mehr fälschlich als fehlende Füllmenge bewertet werden.

Version 4.3.43:
- LIQUI-MOLY-Mengenlogik auf Servicebefüllung beziehungsweise Ölwechselmenge reduziert.
- Trockenfüllungen werden nicht mehr recherchiert, ausgegeben, importiert oder als Materialbedarf verwendet.
- Getriebe: ausschließlich serviceFillLiters.
- Motor: Einzelwert in capacityWithFilterLiters; Mengenbereich zusätzlich in capacityMinLiters, capacityMaxLiters und capacityText.
- Direkter ChatGPT-Ablauf, erweiterte Motor-/Getrieberecherche, Filter- und Kandidatenlogik unverändert erhalten.

Version 4.3.44:
- Eigenständiger KI-Wartungsplan-Workflow aus Version 4.3.19 in die aktuelle 4.3.43-Basis übernommen.
- Drei frei wählbare, aufsteigende Service-Kilometerstände; eigener Rechercheauftrag, JSON-Prüfung und selektive Übernahme.
- Fahrzeugzentrale, Aufträge, Materialsuche, Motor-/Getrieberecherche, Filterlogik und Dokumente unverändert gelassen.
- PWA-Manifest ergänzt.

Version 4.3.45:
- Hauptnavigation auf Übersicht, Fahrzeuge, Kunden, Leistungen und Optionen reduziert.
- Aufträge und Kosten bleiben vollständig erhalten und sind fahrzeugbezogen in der Fahrzeugzentrale gebündelt.
- Neue zentrale Ansicht Historie / Kosten je Fahrzeug mit Summen, PDF-Historie, Auftrags- und Dokumentzugang.
- Kunden-Fahrzeugaktionen führen zur Fahrzeugzentrale statt zu einem zweiten parallelen Auftragsweg.
- Wartung, Material, Dokumente, Fahrzeugdaten und KI-Recherche bleiben unverändert verfügbar.
- Cache und sichtbare Versionsnummer auf 4.3.45 erhöht.
