/**
 * null-inspect
 * Error Inspector
 */

import ErrorAnalyzer from "../analyzers/ErrorAnalyzer.js";

export default function inspectError(
    error,
) {

    return ErrorAnalyzer.analyze(
        error,
    );

}
