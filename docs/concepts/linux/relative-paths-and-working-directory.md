# Relative Paths and Current Working Directory

## Question

Does it matter where I run commands?

## Answer

Yes.

Most file paths are relative to the current working directory.

Check the current working directory:

```bash
pwd
```

Example:

```text
/home/sintu/projects/sintu-playwright-assignment
```

When running:

```bash
mkdir -p docs/concepts/git
```

the path is interpreted relative to the current working directory.

Running the same command from a different directory may create files in a different location.

## Useful Commands

Create parent directories if needed:

```bash
mkdir -p docs/concepts/git
```

Move a file:

```bash
mv old.md docs/concepts/git/
```

Create a file:

```bash
touch docs/concepts/git/new-note.md
```

Create directory and file:

```bash
mkdir -p docs/concepts/git \
&& touch docs/concepts/git/new-note.md
```

## Mental Model

Every process has a current working directory.

Relative paths start from that directory.

Use `pwd` when unsure where a command will operate.