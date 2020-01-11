export const pushSubject = (subjects, subjectToPush) => {
    const length = Object.keys(subjects).length;
    subjectToPush = {
        [subjectToPush]: {
            subjectName: subjectToPush,
            tasks: [],
            finalMark: 10,
            id: length
        }
    };

    return {
        ...subjects,
        ...subjectToPush
    };
};

export const pushTask = (subjects, { subjectId, taskToAdd }) => {
    const subjectsArray = Object.keys(subjects).map(key => subjects[key]);

    return {
        ...subjectsArray
            .map(subject => {
                if (subject.id !== subjectId) {
                    return subject;
                }
                subject.tasks.push(taskToAdd);
                return subject;
            })
            .reduce((accumlator, subject) => {
                accumlator[subject.subjectName] = subject;
                return accumlator;
            }, {})
    };
};
