---
title: "Bilaga D — Tekniska specifikationer"
sidebar_label: "D. Tekniska specifikationer"
sidebar_position: 4
artifact_id: "bilaga-d"
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

# Bilaga D — Tekniska specifikationer och profiler

**Federationsplattformens villkorsbilaga**

---

| | |
|---|---|
| Ägs av | Ledningsaktören |
| Refereras från | Alla avtalsmallar |
| Träder i kraft | TBD |
| Beslutsdatum | TBD |

---

## 1. Inledning

Denna bilaga anger uttömmande vilka tekniska specifikationer och profiler som är bindande inom federationsplattformen. Samtliga hänvisningar är statiska och versionsbestämda. Ändring hos extern utgivare medför inte i sig ändring i federationsregelverket — ny version blir bindande först efter uttryckligt beslut av ledningsaktören och uppdatering av denna bilaga i enlighet med Bilaga E.

## 2. Internationella standarder

| Namn | Version | Publiceringsplats | Dokumentägare | Status |
|---|---|---|---|---|
| OpenID Federation 1.0 | [ange version] | https://openid.net/specs/openid-federation-1_0.html | OpenID Foundation | Tillämpas via svenska profiler (avsnitt 3) |
| RFC 6749 (OAuth 2.0) | RFC 6749 | https://tools.ietf.org/html/rfc6749 | IETF | Tillämpas via Ena OAuth 2.0 Profile (avsnitt 4) |
| OpenID Connect Core 1.0 | 1.0 | https://openid.net/specs/openid-connect-core-1_0.html | OpenID Foundation | Ingår inte i Steg 1 |

## 3. Svenska profiler (OIDC Sweden)

| Namn | Version | Publiceringsplats | Dokumentägare | Status | Notering |
|---|---|---|---|---|---|
| Swedish OpenID Federation Deployment and Interoperability Profile | [ange version, t.ex. draft-00] | https://www.oidc.se/ | **Ägarskap ej klarlagt** (publicerad under OIDC Sweden, framtagen med finansiering från SIB). Behöver klargöras före breddinförande. | Draft | Versionsbestämd hänvisning. |

## 4. Ena-specifikationer

| Namn | Version | Publiceringsplats | Dokumentägare | Status |
|---|---|---|---|---|
| Ena OAuth 2.0 Profile | [ange version] | https://ena-infrastructure.github.io/specifications/ena-oauth2-profile.html | Digg / Ena | Draft |

*Ytterligare Ena-specifikationer kan införas i denna bilaga genom beslut av ledningsaktören i enlighet med Bilaga E.*

## 5. Öppen källkod (informativ)

Öppen källkod och referensimplementationer är informativa och utgör inte bindande krav.

| Repository | Innehåll |
|---|---|
| swedenconnect/openid-federation-commons | Baskomponenter |
| swedenconnect/openid-federation-services | Federationstjänster |
| swedenconnect/openid-federation-tooling | Stödverktyg |

## 6. Uppdatering

Uppdatering av denna bilaga sker i enlighet med Bilaga E. Uppdatering av versionsreferenser som medför nya eller skärpta krav på befintliga anslutna parter klassificeras som minst en väsentlig ändring.
