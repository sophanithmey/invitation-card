# Clean Architecture & Engineering Standards

## 1. Architectural Layers & Boundaries
This codebase strictly adheres to Uncle Bob's **Clean Architecture**. Dependencies point strictly inwards:
`Presentation -> Use Cases -> Domain <- Data`

- **`domain/`**:
  - Core business entities, value objects, and repository interfaces.
  - Strictly pure TypeScript: ZERO dependencies on React, Next.js, or external UI libraries.
- **`use-cases/`**:
  - Application business rules and orchestration (e.g., `get-wedding.ts`, `save-wedding.ts`, `get-visible-sections.ts`).
  - Depends only on `domain/`.
- **`data/`**:
  - Repository implementations and data sources (e.g., `local-wedding-repository.ts`, seed fixtures).
  - Implements repository interfaces defined by domain/use-cases.
- **`presentation/`**:
  - UI components, templates, contexts, hooks, and design system elements.
  - Framework-dependent (Next.js 15, React 19, Tailwind CSS, Framer Motion).

---

## 2. File Size & Modularization Constraint (150 - 200 LOC)
To maintain elite readability, testability, and single responsibility:
- **Maximum 150 - 200 Lines of Code per file**.
- **Component Decomposition**:
  - Break monolithic pages into focused sub-components (dialogs, cards, headers, actions).
  - Extract complex state and effects into custom hooks (`presentation/hooks/`).
  - Extract SVG illustrations or complex icons into dedicated ornament files.
- **Translations & Configuration**:
  - Split multi-language dictionaries into separate locale files (`en.ts`, `kh.ts`).
  - Keep types in `types.ts`.

---

## 3. Package Management & Tooling
- **Package Manager**: Strictly use **`yarn`** (`yarn`, `yarn build`, `yarn lint`). Never commit `package-lock.json` or use `npm`.
- **Node Environment**: Managed via **NVM** with the version defined in **`.nvmrc`** (Node v20.x).
- **Verification**: Run `yarn build` to validate production compiles. Do not start persistent dev servers unless explicitly commanded.

---

## 4. Code Cleanliness & Senior Standards
- **Zero Duplication**:
  - Remove redundant duplicate files and parallel implementations.
  - Consolidate shared utilities under `lib/` and reusable UI under `presentation/components/`.
- **No Dead Code**:
  - Never leave commented-out obsolete code blocks or unused imports.
- **Khmer Typography Safeguards**:
  - **NEVER** apply CSS `letter-spacing` / `tracking-*` to Khmer text (breaks subscript ligatures and vowels).
  - Always pair Khmer text with `font-khmer-moul` (`Moulpali`) or `font-khmer-kantumruuy` (`Kantumruuy Pro`) with appropriate `leading-[1.65]` line-height.
- **Type Safety**:
  - 100% strict TypeScript types. Zero `any` escapes.
