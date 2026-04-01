---
title: "Anslutningspolicy för federationsmedlemmar"
sidebar_label: "Anslutning — Federationsmedlemmar"
sidebar_position: 1
artifact_id: "ap-fm"
artifact_type: "policy"
version: "0.1"
normative_status: "UTKAST"
description: "Policy \u00b7 Status: UTKAST \u00b7 Version: 0.1"
applies_to:
  - ANS-OP
  - FM-förbindelse
---
<div className="normative-metadata">
<p><strong>Policy</strong> &middot; Status: <strong>UTKAST</strong> &middot; Version: <strong>0.1</strong></p>
</div>

# Anslutningspolicy för federationsmedlemmar

**Federationsplattformens policy**

---

| | |
|---|---|
| Ägs av | Ledningsaktören |
| Refereras från | ANS-OP-avtal, FM-anslutningsförbindelse |
| Träder i kraft | TBD |
| Beslutsdatum | TBD |

---

## 1. Syfte

Denna policy beskriver krav och arbetsmetoder för verifiering av juridisk organisationsidentitet vid anslutning av federationsmedlem till en federationskontext. Policyn reglerar organisationsidentitet och delegation. Teknisk verifiering av komponenter och metadata regleras i registreringspolicyn.

Denna policy operationaliserar krav B.1.20–B.1.25 i [Bilaga B](/regelverk/villkorsbilagor/bilaga-b-krav-infrastrukturtjanster), krav F.01–F.04 i [Bilaga F](/regelverk/villkorsbilagor/bilaga-f-federationsregler) samt krav Ena O.1, O.5, O.15 i kravkatalogen.

## 2. Vad andra parter kan förutsätta

En federationsmedlem som anslutits i enlighet med denna policy har genomgått:

a) verifiering av organisationsidentitet mot auktoritativt register,

b) kontroll av att organisationen tillhör federationskontextens målgrupp,

c) verifiering av behörig företrädare,

d) registrering av tekniska och administrativa kontaktpersoner.

Övriga federationsmedlemmar inom samma federationskontext kan förlita sig på att dessa kontroller har genomförts. Den transitiva tilliten bygger på att samtliga medlemmar är bundna av samma [federationsregler (Bilaga F)](/regelverk/villkorsbilagor/bilaga-f-federationsregler).

## 3. Omfattning och avgränsning

### 3.1 Omfattning

Policyn gäller vid anslutning av federationsmedlem till en federationskontext. Den tillämpas av anslutningsoperatören som genomför kontrollerna i federationsoperatörens namn och för dennes räkning.

### 3.2 Avgränsning

Policyn reglerar **inte**:

- teknisk registrering av komponenter (se registreringspolicyn),
- materiella åtkomstbeslut mellan federationsmedlemmar,
- sektorsspecifika krav som följer av annan lagstiftning,
- kommersiella avtal mellan anslutningsoperatör och federationsmedlem.

## 4. Roller och ansvar

| Roll | Ansvar vid anslutning |
|---|---|
| Anslutningsoperatör | Genomför kontrollerna i denna policy. Agerar med fullmakt från federationsoperatören. |
| Federationsoperatör | Ansvarar för att godkända anslutningsoperatörer tillämpar policyn. |
| Federationsmedlem | Tillhandahåller korrekt, fullständig och aktuell information (F.01). |
| Ledningsaktör | Äger och förvaltar policyn. |

## 5. Definitioner

Termer i denna policy har den betydelse som anges i [Bilaga A — Definitioner](/regelverk/villkorsbilagor/bilaga-a-definitioner). Avtalstexten äger tolkningsföreträde vid motstridighet.

## 6. Organisationsverifiering vid anslutning

### 6.1 Verifiering av organisation

Anslutningsoperatören ska verifiera den sökande organisationens identitet mot auktoritativt register. Kontrollen ska minst omfatta:

a) organisationsnamn och organisationsnummer,

b) att organisationen är en i Sverige registrerad juridisk person med aktiv status,

c) att organisationen inte är försatt i konkurs, likvidation eller motsvarande.

### 6.2 Kvalificering mot federationskontextens målgrupp

Anslutningsoperatören ska kontrollera att den sökande organisationen tillhör den målgrupp som angetts vid instansiering av federationskontexten. Kvalificeringen sker mot de avgränsningar som anges i det instansierade ANS-OP-avtalet.

### 6.3 Verifiering av behörig företrädare

Anslutningsoperatören ska verifiera att den person som undertecknar FM-anslutningsförbindelsen har rätt att företräda organisationen. Verifieringen ska minst omfatta:

a) kontroll av firmateckningsrätt eller annan dokumenterad behörighet,

b) identifiering av undertecknande person.

### 6.4 Kontaktpersoner

Federationsmedlemmen ska vid anslutning anmäla:

a) behörig företrädare,

b) teknisk kontaktperson,

c) administrativ kontaktperson.

Anslutningsoperatören ska registrera anmälda kontaktpersoner och bekräfta att kontaktuppgifterna är korrekta.

## 7. Avtalsingående

FM-anslutningsförbindelsen ingås mellan federationsoperatören och federationsmedlemmen, genom befullmäktigad anslutningsoperatör. Anslutningsoperatören agerar med stöd av fullmakt enligt ANS-OP-avtalet och ska tydligt ange att förbindelsen ingås för federationsoperatörens räkning.

Avtalsingåendet ska dokumenteras i enlighet med avsnitt 8.

## 8. Spårbarhet och dokumentation

Varje anslutning ska dokumenteras med minst (B.1.21):

a) tidpunkt för anslutning,

b) identifierade kontrollmoment och utfall,

c) behörig företrädare som undertecknat,

d) version av FM-anslutningsförbindelsen,

e) identitet på den person hos anslutningsoperatören som genomfört kontrollen.

Dokumentationen ska bevaras under hela anslutningens livscykel och minst [ATT UTVECKLA] år därefter.

## 9. Verifiering genom oberoende kanalbekräftelse

[ATT UTVECKLA] — Avser metoder för att bekräfta organisationsidentitet och behörig företrädare genom en oberoende kanal (t.ex. brev till organisationens registrerade adress, kvalificerad elektronisk signatur eller motsvarande). Detaljerade krav specificeras i kommande version.

## 10. Avgränsning mot åtkomst- och verksamhetsbeslut

Anslutning till en federationskontext innebär att federationsmedlemmens tekniska komponenter kan delta i federationsinfrastrukturen. Anslutningen innebär **inte**:

- automatisk rätt till åtkomst till andra federationsmedlemmars tjänster,
- att materiella åtkomstbeslut fattas av federationsinfrastrukturen,
- att sektorsspecifika rättsliga krav anses uppfyllda.

Åtkomstbeslut fattas alltid av den förlitande parten (F.30).

## 11. Livscykelhantering

### 11.1 Periodisk re-verifiering

Anslutningsoperatören ska med regelbundna intervall kontrollera att federationsmedlemmens organisationsuppgifter fortfarande är korrekta och att organisationen uppfyller målgruppskriterierna. Intervallet ska inte överstiga [ATT UTVECKLA] månader.

### 11.2 Händelsestyrd re-verifiering

Re-verifiering ska genomföras utan onödigt dröjsmål vid:

a) anmälan om ändrade förhållanden från federationsmedlemmen (F.02),

b) information från tredje part om ändrad organisationsstatus,

c) byte av behörig företrädare (F.04),

d) incident som påverkar tilliten till organisationsuppgifterna.

### 11.3 Åtgärder vid avvikelse

Om re-verifiering visar att förutsättningarna för anslutning inte längre är uppfyllda ska anslutningsoperatören utan onödigt dröjsmål meddela federationsoperatören. Åtgärder kan innefatta suspension eller avregistrering.

## 12. Uppsägning och avslut

Vid uppsägning eller avslut av anslutning tillämpas bestämmelserna i FM-anslutningsförbindelsen (avsnitt 10). Anslutningsoperatören ansvarar för att:

a) federationsmedlemmens metadata avregistreras,

b) avregistreringen journalförs (B.1.33),

c) avregistreringen ger entydig teknisk effekt (B.1.32).
