# Learning Log - Git, Linux and Repository Structure

## Goal

Continue building the repository foundation before installing Node, TypeScript, or Playwright.

Focus on:

- Working from WSL
- Using the terminal instead of the mouse
- Learning Git fundamentals
- Building a documentation structure that supports future retrieval

---

## Commands Learned

Create nested directories:

```bash
mkdir -p docs/learning-log
```

Open a file in VS Code:

```bash
code docs/learning-log/000-environment.md
```

Read command documentation:

```bash
man mkdir
```

Inspect current Git state:

```bash
git status
```

View commit graph:

```bash
git log --graph --decorate --oneline --all
```

List tags:

```bash
git tag
```

Create an annotated tag:

```bash
git tag -a v0.1.0 -m "Initial project setup and documentation foundation"
```

Show a tag:

```bash
git show v0.1.0
```

Check current directory:

```bash
pwd
```

Determine what a command is:

```bash
type mkdir
type cd
```

Find executable location:

```bash
which mkdir
```

---

## Git Learnings

Branches are not containers of commits.

Branches are movable labels that point to commits.

Creating a branch with:

```bash
git switch -c boilerplate
```

did not create a commit.

It created a new label pointing at the current commit.

A later `git commit` created a new child commit and moved the `boilerplate` branch forward.

HEAD points to the currently checked-out branch.

In my repository:

```text
HEAD -> boilerplate
```

means new commits will be added to the boilerplate branch.

Remote branches such as:

```text
origin/main
origin/boilerplate
```

are local references to GitHub's branch positions.

---

## Git Tag Learnings

A tag is a fixed label attached to a commit.

Unlike branches, tags generally do not move.

Creating:

```bash
git tag -a v0.1.0 -m "Initial project setup and documentation foundation"
```

did not create a commit.

It only attached a new label to the current commit.

This explains why:

```bash
git status
```

reported:

```text
nothing to commit, working tree clean
```

The working tree, staging area and current commit were unchanged.

Only repository metadata changed.

---

## Linux Learnings

`mkdir -p` uses:

```text
-p = --parents
```

It creates missing parent directories and does not fail if the directory already exists.

This makes it useful in scripts and automation because it is idempotent.

Not everything entered into the terminal is the same type of thing.

Examples:

```text
cd      -> shell builtin
mkdir   -> executable program
git     -> executable program
```

The shell launches programs which in turn interact with the kernel.

---

## Pager Learnings

Running:

```bash
git log --graph --decorate --oneline --all
```

opened a pager rather than printing directly to the terminal.

The pager was most likely:

```text
less
```

A pager displays output.

It is not an editor.

Common pagers:

```text
less
more
```

Common editors:

```text
vim
nano
code
```

Pressing:

```text
q
```

exits the pager and returns control to the shell.

---

## Repository Structure Learnings

A distinction is emerging between:

```text
learning-log/
```

and

```text
concepts/
```

Learning logs answer:

```text
What happened?
What did I do today?
```

Concept notes answer:

```text
What is true?
How does this work?
```

Examples:

```text
learning-log/
└── 000-environment.md
```

versus

```text
concepts/git/git-tags.md
concepts/git/git-head-branches-and-pagers.md
concepts/linux/relative-paths-and-working-directory.md
```

The repository is becoming a knowledge base rather than a collection of code.

---

## Important Insight

The project is not primarily about Playwright.

The project is about becoming fluent in:

- Linux
- Git
- Node
- TypeScript
- Playwright

while building a searchable set of notes that explain both the commands and the concepts behind them.

The code is evidence that the learning happened.

The notes are the long-term asset.

---

## Next Session

Potential next steps:

- Reorganize concepts into git/ and linux/ directories
- Push tag v0.1.0 to GitHub
- Initialize a Node project with `npm init -y`
- Begin documenting package.json and the Node ecosystem before installing Playwright