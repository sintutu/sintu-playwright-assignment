# Git Tags

## Question

What is a Git tag and how is it different from a branch?

## Key Insight

A tag is a permanent label attached to a specific commit.

Unlike branches, tags do not normally move.

Tags are commonly used to mark important milestones, releases, or versions.

Examples:

```text
v0.1.0
v1.0.0
v2.3.1
```

## Why Use Tags?

Tags provide stable reference points in a repository's history.

Examples:

```text
v0.1.0 - Initial project setup
v0.2.0 - Node and npm foundations
v0.3.0 - Playwright installed
v1.0.0 - Assignment completed
```

This allows a project to refer to important milestones without relying on branch names.

## Branches vs Tags

### Branch

A branch is a movable label.

Example:

```text
main
 ↓
A
```

After a new commit:

```text
main
 ↓
B
 ↑
 A
```

The branch moves forward.

### Tag

A tag is typically fixed.

Example:

```text
v0.1.0
 ↓
A
```

After a new commit:

```text
v0.1.0
 ↓
A

main
 ↓
B
```

The tag remains attached to commit A.

## What Happened When I Created My Tag?

I ran:

```bash
git tag -a v0.1.0 -m "Initial project setup and documentation foundation"
```

Git created a tag object pointing at the current commit.

Conceptually:

```text
HEAD
 ↓
boilerplate
 ↓
B
 ↑
v0.1.0
```

No files changed.

No new commit was created.

No branch moved.

Only a new label was added.

## Why Didn't git status Show The Tag?

`git status` reports on:

- Working tree changes
- Staged changes
- Relationship between HEAD and the current branch

It does not report tag creation.

Because creating a tag does not change files or commits, Git correctly reported:

```text
nothing to commit, working tree clean
```

## Useful Commands

Create an annotated tag:

```bash
git tag -a v0.1.0 -m "Initial project setup and documentation foundation"
```

List tags:

```bash
git tag
```

Inspect a tag:

```bash
git show v0.1.0
```

Push a tag to GitHub:

```bash
git push origin v0.1.0
```

Push all tags:

```bash
git push --tags
```

Delete a local tag:

```bash
git tag -d v0.1.0
```

## Annotated vs Lightweight Tags

### Lightweight Tag

```bash
git tag v0.1.0
```

Creates only a name pointing to a commit.

### Annotated Tag

```bash
git tag -a v0.1.0 -m "Initial project setup"
```

Creates a tag object containing:

- Tag name
- Author
- Timestamp
- Message

Annotated tags are generally preferred for releases and milestones.

## Semantic Versioning

A common convention is:

```text
MAJOR.MINOR.PATCH
```

Examples:

```text
0.1.0
1.0.0
1.1.0
1.1.1
```

Meaning:

```text
MAJOR = Breaking changes
MINOR = New functionality
PATCH = Bug fixes
```

For learning repositories, tags can also represent learning milestones.

## Mental Model

```text
Commit
  ▲
  │
Branch (moves)

Commit
  ▲
  │
Tag (usually fixed)
```

Branches represent current development.

Tags represent important points in history.