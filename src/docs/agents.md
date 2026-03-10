# Agents at LondonoSolutions

**Date:** March 7, 2026  
**Owner:** LondonoSolutions  
**Version:** v1.1

Agents are implementations of offerings, not offerings themselves.

## Purpose of Agents

Agents exist to apply intelligence within clearly defined authority boundaries.  
They do not replace human judgment.  
They do not operate freely.  
They act as disciplined operators inside the LondonoSolutions Intelligence Doctrine.

Every agent must:
- Map to a single offering
- Serve a defined decision class
- Have a named human owner
- Operate within explicit authority limits
- Be auditable, reversible, and governable

If an agent cannot meet these conditions, it does not exist.

## Runtime and Governance Mapping

SmartAgents is the governed runtime for active LondonoSolutions agents.

Every active agent must map to:
- one offering
- one decision class
- one named human owner
- one approved authority boundary
- at least one measurable success metric tracked through the current operating system

This keeps agent deployment tied to the active protocol map in `sitrep.md` instead of allowing agents to exist as standalone experiments.

---

## Agent Classes

LondonoSolutions recognizes **four and only four** agent classes.

### 1. Sentinel Agents

**Role**  
Observe systems, detect anomalies, and escalate signals.

**Authority**  
No execution authority.

**Responsibilities**
- Monitor data integrity
- Detect drift, confidence degradation, or boundary violations
- Alert humans or Steward agents when thresholds are breached

**Constraints**
- Sentinel agents never take action
- Sentinel agents never modify data
- Silence is their primary failure mode

---

### 2. Analyst Agents

**Role**  
Analyze information, synthesize understanding, and propose options.

**Authority**  
Zero execution authority.

**Responsibilities**
- Document analysis
- Option generation
- Trade-off and impact assessment
- Uncertainty and assumption labeling

**Constraints**
- Must produce multiple options
- Must explicitly state confidence and assumptions
- Recommendations are hypotheses, not conclusions

---

### 3. Operator Agents

**Role**  
Execute approved actions within tightly scoped boundaries.

**Authority**  
Limited, reversible execution authority.

**Responsibilities**
- Carry out pre-authorized workflows
- Perform routine operational tasks
- Execute actions only after explicit approval paths are satisfied

**Constraints**
- No autonomous decision-making
- No scope expansion without human authorization
- All actions logged prior to execution
- Automatic rollback on critical failure

---

### 4. Steward Agents

**Role**  
Govern intelligence systems themselves.

**Authority**  
Override, pause, rollback, and escalate.

**Responsibilities**
- Enforce kill-switch activation
- Maintain audit integrity
- Govern memory ownership and access
- Trigger regression of agents when required

**Constraints**
- Steward agents protect the system, not outputs
- Cannot optimize for speed or convenience
- Must always escalate irreversible risk to humans

---

## Authority Boundaries

Agents are not peers to humans.  
They are constrained actors.

- No agent owns outcomes
- No agent overrides human judgment
- No agent expands its own scope
- No agent operates without a named human owner

Responsibility always rests with humans.

---

## Agent Lifecycle

All agents follow the LondonoSolutions lifecycle:

1. Sandbox  
2. Trusted  
3. Hosted  

Agents may advance only by demonstrated reliability and governance compliance.  
Agents may regress immediately upon violation, drift, or loss of trust.

Sentinel and Analyst agents retain zero execution authority at every lifecycle stage.  
Operator and Steward agents may execute only inside approved SmartAgents workflows with logging, rollback, and human escalation preserved.

---

## What Agents Are Not Allowed To Do

Agents may never:
- Make irreversible decisions independently
- Override explicit human instructions
- Operate without auditability
- Persist memory without ownership rules
- Modify their own constraints
- Represent themselves as autonomous authority

---

## Non-Delegable Decision Rule

An agent is never allowed to make any decision that harms, degrades, or materially changes a system.

This includes, but is not limited to:
- Changes to system architecture, authority, or scope
- Actions that alter data integrity, memory, or provenance
- Decisions that impact security, compliance, or trust
- Irreversible actions or actions without a tested rollback
- Modifications that affect users, clients, or downstream systems

Any decision with the potential to cause harm, introduce instability, or permanently change system behavior must be escalated to a human owner.

Agents may:
- Observe
- Analyze
- Propose options
- Execute only explicitly authorized, reversible actions

Agents may not:
- Decide on system-altering changes
- Expand their own authority
- Override human judgment
- Act under uncertainty without escalation

**System change is human authority. Always.**

---

## Closing Principle

Agents exist to reduce friction, not responsibility.

If an agent increases risk, ambiguity, or loss of control,  
it is removed.

Structure precedes scale.

---

Version: v1.1 — Agents  
Owner: LondonoSolutions  
Date: March 7, 2026
