import axios from 'axios';
import { answerHelpers } from '../../../../shared/helpers/database/quizDb';

export async function updateSubs(answerInfo) {
    // answerInfo - array, {questionId, dbString}
    // All todo info + type
    const allTodos = await axios.get("/subscriptions/types")
        .then(response => {
            return response.data.subInfo;
        })
    console.log("Axios test", allTodos);
    // const allTodos = ["a"];

    // Function to wipe or update info here
    // Maybe combine to wipe and update at same time on the backend

    const subbedTypes = answerInfo.reduce((types, e) => {
        const answerHelp = answerHelpers.findById(e.questionId);

        if (!answerHelp)
            return types;

        const answerKeys = answerHelp.getKeysFromDb(e.dbString);
        const answerTypes = answerHelp.getTypesFromKeys(answerKeys);

        answerTypes.forEach(e => {
            if (!types.includes(e))
                types.push(e);
        })

        return types;
    }, []);
    console.log("Subbed types", subbedTypes);

    const subList = [];

    allTodos.forEach(e => {
        // if e.type = in subbedTypes
        if (subbedTypes.includes(e.todo_type_id))
            subList.push(e.todo_id);
    });

    console.log("Sublist", subList);

    // Send sublist to backend

    // Return sublist
}