# CM Design System

A modern React component library built with TypeScript, Tailwind CSS, and Storybook.

## Quick Start

```bash
# Install dependencies
npm install

# Start development
npm run dev              # Start Vite dev server
npm run storybook        # Start Storybook on port 6006
```

## Contributing

Thank you for contributing to the CM Design System! Follow these guidelines to contribute.

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

### Development Workflow

Before committing your changes, ensure your code meets our quality standards:

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

## Pull Request Process

1. Ensure your code passes all quality checks locally:

   ```bash
   npm run format
   npm run lint
   npx tsc -b --noEmit
   npm test
   npm run build
   ```

2. Push your changes to your feature branch (`feature/<mm or ci>/<description>`)
3. Create a pull request to the `main` branch
4. Wait for CI checks to pass
5. Request review from Matej / Carla
6. Address any feedback
7. Once approved, your PR will be merged

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

## Technical Stack

This project uses:

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **Storybook** for component documentation
- **Vitest** for testing
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) for Fast Refresh

## Icon Generation

Raw SVG files live in `src/components/icons/svg` and are converted into React components that wrap their inner markup with `IconBase`. Accessibility is handled inside `IconBase` (it already uses Radix `AccessibleIcon`), so no extra wrapper is generated.

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
