export const questionIds = Object.freeze({
    homeType: 1,
    hasYard: 2,
    reminders: 3
});

class AnswerManager {
    constructor(questionId, answers, allowMultiple = false) {
        if (!Object.values(questionIds).includes(questionId))
            Console.error(`Question id ${questionId} is not set up`);

        Object.defineProperty(this, "questionId", {
            value: questionId,
            writable: false
        });

        Object.defineProperty(this, "allowMultiple", {
            value: allowMultiple,
            writable: false
        });

        Object.defineProperty(this, "origAnswers", {
            value: answers,
            writable: false
        });

        for (let key in answers) {
            Object.defineProperty(this, key, {
                value: answers[key].toUpperCase(),
                writable: false
            });
        }
    }

    // Accepts valid DB strings or their corresponding keys
    genDbString = (...values) => {
        const getVal = (val) => {
            if(Object.values(this).includes(val))
                return val;
            else if(val in this)
                return this[val];
            else
                return "";
        };

        let dbString = getVal(values[0]);

        for (let i = 1; this.allowMultiple === true && i < values.length; i++) {
            const val = getVal(values[i]);
            if (val)
                dbString += `,${val}`;
        }

        return dbString;
    }
}

export const answerHelpers = {
    housing: new AnswerManager(questionIds.homeType, {
        apartment: "APARTMENT",
        house: "HOUSE",
        condo: "CONDO",
        trailer: "TRAILER",
        townhouse: "TOWNHOUSE"
    }),
    yard: new AnswerManager(questionIds.hasYard, {
        yes: "YES",
        no: "NO"
    }),
    reminders: new AnswerManager(questionIds.reminders, {
        text: "TEXT",
        email: "EMAIL",
        popups: "POPUPS"
    })
}
