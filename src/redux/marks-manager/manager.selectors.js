import { createSelector } from "reselect";

const managerSelector = (state) => state.manager
export const  subjectsSelector = createSelector([managerSelector], (manager) => manager);

export const mapSubjectsSelector = createSelector(
    subjectsSelector,
    subjects => {
        const keys = Object.keys(subjects);
        return keys.map(key => subjects[key]);
    }
);
