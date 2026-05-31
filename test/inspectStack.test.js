import {
    inspectStack,
} from "../index.js";

const report =
    inspectStack(

        `TypeError
        at getUser (/src/user.js:42:17)`,

    );

console.assert(
    report.location.file ===
    "/src/user.js",
);

console.assert(
    report.location.line ===
    42,
);

console.assert(
    report.location.column ===
    17,
);

console.log(
    "inspectStack.test.js passed",
);
