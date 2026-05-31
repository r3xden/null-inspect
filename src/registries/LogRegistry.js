/**
 * null-inspect
 * Log Registry
 */

import Severity from "../constants/Severity.js";
import Confidence from "../constants/Confidence.js";

const LogRegistry = [

    {

        code:
            "LOG_001",

        category:
            "LogError",

        issue:
            "Repeated Error Pattern",

        cause:
            "The same error appears multiple times in the provided logs.",

        fix:
            "Investigate the root error and prevent repeated failures.",

        severity:
            Severity.HIGH,

        confidence:
            Confidence.MEDIUM,

    },

    {

        code:
            "LOG_002",

        category:
            "ConnectionError",

        issue:
            "Connection Instability",

        cause:
            "Repeated connect and disconnect events were detected.",

        fix:
            "Check network reliability and connection handling.",

        severity:
            Severity.HIGH,

        confidence:
            Confidence.MEDIUM,

    },

    {

        code:
            "LOG_003",

        category:
            "RuntimeError",

        issue:
            "Restart Loop",

        cause:
            "The application appears to repeatedly start and crash.",

        fix:
            "Inspect startup errors and stabilize application initialization.",

        severity:
            Severity.CRITICAL,

        confidence:
            Confidence.MEDIUM,

    },

    {

        code:
            "LOG_004",

        category:
            "Warning",

        issue:
            "Excessive Warnings",

        cause:
            "A large number of warnings were detected in the logs.",

        fix:
            "Review warnings and address recurring issues.",

        severity:
            Severity.MEDIUM,

        confidence:
            Confidence.MEDIUM,

    },

    {

        code:
            "LOG_005",

        category:
            "PromiseError",

        issue:
            "Unhandled Error Flood",

        cause:
            "Multiple unhandled errors were detected.",

        fix:
            "Add proper error handling and rejection management.",

        severity:
            Severity.HIGH,

        confidence:
            Confidence.HIGH,

    },

];

export default LogRegistry;
