---
layout: tutorial
title: "ACT: End-to-End Compiler Infrastructure for Emerging AI Accelerators"
permalink: /tutorials/asplos2026/
importance: 1
conference: ASPLOS 2026
date_str: Mar 22, 2026
day: Sunday
time_str: "1:30 PM - 6:00 PM (UTC-4)"
venue: "Ohio Room, The Landing Hotel"
location: "757 Casino Dr. Pittsburgh, PA, USA"
prerequisites: Bring your own laptop with a working installation of Docker and follow the <a href="https://github.com/act-compiler/act/tree/master/tutorials/asplos26/setup.md" target="_blank">tutorial setup instructions</a>.
github: https://github.com/act-compiler/act/tree/master/tutorials/asplos26
---

## Introduction

Recent years have seen a proliferation of specialized AI accelerators -- proposed in both academia (e.g., Gemmini, FEATHER, EVA) and industry (e.g., Google TPU, Intel AMX, AWS Trainium) -- that depart significantly from traditional CPU/GPU architectures.
However, research on compiler and systems support for these accelerators remains sparse, largely due to the lack of mature open-source ML compiler infrastructures capable of targeting them from popular ML frameworks like PyTorch, and JAX.
Building such support involves considerable manual effort, slowing innovation and creating a gap between hardware and software research communities.

This tutorial introduces the **ACT (Accelerator Compiler Toolkit)**, an ecosystem that automatically generates complete ML compiler backends and essential software tooling from high-level ISA specifications of AI accelerators.

The ACT ecosystem consists of:

1. **TAIDL (Tensor Accelerator ISA Definition Language)**: A Python-based DSL for specifying AI accelerator ISAs
2. **TAIDL-TO (Test Oracle) Generator**: Automatically generates _fast & scalable_ functional simulators from TAIDL specifications
3. **ACT Backend Generator**: Automatically generates _sound & complete_ ML compiler backends just from TAIDL specifications
4. **XLA Integration**: Enables end-to-end compilation from popular ML frameworks like JAX, TensorFlow, and PyTorch

The tutorial is designed for researchers, practitioners, and students interested in compiler design, programming languages, and AI/ML hardware.
By the end, participants will have hands-on experience with the complete ACT workflow and understand how to rapidly prototype ML compiler support for novel AI accelerator architectures.

---

## Contents and Timeline (tentative)

| Time           | Topic                                                                         | Presenter            |
| -------------- | ----------------------------------------------------------------------------- | -------------------- |
| 1:30 - 1:35 PM | Welcome and Introduction                                                      | Prof. Charith Mendis |
| 1:35 - 1:45 PM | Tutorial Logistics                                                            | Devansh Jain         |
| 1:50 - 2:10 PM | Talk: Overview of ACT Ecosystem                                               | Prof. Charith Mendis |
| 2:10 - 2:20 PM | Demonstration 1: Quick walkthrough of ACT Ecosystem                           | Devansh Jain         |
| 2:20 - 2:50 PM | Hands-on Exercise 1: Specifying a new Accelerator ISA                         | Devansh Jain         |
| 2:50 - 3:10 PM | Talk: Expressivity and Extensibility of TAIDL                                 | Marco Frigo          |
| 3:10 - 3:30 PM | Hands-on Exercise 2: Writing custom Accelerator Kernels                       | Devansh Jain         |
| 3:30 - 4:00 PM | Coffee Break                                                                  |                      |
| 4:00 - 4:30 PM | Talk: Automatically Generating Compiler Backends just from ISA Specifications | Akash Pardeshi       |
| 4:30 - 5:00 PM | Hands-on Exercise 3: Generating a Compiler Backend for a new Accelerator ISA  | Devansh Jain         |
| 5:00 - 5:10 PM | Demonstration 2: Integrating the new Accelerator Backend with XLA Compiler    | Devansh Jain         |
| 5:10 - 5:40 PM | Hands-on Exercise 4: Tweaking the ISA and Open Discussion                     | Devansh Jain         |
| 5:40 - 6:00 PM | Q&A and Closing Remarks                                                       | Prof. Charith Mendis |

---

## Organizers

- **Prof. Charith Mendis** is an Assistant Professor in the Siebel School of Computing and Data Science at the University of Illinois Urbana-Champaign (UIUC). His broad research interests are at the intersection of compilers, program optimization and machine learning. He received his Ph.D. and Master’s from the Massachusetts Institute of Technology and his B.Sc. from the University of Moratuwa. He is the recipient of a DARPA Young Faculty Award, an NSF CAREER Award, the William A. Martin outstanding master’s thesis award at MIT and the university gold medal for his B.Sc. He has won numerous paper awards including a Distinguished Paper Award at POPL, a Best Student Paper Award at the IEEE BigData conference, an honorable mention for the Best Artifact Award at SIGMOD, a Best Paper Award at ML for Systems workshop at ISCA and an IEEE Top Picks Honorable Mention.
- **Devansh Jain** is a Ph.D. student in the Siebel School of Computing and Data Science at the University of Illinois Urbana-Champaign (UIUC), advised by Prof. Charith Mendis. His research interests lie in the field of programming languages, compilers & computer architecture, primarily domain-specific languages and architectures. His primary research objective is to develop a unified compiler infrastructure for architectures designed for accelerating tensor computations. He has authored/co-authored multiple papers at top-tier PL & systems venues, including POPL, OOPSLA, MICRO, ISPASS, with a Distinguished Paper Award at POPL’25.
- **Akash Pardeshi** is a M.S. student in the Department of Electrical and Computer Engineering at the University of Illinois Urbana-Champaign (UIUC), advised by Prof. Charith Mendis. His broad research interests are in compilers and computer architecture. His research focuses on techniques such as equality saturation and e-graph applications to ML compilers.
- **Marco Frigo** is a B.S. student in the Department of Electrical and Computer Engineering at the University of Illinois Urbana-Champaign (UIUC). His broad research interests are in compilers and computer architecture. His research focuses on developing software infrastructure for emerging tensor accelerators.
