---
title: "Bilaga A — Definitioner"
sidebar_label: "A. Definitioner"
sidebar_position: 1
artifact_id: "bilaga-a"
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

# Bilaga A — Definitioner

**Federationsplattformens villkorsbilaga**

---

| | |
|---|---|
| Ägs av | Ledningsaktören |
| Refereras från | Alla avtalsmallar |
| Träder i kraft | TBD |
| Beslutsdatum | TBD |

---

## 1. Roller och parter

| Term | Definition |
|---|---|
| **Ledningsaktör** | Den organisation som äger och förvaltar federationsplattformen, beslutar om bindande artefakter och utövar övergripande styrning. |
| **Federationsoperatör** | Den organisation som inom en federationskontext tillhandahåller och driver centrala federationsinfrastrukturtjänster och som avtalar med anslutningsoperatörer. |
| **Anslutningsoperatör** | Den organisation som, efter godkännande av federationsoperatören, hanterar den tekniska och administrativa anslutningen av federationsmedlemmar till en federationskontext, genomför föreskrivna kontroller samt driver anslutningstjänst. Anslutningsoperatör är en verksamhetsroll, inte en teknisk nod. Vid anslutning av federationsmedlemmar agerar anslutningsoperatören i federationsoperatörens namn och för dennes räkning med stöd av fullmakt. |
| **Federationsmedlem** | Juridisk person som genom FM-anslutningsförbindelse har anslutits till en federationskontext och som därmed får registrera tekniska komponenter i federationen enligt tillämpligt regelverk. |
| **Förlitande part (Relying Party, RP)** | Federationsmedlem som förlitar sig på tillitsinformation förmedlad via federationsinfrastrukturen för att fatta åtkomstbeslut. |
| **Utfärdare av behörighetshandling** | Federationsmedlem som ställer ut och garanterar riktigheten i intyg om identitet eller behörighet. *(Ingår inte i Steg 1.)* |
| **Egenskapsintygsoperatör (Trustmark Issuer)** | Organisation som utfärdar och förvaltar egenskapsintyg (trust marks) för tekniska komponenter. |
| **Egenskapsintygsägare (Trustmark Owner)** | Organisation som definierar vilka egenskaper ett egenskapsintyg uttrycker och vilka krav som ska uppfyllas. |

## 2. Mappning mot legal rollmodell

Federationsplattformens avtalsmallar använder termerna ovan. Tabellen nedan visar hur varje avtalsterm fördelar sig mellan ansvarsbärande funktion och tjänsteorienterad roll:

| Avtalsterm | Ansvarsbärande funktion | Tjänsteorienterad roll |
|---|---|---|
| Ledningsaktör | Äger och förvaltar federationsplattformen. Bär övergripande ansvar för regelverk och styrning. | — |
| Federationsoperatör | Bär ansvar för drift och tillitsstruktur inom federationskontexten. | Federationsoperatör (drift av tillitsankare, resolver m.m.) |
| Anslutningsoperatör | Agerar med fullmakt för federationsoperatören. Bär metodansvar för korrekt genomförda kontroller och egen publicering. | Anslutningsoperatör (anslutning, registrering) |
| Federationsmedlem | Bär ansvar för korrekthet i egna uppgifter och komponenter. | Förlitande part / Utfärdare (operativa roller) |
| *Egenskapsintygsoperatör* | *Utfärdar egenskapsintyg på uppdrag av egenskapsintygsägare. Ingår i Steg 2.* | *Egenskapsintygsoperatör (Trustmark Issuer)* |
| *Egenskapsintygsägare* | *Definierar egenskapsintygens krav och innebörd. Ingår i Steg 2.* | *— (Trustmark Owner)* |

*Roller markerade med kursiv ingår i Steg 2 i den taktiska färdplanen.*

Det juridiska ansvaret bärs av den ansvarsbärande funktionen, även när operativa uppgifter läggs ut på en tjänsteorienterad roll. Anslutningsoperatörens agerande i medlemsledet sker i federationsoperatörens namn.

## 3. Infrastruktur och kontext

| Term | Definition |
|---|---|
| **Federationsplattform** | Den gemensamma uppsättningen av bindande och informativa artefakter som utgör grunden för alla federationskontexter. |
| **Federationskontext** | En instans som bygger på den gemensamma federationsplattformen, med utsedd federationsoperatör, definierat tillämpningsområde och eventuella kontextspecifika avgränsningar. |
| **Samverkanskontext** | Definieras av vilka egenskapsintyg en tjänst har erhållit. Ska inte förväxlas med federationskontext. |

## 4. Tekniska begrepp

| Term | Definition |
|---|---|
| **Teknisk komponent** | En teknisk instans (maskin/system) som innehar kryptografiska nycklar och som registreras i federationen. |
| **Metadata** | Maskinläsbar beskrivning av en teknisk komponents identitet, nycklar, endpoints och egenskaper, publicerad via federationsinfrastrukturen. |
| **Tillitsankartjänst (Trust Anchor)** | Central funktion som utgör den kryptografiska roten i tillitskedjan. |
| **Uppslags- och verifieringstjänst (Resolver)** | Tjänst för automatiserat uppslag och validering av metadata. |
| **Anslutningstjänst (Intermediate Entity)** | Teknisk tjänst som drivs av en anslutningsoperatör för registrering, publicering och livscykelhantering av federationsmedlemmars metadata. |
| **Tillitskedja** | Den kryptografiskt verifierbara kedjan från en teknisk komponents metadata till tillitsankartjänsten. |
| **Egenskapsintyg (trust mark)** | Maskinellt verifierbart intyg om att en aktör eller komponent uppfyller specifika krav. *(Ingår inte i Steg 1.)* |

## 5. Avtal och regelverk

| Term | Definition |
|---|---|
| **FM-anslutningsförbindelse** | Avtal mellan federationsoperatör och federationsmedlem, ingånget genom befullmäktigad anslutningsoperatör, som reglerar federationsmedlemmens anslutning till en federationskontext. |
| **Villkorsbilagor** | De gemensamma bilagor (A–G) som bor i federationsplattformen och som refereras från alla avtalsmallar. |
| **Anslutningspolicy** | Policy som fastställer krav och kontroller vid anslutning. |
| **Registreringspolicy** | Policy som styr hur tekniska komponenters metadata registreras. |
| **Kravkatalog** | Katalog över krav på tekniska komponenter, refererad av andra artefakter. |
| **Tjänsteavtal** | Kommersiellt avtal mellan anslutningsoperatör och federationsmedlem om tilläggstjänster. Utanför federationsavtalets tillämpningsområde. |
