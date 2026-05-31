/**
 * null-inspect
 * Stack Analyzer
 */

import InspectionReport from "../models/InspectionReport.js";

import Severity from "../constants/Severity.js";
import Confidence from "../constants/Confidence.js";

export default class StackAnalyzer {

    static analyze(
        stack,
    ) {

        const content =
            String(
                stack,
            );

        const match =
            content.match(
                /\((.*?):(\d+):(\d+)\)/,
            );

        if (
            match
        ) {

            const [
                ,
                file,
                line,
                column,
            ] = match;

            return new InspectionReport({

                code:
                    "STACK_001",

                category:
                    "StackTrace",

                message:
                    content,

                issue:
                    "Stack Trace Detected",

                cause:
                    "An error location was found in the stack trace.",

                fix:
                    "Inspect the reported location.",

                location: {

                    file,

                    line:
                        Number(
                            line,
                        ),

                    column:
                        Number(
                            column,
                        ),

                },

                severity:
                    Severity.INFO,

                confidence:
                    Confidence.HIGH,

            });

        }

        return new InspectionReport({

            code:
                "STACK_UNKNOWN",

            category:
                "StackTrace",

            message:
                content,

            issue:
                "Location Unavailable",

            cause:
                "No valid stack frame was found.",

            fix:
                "Provide a complete stack trace.",

            severity:
                Severity.LOW,

            confidence:
                Confidence.LOW,

        });

    }

}
