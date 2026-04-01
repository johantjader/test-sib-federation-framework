---
title: "Hur artefakterna hänger ihop"
sidebar_label: "Artefaktkarta"
sidebar_position: 2
description: "En beskrivning av hur avtal, bilagor och policyer relaterar till varandra i federationsplattformen."
---

# Arkitekturkarta över regelverket

Här förklarar vi hur federationsplattformens olika dokument — avtalsmallar, villkorsbilagor, policyer och styrningsdokument — hakar i varandra för att bilda ett sammanhängande, robust och uppdateringsbart regelverk.

---

## 1. Grundprincip

Regelverket är uppdelat i lager, där varje lager har ett tydligt ansvarsområde:

| Lager | Funktion | Frågan det besvarar | Stabilitet |
|---|---|---|---|
| **Avtalsmallar** | Tillhandahåller enhetliga mallar; instansierade avtal skapar rättsliga relationer | *Vem* binder sig till *vad*? | Hög (ändras sällan) |
| **Villkorsbilagor** | Anger detaljerade krav och tekniska regler | *Vad* ska vi uppnå? | Hög (ändras via fastställd förändringspolicy) |
| **Policyer** | Operationaliserar bilagornas krav till harmoniserade processer | *Hur* omsätts kraven i praktiken? | Medel (uppdateras löpande och publiceras separat) |
| **Styrningsdokument** | Reglerar hela ekosystemets inriktning | *När* och *varför* fattas strukturbeslut? | Hög |

Ingen skriftlig del står för sig själv. Bilagor införlivas via avtalen, och policyer operationaliserar bilagornas krav till processer som kan tillämpas enhetligt.

---

## 2. Peka-och-Knyt (Detaljerad mappning)

### Avtalsmallar bygger på Villkorsbilagor

För att undvika att laglig text dubbleras, pekar avtalen in [Villkorsbilagorna (A–G)](/villkorsbilagor/bilaga-a-definitioner) per referens.

* **FED-OP-avtal** (Mellan Ledningsaktör och Federationsoperatör): Inkorporerar Bilaga A, B, D, E, G.
* **ANS-OP-avtal** (Mellan Federationsoperatör och Anslutningsoperatör): Inkorporerar Bilaga A, B, C, D, E, F, G.
* **FM-anslutningsförbindelse** (Mellan Federationsoperatör och Medlem): Inkorporerar Bilaga A, C, D, E, F, G.

### Policyer besvarar Villkorsbilagor

*Observera att formella policyer inom SIB för närvarande är under framtagande. Nedan visas hur strukturen fungerar när publicering sker:*

* **Anslutningspolicy för Federationsmedlemmar:** Beskriver urvalskriterier och hur anslutningsoperatören verifierar en organisations behörighet (Operationaliserar Bilaga B och Bilaga F).
* **Anslutningspolicy för Anslutningsoperatörer:** Beskriver hur säkerhetsgranskningen görs innan en operatör får börja ansluta andra medlemmar (Operationaliserar delar av Bilaga B).
* **Registreringspolicy:** Riktlinjer för hur tekniska systemkomponenter ska matas in, registreras och tilldelas metadata (Operationaliserar Bilaga C).

### Villkorsbilagor sinsemellan

Bilagorna hänger ihop och bildar ett tätt knutet regelverk. Bilaga A (Definitioner) är den gemensamma ordboken som alla andra dokument bygger på. Bilaga B (Krav på infrastrukturtjänster) och Bilaga C (Krav på medlemskomponenter) hämtar sina protokollkrav från Bilaga D (Tekniska specifikationer). Bilaga E (Förändringspolicy) styr i vilken ordning och med vilka varsel som övriga bilagor får justeras. Bilaga G (Ansvarsbegränsningar) samverkar med Bilaga F (Federationsregler) för att hantera riskfördelning och direktkravsrätt.

---

## 3. Livscykel: Från ansökan till driftsatt system

För en anslutande organisation ser det juridiska flödet typiskt ut så här:

1. **Ansökan:** Organisationen kontaktar en godkänd anslutningsoperatör som säkerställer att ansökan uppfyller anslutningspolicyns krav.
2. **Avtalsslutande:** Anslutningsoperatören tecknar, med fullmakt, en standardiserad FM-anslutningsförbindelse med den nya federationsmedlemmen. Detta binder medlemmen till Bilaga F.
3. **Teknisk registrering:** Medlemmen registrerar sina tekniska komponenter. Anslutningsoperatören verifierar att de uppfyller kraven i Bilaga C och publicerar metadata till federationsinfrastrukturen.
4. **Drift och verifikation:** Andra medlemmars system kan nu verifiera det anslutna systemet via federationsinfrastrukturen och förlita sig på att medlemmen bär ansvar enligt kraven i Bilaga F, punkt F.30–F.33.

---

## 4. Förhållandet till Federationskontext

Sveriges offentliga förvaltning har mängder av olika behovsscenarier (till exempel skola, hälso- och sjukvård, domstolar etc). 

Plattformen ovan utgör det solida fundamentet *som är statiskt för dem alla*. När ett specifikt användningsområde ("federationskontext") startas (exempelvis "Kontext Vård" eller "Kontext Bas"), så återanvänds detta fundament rakt av.

Kontexten får addera regler kring *vilka som får ansluta*, men får **aldrig skriva om kärnkraven i bilagorna A–G**. (Reglerna för när och hur man får starta upp en kontext styrs av etableringsprinciper som kommer i nästa utvecklingsfas).
