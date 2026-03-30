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

Regelverket är uppdelat i lager, där varje instans har ett tydligt ansvarsområde:

| Lager | Funktion | Frågan det besvarar | Stabilitet |
|---|---|---|---|
| **Avtalsmallar** | Skapar formella juridiska relationer | *Vem* binder sig till *vad*? | Hög (ändras sällan) |
| **Villkorsbilagor** | Anger detaljerade krav och tekniska regler | *Vad* ska vi uppnå? | Hög (ändras via fastställd förändringspolicy) |
| **Policyer** | Beskriver operationella processer | *Hur* mäter vi at kraven uppfylls? | Medel (uppdateras löpande och publiceras separat) |
| **Styrningsdokument** | Reglerar hela ekosystemets inriktning | *När* och *varför* fattas strukturbeslut? | Hög |

Ingen skriftlig del står för sig själv. Bilagor införlivas automatiskt via avtalen, och policyer anger arbetsgången för att bygga tjänster som svarar mot bilagornas krav.

---

## 2. Peka-och-Knyt (Detaljerad mappning)

### Avtalsmallar bygger på Villkorsbilagor

För att undvika att laglig text dubbleras, pekar avtalen in [Villkorsbilagorna (A–G)](bilagor/bilaga-a-definitioner) per referens.

* **FED-OP-avtal** (Mellan Ledningsaktör och Federationsoperatör): Inkorporerar Bilaga A, B, D, E, G.
* **ANS-OP-avtal** (Mellan Federationsoperatör och Anslutningsoperatör): Inkorporerar Bilaga A, B, C, D, E, F, G.
* **FM-anslutningsförbindelse** (Mellan Federationsoperatör och Medlem): Inkorporerar Bilaga A, C, D, E, F, G.

### Policyer besvarar Villkorsbilagor

*Observera att formella policyer inom SIB för närvarande är under framtagande. Nedan visas hur strukturen fungerar när publicering sker:*

* **Anslutningspolicy för Federationsmedlemmar:** Beskriver urvalskriterier och hur anslutningsoperatören verifierar en organisations behörighet (Operationaliserar Bilaga B och Bilaga F).
* **Anslutningspolicy för Anslutningsoperatörer:** Beskriver hur säkerhetsgranskningen görs innan en operatör får börja ansluta andra medlemmar (Operationaliserar delar av Bilaga B).
* **Registreringspolicy:** Riktlinjer för hur tekniska systemkomponenter ska matas in, registreras och tilldelas metadata (Operationaliserar Bilaga C).

### Villkorsbilagor sinsemellan

Bilagorna "pratar" också med varandra för ett tätt knutet regelverk:
* **Definitioner (Bilaga A):** Är ordboken som alla andra dokument bygger på.
* **Krav på Infrastruktur (Bilaga B) & Komponenter (Bilaga C):** Hämtar exakta protokoll-krav från **Tekniska specifikationer (Bilaga D)**.
* **Förändringspolicy (Bilaga E):** Är den processuella motorn som styr i vilken ordning och med vilka varsel som övriga bilagor får justeras framöver.
* **Ansvarsbegränsningar (Bilaga G):** Interagerar med **Federationsreglerna (Bilaga F)** för att hantera riskfördelning och direktkravsrätt vid digitala incidenter.

---

## 3. Livscykel: Från ansökan till driftsatt system

För en anslutande myndighet ser det juridiska flödet typiskt ut så här:

1. **Ansökan:** Myndigheten kontaktar en godkänd Anslutningsoperatör (AO). AO säkerställer (via kommande anslutningspolicyer) att ansökan håller måttet.
2. **Avtalsslutande:** AO tecknar, med fullmakt, den standardiserade `FM-anslutningsförbindelsen` med den nya federationsmedlemmen i stället för Federationsoperatören. Detta binder medlemmen till Bilaga F.
3. **Teknisk Registrering:** Medlemmen lägger därefter in sina IT-system. AO verifierar systemen som skall möta alla tekniska krav enligt Bilaga C. Information publiceras sedan till det centrala registret över betrodda system.
4. **Drift & Verifikation:** Andra medlemmars IT-system kan nu elektroniskt verifiera det anslutna systemet och utgå ifrån att medlemmen tar ansvaret enligt kraven i Bilaga F, punkt F.30–33.

---

## 4. Förhållandet till Federationskontext

Sveriges offentliga förvaltning har mängder av olika behovsscenarier (till exempel skola, hälso- och sjukvård, domstolar etc). 

Plattformen ovan utgör det solida fundamentet *som är statiskt för dem alla*. När ett specifikt användningsområde ("federationskontext") startas (exempelvis "Kontext Vård" eller "Kontext Bas"), så återanvänds detta fundament rakt av.

Kontexten får addera regler kring *vilka som får ansluta*, men får **aldrig skriva om kärnkraven i bilagorna A–G**. (Reglerna för när och hur man får starta upp en kontext styrs av etableringsprinciper som kommer i nästa utvecklingsfas).
