---
title: "Bilaga A — Definitioner"
sidebar_label: "Bilaga A"
sidebar_position: 1
artifact_id: "bilaga-a"
artifact_type: "villkorsbilaga"
version: "0.1"
normative_status: "UTKAST"
applies_to:
  - FED-OP
  - ANS-OP
  - FM-förbindelse
---
:::info Normativ artefakt
Denna artefakt är en **villkorsbilaga** i federationsplattformen.
Status: **UTKAST**. Version: **0.1**.
:::

# Bilaga A — Definitioner

**Federationsplattformens villkorsbilaga**

---

| Version | 0.2 |
|---|---|
| Ägs av | Ledningsaktören |
| Refereras från | Alla avtalsmallar |

---

## 1. Roller och parter

| Term | Definition |
|---|---|
| **Ledningsaktör** | Den organisation som äger och förvaltar federationsplattformen, beslutar om bindande artefakter och utövar övergripande styrning. |
| **Federationsoperatör** | Den organisation som inom en federationskontext tillhandahåller och driver centrala federationsinfrastrukturtjänster och som avtalar med anslutningsoperatörer. |
| **Anslutningsoperatör** | Den organisation som, efter godkännande av federationsoperatören, hanterar den tekniska och administrativa anslutningen av federationsmedlemmar till en federationskontext, genomför föreskrivna kontroller samt driver anslutningstjänst. Anslutningsoperatör är en verksamhetsroll, inte en teknisk nod. Vid anslutning av federationsmedlemmar agerar anslutningsoperatören i federationsoperatörens namn och för dennes räkning med stöd av fullmakt. |
| **Federationsmedlem** | Juridisk person som genom FM-anslutningsförbindelse har anslutits till en federationskontext och som därmed får registrera tekniska komponenter i federationen enligt tillämpligt regelverk. |
| **Förlitande part** | Federationsmedlem som förlitar sig på tillitsinformation förmedlad via federationsinfrastrukturen för att fatta åtkomstbeslut. |
| **Utfärdare av behörighetshandling** | Federationsmedlem som ställer ut och garanterar riktigheten i intyg om identitet eller behörighet. *(Ingår inte i Steg 1.)* |
| **Tillitsoperatör** | Organisation som utfärdar och förvaltar tillitsmärken (egenskapsintyg) för tekniska komponenter. |
| **Tillitsmärkesägare** | Organisation som definierar vilka egenskaper ett tillitsmärke uttrycker och vilka krav som ska uppfyllas. |

## 2. Mappning mot legal rollmodell

Federationsplattformens avtalsmallar använder termerna ovan. Den legala rollmodellen (se *Roller och ansvar — teknisk och juridisk samordning*) skiljer mellan legala parter och tjänsteorienterade roller:

| Avtalsterm | Legal part (ansvarsbärande) | Tjänsteorienterad roll (genomförande) |
|---|---|---|
| Ledningsaktör | Ledningsansvarig | — |
| Federationsoperatör | Federationsansvarig | Federationsoperatör (drift av centrala tjänster) |
| Anslutningsoperatör | — (agerar med fullmakt för federationsoperatören) | Anslutningsoperatör (anslutning, registrering) |
| Federationsmedlem | Federationsmedlem | Förlitande part / Utfärdare (operativa roller) |

Det juridiska ansvaret bärs av den legala parten, även när operativa uppgifter läggs ut på en tjänsteorienterad roll. Anslutningsoperatörens agerande i medlemsledet sker i federationsoperatörens namn.

## 3. Infrastruktur och kontext

| Term | Definition |
|---|---|
| **Federationsplattform** | Den gemensamma uppsättningen av bindande och informativa artefakter som utgör grunden för alla federationskontexter. |
| **Federationskontext** | En avgränsad instans av federationsplattformen med utsedd federationsoperatör, definierat tillämpningsområde och eventuella uttryckligt tillåtna kontextspecifika avgränsningar. |
| **Instansblad** | Det dokument där den aktuella federationskontextens partsuppgifter, namn, målgrupp, syfte, särskilda avgränsningar och pilotstatus anges. |
| **Samverkanskontext** | Definieras av vilka tillitsmärken en tjänst har erhållit. Ska inte förväxlas med federationskontext. |

## 4. Tekniska begrepp

| Term | Definition |
|---|---|
| **Teknisk komponent** | En teknisk instans (maskin/system) som innehar kryptografiska nycklar och som registreras i federationen. |
| **Metadata** | Maskinläsbar beskrivning av en teknisk komponents identitet, nycklar, endpoints och egenskaper, publicerad via federationsinfrastrukturen. |
| **Tillitsankartjänst (Trust Anchor)** | Central funktion som utgör den kryptografiska roten i tillitskedjan. |
| **Uppslags- och verifieringstjänst (Resolver)** | Tjänst för automatiserat uppslag och validering av metadata. |
| **Anslutningstjänst (Intermediate Entity)** | Teknisk tjänst som drivs av en anslutningsoperatör för registrering, publicering och livscykelhantering av federationsmedlemmars metadata. |
| **Tillitskedja** | Den kryptografiskt verifierbara kedjan från en teknisk komponents metadata till tillitsankartjänsten. |
| **Tillitsmärke (trust mark)** | Maskinellt verifierbart intyg om att en aktör eller komponent uppfyller specifika krav. *(Ingår inte i Steg 1.)* |

## 5. Avtal och regelverk

| Term | Definition |
|---|---|
| **FM-anslutningsförbindelse** | Avtal mellan federationsoperatör och federationsmedlem, ingånget genom befullmäktigad anslutningsoperatör, som reglerar federationsmedlemmens anslutning till en federationskontext. |
| **Villkorsbilagor** | De gemensamma bilagor (A–G) som bor i federationsplattformen och som refereras från alla avtalsmallar. |
| **Anslutningspolicy** | Policy som fastställer krav och kontroller vid anslutning. |
| **Registreringspolicy** | Policy som styr hur tekniska komponenters metadata registreras. |
| **Kravkatalog** | Katalog över krav på tekniska komponenter, refererad av andra artefakter. |
| **Tjänsteavtal** | Kommersiellt avtal mellan anslutningsoperatör och federationsmedlem om tilläggstjänster. Utanför federationsavtalets tillämpningsområde. |
