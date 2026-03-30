---
title: "Avtalsarkitektur"
sidebar_label: "Arkitektur"
sidebar_position: 3
description: "Beskrivning av federationsplattformens typ/instans-modell och legala konstruktion."
---

# Avtalsarkitektur

För att Sveriges offentliga förvaltning ska kunna bygga skalbara och tillitsfulla nätverk, bygger Samordnad identitet och behörighet (SIB) på en smart men strikt legal "typ-/instans-modell".

Denna sida beskriver hur detta fungerar och säkerställer att alla skyldigheter löper som en obruten kedja från den enskilda myndigheten upp till plattformens kärna.

---

## 1. Vad menas med Typ och Instans?

Tänk på **Federationsplattformen** som kakmåttet (Typen). Den tillhandahåller färdiga, robusta avtalsmallar och säkerhetsregler (villkorsbilagorna). Dessa mallar är gemensamma för alla.

När en grupp myndigheter vill börja samverka inom ett specifikt verksamhetsområde, skapar de en s.k. **Federationskontext**. Kring denna specifika kontext skriver man sedan avtal. Istället för att uppfinna egna regler kopierar man plattformens kakmått rent juridiskt (Instansen) genom att teckna under avtalen med sina specifika organisationsnummer på ett så kallat 'Instansblad'.

Konsekvensen är att den kontext-specifika instansen ärver allting från plattformens gemensamma bilagor. **Kärnvillkor och säkerhetskrav får inte ändras i det lokala instansbladet.**

---

## 2. Vem tecknar avtal med vem?

För att tekniken och juridiken ska hänga ihop bygger SIB på tre primära avtalsavsnitt:

### A. Kopplingen mellan plattform och kontext
När en ny federationskontext "startas" tecknas ett **FED-OP-avtal**. Avtalet ingås mellan den nationella Ledningsaktören (ägaren av plattformen) och en utsedd Federationsoperatör. Detta är det enda avtal som binder det specifika kontext-klustret till plattformens krav.

### B. Vem hanterar nätverket rent operativt?
Federationsoperatören kan inte rimligen hantera tusentals enskilda anslutningar manuellt. Därför ackrediterar de *Anslutningsoperatörer*. Mellan dessa tecknas ett **ANS-OP-avtal**.
* Finessen här är att ANS-OP-avtalet innehåller en **laglig fullmakt**. Anslutningsoperatören får agera ombud för Federationsoperatören.

### C. När en enskild verksamhet ansluter
När en myndighet ansluter sig som Federationsmedlem går de via Anslutningsoperatören och tecknar en **FM-anslutningsförbindelse**.
* Genom den legal fullmakten enligt ovan blir Federationsmedlemmen *juridiskt sett* direkt bunden till Federationsoperatören. Anslutningsoperatören är endast mäklaren/tekniska noden.
* Detta kallas ibland fullmaktsmodellen, och det garanterar att tvister eller skyldigheter knyts direkt till federationsdriften och uppåt — inte utspritt bland olika driftentreprenörer.

---

## 3. Policyernas roll (Processerna bakom kraven)

För att veta *hur* dessa avtal i praktiken ska hanteras, tas specifika policyer fram:
- **Anslutningspolicy:** Beskriver hur identitetskontroll av inkommande medlemmar görs innan FM-förbindelsen får tecknas.
- **Registreringspolicy:** Beskriver hur inmatning av tekniska IP-adresser och kryptonycklar via Anslutningsoperatören (när medlemmens IT-system byggs) rent konkret måste se ut för att leva upp till kraven i Bilaga C.

*(Policyerna uppdateras ofta allteftersom tekniken mognar, medan avtalsmallarnas juridiska formuleringar och villkorsbilagorna i botten hålls stabila).*

---

## 4. Den rättsliga kedjan (sammanfattning)

Hela kedjan ser därmed ut så här:

1. **Plattformen:** Står för reglerna och avtalsmallarna (A-G).
2. **Federationsoperatören (FO):** Driver kontexten enligt mallarna.
3. **Anslutningsoperatören (AO):** Får fullmakt från FO för att administrera kontexten mot slutanvändaren.
4. **Federationsmedlemmen (FM):** Genomgår AO:s kontroller men knyter regelverket juridiskt direkt mot FO.

Oavsett vilken väg du kom in i federationen, så gäller exakt samma villkor i Bilaga F, vilket möjliggör obruten rättslig tillit mellan två helt oberoende IT-system.
