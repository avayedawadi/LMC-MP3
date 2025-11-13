---
title: "Examples: Good vs Bad"
description: "Concrete examples of good and bad technical communication."
keywords: ["examples", "good", "bad", "pr", "spec"]
---

# Examples: Good vs Bad

Seeing examples is the fastest way to understand expectations.

## Pull Request Description

### ❌ Bad Example

```text
fixed the bug
```

### ✅ Good Example

```text
## What changed?
Fixed a bug where clicking "Submit" did nothing when required fields were empty.

## Why?
Users were submitting incomplete forms, causing confusing errors on the backend.

## How to test?
1. Go to /signup
2. Leave required fields empty
3. Click "Submit"
4. You should now see an error message instead of nothing happening.
```

## Spec Writing

### ❌ Bad Example

The user creates an event and it works.

### ✅ Good Example

```markdown
## Summary
Users can create events with a name, date, and volunteer capacity.

## Acceptance Criteria
- User can specify name, date, and capacity
- Form validates missing required fields
- On success, user is redirected to the event details page

## Nonprofit Notes
They want capacity to be optional at launch.
```
