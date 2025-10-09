---
layout: about
title: About
permalink: /

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder
---

Recent years have seen a proliferation of specialized ML accelerators -- proposed in both academia (e.g., Gemmini, FEATHER) and industry (e.g., Google TPU, Intel AMX) -- that depart significantly from traditional CPU/GPU architectures.
However, research on compiler and systems support for these accelerators remains sparse, largely due to the lack of mature open-source compiler infrastructures capable of targeting them from popular ML frameworks like PyTorch, and JAX.
Building such support involves considerable manual effort, slowing innovation and creating a gap between hardware and software research communities.

To bridge this gap, we present **ACT (Accelerator Compiler Toolkit) Ecosystem**, an ecosystem that automatically generates complete compiler backends and essential software tooling from high-level ISA specifications of tensor accelerators.

Over the past year, ACT has evolved into a comprehensive ecosystem that includes:

1. **TAIDL (Tensor Accelerator Instruction Description Language)**: A Python-based DSL for specifying tensor accelerator ISAs.
TAIDL leverages tensor IRs like XLA-HLO to compactly and precisely model execution semantics of tensor accelerator ISAs.
2. **TAIDL-TO (Test Oracle) Generator**: Automatically generates scalable functional simulators just from TAIDL specifications, enabling correctness testing of the software stack. TAIDL-TOs are orders of magnitude faster than existing simulators.
3. **ACT Backend Generator**: Automatically generates sound and complete compiler backends just from TAIDL specification. ACT backends match or outperform state-of-the-art expert-written libraries, while maintaining low compile times (\<1 sec).
4. **XLA Integration**: Enables end-to-end compilation from popular ML frameworks like JAX, TensorFlow, and PyTorch

We will present hands-on tutorials at [ICFP/SPLASH 2025 (Singapore, Oct 12)](https://act-compiler.github.io/tutorials/splash2025/) and [MICRO 2025 (Seoul, Oct 19)](https://act-compiler.github.io/tutorials/micro2025/) to demonstrate the capabilities of the ACT ecosystem.
The tutorials are designed for researchers, practitioners, and students interested in compiler design, programming languages, and AI/ML hardware.
By the end, participants will have hands-on experience with the complete ACT workflow and understand how to rapidly prototype compiler support for novel accelerator architectures.
