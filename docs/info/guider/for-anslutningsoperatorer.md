---
title: "För Anslutningsoperatörer"
sidebar_label: "Anslutningsoperatör"
sidebar_position: 1
description: "Vägledning för organisationer som vill verka som anslutningsoperatör inom SIB."
---

# Guide för blivande anslutningsoperatörer

Denna guide riktar sig till offentliga aktörer och leverantörer som planerar att verka som **anslutningsoperatör** inom en federationskontext i Samordnad identitet och behörighet (SIB).

## Vad är en anslutningsoperatör?

En anslutningsoperatör fungerar som en länk in i federationen. Deras uppdrag är att hantera den tekniska och administrativa anslutningen av *federationsmedlemmar* (till exempel myndigheter eller kommuner) till en bestämd federationskontext. 

Anslutningsoperatören driver en godkänd teknisk anslutningstjänst (en s.k. Intermediate Entity) och genomför de kontroller av säkerhet och identitet som federationsplattformens regler kräver.

När en anslutningsoperatör ansluter nya medlemmar, agerar de med formell **fullmakt** från federationsoperatören. Det betyder att det juridiska avtalet (FM-anslutningsförbindelsen) som ingås tekniskt sett blir ett avtal mellan *federationsoperatören* och den *nya medlemmen*. Anslutningsoperatören sköter administrationen och tekniken, men det juridiska systemansvaret landar direkt hos federationen.

> **Observera:** Anslutningsoperatör är en *verksamhetsroll*, inte enbart en IT-tjänst. En stor organisation kan vara anslutningsoperatör inom flera olika federationskontexter samtidigt.

---

## Vad krävs av er?

För att bli godkänd som anslutningsoperatör finns ett antal grundkrav uppställda i regelverket. Här är en övergripande sammanfattning:

### 1. Organisatoriska krav
De exakta organisatoriska kraven finns definierade i [Bilaga B, avsnitt B.1.01–B.1.07](/regelverk/villkorsbilagor/bilaga-b-krav-infrastrukturtjanster). I korthet innebär det att er organisation måste:
* Vara en svensk juridisk person med aktiv status.
* Ha anmält behöriga företrädare och tekniska/administrativa kontaktpersoner.
* Tillhandahålla en bemannad kontaktväg för incidenthantering.
* Bedriva ett systematiskt och dokumenterat informationssäkerhetsarbete (inkl. rutiner för incident- och nyckelhantering).

### 2. Tekniska krav
De detaljerade tekniska kraven finns definierade i [Bilaga B, avsnitt B.1.10–B.1.14](/regelverk/villkorsbilagor/bilaga-b-krav-infrastrukturtjanster). I korthet måste ni:
* Driva en anslutningstjänst som publicerar och hanterar metadata strikt enligt [Bilaga D — Tekniska specifikationer](/regelverk/villkorsbilagor/bilaga-d-tekniska-specifikationer).
* Upprätthålla mycket hög tillgänglighet för uppslags- och verifieringstjänster.
* Hantera kryptografiska nycklar säkert (kontrollerad rotation och förmåga till nödåterkallelse).

### 3. Godkännandeprocess (Granskning)
Innan ni kan börja verka genomgår ni en granskning från federationsoperatören (eller ledningsaktören, vid plattformsgemensam ackreditering). 
*Exakta detaljer och procedurer för hur denna säkerhetsprövning ska genomföras kommer att specificeras i den framtida formella **Anslutningspolicyn för anslutningsoperatörer** som just nu är under framtagande.*

---

## Vilka avtal tecknar ni?

1. **ANS-OP-avtal:** Det primära avtalet som tecknas mellan er och federationsoperatören. Avtalet reglerar era skyldigheter och ger er den legala fullmakten att ansluta medlemmar i systemet.
2. **Tjänsteavtal (Frivilligt):** Avtal mellan er och era kunder (federationsmedlemmarna) avseende egna kommersiella tilläggstjänster (såsom supportnivåer, drift av klientkomponenter m.m). Dessa ligger helt utanför federationsregelverket.

---

## Er löpande uppgift

Som aktiv anslutningsoperatör är ert dagliga arbete inriktat på följande områden:

### Verifiering av nya medlemmar
Vid anslutning är det ert ansvar att noggrant identifiera och kontrollera den sökande organisationen. *De detaljerade kontrollkraven (t.ex. kontroll mot myndighetsregister) kommer att preciseras i den framtida **Anslutningspolicyn för federationsmedlemmar** som för närvarande tas fram.* Ni måste bland annat intyga att rätt organisation ansluts av en behörig företrädare.

### Registrering av tekniska system
Ni säkerställer att de tekniska IT-system som medlemmarna vill ansluta uppfyller kraven.
* Ni verifierar att de uppfyller tillämpliga delar av [Bilaga C — Krav på medlemskomponenter](/regelverk/villkorsbilagor/bilaga-c-krav-medlemskomponenter).
* Systemen domänkontrolleras och får korrekt metadata. *Den exakta flödesbeskrivningen utfärdas i den kommande **Registreringspolicyn**.*

### Förvaltning
* Ni övervakar livscykeln av anslutningar (vem som är tillitsfull och aktiv).
* Hanterar incidenter (vid misstänkt kompromettering avlövas exempelvis tilliten tekniskt).
* Re-verifierar med jämna mellanrum medlemmars fortsatta behörighet.

## Särskilda begränsningar

Som anslutningsoperatör har ni stor påverkan på federationens säkerhet. Ni får därför **inte**:
* Skriva om eller åsidosätta kärnvillkoren i avtalsmallarna när ni ansluter en kund.
* Avvika från säkerhets- eller implementationskraven i villkorsbilagorna.
* Självmant fatta beslut om formell uppsägning av en enskild federationsmedlem utan dialog med federationsoperatören.
* På egen hand låta en tredje part ta över er fullmakt (s.k. vidaredelegering).
* Diskriminera sökande organisationer förutsatt att de uppfyller kontextens krav.
