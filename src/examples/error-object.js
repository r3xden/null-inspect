import {
    inspectError,
} from "../index.js";

const report =
    inspectError(

        new TypeError(
            "Cannot read properties of undefined",
        ),

    );

console.log(
    report,
);
