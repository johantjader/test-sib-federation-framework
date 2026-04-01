---
title: "Registreringspolicy"
sidebar_label: "Registrering"
sidebar_position: 3
artifact_id: "rp"
artifact_type: "policy"
version: "0.1"
normative_status: "UTKAST"
description: "Policy \u00b7 Status: UTKAST — skelett \u00b7 Version: 0.1"
applies_to:
  - ANS-OP
  - FM-förbindelse
---
<div className="normative-metadata">
<p><strong>Policy</strong> &middot; Status: <strong>UTKAST — skelett</strong> &middot; Version: <strong>0.1</strong></p>
</div>

# Registreringspolicy

**Federationsplattformens policy**

---

| | |
|---|---|
| Ägs av | Ledningsaktören |
| Refereras från | ANS-OP-avtal, FM-anslutningsförbindelse |
| Träder i kraft | TBD |
| Beslutsdatum | TBD |

---

*Denna policy är i skelettformat. Fullständig utformning tas fram i kommande iteration.*

## 1. Syfte

Denna policy beskriver hur tekniska komponenters metadata registreras, ändras och avregistreras i federationsinfrastrukturen. Policyn reglerar den tekniska registreringsprocessen. Organisatorisk verifiering av federationsmedlemmen regleras i anslutningspolicyn för federationsmedlemmar.

Denna policy operationaliserar krav B.1.22–B.1.26 i [Bilaga B](/regelverk/villkorsbilagor/bilaga-b-krav-infrastrukturtjanster) och krav C.0.01–C.0.10 i [Bilaga C](/regelverk/villkorsbilagor/bilaga-c-krav-medlemskomponenter).

## 2. Tillämpningsområde

Policyn tillämpas av anslutningsoperatören vid registrering, ändring och avregistrering av federationsmedlemmars tekniska komponenter.

## 3. Registrering av ny komponent

[ATT UTVECKLA] — Beskriver stegen vid registrering av en ny teknisk komponent. Inkluderar:

- kontroll av metadata mot tillämpliga krav i [Bilaga C](/regelverk/villkorsbilagor/bilaga-c-krav-medlemskomponenter) (B.1.22),
- verifiering av organisationskoppling (B.1.23, C.0.03),
- domänkontroll (B.1.24, C.0.05),
- tilldelning av registreringspolicy-URI (B.1.25, C.0.07),
- kontroll av att komponenttyp och roll är korrekt angiven.

## 4. Metadatakontroll

[ATT UTVECKLA] — Beskriver vilka metadata-attribut som kontrolleras, mot vilka specifikationer (Bilaga D), och vilka avvikelser som är blockerande respektive kan åtgärdas.

## 5. Domänkontroll

[ATT UTVECKLA] — Beskriver godkända metoder för att styrka kontroll över domän (C.0.05). Inkluderar krav på att domänval inte får antyda tillhörighet till annan organisation (C.0.04).

## 6. Ändringar av registrerade komponenter

[ATT UTVECKLA] — Beskriver processen vid ändring av metadata för redan registrerade komponenter. Inkluderar:

- journalföring (B.1.30),
- riskbedömning vid ändringar som påverkar tillit (B.1.31).

## 7. Avregistrering

[ATT UTVECKLA] — Beskriver processen vid avregistrering av en komponent. Inkluderar:

- entydig teknisk effekt — förlitande parter ska inte kunna etablera tillit för avregistrerade komponenter (B.1.32),
- journalföring med ärende-ID, beslutsdatum, beslutsfattare och grund (B.1.33).

## 8. Publikation

Anslutningstjänsten ska hålla registrerade underordnade entiteter och deras metadata tillgängliga i enlighet med bindande teknisk profil och denna policy (B.1.26).

## 9. Portabilitet

Metadata som registrerats ska lämnas ut till federationsmedlemmen på begäran i strukturerat och maskinläsbart format (B.1.50). Utlämnande innebär inte i sig rätt till automatisk publicering i annan federationskontext (B.1.51).
