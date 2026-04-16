## Core problem hypothesis

### One-breath version

Smart contract teams still repeat too much coordination work every time they ship across chains.

### Full statement

Hyperkit is testing the claim that Web3 developers and small smart contract teams face a recurring workflow fragmentation problem when they move from specification to code generation to audit to simulation to deployment across disconnected tools and chain-specific steps.

The claim is not that every part of this workflow is broken for every team. The claim is narrower. High-velocity teams still absorb enough repeated coordination cost, risk, and delay in this flow that an integrated generation-plus-audit wedge is worth adopting. This note therefore frames the problem as a validation target, not as a settled market truth.

### What is supported today

The following points are supported by external research.

1. Smart contract development still suffers from weak tooling and hard debugging.
2. Smart contract delivery carries a strict pre-release burden because post-deployment correction is costly.
3. Multi-chain development adds integration complexity.
4. Fragmented work and repeated task switching reduce productivity in knowledge work.

### What is still a Hyperkit hypothesis

The following points remain under validation.

1. How many hours per week high-fit teams lose to this problem.
2. How much money those teams already spend on audits, simulation, deployment tooling, or workflow glue.
3. Whether a generation-plus-audit product wedge is painful enough to trigger repeat use and budget.

The following points now have better implementation-backed answers than earlier drafts, even though they do not fully close the market thesis.

1. HyperAgent already has a concrete MVP path in the repository.
2. The current documented payment path is x402-first on supported launch flows.
3. Workflow execution is tracked through run and step records rather than ad hoc task state.

## Falsification criterion

The hypothesis is false for the current target segment if, after ten interviews with high-fit users, fewer than six confirm both of the following.

1. They spend five or more hours per week, or meaningful money, trying to reduce this workflow friction.
2. The problem is urgent enough to change current behavior.

## High-fit user definition

A high-fit user meets most of the following conditions.

1. Ships smart contract code on a bi-weekly or faster cadence.
2. Works across more than one chain, or supports chain-adjacent infrastructure used across multiple chains.
3. Uses at least one formal audit, simulation, or deployment workflow before release.
4. Has recurring coordination cost across specification, generation, audit, simulation, or deployment.
5. Controls budget directly, or strongly influences tool choice.

## Exact answers to the feedback

### What is the pain

The pain is not "smart contracts are hard" in general. The pain is repeated coordination across disconnected workflow stages for teams that ship often and cannot tolerate security or deployment mistakes.

### Is the pain real or assumed

The broader pain is supported by external literature. The exact severity for the target segment remains under validation and must be proven through interviews and workflow trials.

### What changed in v1.2.0

1. The opening problem is now one clear sentence.
2. The problem is framed as a tested hypothesis, not as a settled fact.
3. The falsification rule is explicit.
4. The target user definition is operational rather than broad.

These changes matter because earlier drafts treated pain, market demand, and product fit too loosely. The current framing forces each of those claims to pass through evidence or explicit validation work.

## Actionable use

Use this file when writing:

1. the opening problem section
2. the hypothesis section
3. the falsification rule
4. the ICP definition

## Reflection

1. Is the problem stated in one sentence without jargon.
2. Does the statement distinguish general workflow pain from high-fit workflow pain.
3. Would a non-technical founder understand the problem after one read.
4. Does the falsification rule force a real decision if interviews fail.
