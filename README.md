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

- Pull requests to `main` or `develop`
- Pushes to `main` or `develop`

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
