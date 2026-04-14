---
title: Plasma proteomics links brain and immune system aging with healthspan and
  longevity
category: paper
creator: Hamilton Se-Hwee Oh et al.
date: 2026-04-14
tags:
  - proteomics
  - aging
  - biomarkers
  - longevity
summary: Organ-specific plasma protein models estimate biological age of 11
  organs; aged organs increase mortality while youthful brains and immune
  systems decrease it.
url: https://www.nature.com/articles/s41591-025-03798-1
---
method

* sampled ~3k plasma proteins using Proximity Extension Assay (two antibodies bind the same protein, when close together their tags hybridize and get amplified)
* how can you assess which proteins are ‘come from’ which organs (with just a blood draw)?: if a gene encoding a protein is expressed >= 4x more in one organ, that protein is called "organ-enriched" for that organ (obv in some cases these proteins also occur elsewhere)
* trained a separate regression model per organ using only that organ's enriched proteins to predict biological age (e.g. the brain model uses only ~30 brain-enriched proteins)
* 44,498 individuals in the UK Biobank, 3 samples collected over ~12 years

results

* aged organs were associated with increased mortality; youthful brains and immune systems were associated with decreased mortality
* a single aged organ increases mortality risk by 1.5-3x, multiple aged organs were additive (8 aged organs: >8x risk)
* youthfulness in organs besides brain and immune system was not associated with decreased mortality (in some cases even increased risk, likely from confounders)
* only 160 out of 44,498 people had both youthful brains and youthful immune systems
* most noticeable example: an aged brain posed a 3x risk of Alzheimer's disease (even when controlled for aging in other organs), which is equal to the risk of carrying one copy of APOE4, the strongest genetic risk factor

challenges

* measurements have high variance per individual across the 3 samples over ~12 years. While measurements are highly predictive across individuals (where some noise matters less), the high variance is problematic for personal tracking bc you can't discern true biological change (e.g. after an intervention) from measurement noise
* also need to develop absolute quantification for these assays

prior methods for determining organ age

* routine lab tests (cholesterol, creatinine, glucose, red blood cell distribution width, white blood cell count, etc.)
* MRI (volume of different brain regions)
* DNA methylation (hard to interpret biological meaning)

in the study plasma brain aging and MRI brain aging are only weakly correlated (r=0.18) -> they seem to capture different aspects of brain aging

definitions

* blood: cells (45%: red/white blood cells & platelets) + liquid
* plasma: the liquid portion (92% water) + proteins, hormones, glucose, electrolytes, waste products
* serum: plasma with clotting factors also removed
