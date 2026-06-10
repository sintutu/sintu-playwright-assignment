## mkdir -p

-p is short for --parents.

Creates parent directories if they do not already exist.

Also does not fail when the directory already exists.

Useful for scripts because it is idempotent.

Example:

mkdir -p docs/learning-log