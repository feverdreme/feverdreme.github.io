---
title: "Language-agnostic code embeddings"
url: "/research/code-embeddings.html"
catalogOrder: 3
categories:
  - "ai"
  - "languages"
technologies:
  - "Python"
  - "CodeT5+"
  - "CodeSearchNet"
  - "Research course"
links:
  - label: "Code"
    url: "https://github.com/adlrwbr/paradigm-agnostic-code-embeddings"
  - label: "Project report (PDF)"
    url: "/assets/paradigm-agnostic-code-embeddings.pdf"
researchOrder: 5
period: "Fall 2024"
current: false
meta: "Cornell University · Research course with Marten van Schijndel"
researchSummary: |-
  With Destiny Vargas and Adler Weber, I investigated whether removing language-specific components from code embeddings improves semantic code retrieval. I generated CodeT5+ pooler embeddings from The Stack and built a CodeSearchNet data loader and text-to-code retrieval evaluation, using cosine similarity and mean reciprocal rank across Python, Java, PHP, and JavaScript.

  Our CodeT5+ evaluation found slightly worse retrieval after centering, consistent with the original paper’s result for this model. We also proposed extending the analysis to programming paradigms.
researchLinks:
  - label: "Project overview"
    url: "/research/code-embeddings.html"
  - label: "Code"
    url: "https://github.com/adlrwbr/paradigm-agnostic-code-embeddings"
  - label: "Project report (PDF)"
    url: "/assets/paradigm-agnostic-code-embeddings.pdf"
summary: |-
  A collaborative replication study examining whether removing language-specific embedding components improves code retrieval. I generated CodeT5+ pooler embeddings and built a CodeSearchNet data loader and text-to-code retrieval evaluation with cosine similarity and mean reciprocal rank. Centering slightly reduced CodeT5+ retrieval performance in our experiment; extending the analysis to paradigms remained exploratory.
detail: true
eyebrow: "Code representations · Fall 2024"
lead: |-
  Can we make code retrieval focus more on what a program does by removing information about the language it is written in?
detailMeta: "With Destiny Vargas and Adler Weber · Cornell Computational Linguistics II · Marten van Schijndel"
description: |-
  A replication of language-agnostic code embedding experiments, my CodeT5+ and CodeSearchNet contributions, and the results and limits of our proposed paradigm extension.
resources:
  - label: "Final report (PDF)"
    url: "/assets/paradigm-agnostic-code-embeddings.pdf"
  - label: "Project code"
    url: "https://github.com/adlrwbr/paradigm-agnostic-code-embeddings"
---

## The replication

Our starting point was Utpala et al.’s work on separating language-specific and language-agnostic components of code embeddings. The project proposal set out three experiments: probing embeddings for programming-language identity, retrieving code from code, and retrieving code from English descriptions.

The group studied CodeBERT, CodeT5+, and CodeLlama, using centering, Low Rank Decomposition (LRD), and Common Specific Low Rank Decomposition (CS-LRD). These methods estimate a language-specific component that can be subtracted before probing or retrieval.

## My contributions

- **Embedding generation.** Generated CodeT5+ pooler embeddings from The Stack.
- **Text-to-code infrastructure.** Built a CodeSearchNet data loader and text-to-code retrieval evaluation for matching English descriptions to code snippets.
- **Evaluation.** Implemented mean reciprocal rank evaluation with cosine similarity. Our report explains that we used cosine similarity in place of the original dot-product scoring because we suspected embedding magnitudes were affecting rankings.

## What we found

The final report’s text-to-code experiment focused on CodeT5+ and four languages shared by the models and datasets: Python, Java, PHP, and JavaScript. Retrieval performed slightly worse after centering, consistent with the original paper’s result for this model.

The group’s language-identification probes also tested whether subtracting one language’s component selectively affected that language. Centering produced this pattern, while LRD gave unstable or degenerate predictions in some settings. These diagnostics helped separate a successful removal of language information from a transformation that simply damaged the representation.

## The proposed paradigm extension

We proposed applying the same idea to programming paradigms: for example, comparing functionally and imperatively written programs with similar behavior. This required a dataset with reliable paradigm labels, which proved difficult to construct from snippets in multiparadigm languages. Heuristic filtering left too few usable examples.

The report therefore treats paradigm dataset creation as a limitation and future direction. GPU memory, embedding storage, and slow experiment iteration also constrained the work.
