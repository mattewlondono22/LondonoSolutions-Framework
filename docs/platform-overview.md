# Platform Overview — SmartAgents

**Version:** v2.0  
**Scope:** Public Framework Documentation

---

## What SmartAgents Is

SmartAgents is the execution and workspace layer for LondonoSolutions intelligence systems. It is the platform where governed agents are deployed, managed, and operated within the authority model defined by the LondonoSolutions Framework.

SmartAgents does not replace the framework. It operationalizes the framework — providing the governed runtime environment where agents act on approved decisions within defined boundaries.

---

## Role in the Architecture

Within the five-layer architecture, SmartAgents operates at the **Execution** layer — the layer where authorized action is taken:

```
Thinking Primitives  →  Foundation  →  Analysis  →  Decision  →  Execution (SmartAgents)
```

Every agent deployed through SmartAgents inherits the framework's reasoning constraints, language-aware filtering, contextual interpretation rules, and governance standards. This means governance does not need to be rebuilt for each agent — it comes standard from the framework layer below.

---

## What SmartAgents Provides

### Governed Execution Workflows

Every workflow running inside SmartAgents is mapped to a defined decision class. No workflow runs without a governance owner. No agent acts outside its documented authority boundaries.

### Explicit Authority Boundaries

SmartAgents enforces the authority model from the LondonoSolutions Intelligence Standard. Agents cannot expand their own scope. Every boundary expansion requires documented human authorization.

### Logging and Audit Support

Every agent action taken inside SmartAgents is logged with:

- inputs and context at the time of action
- the framework and model version applied
- the human operator who authorized the action
- the timestamp and outcome of the action

### Rollback and Escalation Paths

Actions taken inside SmartAgents are designed to be reversible wherever possible. Escalation paths are defined before deployment, not after an incident.

### Lifecycle Governance

SmartAgents manages the full lifecycle of an active agent — from scoping and sandbox testing through production deployment and eventual deprecation. No agent enters production without a defined exit path.

---

## Agent Classes

Agents operating within SmartAgents are organized into four classes:

| Class | Role |
|-------|------|
| **Sentinel** | Monitoring, alerting, and anomaly detection |
| **Analyst** | Data analysis, pattern recognition, and option generation |
| **Operator** | Workflow execution and task automation |
| **Steward** | Memory management, knowledge encoding, and institutional continuity |

Each class operates within its defined scope and cannot take actions reserved for another class without explicit authorization.

---

## Relationship to the Framework

SmartAgents is a platform that depends on the framework, not the other way around. The framework defines how intelligence should work. SmartAgents is one place where that intelligence is applied.

Other platforms and systems can apply the same framework. SmartAgents is the reference implementation — the clearest demonstration of what governed agent execution looks like in practice.

---

## Related Documents

- [README.md](../README.md)
- [system-overview.md](system-overview.md)
- [framework-layer.md](framework-layer.md)
- [londono-intelligence-standard.md](londono-intelligence-standard.md)
