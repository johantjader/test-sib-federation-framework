---
title: "För Federationsmedlemmar"
sidebar_label: "Federationsmedlem"
sidebar_position: 2
description: "Vägledning för organisationer som vill ansluta sina system som federationsmedlem inom SIB."
---
:::note Informativ
Denna guide är informativ och sammanfattar normativa krav för målgruppen. För exakta och bindande regler, se regelverkets normativa bilagor.
:::

# Guide: Att ansluta som federationsmedlem

Denna guide riktar sig till organisationer inom offentlig sektor (eller deras utförare) som planerar att ansluta sig som **federationsmedlem** i en federationskontext inom Samordnad identitet och behörighet (SIB).

---

## 1. Vad innebär det att vara medlem?

En federationsmedlem är en organisation (en godkänd juridisk person) som skrivit på en anslutningsförbindelse och därmed tagit klivet in i den digitala gemenskapen. 

Som medlem får ni rätt att lägga in och registrera era egna tekniska IT-system (era *komponenter*) i federationen. Eftersom ni finns i federationen kommer andra offentliga organisationers system att kunna lita på era system, och ni kan bygga API:er och e-tjänster som pratar direkt med varandra med hög tillit.

När ni ansluter er godkänner ni [Bilaga F — Federationsregler](../bilagor/bilaga-f-federationsregler). Eftersom **alla** anslutna medlemmar lyder under exakt samma krav, skapas ett enhetligt och säkert ekosystem oavsett vilken ombudstjänst (Anslutningsoperatör) ni eller andra valde för att ansluta er.

---

## 2. Hur går en anslutning till?

Att gå från utanförskap till anslutet system sker normalt i fyra steg:

### Steg 1: Välj en anslutningsoperatör
Ni ansluter aldrig rent tekniskt "direkt" mot staten/plattformen på egen hand, utan ni använder en godkänd *Anslutningsoperatör* (AO). Anslutningsoperatören bistår er med plattformsteknik och hanterar era metadata. 

### Steg 2: Genomgå identitetskontroll
Er valda Anslutningsoperatör kommer att göra en säkerhets- och identitetskontroll av er (en s.k. organisationsverifiering). De kontrollerar att ni är den ni utger er för att vara, att rätt firmatecknare/företrädare skriver på, och att ni tillhör rätt målgrupp. *(Detaljer för exakt hur AO gör dessa kontroller kommer framöver att fastställas i policydokument från ledningsaktören).*

### Steg 3: Ingå avtal
När ni blivit godkända undertecknar ni en `FM-anslutningsförbindelse`. Den tecknas rent administrativt med er Anslutningsoperatör — men juridiskt sluts avtalet mellan er och den yttersta **Federationsoperatören** gällande kontexten. I avtalet intygar ni att ni åtar er det som står i [federationsreglerna (Bilaga F)](../bilagor/bilaga-f-federationsregler).

### Steg 4: Aktivera system (Registrering)
Nu är ni medlemmar! Nu kan era IT-avdelningar och utvecklare registrera era faktiska tekniska system hos er Anslutningsoperatör. Vid registrering kontrolleras systemen så att de uppfyller säkerhetskraven i [Bilaga C](../bilagor/bilaga-c-krav-medlemskomponenter).

---

## 3. Vad förväntas av er?

### Verksamhetens ryggrad
Era primära åtaganden som verksamhet anges i [Bilaga F — Federationsregler](../bilagor/bilaga-f-federationsregler). Några viktiga axplock:
- Ni måste lämna korrekt, fullständig och aktuell information.
- Förklaringar om behörig företrädare och tekniska kontaktpersoner måste hållas uppdaterade.
- Informationssäkerhetsarbetet måste bedrivas systematiskt.
- Ni åtar er att snabbt anmäla säkerhetsincidenter (exempelvis om ni misstänker att er it-miljö komprometterats).

### Tekniska krav på era IT-system
När ni ansluter system (webbapplikationer, API:er m.m.) beror kraven på vad systemet ska göra. Den exakta detaljbeskrivningen av kraven finns i [Bilaga C](../bilagor/bilaga-c-krav-medlemskomponenter):
- Ska ni *hämta* information? Då gäller C.1 — Krav på klienter.
- Ska ni *ge* information (t.ex. vid datauttag)? Då gäller C.2 — Krav på resursservrar.
- Står ni för central inloggning/biljettutfärdande åt era egna anställda? Då gäller C.3 — Auktorisationsservrar.

### Att lita på andra (Gäller förlitande parter)
När ni tar emot elektroniska anrop från andra federationsmedlemmar gäller principerna i [Bilaga F, avsnitt 5](../bilagor/bilaga-f-federationsregler):
- Federationen talar endast om *vilken organisation* som gör anropet.
- **Det är alltid ni som fattar åtkomstbeslutet.** Infrastrukturen beviljar inte åtkomst; den tillhandahåller kryptografiskt säkra id-handlingar mellan system.

---

## 4. Begränsningar i infrastrukturen

Tekniken löser digital introduktion automatiskt, men den ersätter inte sunt förnuft. 

Federationsinfrastrukturen garanterar verifierbar systemidentitet och ren organisationstillhörighet. Den garanterar **inte** vad den specifika individen bakom tangentbordet har för befogenhet (det måste avtalas eller kodas mellan er och motparten), hur väl tjänsten presterar, eller om det materiella innehållet är sant. Detta tydliggörs i [Bilaga G - Ansvarsbegränsningar](../bilagor/bilaga-g-ansvarsbegransningar).

---

## 5. Legala dokument ni möter
När ni går in i en kontext stöter ni på tre bindningar:
1. **[FM-anslutningsförbindelse](../avtal/fm-forbindelse)**: Det bindande avtalet ni undertecknar för att ansluta verksamheten.
2. **Kravbilagorna (C, F)**: Innehållet ni enligt ovanstående avtal har lovat att följa.
3. **Kommersiellt tjänsteavtal (frivilligt)**: Möjligt extraavtal ni eventuellt driver separat med er anslutningsoperatör gällande support, hosting eller andra tilläggstjänster (detta är fristående från SIB regelverket).
