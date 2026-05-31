/**
 * null-inspect
 * Inspection Report Model
 */

export default class InspectionReport {

    constructor({

        code,

        category,

        message,

        issue,

        cause,

        fix,

        location = {

            file: null,

            line: null,

            column: null,

        },

        severity,

        confidence,

    }) {

        this.code =
            code;

        this.category =
            category;

        this.message =
            message;

        this.issue =
            issue;

        this.cause =
            cause;

        this.fix =
            fix;

        this.location =
            location;

        this.severity =
            severity;

        this.confidence =
            confidence;

    }

}
