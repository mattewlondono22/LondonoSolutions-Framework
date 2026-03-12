# Public Safety

**Version:** v2.0  
**Scope:** Public Framework Documentation

---

## Purpose

This document defines what belongs in the public LondonoSolutions Framework repository and what does not. It serves as the governance reference for anyone contributing to or auditing the repository.

The framework is a public infrastructure layer. It must be safe for public visibility at all times.

---

## What Belongs Here

The public repository should contain only:

- Framework architecture documentation
- Governance standards and principles
- Public-facing system design references
- Reusable intelligence layer specifications
- Source code for the framework application and components
- Public assets required for the documentation site

Everything in this repository should be something a potential collaborator, partner, or operator could review safely without accessing anything private, internal, or sensitive.

---

## What Does Not Belong Here

The following categories of content must never be committed to this repository:

### Personally Identifiable Information (PII)

No names, email addresses, phone numbers, physical addresses, or any other information that identifies a specific individual.

### Secrets and Credentials

No API keys, authentication tokens, passwords, private keys, certificates, or any other access credentials. Use environment variables and `.env.example` files for credential references.

### Internal Operating Documents

SITREPs, internal memos, private governance documents, internal positioning guides, and internal directives are not public framework assets. They must be maintained in private, internal repositories or document systems.

### Client-Specific Materials

No client names, engagement details, deliverables, private analyses, or any material that was created for or belongs to a specific client. Client work is private by default.

### Release Artifacts

No `.zip` files, `.patch` files, `.diff` files, compiled bundles, or release packages. These are build outputs, not source content.

### Screenshots and Recordings

No screenshots of internal systems, ChatGPT sessions, dashboards, or any other screen captures. No video recordings or audio files.

### Temporary and Local Files

No `.tmp`, `.temp`, `.bak`, log files, local database exports, CSV dumps, or other artifacts from a local development environment.

### Binary Data Dumps

No base64-encoded binary dumps, encoded exports, or obfuscated data files.

---

## .gitignore Policy

The repository `.gitignore` is maintained to enforce these boundaries automatically. It is not a convenience file — it is a security control.

Patterns in `.gitignore` cover:

- dependencies and build outputs
- environment and secret files
- editor and OS artifacts
- local exports, patches, and archives
- screenshots and recordings
- database and tabular data files
- keys and certificates
- internal and private content directories
- images (with explicit exceptions for public framework assets)

If a file type is not covered by `.gitignore` but falls into a restricted category above, it must be added to `.gitignore` before any files of that type are committed.

---

## Pre-Commit Checklist

Before committing to this repository, confirm:

- [ ] No PII in any file
- [ ] No credentials, keys, or tokens
- [ ] No internal SITREPs or private governance docs
- [ ] No client-specific content
- [ ] No release bundles or patch files
- [ ] No screenshots or recordings
- [ ] No temporary or local artifact files
- [ ] All new file types are covered by `.gitignore` if they are restricted

---

## Reporting a Public Safety Issue

If you identify content in this repository that should not be public:

1. Do not create a public issue describing the sensitive content
2. Contact the repository owner through a private channel
3. Include the file path and the nature of the concern

The repository owner will remove the content, rotate any affected credentials, and update `.gitignore` as needed.

---

## Related Documents

- [README.md](../README.md)
- [londono-intelligence-standard.md](londono-intelligence-standard.md)
- [framework-layer.md](framework-layer.md)
