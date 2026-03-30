# Samordnad identitet och behörighet – Webbregelverk

## What This Is

Ett offentligt GitHub-repository och en Docusaurus-dokumentationssida för federationsplattformen inom Samordnad identitet och behörighet. Den publicerar ett komplett, navigerbart regelverk av normativa artefakter (avtal, bilagor, policyer) och informativa artefakter (guider, navigationssidor) anpassat för extern läsning i svensk offentlig sektor.

## Core Value

Externa aktörer i svensk offentlig sektor ska enkelt kunna förstå, navigera och lämna synpunkter på regelverket, utan att den juridiska och normativa innebörden i originaltexterna förvanskas.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Sätta upp Docusaurus-skelett och konfigurera för publicering.
- [ ] Flytta och omstrukturera befintligt markdown-material från `To be processed/` till docusaurus `docs/` struktur.
- [ ] Berika alla dokument med Docusaurus-kompatibel frontmatter enligt `.ai/DOCUSAURUS_CONVENTIONS.md`.
- [ ] Upprätta korrekt länkstruktur, navigation och märkning för transparens.
- [ ] Säkerställa strikt separering mellan normativa och informativa artefakter.
- [ ] Strukturera och eventuellt skriva om informativ kringtext och översiktssidor för maximal läsbarhet och extern förståelse (på svenska).

### Out of Scope

- Ändring av normativ kärntext — Den materiella, juridiska eller policyrelaterade innebörden i normativa dokument får under inga omständigheter förvanskas.
- Struktur för internt bruk — Läsbarhet, navigering och spårbarhet för extern publik går före internt arbetsflöde.
- Översättning av publicerat innehåll till engelska — All publicerad kringstruktur, navigationslabels, och dokumentation ska vara på svenska (teknisk konfiguration får vara på engelska).

## Context

Källmaterialet för regelverket ligger för närvarande ostrukturerat i `To be processed/`-katalogen. Det innehåller formatlösa eller bristfälligt strukturerade utkast på avtalsmallar, villkorsbilagor och informativa guider. Arbetsregler, Docusaurus-konventioner, skrivningskrav och domänkunskap är dokumenterade i `.ai/`-katalogen och i repots fastställda instruktioner (`GEMINI.md`, `CLAUDE.md`). Dessa systeminstruktioner styr hur dokumenten ska lyftas över i en publicerbar struktur.

## Constraints

- **Materiell Integritet**: Vid eventuell konflikt mellan instruktioner/stilguider och normativt källdokument, måste källans materiella betydelse skyddas. AI:n ska flagga inkonsistensen snarare än att lösa den genom att tyst ändra skyldigheter eller rättigheter.
- **Målpublik**: Svensk offentlig sektor (förvaltning) vilket styr tonen – saklig, konsekvent och professionell.
- **Arkitektonisk Gräns**: Federationsplattformen ska inte blandas ihop med specifika instansieringar (federationskontexter). Regelverket här gäller på plattformsnivå.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Bevara existerande normativ text intakt | Krav på att bibehålla innebörden in i det sista | — Pending |
| Docusaurus som plattform | Standardiserat och versionerat dokumentverktyg (.ai/DOCUSAURUS_CONVENTIONS.md) | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-30 after initialization*
