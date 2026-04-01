---
title: "Bilaga G — Ansvarsbegränsningar"
sidebar_label: "G. Ansvarsbegränsningar"
sidebar_position: 7
artifact_id: "bilaga-g"
artifact_type: "villkorsbilaga"
version: "0.1"
normative_status: "UTKAST"
description: "Villkorsbilaga \u00b7 Status: UTKAST \u00b7 Version: 0.1"
applies_to:
  - FED-OP
  - ANS-OP
  - FM-förbindelse
---
<div className="normative-metadata">
<p><strong>Villkorsbilaga</strong> &middot; Status: <strong>UTKAST</strong> &middot; Version: <strong>0.1</strong></p>
</div>

# Bilaga G — Ansvarsbegränsningar och riskfördelning

**Federationsplattformens villkorsbilaga**

---

| Egenskap | Värde |
|---|---|
| Ägs av | Ledningsaktören |
| Refereras från | Alla avtalsmallar |
| Träder i kraft | TBD |
| Beslutsdatum | TBD |

---

## 1. Infrastrukturens begränsning

### 1.1 Vad infrastrukturen garanterar

a) Att anslutning skett i enlighet med gemensam anslutningspolicy.

b) Att metadata är kryptografiskt verifierbar och spårbar till en tillitsankartjänst.

c) Att tillitskedjan möjliggör maskinell verifiering av om en komponent är ansluten och vilken organisation som ansvarar.

### 1.2 Vad infrastrukturen INTE garanterar

a) **Befogenhet** — den interna rätten att utföra en viss handling. Infrastrukturen kontrollerar behörighet (den formella, yttre rätten att företräda), men inte befogenhet.

b) **Korrekthet hos utfärdare** — att information i ett intyg var korrekt vid utfärdandet.

c) **Ändamålsenlighet** — att en transaktion är ändamålsenlig eller proportionell.

d) **Innehåll i digital samverkan** — det materiella informationsutbytet.

## 2. Ansvarsfördelning

### 2.1 Ledningsaktör

Ledningsaktören ansvarar för federationsplattformens regelverk och för att godkänna federationsoperatörer. Ledningsaktören bär inte ansvar för enskilda transaktioner, tekniska driftstörningar hos operatörer eller enskilda parters agerande.

### 2.2 Federationsoperatör

Federationsoperatören ansvarar för:

a) drift och förvaltning av centrala infrastrukturtjänster inom federationskontexten,

b) att anslutningsoperatörer omfattas av avtal, kontroll, uppföljning och sanktionsmekanismer enligt federationsregelverket,

c) att kontextens gemensamma metadata- och tillitsfunktioner upprätthålls på ett spårbart och säkert sätt.

Federationsoperatören ansvarar inte för:

d) enskilda transaktioner mellan federationsmedlemmar,

e) federationsmedlems materiella fel i tillhandahållen information,

f) förlitande parts materiella åtkomstbeslut,

g) kommersiella åtaganden i separat tjänsteavtal mellan anslutningsoperatör och federationsmedlem.

### 2.3 Anslutningsoperatör

Anslutningsoperatören ansvarar för:

a) att föreskrivna anslutnings- och registreringskontroller utförs korrekt och dokumenteras i enlighet med bindande policyer,

b) att publicerad metadata återger det underlag som efter föreskrivna kontroller godkänts för publicering,

c) att incidenter inom anslutningsoperatörens ansvarsområde hanteras utan oskäligt dröjsmål,

d) att registrering, ändring, avregistrering och loggning sker spårbart.

Anslutningsoperatören ansvarar inte för:

e) materiell riktighet i uppgifter som federationsmedlemmen lämnat, i den mån felaktigheten inte rimligen borde ha upptäckts genom föreskrivna kontroller,

f) förlitande parts materiella åtkomstbeslut,

g) avbrott eller fel i federationsoperatörens centrala infrastrukturtjänster,

h) federationsmedlems kommersiella eller verksamhetsmässiga relationer till andra federationsmedlemmar.

### 2.4 Federationsmedlem

Federationsmedlemmen ansvarar för:

a) riktigheten, fullständigheten och aktualiteten i uppgifter som lämnas vid anslutning, registrering och senare ändringar,

b) att registrerade tekniska komponenter uppfyller tillämpliga krav,

c) livscykelhantering av egna tekniska komponenter och eget nyckelmaterial,

d) åtkomstbeslut och annan materiell rättstillämpning i egen roll som förlitande part.

### 2.5 Principen om organisationstillit

Förlitande part tillämpar principen om organisationstillit: förlitande part litar på att den organisation som intygar viss information har interna rutiner för att styrka sin rådighet och korrektheten i de uppgifter som intygas.

## 3. Skadeståndsansvar

### 3.1 Direkt skada

Part som genom vårdslöshet eller avtalsbrott orsakar direkt skada kan bli ersättningsskyldig i enlighet med tillämplig lag och avtal.

### 3.2 Indirekt skada

Part ansvarar inte för indirekt skada (utebliven vinst, produktionsbortfall, förlorad data m.m.) om inte skadan orsakats genom grov vårdslöshet eller uppsåt.

### 3.3 Ansvar mellan federationsmedlemmar

Skador som uppstår på grund av att en federationsmedlem överträtt sina förpliktelser enligt Bilaga F (F.44) ska regleras mellan de berörda federationsmedlemmarna i enlighet med Bilaga F (F.44–F.47) — utan att ledningsaktören, federationsoperatören eller anslutningsoperatören involveras som part i tvisten enbart på den grunden att de ingår i tillitsstrukturen.

## 4. Force majeure

Part är befriad från påföljd för underlåtenhet att fullgöra viss förpliktelse om underlåtenheten beror på omständighet utanför partens kontroll som parten inte skäligen kunde förväntas ha räknat med och vars följder parten inte heller skäligen kunde ha undvikit eller övervunnit.
