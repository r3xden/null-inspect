/**
 * null-inspect
 * Log Inspector
 */

import LogAnalyzer from "../analyzers/LogAnalyzer.js";

export default function inspectLogs(
    logs,
) {

    return LogAnalyzer.analyze(
        logs,
    );

}
