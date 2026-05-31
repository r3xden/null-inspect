/**
 * null-inspect
 * Error Analyzer
 */

import ErrorRegistry from "../registries/ErrorRegistry.js";

import InspectionReport from "../models/InspectionReport.js";

import Severity from "../constants/Severity.js";
import Confidence from "../constants/Confidence.js";

export default class ErrorAnalyzer {

    static analyze(
        input,
    ) {

        const message =
            String(
                input,
            );

        const match =
            ErrorRegistry.find(
                entry =>

                    entry.patterns.some(
                        pattern =>

                            message.includes(
                                pattern,
                            ),
                    ),
            );

        if (
            match
        ) {

            return new InspectionReport({

                code:
                    match.code,

                category:
                    match.category,

                message,

                issue:
                    match.issue,

                cause:
                    match.cause,

                fix:
                    match.fix,

                severity:
                    match.severity,

                confidence:
                    match.confidence,

            });

        }

        return new InspectionReport({

            code:
                "NULL_UNKNOWN",

            category:
                "Unknown",

            message,

            issue:
                "Unknown Error Pattern",

            cause:
                "No registry match found.",

            fix:
                "Manual inspection required.",

            severity:
                Severity.LOW,

            confidence:
                Confidence.LOW,

        });

    }

          }
