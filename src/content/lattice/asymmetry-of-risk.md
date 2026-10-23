---
title: "Asymmetry of Risk"
theme: cross
summary: "When downside and upside are unequal, the shape of the payoff matters more than its average."
tags: [risk, optionality, convexity]
related: [expected-value, fat-tails, path-dependence]
date: 2026-10-21
---

Most decisions get judged by their expected outcome, but the *shape* of the payoff matters more than its average. Two bets can share the same expected value and be worlds apart: one costs you a little when it fails and pays a lot when it works; the other does the reverse. Asymmetry of risk is the habit of looking at the whole distribution — how much you can lose versus how much you can win, and with what probability — instead of collapsing it to a single number.

The first rule that falls out of this is *avoid ruin*. A downside that ends the game has to be refused almost regardless of how unlikely it is, because you can't play tomorrow if you're wiped out today. Russian roulette has fine odds on any single pull and a catastrophic, unrecoverable tail — no expected-value calculation redeems it. Leverage, single points of failure, and unhedged catastrophic exposure all share this property: the rare outcome is the only one that ends up mattering.

The mirror image is where the real money is: *positive* asymmetry. Seek bets with a small, known, capped downside and a large or open-ended upside. Venture investing is this made into a business — you can only lose 1x your check but can make 100x, so you optimize for not missing the winners, and a handful of them pay for a sea of zeros. A barbell (mostly safe, a sliver in convex long shots) is the portfolio expression of the same idea.

**Why it matters:** before sizing any bet, separate "what's the expected value?" from "what happens in the tails?" Refuse any downside you can't recover from, and pay up for upside that's capped on the loss and open-ended on the gain.
