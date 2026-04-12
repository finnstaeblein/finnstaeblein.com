---
title: Proteomic signatures improve risk prediction for common and rare diseases
category: paper
creator: Julia Carrasco-Zanini et al.
date: 2026-04-10
tags:
  - proteomics
  - disease-prediction
  - biomarkers
  - machine-learning
summary: Plasma proteomics outperforms standard clinical models for predicting
  10-year disease risk across 218 conditions.
url: https://www.nature.com/articles/s41591-024-03142-z
---


Summary

* affinity-based assay targeting ~3,000 pre-selected plasma proteins (from here on I'll just say proteomics) for disease prediction
* proteomics is in many cases more effective for predicting disease risk compared to current methods — both compared to models using only basic clinical information and models using clinical info + 37 common blood assays
* predicted 10-year incidence of 218 diseases; the proteomics approach outperformed in 67 (vs. clinical info only) and 52 (vs. clinical info + lab assays) respectively
* the proteomics models were sparse: only 5-20 proteins per model
* they detected both disease-specific proteins and proteins shared across multiple diseases 
* 147 of 501 predictor proteins were selected for 2+ diseases, and 5 predicted across more than 10 diseases (4 of those 5 mainly bc they correlate with age)
* the biggest diagnostic improvement was achieved for rarer conditions and those where blood plays a more important role (e.g. leukemia)



Questions

* they tested ~3k proteins (including all isoforms, humans have >100k). Based on what criteria did they pre-select these? How can we make this work for proteins that occur at lower levels? Might these actually be even more informative for predicting disease?
* can we also predict common diseases better via proteomics (heart disease, diabetes)? this paper suggests that currently the evidence is much stronger for rarer ones.
* how long does it take to develop absolute quantification for a single protein?
