// Everything here is meant to be static. It should not be possible to change any value at runtime

// The IDs of all questions mapped to properties. Intended to make working with them easier
export const questionIds = Object.freeze({
    homeType: 1,
    hasYard: 2,
    reminders: 3
});

// Simple class meant to contain the two main parts of a single answer
// -- The text to display and what to string its mapped to in the database
class Answer {
    constructor(displayText, dbString) {
        Object.defineProperty(this, "displayText", {
            value: displayText,
            writable: false
        });

        Object.defineProperty(this, "dbString", {
            value: dbString.toUpperCase(),
            writable: false
        });
    }
}

// Tracks possible answers, what question they are for, and if multiple can be selected
class AnswerManager {
    // ID of the question (int), if multiple answers are allowed, object with 'Answer' properties
    constructor(questionId, allowMultiple, answerObj) {
        if (!Object.values(questionIds).includes(questionId))
            console.error(`Question id ${questionId} is not set up`);

        Object.defineProperty(this, "questionId", {
            value: questionId,
            writable: false
        });

        Object.defineProperty(this, "allowMultiple", {
            value: allowMultiple,
            writable: false
        });

        Object.defineProperty(this, "answers", {
            value: answerObj,
            writable: false
        });
    }

    // Accepts key(s) of answer properties (from this.answers)
    // Returns a ',' delimited string of their respective database identifiers
    genDbString = (...values) => {
        const getVal = (val) => {
            if (val in this.answers)
                return this.answers[val].dbString;
            else
                return "";
        };

        let dbString = getVal(values[0]);
        // console.log(dbString, values)

        for (let i = 1; this.allowMultiple === true && i < values.length; i++) {
            const val = getVal(values[i]);
            if (val)
                dbString += `,${val}`;
        }

        return dbString;
    }

    // A fast way to check if this answer set is meant for the passed ID
    matchesId = id => {
        // console.log("Matches test", id, this.questionId);
        return id === this.questionId;
    };
}

// Holds the answer sets, along with some extra helper functions
export const answerHelpers = {
    housing: new AnswerManager(questionIds.homeType, false, {
        apartment: new Answer("Apartment", "APARTMENT"),
        house: new Answer("House", "HOUSE"),
        condo: new Answer("Condo", "CONDO"),
        trailer: new Answer("Trailer", "TRAILER"),
        townhouse: new Answer("Townhouse", "TOWNHOUSE")
    }),
    yard: new AnswerManager(questionIds.hasYard, false, {
        yes: new Answer("Yes", "YES"),
        no: new Answer("No", "NO")
    }),
    reminders: new AnswerManager(questionIds.reminders, true, {
        text: new Answer("Text", "TEXT"),
        email: new Answer("Email", "EMAIL"),
        popups: new Answer("Popups", "POPUPS")
    }),
    // Searches through all answer sets, returns the one meant for the passed question id
    findById: function (questionId) {
        // console.log("findById", id, this);
        for (const key in this) {
            const target = this[key];
            // console.log("Findloop", key, target)
            if (typeof (target) !== "object" || !target instanceof AnswerManager)
                continue;
            else if (target.matchesId(questionId))
                return target;
        }
        return null;
    }
}