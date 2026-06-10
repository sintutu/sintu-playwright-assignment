# Linux Command Types

## Question

What actually happens when I type a command into the terminal?

## Key Insight

Not everything that looks like a command is the same kind of thing.

Commands can be:

- Shell builtins
- Executable programs
- Aliases
- Shell functions
- Scripts

## Example: mkdir

I assumed `mkdir` might be part of Linux itself or the kernel.

It is not.

Running:

```bash
which mkdir
```

shows that it is an executable program, typically:

```text
/usr/bin/mkdir
```

When I type:

```bash
mkdir docs
```

the shell launches the `mkdir` program, which asks the kernel to create a directory.

The kernel performs the operation and returns control to the program.

## Example: cd

`cd` behaves differently.

Running:

```bash
type cd
```

shows:

```text
cd is a shell builtin
```

This means `cd` is implemented inside the shell itself rather than as a separate executable.

This is necessary because changing directory affects the shell's current working directory.

A separate program could only change its own directory, not the shell's.

## Useful Commands

Determine what a command actually is:

```bash
type <command>
```

Examples:

```bash
type mkdir
type cd
type pwd
type git
```

Find where an executable lives:

```bash
which <command>
```

Examples:

```bash
which mkdir
which git
```

Inspect a file:

```bash
file <path>
```

Example:

```bash
file /usr/bin/mkdir
```

## Mental Model

```text
User
  ↓
Shell (bash)
  ↓
Program (mkdir)
  ↓
Kernel
  ↓
Filesystem
```

The shell interprets commands.

Programs request services.

The kernel performs privileged operations.

The filesystem stores the results.