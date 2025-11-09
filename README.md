# CM Design System

A modern React component library built with TypeScript, Tailwind CSS, and Storybook.

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [CM Design System](#cm-design-system)
- [Quick Start](#quick-start)
  - [Technical Stack](#technical-stack)
- [Contributing](#contributing)
  - [Pull Request Process](#pull-request-process)
  - [Commit Messages](#commit-messages)
    - [Development Workflow](#development-workflow)
      - [TLWR](#tlwr)
      - [Format Code](#format-code)
      - [Lint Code](#lint-code)
      - [Type Check](#type-check)
      - [Run Tests](#run-tests)
      - [Build](#build)
  - [Code Style](#code-style)
    - [Prettier Configuration](#prettier-configuration)
    - [ESLint Configuration](#eslint-configuration)
  - [Continuous Integration](#continuous-integration)
    - [Why No Pre-commit Hooks?](#why-no-pre-commit-hooks)
    - [Types:](#types)
  - [Icon Generation](#icon-generation)
    - [Optimize SVGs](#optimize-svgs)
    - [Config (`svg.config.json`)](#config-svgconfigjson)
    - [Generate](#generate)
    - [Usage](#usage)
  - [Visual Testing](#visual-testing)
    - [Setup](#setup)
    - [Running Tests](#running-tests)
    - [Updating Snapshots](#updating-snapshots)
    - [Viewing Test Reports](#viewing-test-reports)
      - [GitHub Artifacts](#github-artifacts)
    - [Storybook Configuration Note](#storybook-configuration-note)

<!-- /code_chunk_output -->

# Quick Start

```bash
# Install dependencies
npm install

# Start development
npm run storybook        # Start Storybook on port 6006
```

## Technical Stack

This project uses:

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **Storybook** for component documentation
- **Vitest** for testing
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) for Fast Refresh
- [Radix UI Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction) as Component Libarary to help with Accessibility

# Contributing

## Pull Request Process

1. Edit code in feature branch
1. Create a new branch: `git checkout -b feature/initials/your-feature-name`
1. Ensure your code passes all quality checks locally:

   ```bash
   npm run preflight
   ```

1. Choose Commit Message wisely :-). See next Chapter [Commit Messages](#commit-messages)
1. Push your changes to your feature branch (`feature/<mm or ci>/<description>`)
1. Create a pull request to the `main` branch
1. Wait for CI checks to pass
1. Request review from Matej / Carla
1. Address any feedback
1. Merge PR

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) for automated versioning and changelog generation:

```
feat: add new Button variant
fix: correct Typography component spacing
docs: update README with new examples
chore: update dependencies
style: format code with prettier
refactor: simplify Icon component logic
test: add tests for TextLink component
```

### Development Workflow

Before committing your changes, ensure your code meets our quality standards:

#### TLWR

```bash
npm run preflight        # does everything
```

#### Format Code

```bash
npm run format           # Auto-format all files with Prettier
npm run format:check     # Check formatting without making changes
```

#### Lint Code

```bash
npm run lint             # Check for linting errors
npm run lint:fix         # Auto-fix linting errors where possible
```

#### Type Check

```bash
npx tsc -b --noEmit      # Run TypeScript type checking
```

#### Run Tests

```bash
npm test                 # Run tests with Vitest
```

#### Build

```bash
npm run build            # Build the project
npm run build-storybook  # Build Storybook for production
```

## Code Style

We use automated tools to enforce consistent code style:

- **Prettier** for code formatting (with Tailwind class sorting)
- **ESLint** for code linting and best practices
- **TypeScript** for type checking

### Prettier Configuration

Our Prettier configuration (`.prettierrc`):

- Semi-colons: Yes
- Single quotes: No (use double quotes)
- Tab width: 2 spaces
- Trailing commas: ES5
- Print width: 80 characters
- Arrow parens: Always
- End of line: LF
- Plugins: Tailwind CSS class sorting

### ESLint Configuration

We use:

- ESLint recommended rules
- TypeScript ESLint rules
- React best practices
- React Hooks rules
- React Refresh rules
- JSX Accessibility (a11y) rules
- Import sorting and organization
- Unused imports detection
- Storybook rules
- Prettier integration (no conflicting rules)

## Continuous Integration

All pull requests must pass our CI checks:

1. **Format & Lint**: Code must be properly formatted and pass linting
2. **Type Check**: No TypeScript errors
3. **Build**: Project must build successfully
4. **Tests**: All tests must pass
5. **Build Storybook**: Storybook must build successfully

The CI pipeline runs automatically on:

- Pull requests to `main`
- Pushes to `main`

### Why No Pre-commit Hooks?

We've chosen not to use pre-commit hooks (like Husky) because:

- Quality checks happen in CI where they can't be bypassed
- Faster local development workflow
- CI provides the single source of truth for code quality

You're still encouraged to run quality checks locally before pushing!

### Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `chore`: Maintenance tasks
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring without feature changes
- `test`: Adding or updating tests
- `perf`: Performance improvements

---

## Icon Generation

Raw SVG files live in `src/components/icons/svg` and are converted into React components that wrap their inner markup with `IconBase`. Accessibility is handled inside `IconBase` (it already uses Radix `AccessibleIcon`), so no extra wrapper is generated.

### Optimize SVGs

To reduce file size and remove metadata:

```
npx svgo -f src/components/icons/svg
```

### Config (`svg.config.json`)

```jsonc
{
  "sourceDir": "src/components/icons/svg", // Source .svg files
  "outputDir": "src/components/icons/generated", // Destination for generated components
  "baseComponentImport": { "name": "IconBase", "path": "../IconBase" },
}
```

### Generate

```bash
npm run icons:generate
```

Generation steps:

1. Cleans the output directory.
2. Converts file names to PascalCase (`log-out.svg` -> `LogOut`).
3. Normalizes fills `#475569` → `currentColor` for theming.
4. Wraps inner `<path/>` / `<g/>` / etc. in `<IconBase label="Name" />`.
5. Produces a barrel `index.ts` exporting all icons.

### Usage

```tsx
import { Calendar, LogOut } from "src/components/icons/generated";

export function Example() {
  return (
    <div className="flex gap-2 text-slate-600">
      <Calendar aria-hidden />
      <LogOut className="text-red-600" />
    </div>
  );
}
```

Add or modify SVGs, then re-run the generation script to refresh components.

## Visual Testing

We use **Playwright** to perform visual regression testing against **Storybook**.
To ensure consistent and reliable results across environments, these tests are executed within a Docker container, removing any dependency on the host operating system.

### Setup

Before running the tests, you need to build the Docker image.
A [Dockerfile](Dockerfile) is provided at the project root for this purpose.
You can build the image using the following command:

```bash
npm run e2e:build
```

### Running Tests

Once the Docker image has been built, you can execute the visual regression tests using:

```bash
npm run e2e:test
```

### Updating Snapshots

If new or updated screenshots need to be added to the baseline, run:

```bash
npm run e2e:update
```

This will update the visual snapshots used for comparison in future test runs.

### Viewing Test Reports

All relevant Playwright paths are mapped to the container, allowing reports to be viewed from outside the container.
To open the HTML report locally, use:

```bash
npx playwright show-report
```

#### GitHub Artifacts

Playwright reports are uploaded as artifacts of the CI pipeline, enabling post-run analysis of end-to-end tests.
You can download and extract the artifact locally, then view it with:

```bash
npx playwright show-report <path/to/playwright-report-folder>
```

### Storybook Configuration Note

By default, Storybook only accepts connections from localhost.
Since the Playwright tests run inside a Docker container, we must explicitly allow connections from `host.docker.internal`.

This configuration has been added to [main.ts](./.storybook/main.ts):

```ts
viteFinal: async (config) => {
  return mergeConfig(config, { server: { allowedHosts: true } });
},
```

This ensures Storybook is accessible from within the Docker environment during test execution.
