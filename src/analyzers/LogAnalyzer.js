/**
 * null-inspect
 * Log Analyzer
 */

import LogRegistry from "../registries/LogRegistry.js";

import InspectionReport from "../models/InspectionReport.js";

import Severity from "../constants/Severity.js";
import Confidence from "../constants/Confidence.js";

export default class LogAnalyzer {

    static analyze(
        logs,
    ) {

        const content =
            Array.isArray(
                logs,
            )

                ? logs.join(
                    "\n",
                )

                : String(
                    logs,
                );

        const lower =
            content.toLowerCase();

        let match =
            null;

        if (
            (
                lower.match(
                    /error/g,
                ) || []
            ).length >= 3
        ) {

            match =
                LogRegistry.find(
                    entry =>
                        entry.code ===
                        "LOG_001",
                );

        }

        else if (

            lower.includes(
                "connected",
            )

            &&

            lower.includes(
                "disconnected",
            )

        ) {

            match =
                LogRegistry.find(
                    entry =>
                        entry.code ===
                        "LOG_002",
                );

        }

        else if (

            lower.includes(
                "started",
            )

            &&

            lower.includes(
                "crashed",
            )

        ) {

            match =
                LogRegistry.find(
                    entry =>
                        entry.code ===
                        "LOG_003",
                );

        }

        else if (
            (
                lower.match(
                    /warning/g,
                ) || []
            ).length >= 3
        ) {

            match =
                LogRegistry.find(
                    entry =>
                        entry.code ===
                        "LOG_004",
                );

        }

        else if (
            (
                lower.match(
                    /unhandled/g,
                ) || []
            ).length >= 3
        ) {

            match =
                LogRegistry.find(
                    entry =>
                        entry.code ===
                        "LOG_005",
                );

        }

        if (
            match
        ) {

            return new InspectionReport({

                code:
                    match.code,

                category:
                    match.category,

                message:
                    content,

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
                "LOG_UNKNOWN",

            category:
                "Unknown",

            message:
                content,

            issue:
                "Unknown Log Pattern",

            cause:
                "No supported log pattern was detected.",

            fix:
                "Manual inspection required.",

            severity:
                Severity.LOW,

            confidence:
                Confidence.LOW,

        });

    }

          }
