Task 1: Create your documentation structure

From the terminal:

mkdir -p docs/learning-log
mkdir -p docs/concepts
mkdir -p docs/architecture

*note to self*: `-p` is an alias for `--parents`. I can find out more about this by looking at the `man` pages with `man mkdir`. `mkdir is a unix command built in.

Verify:

tree

If tree isn't installed:

sudo apt install tree
Task 2: Create the first learning log
touch docs/learning-log/001-project-setup.md

Document what you've already learned.

Not a tutorial.

Your experience.

Something like:

# Project Setup

## Goal

Create a GitHub repository and work entirely from WSL.

## Commands Learned

git init
git add
git commit
git push

touch
mkdir
mv

## Questions

What is npm?
What is npx?
What is package-lock.json?

The questions section is gold.

Most people never write down their confusion.

Task 3: Create a README that acts as navigation

Don't make it pretty.

Make it useful.

# Playwright Assignment

## Assignment

- ASSIGNMENT.md

## Learning Log

- 001 Project Setup

## Concepts

## Architecture

You'll improve it later.

Task 4: Create a .gitignore

Even before Playwright.

touch .gitignore

Put in:

node_modules/
playwright-report/
test-results/

You don't need them yet.

You will soon.

Task 5: Commit this structure
git add .
git commit -m "Create documentation structure"
git push

This commit represents:

Before I learned Playwright, I created a place to store knowledge.

Then

Only after that would I move on to:

npm init -y

Not because you need a package yet.

Because that's the moment your repository stops being:

Git project

and becomes:

Node project

And that's where the next round of learning starts.

If I were sequencing this as a curriculum, I'd want your next few commits to look something like:

Create documentation structure
Add project README
Initialize Node project
Document package.json
Install Playwright
Document npx
Run first Playwright test

Notice that every technical action is paired with a documentation action.

That is what turns a side project into a knowledge base instead of a pile of code.