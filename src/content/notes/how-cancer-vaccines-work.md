---
title: "How Cancer Vaccines Work"
category: article
creator: "Kumar et al."
date: 2026-07-07
tags: [biology, cancer, immunology, vaccines]
url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11581883/"
summary: "Notes on personalized cancer vaccine design — how T cells, neoantigens, and AI-driven epitope prediction fit together."
---

this paper investigates whether ai can enable personalized cancer vaccines.

how it works: you sequence the tumor and normal tissue and identify the mutations unique to the tumor. then you use ai to pick the best epitopes — the mutated peptides that will (a) sit on the patient's mhc and (b) trigger a t cell response — while avoiding peptides shared with healthy cells. those epitopes go into the vaccine, which trains the patient's killer t cells to hunt the tumor.

background

- t cells: look at protein fragments that get displayed on the mhc molecule, and if they identify an abnormal one, killer t cells (cd8) kill the cell.
- b cells: produce antibodies which bind to antigens / pathogens (viruses or bacteria) so the body can kill them before they enter cells.
- hla-type: a genetic test for which version of the mhc/hla molecules you carry — the display molecules on your cells' surface that show peptide fragments to t cells. everyone's differ slightly, which is why the prediction has to be patient-specific.
- epitope: the specific part of an antigen the immune system recognizes. here it's a t-cell epitope — a short peptide displayed on the mhc and read by the t-cell receptor. (the antibody version — a surface region bound by an antibody — is the b-cell side.)

- 'traditional' vaccines: give you (part of) a deactivated pathogen for the body to recognize and be able to fight in the future.
- cancer vaccines: need to identify something that is unique to cancer cells so you can train killer t cells to recognize and fight cancer cells. the problem is that cancer cells are very similar to healthy cells.

—> biopsy cancer cells vs healthy cells, and use ai to predict which genetic mutation in the cancer cell will produce a protein fragment that (a) gets displayed on the mhc and (b) actually provokes a t cell response.

---

Source: Kumar et al., "Personalized cancer vaccine design using AI-powered technologies," *Frontiers in Immunology* (2024) — [PMC11581883](https://pmc.ncbi.nlm.nih.gov/articles/PMC11581883/)
