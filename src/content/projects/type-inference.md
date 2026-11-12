---
title: "Dynamic scheduling for type inference"
researchOrder: 3
period: "2024–2025"
current: false
meta: "Cornell University · Advisors: Nate Foster & Jules Jacobs"
researchSummary: |-
  I researched how dynamically scheduling type inference constraints can generalize the heuristics used by Quick Look and FreezeML. In doing so, we developed a notion of problem safety, which guards on which type constraint problems should be solved first. I implemented the approach for System F and a dependently typed core calculus, and evaluated it using the Quick Look benchmark.
researchLinks:
  - label: "Project overview"
    url: "/research/type-inference.html"
  - label: "Slides (PDF)"
    url: "/assets/system-f-type-inference.pdf"
detail: true
eyebrow: "Programming languages · 2024–2025"
lead: |-
  Exploring how the order in which we solve type inference constraints can help infer types for polymorphic and dependently typed programs.
detailMeta: "Cornell University · With Nate Foster and Jules Jacobs"
description: |-
  My research with Nate Foster and Jules Jacobs on dynamic scheduling of type inference constraints for System F and dependent types.
resources:
  - label: "Selected slides (PDF)"
    url: "/assets/system-f-type-inference.pdf"
  - label: "Curriculum vitae"
    url: "/assets/Jeffrey-Huang-CV.pdf"
---

## The question

Type inference algorithms have to decide when to use the information available in a program. My work explored an approach loosely inspired by Quick Look and FreezeML, aiming to generalize their constraint-solving heuristics through dynamic scheduling.

## What I worked on

- **Constraint scheduling.** Researched an approach to choosing which type inference constraints to solve as more information becomes available.
- **Implementations.** Implemented the approach for System F and a dependently typed core calculus.
- **Evaluation.** Tested the approach using the benchmark from Quick Look’s comparison with other impredicative type systems.

## Safe problems first

The presentation describes a worklist of checking and subsumption problems. Rather than committing to an ambiguous instantiation too early, the algorithm prioritizes safe problems. Solving one problem can resolve metavariables and make other problems safe to solve.

This makes the scheduling decision explicit. The priority order considers checking before subsumption, safe before unsafe problems, and then program order. The presentation includes examples of when a polymorphic function should be instantiated and when it should remain polymorphic.

## Presentation

The linked slides illustrate the approach and its evaluation.
