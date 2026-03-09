---
layout: about
title: About
permalink: /

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
collaborations: true # includes collaborating universities and sponsors sections
---

Recent years have seen a proliferation of specialized ML accelerators -- proposed in both academia (e.g., Gemmini, FEATHER) and industry (e.g., Google TPU, Intel AMX) -- that depart significantly from traditional CPU/GPU architectures.
However, research on compiler and systems support for these accelerators remains sparse, largely due to the lack of mature open-source compiler infrastructures capable of targeting them from popular ML frameworks like PyTorch, and JAX.
Building such support involves considerable manual effort, slowing innovation and creating a gap between hardware and software research communities.

To bridge this gap, we present **ACT (Accelerator Compiler Toolkit) Ecosystem**, an ecosystem that automatically generates complete compiler backends and essential software tooling from high-level ISA specifications of tensor accelerators.

The ACT ecosystem consists of:

1. **TAIDL (Tensor Accelerator ISA Definition Language)**: A Python-based DSL for specifying tensor accelerator ISAs.
TAIDL leverages tensor IRs like XLA-HLO to compactly and precisely model execution semantics of tensor accelerator ISAs.
2. **TAIDL-TO (Test Oracle) Generator**: Automatically generates scalable functional simulators just from TAIDL specifications, enabling correctness testing of the software stack. TAIDL-TOs are orders of magnitude faster than existing simulators.
3. **ACT Backend Generator**: Automatically generates sound and complete compiler backends just from TAIDL specification. ACT backends match or outperform state-of-the-art expert-written libraries, while maintaining low compile times (\<1 sec).
4. **XLA Integration**: Enables end-to-end compilation from popular ML frameworks like JAX, TensorFlow, and PyTorch

### Getting Started

We recommend starting with our [MICRO 2025 tutorial](https://github.com/act-compiler/act/tree/master/tutorials/micro25).
The tutorial provides a step-by-step walkthrough of the ACT ecosystem, requiring no prior experience with AI accelerators or ML compilers, and provides hands-on exercises to get familiar with the TAIDL Python DSL and automated tool generation. We encourage you to follow along and experiment with the code.

A revised tutorial will be presented at [ASPLOS 2026](/tutorials/asplos2026/) (Pittsburgh, Mar 22) -- updated materials coming soon.

### Collaboration Opportunities

We are open to collaborations to extend the ACT ecosystem in various directions, including but not limited to:

- **AI accelerator designers** -- hardware teams that have built or are designing custom AI accelerators and want to leverage the ACT ecosystem to automatically get software tooling, without the overhead of building a separate software stack
- **ISA-driven automation** -- researchers working on code generation, formal verification, or simulation from high-level hardware specifications, who want to leverage TAIDL as a common language for modeling and automation
- **ML compiler teams** -- teams building or maintaining compilers for existing commercial accelerators (e.g., AWS Trainium, custom ASICs) who want to explore ISA-driven automation or benchmark against ACT-generated backends
- **MLSys research** -- researchers working on compiler optimizations, autotuning, or hardware-software co-design for AI accelerators, who want to use ACT as a platform for rapid prototyping and evaluation

If any of these resonate -- or if you have related ideas along these themes -- reach out to [Devansh Jain](mailto:devansh9@illinois.edu) or [Prof. Charith Mendis](mailto:charithm@illinois.edu).
