/**
 * null-inspect
 * Error Registry
 */

import Severity from "../constants/Severity.js";
import Confidence from "../constants/Confidence.js";

const ErrorRegistry = [

    {

        code:
            "NULL_001",

        category:
            "TypeError",

        patterns: [

            "Cannot read properties of undefined",

        ],

        issue:
            "Undefined Property Access",

        cause:
            "Object is undefined before property access.",

        fix:
            "Validate the object before accessing properties.",

        severity:
            Severity.MEDIUM,

        confidence:
            Confidence.HIGH,

    },

    {

        code:
            "NULL_002",

        category:
            "TypeError",

        patterns: [

            "Cannot read properties of null",

        ],

        issue:
            "Null Property Access",

        cause:
            "Object is null before property access.",

        fix:
            "Check for null before accessing properties.",

        severity:
            Severity.MEDIUM,

        confidence:
            Confidence.HIGH,

    },

    {

        code:
            "NULL_003",

        category:
            "TypeError",

        patterns: [

            "is not a function",

        ],

        issue:
            "Not A Function",

        cause:
            "A non-function value is being called.",

        fix:
            "Verify the value is a function before invoking it.",

        severity:
            Severity.MEDIUM,

        confidence:
            Confidence.HIGH,

    },

    {

        code:
            "NULL_004",

        category:
            "ReferenceError",

        patterns: [

            "is not defined",

        ],

        issue:
            "Undefined Variable",

        cause:
            "Variable is referenced before declaration.",

        fix:
            "Declare or import the variable before usage.",

        severity:
            Severity.HIGH,

        confidence:
            Confidence.HIGH,

    },

    {

        code:
            "NULL_005",

        category:
            "ModuleError",

        patterns: [

            "MODULE_NOT_FOUND",

            "ERR_MODULE_NOT_FOUND",

        ],

        issue:
            "Module Not Found",

        cause:
            "Module cannot be resolved.",

        fix:
            "Verify module installation and import path.",

        severity:
            Severity.HIGH,

        confidence:
            Confidence.HIGH,

    },

    {

        code:
            "NULL_006",

        category:
            "ModuleError",

        patterns: [

            "ERR_REQUIRE_ESM",

        ],

        issue:
            "ESM CommonJS Conflict",

        cause:
            "ES module is being loaded with CommonJS syntax.",

        fix:
            "Use import statements or update project configuration.",

        severity:
            Severity.MEDIUM,

        confidence:
            Confidence.HIGH,

    },

    {

        code:
            "NULL_007",

        category:
            "PromiseError",

        patterns: [

            "UnhandledPromiseRejection",

        ],

        issue:
            "Unhandled Promise Rejection",

        cause:
            "Promise rejected without a catch handler.",

        fix:
            "Handle rejections using catch() or try/catch.",

        severity:
            Severity.HIGH,

        confidence:
            Confidence.HIGH,

    },

    {

        code:
            "NULL_008",

        category:
            "SyntaxError",

        patterns: [

            "SyntaxError",

        ],

        issue:
            "Invalid JavaScript Syntax",

        cause:
            "Code contains invalid syntax.",

        fix:
            "Review syntax near the reported location.",

        severity:
            Severity.CRITICAL,

        confidence:
            Confidence.HIGH,

    },

    {

        code:
            "NULL_009",

        category:
            "JSONError",

        patterns: [

            "Unexpected token",

            "Unexpected end of JSON input",

        ],

        issue:
            "Invalid JSON",

        cause:
            "Malformed JSON structure.",

        fix:
            "Validate JSON formatting before parsing.",

        severity:
            Severity.MEDIUM,

            confidence:
            Confidence.HIGH,

    },

    {

        code:
            "NULL_010",

        category:
            "RangeError",

        patterns: [

            "Maximum call stack size exceeded",

        ],

        issue:
            "Maximum Call Stack Exceeded",

        cause:
            "Infinite recursion or excessive nesting.",

        fix:
            "Review recursive logic and add termination conditions.",

        severity:
            Severity.CRITICAL,

        confidence:
            Confidence.HIGH,

    },

];

export default ErrorRegistry;
