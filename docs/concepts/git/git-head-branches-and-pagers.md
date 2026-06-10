# Git Log, HEAD, Branches and Pagers

## Question

What did `git log --graph --decorate --oneline --all` show me, and why did it open something that looked like an editor?

## The Output

```text
* b72a6ea (HEAD -> boilerplate, origin/boilerplate)
  docs: add environment setup notes

* 3753a69 (origin/main, main)
  Add assignment instructions
```

This shows a simple commit graph containing two commits.

```text
3753a69
│
└── b72a6ea
```

The newer commit is a child of the older commit.

## Commits Form a Graph

Git history is not a list.

Git history is a Directed Acyclic Graph (DAG).

Each commit stores a reference to its parent commit.

```text
3753a69
  ▲
  │ parent
  │
b72a6ea
```

The arrows conceptually point backwards into history.

## Branches Are Labels

A branch does not contain commits.

A branch points to a commit.

For example:

```text
main
 ↓
3753a69
```

means the branch named `main` points at commit `3753a69`.

When a new commit is created while on a branch, the branch moves forward to the new commit.

## What Is HEAD?

HEAD represents the currently checked out branch or commit.

In my repository:

```text
HEAD
 ↓
boilerplate
 ↓
b72a6ea
```

This means:

- I am currently on the `boilerplate` branch.
- New commits will be added to `boilerplate`.

## Local and Remote Branches

Git tracks both local and remote branch references.

Example:

```text
main
 ↓
3753a69
 ↑
origin/main
```

Both names point to the same commit.

This means:

- My local `main` branch is at commit `3753a69`.
- GitHub's `main` branch is also at commit `3753a69`.

Similarly:

```text
boilerplate
 ↓
b72a6ea
 ↑
origin/boilerplate
```

Both local and remote boilerplate branches point at the same commit.

## Why Did `git switch -c boilerplate` Not Create a Commit?

The command:

```bash
git switch -c boilerplate
```

creates a new branch.

It does not create a commit.

Before:

```text
main
 ↓
A
```

After:

```text
main
 ↓
A
 ↑
boilerplate
```

Both branches point to the same commit.

Only a later `git commit` creates a new commit.

## Why Did The Output Open In Another Program?

The command did not open an editor.

It opened a pager.

Most likely:

```text
less
```

A pager allows scrolling through output that may not fit on one screen.

Common pagers:

- less
- more

Common editors:

- vim
- nano
- emacs
- code

Editors modify files.

Pagers display output.

## How Git Uses Less

The command chain is approximately:

```text
Shell
  ↓
Git
  ↓
less
```

Git generates output.

Git launches `less`.

`less` displays the output.

When I press:

```text
q
```

the pager exits and control returns to the shell.

## Clues That The Program Was Less

The display showed:

```text
~
~
~
(END)
```

These are common indicators that the output is being displayed by `less`.

## Useful Commands

View commit graph:

```bash
git log --graph --decorate --oneline --all
```

View commit graph without launching a pager:

```bash
git --no-pager log --graph --decorate --oneline --all
```

Determine what a command is:

```bash
type git
type cd
type mkdir
```

Determine where an executable lives:

```bash
which git
which mkdir
```

## Mental Model

```text
User
  ↓
Terminal
  ↓
Shell (bash)
  ↓
Git
  ↓
less
```

The terminal provides a window.

The shell interprets commands.

Git generates output.

Less displays the output.