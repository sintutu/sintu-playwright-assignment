# Conventional Commits

## Quick Commands

Check what will be committed:

```bash
git status
```

Stage all changes:

```bash
git add .
```

Create a commit using the Conventional Commits format:

```bash
git commit -m "docs: add environment setup notes"
```

Push to GitHub:

```bash
git push
```

View commit history:

```bash
git log --oneline
```

---

## What Are Conventional Commits?

Conventional Commits are a naming convention for commit messages.

Instead of:

```text
updated stuff
changes
fixed things
```

use:

```text
docs: add linux command types notes
feat: add invoice creation workflow
fix: correct invoice total assertion
```

This makes the Git history readable and enables future automation such as release notes and semantic versioning.

---

## Format

```text
<type>: <description>
```

Examples:

```text
docs: add linux command types notes
feat: add login page object
fix: correct broken locator
refactor: simplify invoice page model
```

---

## Common Types

### feat

A new feature.

```text
feat: add invoice creation workflow
```

### fix

A bug fix.

```text
fix: correct invoice total calculation
```

### docs

Documentation only.

```text
docs: explain mkdir -p flag
```

### test

Adding or changing tests.

```text
test: add invoice validation assertions
```

### refactor

Code restructuring without changing behaviour.

```text
refactor: extract invoice form component
```

### chore

Maintenance work.

```text
chore: initialize npm project
chore: update dependencies
```

### ci

Continuous Integration changes.

```text
ci: add github actions workflow
```

---

## Why Use Conventional Commits?

Benefits:

- Easier to understand project history
- Easier to review changes
- Easier to generate release notes
- Works well with Semantic Versioning tools
- Creates a professional Git history

Compare:

```text
stuff
more stuff
fixes
```

versus

```text
docs: explain mkdir -p flag
docs: add linux command types notes
chore: create documentation structure
```

The second history tells a story.

---

## Personal Rule For This Repository

Use the following commit types:

- feat
- fix
- docs
- test
- refactor
- chore
- ci

If unsure:

- Documentation → docs
- Infrastructure/setup → chore
- GitHub Actions → ci
- Playwright tests → test
- New functionality → feat

---

## Example Session

```bash
git add .

git commit -m "docs: add linux command types notes"

git push
```