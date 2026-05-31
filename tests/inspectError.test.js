import {
    inspectError,
} from "../index.js";

const report =
    inspectError(
        "Cannot read properties of undefined",
    );

console.assert(
    report.code ===
    "NULL_001",
);

console.assert(
    report.issue ===
    "Undefined Property Access",
);

console.assert(
    report.confidence ===
    "High",
);

console.log(
    "inspectError.test.js passed",
);
