import {
    inspectError,
} from "../index.js";

const report =
    inspectError(
        "Cannot read properties of undefined",
    );

console.log(
    report,
);
