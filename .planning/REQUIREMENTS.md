# Requirements

## v1 Requirements

### Infrastructure (INFRA)
- [ ] **INFRA-01**: Initialize Docusaurus site structure within `docs/` and establish base configuration.
- [ ] **INFRA-02**: Setup continuous deployment skeleton/plan for GitHub Pages.
- [ ] **INFRA-03**: Configure Docusaurus sidebars, categories, indexing, and routing.

### Migration (MIG)
- [ ] **MIG-01**: Migrate normative documents (avtal, bilagor, policyer, styrning) from `To be processed/` to standard `docs/` structure.
- [ ] **MIG-02**: Migrate informative documents (guider, intro, arkitektur) from `To be processed/` to `docs/`.
- [ ] **MIG-03**: Standardize filenames to be strictly URL-friendly and consistent (e.g. `bilaga-a-definitioner.md`).

### Presentation & Enrichment (PRES)
- [ ] **PRES-01**: Add Docusaurus-compliant Frontmatter (title, sidebar_label, normative_status, artifact_type) to all documents as per `.ai/DOCUSAURUS_CONVENTIONS.md`.
- [ ] **PRES-02**: Update all internal links to use standard Docusaurus relative paths (without `.md` extension).
- [ ] **PRES-03**: Inject visual cues (Docusaurus admonitions/banners) clearly distinguishing normative vs. informative artifacts.
- [ ] **PRES-04**: Structure and rewrite overview pages and guide material in Swedish for supreme external readability, without altering normative dependencies.

### Verification & Integrity (INT)
- [ ] **INT-01**: Verify that zero material meaning (rights, restrictions, technical mandates) in normative texts was unintentionally mutated during migration and formatting.

## v2 Requirements (Deferred)
- [ ] **V2-01**: Full-text advanced search optimization.
- [ ] **V2-02**: Advanced UI branding & custom components beyond standard Docusaurus theme.

## Out of Scope
- **Ändring av normativ kärntext** — Meningen/reglerna är låsta av verksamheten.
- **Engelska översättningar** — Lagen/regelverket gäller i svensk kontext, dokumentationen ska vara på svenska.

## Traceability
- **Phase 1**: INFRA-01, INFRA-02, INFRA-03
- **Phase 2**: MIG-01, MIG-03, PRES-01, PRES-02, PRES-03
- **Phase 3**: MIG-02, PRES-04
- **Phase 4**: INT-01
