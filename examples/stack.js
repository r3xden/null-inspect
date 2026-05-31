import {
    inspectStack,
} from "../index.js";

const report =
    inspectStack(

        `TypeError:
         at getUser (/src/user.js:42:17)`,

    );

console.log(
    report,
);
