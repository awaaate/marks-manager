import managerTypes from "./manager.types";

export const pushSubject = subjectToPush => ({
    type: managerTypes.PUSH_SUBJECT,
    playload: subjectToPush
});

export const pushTask = (subjectId, taskToAdd) => ({
    type: managerTypes.PUSH_TASK,
    playload: { subjectId, taskToAdd }
});
