# AI Skills

This directory contains project-specific AI skills following the open
[Agent Skills standard](https://agentskills.io/specification), so the same
skill files work across multiple AI coding tools (Devin, Devin CLI, Windsurf,
and other compatible agents). Skills defined here are committed to git and
shared with the whole team.

`.agents/skills/` is the recommended location per the
[Devin skills guide](https://docs.devin.ai/product-guides/skills).

## Adding a skill

Create a directory named after your skill with a `SKILL.md` file inside:

```
.agents/skills/
└── my-skill/
    └── SKILL.md
```

The directory name is the skill's identifier — users can invoke it explicitly
(e.g. `/my-skill` or `@skills:my-skill`), and the agent can also invoke it
autonomously when relevant.

## SKILL.md template

```markdown
---
name: my-skill
description: One-line summary shown in the skill list
argument-hint: '[optional arguments hint]'
allowed-tools:
  - read
  - grep
  - glob
  - exec
triggers:
  - user
  - model
---

Your prompt content goes here. Write clear, step-by-step instructions
for the agent to follow when this skill is invoked.
```

## Frontmatter reference

| Field           | Default         | Description                                               |
| --------------- | --------------- | --------------------------------------------------------- |
| `name`          | directory name  | Display name of the skill                                 |
| `description`   | none            | Short summary shown in the skill list                     |
| `argument-hint` | none            | Hint describing expected arguments (e.g. `[filename]`)    |
| `allowed-tools` | all tools       | Restrict which tools the skill can use                    |
| `triggers`      | `[user, model]` | `user` = explicit invocation, `model` = agent auto-invoke |

All frontmatter is optional — a plain markdown file with just prompt content is
a valid skill. Set `triggers: [user]` to prevent the agent from invoking a
skill on its own.

Arguments passed at invocation time are substituted into the skill body
wherever `$ARGUMENTS`, `$0`, `$1`, etc. appear.
