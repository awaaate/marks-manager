import managerTypes from "./manager.types";
import { pushSubject, pushTask } from "./manager.utils";

const INITIAL_STATE = {
    maths: {
        subjectName: "maths",
        tasks: [
            {
                task: "exam",
                mark: 8
            }
        ],
        id: 0,
        finalMark: 8
    }
};
const managerReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case (managerTypes.PUSH_SUBJECT): 
        return{
            ...pushSubject(state, action.playload)
            
        }
        case (managerTypes.PUSH_TASK):
            return pushTask(state, action.playload)
        default:
            return {
                ...state,
            };
    }
};

export default managerReducer;
