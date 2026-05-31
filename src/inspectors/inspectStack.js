/**
 * null-inspect
 * Stack Inspector
 */

import StackAnalyzer from "../analyzers/StackAnalyzer.js";

export default function inspectStack(
    stack,
) {

    return StackAnalyzer.analyze(
        stack,
    );

}
