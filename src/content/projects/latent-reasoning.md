---
title: "Latent reasoning"
researchOrder: 2
period: "Spring 2026–present"
current: true
meta: "Cornell Math+AI Lab · Advisor: Daniel Halpern-Leistner"
researchSummary: |-
  We are investigating a general reasoning architecture that solves problems by iteratively refining continuous hidden states. The goal is to reuse a simple architecture across tasks, give harder inputs more computation, and let each reasoning step build on earlier steps. The lab explores this approach on tasks including Sudoku, maze solving, and graph algorithms.

  My work focuses on recurrent distillation: teaching a smaller model to reproduce a larger reasoning model’s hidden-state trajectory without generating intermediate reasoning tokens. I built the teacher-trace extraction pipeline, a prototype recurrent student, and a Sudoku data pipeline, and I am continuing this work in the 2026–27 academic year.
researchLinks:
  - label: "Project overview"
    url: "/research/latent-reasoning.html"
  - label: "Semester report (PDF)"
    url: "/assets/latent-reasoning-report.pdf"
detail: true
eyebrow: "Machine learning · Spring 2026–present"
lead: |-
  Investigating how neural networks can reason through successive hidden states, with a shared architecture across different tasks.
description: |-
  Ongoing research in the Cornell Math+AI Lab on latent reasoning, and my work on recurrent distillation, teacher-trace extraction, and a prototype student model.
resources:
  - label: "Spring 2026 semester report (PDF)"
    url: "/assets/latent-reasoning-report.pdf"
---

## The project

In the <a href="https://danielhl.github.io/math-ai.html" target="_blank" rel="noopener noreferrer">Cornell Math+AI Lab</a>, we are investigating a simple reasoning architecture that can work across many tasks with small modifications. The goal is a model that builds on earlier computations, allocates different amounts of computation to different inputs, and can retain a growing history of its reasoning.

The model encodes an input, then repeatedly updates a continuous latent state while attending to the input and earlier states. A decoder turns each state into a prediction, allowing us to study how the answer develops over successive reasoning steps. The lab's task implementations include Sudoku, maze solving, graph connectivity, and other algorithmic problems. These provide settings for exploring how the architecture learns iterative computation and generalizes across problem sizes and levels of difficulty.

## Recurrent distillation

My part of the project explores learning latent reasoning from a larger teacher model. A reasoning language model generates intermediate reasoning tokens before its answer. We extract the hidden states associated with those tokens and plan to use them as a training signal for a smaller recurrent student.

The aim is for the student to advance directly through hidden states without decoding and feeding back an intermediate token at every step. This is a complementary direction to the lab's task-trained latent reasoning models: it asks whether a teacher's reasoning trajectory can guide a smaller model's latent computation.

## My contributions

- **Teacher-trace extraction.** I built a batched pipeline that generates teacher responses, extracts final-layer hidden states over the completed sequences, identifies the reasoning span, and saves traces with their text and model metadata. I extended teacher loading to support different models.
- **Recurrent student prototype.** I implemented a student that projects teacher encodings into a smaller latent space, repeatedly updates a state using its accumulated history, and maps the resulting states back into teacher space using a tied projection.
- **Sudoku data and inspection tools.** I built the Sudoku teacher-trace generation pipeline and notebooks for inspecting puzzles, generated responses, and hidden-state traces.

## Ongoing work

I began this work in Spring 2026 and remain involved during the 2026–27 academic year. The current implementation provides the teacher-trace pipeline and a student prototype; training and evaluating the student remain next steps. My semester report documents the initial work and proposed experiments.
