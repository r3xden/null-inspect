# null-inspect

Inspect errors, logs, and stack traces with clear explanations, likely causes, and practical fixes.

`null-inspect` is a lightweight JavaScript and TypeScript inspection toolkit designed to help developers understand what went wrong, why it happened, where it happened, and how to fix it.

Unlike AI-powered tools, null-inspect performs deterministic inspection using built-in analysis rules and structured reports.

---

## Features

- Inspect JavaScript and TypeScript errors
- Analyze stack traces
- Detect common log patterns
- Structured inspection reports
- Root-cause descriptions
- Actionable fix suggestions
- Severity levels
- Confidence scores
- Error location extraction
- Zero setup
- No AI
- No API keys
- No external services

---

## Installation

```bash
npm install null-inspect
```

---

## Quick Start

```js
import {
    inspectError,
} from "null-inspect";

const report =
    inspectError(
        "Cannot read properties of undefined",
    );

console.log(report);
```

---

## API

### inspectError()

Inspect JavaScript and TypeScript errors.

#### Syntax

```js
inspectError(error);
```

#### Accepted Inputs

```txt
String
Error
```

#### Example

```js
import {
    inspectError,
} from "null-inspect";

const report =
    inspectError(
        new TypeError(
            "Cannot read properties of undefined",
        ),
    );
```

---

### inspectStack()

Inspect stack traces and extract location information.

#### Syntax

```js
inspectStack(stackTrace);
```

#### Accepted Inputs

```txt
String
```

#### Example

```js
import {
    inspectStack,
} from "null-inspect";

const report =
    inspectStack(`
TypeError
at getUser (/src/user.js:42:17)
`);
```

---

### inspectLogs()

Inspect logs and detect common patterns.

#### Syntax

```js
inspectLogs(logs);
```

#### Accepted Inputs

```txt
String
String[]
```

#### Example

```js
import {
    inspectLogs,
} from "null-inspect";

const report =
    inspectLogs([
        "Error",
        "Error",
        "Error",
    ]);
```

---

## Inspection Report

Every public inspector returns an `InspectionReport`.

```js
{
    code,
    category,
    message,

    issue,
    cause,
    fix,

    location: {
        file,
        line,
        column,
    },

    severity,
    confidence,
}
```

### Example Report

```js
{
    code: "NULL_001",
    category: "TypeError",
    message: "Cannot read properties of undefined",

    issue: "Undefined Property Access",

    cause:
        "Object is undefined before property access.",

    fix:
        "Validate the object before accessing properties.",

    location: {
        file: null,
        line: null,
        column: null,
    },

    severity: "Medium",
    confidence: "High",
}
```

---

## Severity Levels

```txt
Info
Low
Medium
High
Critical
```

---

## Confidence Levels

```txt
Low
Medium
High
```

---

## Supported Error Codes

| Code | Issue |
|------|--------|
| NULL_001 | Undefined Property Access |
| NULL_002 | Null Property Access |
| NULL_003 | Not A Function |
| NULL_004 | Undefined Variable |
| NULL_005 | Module Not Found |
| NULL_006 | ESM CommonJS Conflict |
| NULL_007 | Unhandled Promise Rejection |
| NULL_008 | Invalid JavaScript Syntax |
| NULL_009 | Invalid JSON |
| NULL_010 | Maximum Call Stack Exceeded |

---

## Supported Log Codes

| Code | Issue |
|------|--------|
| LOG_001 | Repeated Error Pattern |
| LOG_002 | Connection Instability |
| LOG_003 | Restart Loop |
| LOG_004 | Excessive Warnings |
| LOG_005 | Unhandled Error Flood |

---

## Examples

The repository includes examples inside:

```txt
examples/
```

Available examples:

```txt
error.js
error-object.js
stack.js
logs-array.js
logs-string.js
```

---

## Philosophy

null-inspect follows a simple principle:

```txt
What happened?
Why did it happen?
Where did it happen?
How do I fix it?
```

The package focuses on delivering direct answers through structured inspection reports.

```txt
No AI.
No cloud services.
No API keys.
Just inspection.
```

---

## Contributing

Contributions, bug reports, and suggestions are welcome.

If you discover a missing error pattern or an incorrect analysis result, feel free to open an issue or submit a pull request.

---

## Support

Need help, want to report a bug, or discuss improvements?

### Discord Server

https://discord.gg/jUUSSE7YyY

### Owner

Username:

```txt
@rexden
```

User ID:

```txt
1140888457837822044
```

---

## Roadmap

### v0.1.0

- inspectError()
- inspectStack()
- inspectLogs()
- NULL_001 → NULL_010
- LOG_001 → LOG_005

### Future

- More registry entries
- Better stack trace parsing
- More log pattern detection
- Expanded TypeScript coverage

---

## License

MIT
