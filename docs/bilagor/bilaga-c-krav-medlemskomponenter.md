---
title: "Bilaga C — Krav på medlemskomponenter"
sidebar_label: "C. Medlemskomponenter"
sidebar_position: 3
artifact_id: "bilaga-c"
artifact_type: "villkorsbilaga"
version: "0.1"
normative_status: "UTKAST"
applies_to:
  - FM-förbindelse
---
<div className="normative-metadata">
<p><strong>Villkorsbilaga</strong> &middot; Status: <strong>UTKAST</strong> &middot; Version: <strong>0.1</strong></p>
</div>

# Bilaga C — Krav på federationsmedlemmars komponenter

**Federationsplattformens villkorsbilaga**

---

| Version | 0.2 |
| Ägs av | Ledningsaktören |
| Refereras från | ANS-OP-avtal, FM-anslutningsförbindelse |
|---|---|
| Datum | [datum] |
| Ägs av | Ledningsaktören |
| Refereras från | ANS-OP-avtal, FED-MED-avtal |

---

## 1. Inledning

Denna bilaga anger krav på tekniska komponenter som federationsmedlemmar registrerar i federationen. Kraven anger *vad* som ska uppnås. *Hur* registrering genomförs beskrivs i registreringspolicyn.

Kraven är uppdelade per komponenttyp. En federationsmedlem registrerar komponenter i den roll som motsvarar komponentens funktion. En komponent kan ha flera roller.

Kraven i denna bilaga kompletteras av den nationella kravkatalogen i den mån den är fastställd.

## 2. Gemensamma krav (alla komponenttyper)

| Krav-ID | Krav |
|---|---|
| C.0.01 | Komponenten ska kunna identifieras med kryptografiska nycklar. |
| C.0.02 | Metadata ska överensstämma med tillämpliga tekniska profiler i Bilaga D. |
| C.0.03 | Organisationskoppling (koppling mellan komponent och ansvarig juridisk person) ska vara korrekt och verifierbar. |
| C.0.04 | Domänval eller identifierare som antyder tillhörighet till annan organisation får inte användas. |
| C.0.05 | Federationsmedlemmen ska ha och kunna styrka kontroll över domänen. |
| C.0.06 | Metadata-attribut ska ha den semantik som definieras i tillämpliga specifikationer. |
| C.0.07 | Registrering ska hänvisa till en identifierbar registreringspolicy-URI. |
| C.0.08 | Nyckelhantering ska ske enligt dokumenterade rutiner. |
| C.0.09 | Kontaktuppgifter i metadata ska vara aktuella och bemannade. |
| C.0.10 | Protokollentiteter ska vara leaf entities och får inte blandas med federation service-roller under samma entity identifier (i enlighet med svensk profil). |

## C.1 Krav på klient (Client)

Klienten är den anropande komponenten i maskin-till-maskin-kommunikation.

| Krav-ID | Krav |
|---|---|
| C.1.01 | Klienten ska genomföra anrop med korrekt systemidentitet. |
| C.1.02 | Klienten ska hantera åtkomstintyg i enlighet med tillämplig OAuth 2.0-profil (Bilaga D). |
| C.1.03 | Klienten ska kunna hantera nyckelrotation utan driftstörning. |

## C.2 Krav på resursserver (Resource Server)

Resursservern tar emot anrop och fattar åtkomstbeslut.

| Krav-ID | Krav |
|---|---|
| C.2.01 | Resursservern ska verifiera inkommande åtkomstintyg. |
| C.2.02 | Resursservern ska kunna slå upp metadata via federationsinfrastrukturens uppslags- och verifieringstjänst. |
| C.2.03 | Resursservern ska verifiera tillitskedjan till tillämplig tillitsankartjänst. |
| C.2.04 | Resursservern ska kontrollera att metadata inte är utgången eller återkallad. |
| C.2.05 | Resursservern bör logga åtkomstbeslut med tillräcklig detaljeringsgrad för felsökning och incidentutredning. |

## C.3 Krav på auktorisationsserver (Authorization Server)

Auktorisationsservern utfärdar åtkomstintyg.

| Krav-ID | Krav |
|---|---|
| C.3.01 | Auktorisationsservern ska utfärda åtkomstintyg i enlighet med tillämplig OAuth 2.0-profil (Bilaga D). |
| C.3.02 | Auktorisationsservern ska verifiera den begärande klientens identitet via federationsmetadata. |
| C.3.03 | Auktorisationsservern ska hantera nyckelmaterial för signering av åtkomstintyg enligt dokumenterade säkerhetsrutiner. |

---

*Framtida delbilagor kan tillkomma (t.ex. C.4 Krav på identitetsintygsutgivare, C.5 Krav på egenskapsintygsutfärdare) vid behov i kommande steg i färdplanen.*
