---
title: Combinatorics
theme: math
summary: Counting how many ways things can combine.
related:
  - Permutations
  - Conditional Probability
date: 2026-10-21
---
Combinatorics is the math of counting how many ways things can be arranged or chosen. When you care about order, Permutations count how many ways there are to arrange a set. When you don't combination combinations count how many ways to pick a subset. One lesson is how violently these counts explode. A 4-digit PIN has 10,000 possibilities; add two digits and it jumps to a million. A 52-card deck can be shuffled 52! ways - a number larger than the count of atoms making up the Earth.



That explosion cuts both ways. It's why brute force collapses on large spaces (chess has on the order of 10^120 possible games, so you can't just enumerate them), and also why a handful of independent choices generates far more combinations than intuition expects; the root of everything from password strength to the number of distinct product configurations you could ship from a few modular parts.



Why it matters: almost every probability question starts with correctly counting the possibility space. Before you estimate the odds of something, count how many ways it can and can't happen.
