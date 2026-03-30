---
title: "Bilaga B — Krav på infrastrukturtjänster"
sidebar_label: "B. Infrastrukturtjänster"
sidebar_position: 2
artifact_id: "bilaga-b"
artifact_type: "villkorsbilaga"
version: "0.1"
normative_status: "UTKAST"
applies_to:
  - FED-OP
  - ANS-OP
---
<div className="normative-metadata">
<p><strong>Villkorsbilaga</strong> &middot; Status: <strong>UTKAST</strong> &middot; Version: <strong>0.1</strong></p>
</div>

# Bilaga B — Krav på federationsinfrastrukturtjänster

**Federationsplattformens villkorsbilaga**

---

| Version | 0.2 |
|---|---|
| Datum | [datum] |
| Ägs av | Ledningsaktören |
| Refereras från | FED-OP-avtal, ANS-OP-avtal |

---

## 1. Inledning

Denna bilaga anger *vad* som ska uppnås avseende federationsinfrastrukturtjänster. *Hur* kraven omsätts i praktiken beskrivs i tillämpliga policyer (anslutningspolicy för anslutningsoperatörer, registreringspolicy).

Kraven är uppdelade per komponenttyp.

## B.1 Krav på anslutningstjänst (Intermediate Entity)

Anslutningstjänsten drivs av anslutningsoperatören och hanterar registrering och publicering av federationsmedlemmars metadata.

### Organisatoriska krav

| Krav-ID | Krav |
|---|---|
| B.1.01 | Anslutningsoperatören ska vara en i Sverige registrerad juridisk person med aktiv status. |
| B.1.02 | Anslutningsoperatören ska ha anmäld behörig företrädare. |
| B.1.03 | Anslutningsoperatören ska ha minst en teknisk och en administrativ kontaktperson anmälda till federationsoperatören. |
| B.1.04 | Kontaktväg för säkerhetsincidenter ska vara bemannad under kontorstid (vardagar 08:00–17:00) med möjlighet att eskalera brådskande ärenden. |
| B.1.05 | Anslutningsoperatören ska bedriva systematiskt informationssäkerhetsarbete. |
| B.1.06 | Dokumenterade rutiner ska finnas för hantering av kryptografiskt nyckelmaterial. |
| B.1.07 | Dokumenterade rutiner ska finnas för incidenthantering. |

### Tekniska krav

| Krav-ID | Krav |
|---|---|
| B.1.10 | Anslutningstjänsten ska publicera metadata för anslutna federationsmedlemmars tekniska komponenter i enlighet med tillämpliga specifikationer i Bilaga D. |
| B.1.11 | Anslutningstjänsten ska signera Subordinate Statements i enlighet med tillämplig svensk profil. |
| B.1.12 | Anslutningstjänsten ska vara tillgänglig och nåbar för federationsoperatörens uppslags- och verifieringstjänst. |
| B.1.13 | Nyckelrotation ska genomföras på ett kontrollerat och spårbart sätt. |
| B.1.14 | Nödåterkallelse av metadata ska kunna genomföras utan onödigt dröjsmål vid komprometterat nyckelmaterial. |

### Krav vid anslutning och registrering

| Krav-ID | Krav |
|---|---|
| B.1.20 | Anslutningsoperatören ska vid anslutning genomföra de kontroller som föreskrivs i anslutningspolicyn. |
| B.1.21 | Varje anslutning ska dokumenteras med minst: tidpunkt, identifierade kontrollmoment, utfall, behörig företrädare, version av FED-MED-avtal. |
| B.1.22 | Vid registrering av tekniska komponenter ska metadata kontrolleras mot tillämpliga krav i Bilaga C. |
| B.1.23 | Organisationskoppling ska verifieras. |
| B.1.24 | Domänkontroll ska styrkas. |
| B.1.25 | Tillämplig registreringspolicy-URI ska tilldelas. |

### Krav vid ändringar och avregistrering

| Krav-ID | Krav |
|---|---|
| B.1.30 | Ändringar av metadata ska journalföras med minst: ärende-ID, begärande part, tidpunkt, ändringsbeskrivning och motivering. |
| B.1.31 | Ändringar som påverkar tillit ska riskbedömas. |
| B.1.32 | Avregistrering ska ge entydig teknisk effekt — förlitande parter ska inte kunna etablera tillit för avregistrerade komponenter. |
| B.1.33 | Avregistrering ska journalföras med minst: ärende-ID, beslutsdatum, beslutsfattare och grund. |

### Icke-diskriminering

| Krav-ID | Krav |
|---|---|
| B.1.40 | Anslutningsoperatören ska inte diskriminera mellan organisationer som uppfyller fastställda anslutningskrav inom tillämplig federationskontext. |

### Portabilitet

| Krav-ID | Krav |
|---|---|
| B.1.50 | Metadata som registrerats enligt regelverkets krav ska lämnas ut till federationsmedlemmen på begäran i strukturerat och maskinläsbart format. Anslutningsoperatören får inte oskäligt försvåra federationsmedlemmens tillgång till sin egen registrerade metadata. |
| B.1.51 | Utlämnande av metadata enligt B.1.50 innebär inte i sig rätt till automatisk publicering, validering eller deltagande i annan federationskontext. |
| B.1.52 | Återanvändning av anslutning, registrering eller metadata i annan federationskontext får endast ske om detta följer av uttrycklig bindande artefakt eller särskilt beslutad kontextregel och om tillämpliga krav är uppfyllda. |

### Publikationsskyldighet

| Krav-ID | Krav |
|---|---|
| B.1.26 | Anslutningstjänsten ska, inom ramen för den publicerade federationsstrukturen, hålla registrerade underordnade entiteter och deras metadata tillgängliga på det sätt som följer av bindande teknisk profil och registreringspolicy. |

## B.2 Krav på tillitsankartjänst (Trust Anchor)

Tillitsankartjänsten drivs av federationsoperatören.

| Krav-ID | Krav |
|---|---|
| B.2.01 | Tillitsankartjänsten ska publicera federationsmetadata i enlighet med tillämpliga specifikationer i Bilaga D. |
| B.2.02 | Tillitsankartjänsten ska tillhandahålla verifierbar tillitskedja. |
| B.2.03 | Tillitsankartjänsten ska tillämpa federationspolicy i publicering och verifiering. |
| B.2.04 | Livscykelhantering för metadata och nycklar ska vara spårbar och dokumenterad. |
| B.2.05 | Nyckelhantering ska följa dokumenterade säkerhetsrutiner. |
| B.2.06 | Tillitsankartjänsten ska endast exponera sådana tillitsvägar och överordnade relationer som uttryckligen beslutats och konfigurerats enligt bindande artefakter. |

## B.3 Krav på uppslags- och verifieringstjänst (Resolver)

| Krav-ID | Krav |
|---|---|
| B.3.01 | Resolvertjänsten ska möjliggöra automatiserat uppslag och validering av metadata via federationsinfrastrukturen. |
| B.3.02 | Resolvertjänsten ska verifiera kryptografisk giltighet och status. |
| B.3.03 | Uppslags- och verifieringstjänsten ska genomföra verifiering utifrån den tillitsankare och federationskontext som följer av tjänstens konfiguration. Cross-context-validering får inte förutsättas utan uttryckligt stöd i bindande artefakt. |

---

*Framtida delbilagor kan tillkomma för ytterligare komponenttyper (t.ex. B.4 Krav på egenskapsintygstjänst) vid behov i kommande steg.*
