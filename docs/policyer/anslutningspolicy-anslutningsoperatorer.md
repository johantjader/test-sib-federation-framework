---
title: "Anslutningspolicy för anslutningsoperatörer"
sidebar_label: "Anslutning — Anslutningsoperatörer"
sidebar_position: 2
artifact_id: "ap-ao"
artifact_type: "policy"
version: "0.1"
normative_status: "UTKAST"
description: "Policy \u00b7 Status: UTKAST — skelett \u00b7 Version: 0.1"
applies_to:
  - FED-OP
  - ANS-OP
---
<div className="normative-metadata">
<p><strong>Policy</strong> &middot; Status: <strong>UTKAST — skelett</strong> &middot; Version: <strong>0.1</strong></p>
</div>

# Anslutningspolicy för anslutningsoperatörer

**Federationsplattformens policy**

---

| | |
|---|---|
| Ägs av | Ledningsaktören |
| Refereras från | FED-OP-avtal, ANS-OP-avtal |
| Träder i kraft | TBD |
| Beslutsdatum | TBD |

---

*Denna policy är i skelettformat. Fullständig utformning tas fram i kommande iteration.*

## 1. Syfte

Denna policy beskriver krav och kontroller vid godkännande av anslutningsoperatör inom en federationskontext. Policyn reglerar den organisatoriska, tekniska och avtalsmässiga prövning som krävs innan en organisation kan verka som anslutningsoperatör.

Denna policy operationaliserar krav B.1.01–B.1.07 i [Bilaga B](/villkorsbilagor/bilaga-b-krav-infrastrukturtjanster).

## 2. Tillämpningsområde

Policyn tillämpas av federationsoperatören (eller ledningsaktören vid plattformsgemensam ackreditering) vid granskning och godkännande av anslutningsoperatörer.

## 3. Jämförelse: krav på federationsmedlem respektive anslutningsoperatör

Nedanstående tabell sammanfattar skillnaderna i anslutningskrav. Anslutningsoperatörer underkastar sig skärpta krav eftersom de agerar med fullmakt och hanterar tillit för andra organisationer.

| Område | Federationsmedlem | Anslutningsoperatör | Motivering |
|---|---|---|---|
| Organisationsform | Svensk juridisk person, aktiv status | Svensk juridisk person, aktiv status | Samma grundkrav |
| Informationssäkerhet | Systematiskt informationssäkerhetsarbete (F.10) | Systematiskt informationssäkerhetsarbete med dokumenterade rutiner för nyckelmaterial och incidenthantering (B.1.05–B.1.07) | AO hanterar nyckelmaterial och metadata åt andra |
| Teknisk kapacitet | Uppfylla Bilaga C för registrerade komponenter | Driva anslutningstjänst (Intermediate Entity) enligt Bilaga B.1 | AO tillhandahåller infrastruktur |
| Incidenthantering | Anmäla incidenter utan onödigt dröjsmål (F.20) | Bemannad kontaktväg under kontorstid med eskaleringsmöjlighet (B.1.04) | AO är kontaktpunkt för flera medlemmar |
| Kontaktpersoner | Behörig företrädare och kontaktpersoner (F.04) | Behörig företrädare, teknisk och administrativ kontaktperson anmälda till federationsoperatören (B.1.02–B.1.03) | AO rapporterar direkt till FED-OP |
| Granskning | Verifiering via anslutningsoperatör | Granskning av federationsoperatör eller ledningsaktör | Högre granskningsnivå för AO |
| Avtal | FM-anslutningsförbindelse | ANS-OP-avtal med fullmakt | AO får fullmakt att agera i FED-OP:s namn |

## 4. Grundläggande krav

### 4.1 Organisatoriska krav

[ATT UTVECKLA] — Operationalisering av B.1.01–B.1.03. Avser organisationsform, ledning, ekonomisk stabilitet och förmåga att fullgöra uppdraget över tid.

### 4.2 Tekniska krav

[ATT UTVECKLA] — Operationalisering av B.1.10–B.1.14. Avser förmåga att driva anslutningstjänst, publicera metadata, hantera nyckelmaterial och upprätthålla tillgänglighet.

### 4.3 Informationssäkerhetskrav

[ATT UTVECKLA] — Operationalisering av B.1.05–B.1.07. Avser systematiskt informationssäkerhetsarbete, dokumenterade rutiner för nyckelhantering och incidenthantering.

## 5. Granskning och tillsyn

[ATT UTVECKLA] — Beskriver granskningsprocessen, vilka kontroller som genomförs, dokumentationskrav och beslutskriterier. Inkluderar löpande tillsyn efter godkännande.

## 6. Beslut om godkännande

[ATT UTVECKLA] — Beskriver beslutsprocessen, vem som fattar beslut, villkor för godkännande, och eventuella förbehåll eller villkorat godkännande.

## 7. Exit-hantering och avveckling

[ATT UTVECKLA] — Beskriver ordnad avveckling vid uppsägning eller återkallelse av godkännande. Redan ingångna FM-anslutningsförbindelser påverkas inte av att fullmakten upphör (ANS-OP-avtal 11.4).
