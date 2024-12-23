---
authors: ratogbm
title: Theory about Writing Good Manpages
---

There are 3 types of doc users:

| Type | Description | Prefered Docs |
| - | - | - |
| Learning | Want to know what it does and how to use it. | Tutorial |
| Dedicated | Looking for details of something specific. | List |
| Lookup | Know how to use the tool, but don't remember the exact syntax. | Examples, API reference |

<!-- truncate -->

The learning people hate dedicated and lookup for assuming everyone roughly knows how to use the tool.

The dedicated people hate the learning and lookup for not properly explaining how everything works under the hood.

The lookup people hate learning and dedicated for excessively long docs.

Taking wikipedia as an example: the beginners get screwed. The dedicated get plenty to read, while to lookups have that table on the side that lists all the dates and affiliations.

Now take java docs. The lookup know what they are doing and just want the API names and syntax. The dedicated get only one line of description. The beginner has no clue what's going on.

As for a Geeks for Greeks tutorial: the beginner gets everything he needs, the dedicated is happy with the detailed descriptions, the lookup is annoyed by scrolling far to scan for the function name and syntax.
