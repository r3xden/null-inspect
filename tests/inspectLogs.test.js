import {
    inspectLogs,
} from "../index.js";

const report =
    inspectLogs([

        "Error",
        "Error",
        "Error",

    ]);

console.assert(
    report.code ===
    "LOG_001",
);

console.log(
    "inspectLogs.test.js passed",
);
