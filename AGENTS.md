# Project Rules & Engineering Standards

## Architecture & Design Patterns
- **Clean Architecture Hierarchy**:
  - `domain/`: Pure business entities and domain types. No UI dependencies.
  - `use-cases/`: Business logic orchestration.
  - `data/`: Repositories and data sources.
  - `presentation/`: UI components, templates, hooks, and contexts.
- **Strict LOC Limit**: Keep all files between **150 and 200 lines maximum**. Decompose complex components into focused sub-components.

## Tooling & Execution
- **Package Manager**: Use `yarn` exclusively.
- **Node Version**: Governed by `.nvmrc` (v20).
- **Verification**: Run `yarn build` for verification. No live server execution needed.

## Code Quality & Khmer Typography
- Zero duplicate files or copy-pasted implementations.
- No dead or commented-out code.
- Never apply CSS `letter-spacing` / `tracking-*` to Khmer typography to preserve subscript ligatures (`ជើងអក្សរ`) and vowel marks (`ស្រៈ`).
