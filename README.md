# CM Design System

A modern React component library built with TypeScript, Tailwind CSS, and Storybook.

## Table of Contents

- [Quick Start](#quick-start)
- [Technical Stack](#technical-stack)
- [Development](#development)
  - [Quality Checks](#quality-checks)
  - [Code Style](#code-style)
- [Icon Generation](#icon-generation)
- [Visual Testing](#visual-testing)
- [Contributing](#contributing)
  - [Pull Request Process](#pull-request-process)
  - [Commit Messages](#commit-messages)
- [Continuous Integration](#continuous-integration)

## Quick Start

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006)

**📚 View the deployed Storybook:** [https://ost-cas-fea-25-26.github.io/cm-designsystem/](https://ost-cas-fea-25-26.github.io/cm-designsystem/?path=/docs/branding-assets--docs)

## Technical Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **Storybook** for component documentation
- **Vitest** for unit testing
- **Playwright** for visual regression testing
- **Radix UI Primitives** for accessible component primitives
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) for Fast Refresh

---

## Development

### Quality Checks

Run all quality checks before committing:

```bash
npm run preflight        # Runs format, lint, type-check, test, and build
```

Individual commands:

```bash
# Formatting
npm run format           # Auto-format all files with Prettier
npm run format:check     # Check formatting without making changes

# Linting
npm run lint             # Check for linting errors
npm run lint:fix         # Auto-fix linting errors where possible

# Type Checking
npx tsc -b --noEmit      # Run TypeScript type checking

# Testing
npm test                 # Run unit tests with Vitest

# Building
npm run build            # Build the project
npm run build-storybook  # Build Storybook for production
```

### Code Style

We enforce consistent code style using automated tools:

**Prettier Configuration:**
- Uses double quotes
- 2-space indentation
- Semicolons required
- Line width: 80 characters
- Includes Tailwind CSS class sorting plugin

**ESLint Configuration:**
- TypeScript ESLint rules
- React and React Hooks best practices
- JSX Accessibility (a11y) rules
- Import sorting and organization
- Storybook rules
- Prettier integration (no conflicts)

### TypeScript Guidelines

We follow a consistent pattern for component type definitions:

**Standard Component Pattern:**

```tsx
import { tv, type VariantProps } from "tailwind-variants";

// 1. Define styles with tailwind-variants
const buttonStyles = tv({
  variants: {
    intent: {
      primary: ["bg-slate-600"],
      secondary: ["bg-violet-600"],
    },
    size: {
      md: ["pt-3", "pb-3"],
      lg: ["pt-4", "pb-4"],
    },
  },
});

// 2. Extract variant types from styles
type ButtonVariants = VariantProps<typeof buttonStyles>;

// 3. Define specific union types for variant options
type ButtonIntent = "primary" | "secondary";
type ButtonSize = "md" | "lg";

// 4. Create component props interface extending variants
interface ButtonProps extends ButtonVariants {
  label: string;
  onClick: () => void;
  className?: string;
}
```

**When to use `type` vs `interface`:**

- **`type`**: For VariantProps, union types, and type aliases
- **`interface`**: For component props (always extends variants)
- **`export`**: Export interfaces for public component APIs

**Best Practices:**
- Always extend `VariantProps` for styled components
- Define union types for variant options to ensure type safety
- Export prop interfaces for components
- Use strict TypeScript (enabled by default)


### Project Structure

Components and their Storybook stories are co-located in the same folder for better organization:

```
src/components/
├── button/
│   ├── Button.tsx           # Component implementation
│   ├── Button.stories.tsx   # Storybook stories
│   └── Button.test.tsx      # Unit tests (if applicable)
├── avatar/
│   ├── Avatar.tsx
│   └── Avatar.stories.tsx
└── ...
```

**Benefits of co-location:**
- ✅ Related files stay together
- ✅ Easier to find and maintain stories
- ✅ Clear 1:1 relationship between components and documentation
- ✅ Stories serve as living documentation and examples

**Story file naming:** Always use `ComponentName.stories.tsx` format for Storybook to auto-discover them.

---

## Icon Generation

SVG icons are automatically converted to React components with proper accessibility support.

### Workflow

1. **Add SVG files** to `src/components/icons/svg/`
2. **Optimize SVGs** (optional but recommended):
   ```bash
   npx svgo -f src/components/icons/svg
   ```
3. **Generate React components**:
   ```bash
   npm run icons:generate
   ```

### Configuration

Edit `svg.config.json` to customize the generation process:

```json
{
  "sourceDir": "src/components/icons/svg",
  "outputDir": "src/components/icons/generated",
  "baseComponentImport": {
    "name": "IconBase",
    "path": "../IconBase"
  }
}
```

### Usage Example

```tsx
import { Calendar, LogOut } from "src/components/icons/generated";

export function Example() {
  return (
    <div className="flex gap-2 text-slate-600">
      <Calendar />
      <LogOut className="text-red-600" />
    </div>
  );
}
```

**How it works:**
- File names are converted to PascalCase (`log-out.svg` → `LogOut`)
- Fill colors are normalized to `currentColor` for theming
- All icons are wrapped in `IconBase` for accessibility
- A barrel export (`index.ts`) is generated automatically

---

## Visual Testing

We use **Playwright** for visual regression testing against Storybook. Tests run in Docker for consistent results across environments.

### Setup

Build the Docker image (first time only):

```bash
npm run e2e:build
```

### Running Tests

```bash
npm run e2e:test         # Run visual regression tests
npm run e2e:update       # Update baseline snapshots
```

### Viewing Reports

View test reports locally:

```bash
npx playwright show-report
```

**GitHub Artifacts:**
Test reports are uploaded as CI artifacts. Download and view them with:

```bash
npx playwright show-report <path/to/extracted-artifact>
```

### Configuration Notes

- Tests run inside Docker to ensure consistency
- Storybook is configured to accept connections from Docker (`host.docker.internal`)
- Playwright config includes `maxDiffPixelRatio: 0.01` (1% tolerance)
- Configuration in `playwright.config.ts` and `.storybook/main.ts`

---

## Contributing

### Pull Request Process

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/initials/your-feature-name
   ```
   Use format: `feature/<mm or ci>/<description>`

2. **Make your changes and ensure quality:**
   ```bash
   npm run preflight
   ```

3. **Commit with conventional commits** (see below)

4. **Push to your feature branch:**
   ```bash
   git push origin feature/initials/your-feature-name
   ```

5. **Create a pull request to `main`**

6. **Wait for CI checks to pass**

7. **Request review from team members**

8. **Address feedback and merge**

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) for consistent versioning and changelog generation.

**Format:**
```
<type>: <description>

[optional body]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style/formatting (no logic change)
- `refactor`: Code refactoring (no feature/bug change)
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, config, etc.)
- `perf`: Performance improvements

**Examples:**
```
feat: add new Button variant
fix: correct Typography component spacing
docs: update README with visual testing guide
chore: update dependencies
test: add tests for TextLink component
```

---

## Continuous Integration

All pull requests are automatically validated through our CI pipeline.

### Required Checks

1. ✅ **Format & Lint** - Code must be properly formatted and pass linting
2. ✅ **Type Check** - No TypeScript errors
3. ✅ **Tests** - All unit tests must pass
4. ✅ **Build** - Project must build successfully
5. ✅ **Build Storybook** - Storybook must build successfully
6. ✅ **Visual Tests** - Playwright visual regression tests must pass

### Pipeline Triggers

- Pull requests to `main`
- Pushes to `main`

### Why No Pre-commit Hooks?

We intentionally don't use pre-commit hooks (like Husky):
- ✅ Quality checks in CI can't be bypassed
- ✅ Faster local development workflow
- ✅ CI is the single source of truth

**Note:** You're encouraged to run `npm run preflight` locally before pushing!
