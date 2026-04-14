---
title: "Plasma proteomics links brain and immune system aging with healthspan and longevity"
category: paper
creator: "Hamilton Se-Hwee Oh et al."
date: 2026-04-14
tags: [proteomics, aging, biomarkers, longevity]
summary: "Organ-specific plasma protein models estimate biological age of 11 organs; aged organs increase mortality while youthful brains and immune systems decrease it."
url: "https://www.nature.com/articles/s41591-025-03798-1"
---

## Method

- Sampled ~3k plasma proteins using Proximity Extension Assay (PEA): two antibodies bind the same protein, when close together their tags hybridize and get amplified
- Determined organ origin: if a gene encoding a protein is expressed >= 4x more in one organ, that protein is called "organ-enriched" for that organ (though in some cases these proteins also occur elsewhere)
- Trained a separate regression model per organ using only that organ's enriched proteins to predict biological age (e.g. the brain model uses only ~30 brain-enriched proteins)
- 44,498 individuals in the UK Biobank, 3 samples collected over ~12 years

## Results

- Aged organs were associated with increased mortality; youthful brains and immune systems were associated with decreased mortality
- A single aged organ increases mortality risk by 1.5-3x, multiple aged organs were additive (8 aged organs: >8x risk)
- Youthfulness in organs besides brain and immune system was not associated with decreased mortality (in some cases even increased risk, likely from confounders)
- Only 160 out of 44,498 people had both youthful brains and youthful immune systems
- Most striking example: an aged brain posed a 3x risk of Alzheimer's disease (even when controlled for aging in other organs) — equal to the risk of carrying one copy of APOE4, the strongest genetic risk factor

## Challenges

- Measurements have high variance per individual across the 3 samples over ~12 years. While measurements are highly predictive across individuals (where noise matters less), the high variance is problematic for personal tracking — you can't discern true biological change (e.g. after an intervention) from measurement noise
- Need to develop absolute quantification for these assays

## Prior methods for organ age

- Routine lab tests (cholesterol, creatinine, glucose, red blood cell distribution width, white blood cell count, etc.)
- MRI (volume of different brain regions)
- DNA methylation (hard to interpret biological meaning)
- Plasma brain aging and MRI brain aging are only weakly correlated (r=0.18) — seem to capture different aspects of brain aging

## Definitions

- **Blood:** cells (45%: red/white blood cells & platelets) + liquid
- **Plasma:** the liquid portion (92% water) + proteins, hormones, glucose, electrolytes, waste products
- **Serum:** plasma with clotting factors also removed
