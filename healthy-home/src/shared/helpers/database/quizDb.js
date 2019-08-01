// Everything here is meant to be static. It should not be possible to change any value at runtime

// The IDs of all questions mapped to properties. Intended to make working with them easier
export const questionIds = Object.freeze({
    homeType: 1,
    hasYard: 2,
    reminders: 3
});

export const todoTypes = Object.freeze({
    home: 1,
    yard: 2,
    custom: 3
});

// Simple class meant to contain the two main parts of a single answer
// -- The text to display and what to string its mapped to in the database
class Answer {
    constructor(displayText, dbString, impliedTypes = []) {
        Object.defineProperty(this, "displayText", {
            value: displayText,
            writable: false
        });

        Object.defineProperty(this, "dbString", {
            value: dbString.toUpperCase(),
            writable: false
        });

        // Array of numbers
        Object.defineProperty(this, "impliedTypes", {
            value: impliedTypes,
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

        for (const key in answerObj) {
            Object.defineProperty(answerObj[key], "key", {
                value: key,
                writable: false
            });
        }

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

    getKeysFromDb(dbString) {
        const answers = dbString.split(',');
        return answers.reduce((keys, e) => {
            for (const key in this.answers) {
                if (this.answers[key].dbString === e)
                    keys.push(key);
            }
            return keys;
        }, []);
    }

    getTypesFromKeys(keys) {
        return keys.reduce((types, e) => {
            const impliedTypes = this.answers[e].impliedTypes;
            impliedTypes.forEach(e => {
                if (!types.includes(e))
                    types.push(e);
            })
            return types;
        }, []);
    }
}

// Holds the answer sets, along with some extra helper functions
export const answerHelpers = {
    housing: new AnswerManager(questionIds.homeType, false, {
        apartment: new Answer("Apartment", "APARTMENT", [todoTypes.home]),
        house: new Answer("House", "HOUSE", [todoTypes.home]),
        condo: new Answer("Condo", "CONDO", [todoTypes.home]),
        trailer: new Answer("Trailer", "TRAILER", [todoTypes.home]),
        townhouse: new Answer("Townhouse", "TOWNHOUSE", [todoTypes.home])
    }),
    yard: new AnswerManager(questionIds.hasYard, false, {
        yes: new Answer("Yes", "YES", [todoTypes.yard]),
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