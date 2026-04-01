---
title: "Förvaltning och Synpunkter"
sidebar_label: "Förvaltning"
sidebar_position: 4
description: "Information om hur federationsplattformens regelverk underhålls, hur versioner ska tolkas, och hur en extern aktör lämnar synpunkter."
---

# Förvaltning av Regelverket

Välkommen till repositoryt för federationsplattformen inom Samordnad identitet och behörighet (SIB). Denna plats ägs av den nationella Ledningsaktören. Det är här vi publicerar och öppnar upp lagren i vårt regelverk för granskning, insyn och synpunkter.

## 1. Vad detta repository innehåller

Utvecklingen av ett nationellt identitetsnätverk kräver full transparens. Detta kod- och dokumentarkiv (repository) är hjärtat för plattformens juridiska och tekniska tvärsnitt. Det innehåller:
* **Avtalsmallar:** De legala kontrakten (tex. för att agera anslutningsoperatör).
* **Villkorsbilagor (A-G):** Den hårda kärnan av bindande krav kring informationssäkerhet, tjänsteprotokoll och ansvarsbegränsningar.
* **Guider och introduktioner:** Lättillgängligt informativt material (som sidan du läser nu).

> **En viktig särskiljning:** Materialet här är antingen publicerat som **Normativt** eller **Informativt**. 
> - **Normativ text** (Avtalsmallar, Villkorsbilagor): Uppställer faktiska skyldigheter och rättsverkningar. Det är den juridiska "sanningen".
> - **Informativ text** (Guider, Arkitekturbeskrivningar, Startsidan): Till för att pedagogiskt vägleda dig — denna text uppfinner inga egna regler och skapar inga lagliga eller tekniska bundenheter.
> 
> *Vi redovisar vilken typ dokumentet är via tydliga färgade brickor högst upp på varje dokument.*

## 2. Tolkning av Versionsnummer och Status

Hela plattformen byggs transparent. Vi döljer inte utvecklingen bakom låsta dörrar i väntan på att "allt är perfekt", utan vi skapar förutsägbarhet genom att exponera vårt arbetsmaterial.

Längst upp på normativa dokument ser du i regel status och version, exempelvis `Status: UTKAST` och `Version: 0.1`.

* **UTKAST:** Betyder att texten fortfarande är ett arbetsmaterial under formning av redaktionen och projektgruppen. Det fungerar utmärkt för att bygga system skissartat och förstå framtidens inriktning, men det har **ingen juridisk bindande kraft**.
* **Remiss:** Texten är frusen för synpunkter.
* **Fastställd:** Dokumentet är formellt fattat av Ledningsaktören och gäller för samtliga som ansluter. *Inget dokument i denna nuvarande iterering är ännu fastställt.*
* **Versionering:** En smärre uppdatering i ett utkast märks varken av som ny version eller lagligt. Frysta milstolpar versioneras t.ex. `v1.0`.

## 3. Förvaltningsprocess över tid

Ledningsaktören ansvarar för ordning och reda i lagarna. När regelverket är fastställt får ingen bilaga eller normativ kravställning ändras "i smyg". Processen kring varningar, övergångsregler och remisser styrs extremt noggrant av **Bilaga E — Förändringspolicy**.

Även om vi rättar ett litet stavfel här i den informativa dokumentationen snabbt i realtid, förbereds "riktiga" normativa uppdateringar månadsvis/halvårsvis enligt fastställda releaser för att undvika teknikskuld hos anslutna medlemmar.

## 4. Så här lämnar ni synpunkter

Är ni en myndighet, kommun, region eller leverantör som har hittat ett fel, en logisk lucka eller ser problem med de tekniska definitionerna i Bilagorna? 

Vi välkomnar åsikter medan arkitekturen byggs!

Eftersom vi använder GitHub publiceras allt öppet, och den primära metoden för att lämna synpunkter är genom **GitHub Issues**:
1. Navigera till *Issues*-fliken i toppen på detta [GitHub-repository](https://github.com/johantjader/test-sib-federation-framework).
2. Skapa en "New Issue".
3. Beskriv vilket dokument din synpunkt berör (inkludera gärna exakt krav-ID, såsom "Bilaga C.2.04" eller länk till mappen).
4. Redogör för vad du anser är problematiskt eller bör klargöras, och ge gärna ett lösningsförslag. 

Alla frågor loggas öppet för transparens mot Sveriges övriga offentliga sektor. Det redaktionella rådet hos Ledningsaktören går regelbundet igenom inkomna inspel för framtida paketeringar (versionuppdateringar).
