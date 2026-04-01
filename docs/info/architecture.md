---
title: "Avtalsarkitektur"
sidebar_label: "Avtalsarkitektur"
sidebar_position: 3
description: "Beskrivning av federationsplattformens typ/instans-modell och legala konstruktion."
---

# Avtalsarkitektur

Samordnad identitet och behörighet (SIB) bygger på en typ-/instans-modell. Federationsplattformen tillhandahåller färdiga avtalsmallar med fasta kärnvillkor och gemensamma villkorsbilagor. En federationskontext uppstår genom att mallarna instansieras med parter och avgränsningar. Denna sida beskriver hur modellen fungerar och säkerställer att alla skyldigheter löper som en obruten kedja från den enskilda organisationen upp till plattformens kärna.

---

## 1. Plattformsnivå och instansiering

### Vad som bor på plattformsnivå

Federationsplattformen tillhandahåller tre typer av gemensamt material:

- **Avtalsmallar** — enhetliga mallar med fasta kärnvillkor och öppna variabler (markerade med hakparenteser, exempelvis [FEDERATIONSOPERATÖR]).
- **Villkorsbilagor (A–G)** — bindande krav som alla federationskontexter ärver. De bor i plattformen så att ändringar slår igenom i alla kontexter och på så sätt bibehåller grundtillit och teknisk interoperabilitet.
- **Policyer** — operationaliserar bilagornas krav till harmoniserade processer. Formella policyutkast är under framtagning.

### Vad som händer vid instansiering

En federationskontext uppstår genom att avtalsmallarna instansieras: parter, kontextnamn, målgrupp, syfte och eventuella kontextspecifika avgränsningar fylls i. Det är det instansierade avtalet som skapar de formella rättsliga relationerna — mallen i sig är en typnivådokumentation.

### Vilka frihetsgrader en kontext har

En federationskontext kan vid instansiering ange sin egen målgrupp, sitt syfte och kontextspecifika tillägg. Kontexten kan exempelvis begränsa vilka typer av organisationer som får ansluta sig eller specificera vilka sektorsspecifika kompletteringar som gäller.

### Vad en kontext aldrig får ändra

Kärnvillkoren i avtalsmallarna och villkorsbilagorna (A–G) får inte ändras vid instansiering. Grundtilliten och den tekniska interoperabiliteten mellan federationskontexter får inte gå förlorad. Kontextspecifika avgränsningar får aldrig sänka tillitsnivån under den baslinje som plattformen fastställer.

*Styrningsdokument om etablering av nya federationskontexter planeras i kommande utvecklingsfas.*

---

## 2. Vem tecknar avtal med vem?

Avtalsstrukturen bygger på tre relationer:

### Kopplingen mellan plattform och kontext

När en ny federationskontext etableras tecknas ett **FED-OP-avtal** mellan den nationella ledningsaktören och en utsedd federationsoperatör. Detta är det avtal som binder den specifika kontexten till plattformens krav.

### Operativ hantering via anslutningsoperatörer

Federationsoperatören ackrediterar anslutningsoperatörer genom ett **ANS-OP-avtal**. Avtalet innehåller en fullmakt som innebär att anslutningsoperatören får agera i federationsoperatörens namn vid anslutning av federationsmedlemmar.

### Anslutning av enskild verksamhet

När en organisation ansluter som federationsmedlem ingår den en **FM-anslutningsförbindelse** via anslutningsoperatören. Genom fullmaktsmodellen blir federationsmedlemmen juridiskt direkt bunden till federationsoperatören. Anslutningsoperatörens roll är att genomföra anslutningen — inte att vara motpart.

---

## 3. Policyernas roll

Policyerna operationaliserar bilagornas krav till processer. Anslutningspolicyn anger exempelvis hur identitetskontroll av inkommande medlemmar genomförs innan FM-anslutningsförbindelsen tecknas. Registreringspolicyn anger hur tekniska komponenter registreras och verifieras mot kraven i Bilaga C.

Policyerna kan uppdateras i takt med att tekniken mognar, medan avtalsmallarna och villkorsbilagorna hålls stabila.

---

## 4. Den rättsliga kedjan

Hela kedjan ser ut så här:

1. **Plattformen** tillhandahåller avtalsmallar och villkorsbilagor (A–G).
2. **Federationsoperatören** driver kontexten enligt mallarna.
3. **Anslutningsoperatören** får fullmakt att i federationsoperatörens namn ansluta federationsmedlemmar.
4. **Federationsmedlemmen** genomgår anslutningsoperatörens kontroller men knyts juridiskt direkt till federationsoperatören.

Oavsett vilken anslutningsväg en federationsmedlem har, gäller samma villkor i Bilaga F. Det möjliggör obruten rättslig tillit mellan två helt oberoende tekniska system.
