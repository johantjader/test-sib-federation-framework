# Execution Roadmap

## Phase 1: Inventory, Mapping, and Docusaurus Setup
**Goal:** Establish the repository skeleton and create a clear mapping from `To be processed/` to final `docs/` locations before migrating content.
**Requirements:** INFRA-01, INFRA-02, INFRA-03
**UI hint:** no
**Success Criteria:**
1. Final folder structure under `docs/` is created.
2. `_category_.json` files are created.
3. A file-by-file migration map is produced from `To be processed/` to final target paths.
4. Frontmatter templates for normative vs informative artifacts are defined.
5. GitHub Pages / Actions deployment skeleton is drafted.
6. No content migration starts before this structure is agreed.

---

## Phase 2: Normative Artifact Migration
**Goal:** Migrate normative artifacts with zero material change.
**Requirements:** MIG-01, MIG-03, PRES-01, PRES-02, PRES-03
**UI hint:** no
**Success Criteria:**
1. All normative artifacts are placed in correct folders.
2. YAML frontmatter is added.
3. Internal links are converted to valid Docusaurus links.
4. If visual notices are added, they must be clearly non-normative publication notices and must not alter or blur the material meaning of the artifact.
5. No discretionary rewriting of clauses, obligations, definitions, or legal meaning.

---

## Phase 3: Informative Artifact Migration and Public-Facing Rewrite
**Goal:** Migrate and improve informative artifacts for external readability in Swedish.
**Requirements:** MIG-02, PRES-04
**UI hint:** no
**Success Criteria:**
1. Intro, architecture, relationships, guides, and public repository guidance are migrated.
2. Informative texts are rewritten where needed for an external audience across the Swedish public sector.
3. Public-facing guidance should explain how the repository is structured, how to interpret status/version, and how to leave feedback.
4. No informative page may silently introduce new normative content.
5. All public content generated for GitHub Pages / Docusaurus must be written in Swedish.

---

## Phase 4: Verification and Publication Readiness
**Goal:** Verify that the repository is internally consistent and safe to publish.
**Requirements:** INT-01, V2-01 (Partially completed for verification)
**UI hint:** no
**Success Criteria:**
1. Internal links validated.
2. Normative/informative separation checked.
3. Terminology checked against Bilaga A.
4. Version/status handling checked for consistency.
5. Old file names and outdated references removed.
6. A final review confirms that normative artifacts preserve their original material meaning.
