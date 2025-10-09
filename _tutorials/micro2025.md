---
layout: page
title: MICRO 2025
permalink: /tutorials/micro2025/
description: In Seoul, South Korea on Oct 19, 2025
importance: 2
---

## Tutorial: End-to-End Compiler Infrastructure for Emerging Tensor Accelerators

Host Conference: MICRO 2025
Date: **Oct 19, 2025** (Sunday)  
Time: **1:00 PM - 5:00 PM** (UTC+9)  
Venue: Berkeley, 36th Floor, Lotte Hotel Seoul  
Location: 30 Eulji-ro, Jung District, Seoul, South Korea  
Prerequisites: Please bring your own laptop with a working installation of Docker.

---

## Introduction

Recent years have seen a proliferation of specialized ML accelerators—proposed in both academia (e.g., Gemmini, FEATHER) and industry (e.g., Google TPU, Intel AMX)—that depart significantly from traditional CPU/GPU architectures.
However, research on compiler and systems support for these accelerators remains sparse, largely due to the lack of open-source compiler infrastructures capable of targeting them from modern ML frameworks like PyTorch, TensorFlow, and JAX.
Building such support typically involves considerable manual effort, slowing innovation and creating a gap between hardware and software research communities.

This tutorial introduces the **ACT (Accelerator Compiler Toolkit) ecosystem**, an end-to-end compiler infrastructure that automatically generates compiler backends and essential tooling from high-level ISA specifications.

The ACT ecosystem consists of:

1. **TAIDL (Tensor Accelerator Instruction Description Language)**: A Python-based DSL for specifying accelerator ISAs with formal semantics
2. **TAIDL-TO (Test Oracle)**: Auto-generated functional simulators for correctness testing
3. **ACT Backend Generator**: Produces sound and complete ISA-specific compiler backends that use e-graph rewriting and constraint solving
4. **XLA Integration**: Enables end-to-end compilation from high-level ML frameworks

The tutorial is designed for researchers, practitioners, and students interested in compiler design, programming languages, and AI/ML hardware.
By the end, participants will have hands-on experience with the complete ACT workflow and understand how to rapidly prototype compiler support for novel accelerator architectures.

---

## Contents and Timeline (tentative)

| Time           | Topic                                                                         | Presenter                   |
| -------------- | ----------------------------------------------------------------------------- | --------------------------- |
| 1:00 - 1:10 PM | Welcome and Introduction                                                      | Prof. Charith Mendis (UIUC) |
| 1:10 - 1:30 PM | Talk: Overview of ACT Ecosystem                                               | Prof. Charith Mendis (UIUC) |
| 1:30 - 1:40 PM | Tutorial Logistics                                                            | Devansh Jain (UIUC)         |
| 1:40 - 1:50 PM | Demonstration 1: Quick walkthrough of ACT Ecosystem                           | Devansh Jain (UIUC)         |
| 1:50 - 2:20 PM | Hands-on Exercise 1: Specifying a new Accelerator ISA                         | Devansh Jain (UIUC)         |
| 2:20 - 2:40 PM | Hands-on Exercise 2: Writing custom Accelerator Kernels                       | Devansh Jain (UIUC)         |
| 2:40 - 3:00 PM | Discussion: Expressivity and Extensibility of TAIDL                           | Marco Frigo (UIUC)          |
| 3:00 - 3:30 PM | Break                                                                         |                             |
| 3:30 - 4:00 PM | Talk: Automatically Generating Compiler Backends just from ISA Specifications | Akash Pardeshi (UIUC)       |
| 4:00 - 4:30 PM | Hands-on Exercise 3: Generating a Compiler Backend for a new Accelerator ISA  | Devansh Jain (UIUC)         |
| 4:30 - 4:40 PM | Demonstration 2: Integrating the new Accelerator Backend with XLA Compiler    | Devansh Jain (UIUC)         |
| 4:40 - 5:00 PM | Q&A and Closing Remarks                                                       | Devansh Jain (UIUC)         |

---

## Organizers

- **Prof. Charith Mendis** is an Assistant Professor in the Siebel School of Computing and Data Science at the University of Illinois at Urbana-Champaign. His broad research interests are at the intersection of compilers, program optimization and machine learning. He received his Ph.D. and Master’s from the Massachusetts Institute of Technology and his B.Sc. from the University of Moratuwa. He is the recipient of a DARPA Young Faculty Award, an NSF CAREER Award, the William A. Martin outstanding master’s thesis award at MIT and the university gold medal for his B.Sc. He has won numerous paper awards including a Distinguished Paper Award at POPL, a Best Student Paper Award at the IEEE BigData conference, an honorable mention for the Best Artifact Award at SIGMOD, a Best Paper Award at ML for Systems workshop at ISCA and an IEEE Top Picks Honorable Mention.
- **Devansh Jain** is a Ph.D. student in the Siebel School of Computing and Data Science at the University of Illinois Urbana-Champaign (UIUC), advised by Prof. Charith Mendis. His research interests lie in the field of programming languages, compilers & computer architecture, primarily domain-specific languages and architectures. His primary research objective is to develop a unified compiler infrastructure for architectures designed for accelerating tensor computations. He has authored/co-authored multiple papers at top-tier PL & systems venues, including POPL, OOPSLA, MICRO, with a Distinguished Paper Award at POPL’25.
