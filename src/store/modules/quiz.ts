import Api from '@/api';

export default {
    namespaced: true,
    state: () => ({
        list: [],
        archived: [],
        total: 0,

        // 
        quiz: {},

        studentsCacheId: 0,
        students: [],

        recordsCacheId: 0,
        records: []
    }),
    mutations: {
        CLEAR(state: any) {
            state.list = [];
            state.archived = [];
            state.total = 0;

            state.quiz = {};

            // state.quizId = 0;
            state.students = [];
            state.records = [];
        },
        SET_QUIZZES(state: any, data: any) {
            state.list = data.data;
            state.total = data.meta.total;
        },

        UNSHIFT_QUIZ(state: any, data: any) {
            state.list.unshift(data);
            state.total++;
        },

        REPLACE_QUIZ(state: any, data: any) {
            const index = state.list.findIndex((i: any) => i.id === data.id);
            state.list.splice(index, 1, data);
        },

        REMOVE_QUIZ(state: any, data: any) {
            const index = state.list.findIndex((i: any) => i.id === data.id);

            if (index !== -1) {
                state.list.splice(index, 1);

                state.total--;
            } else {
                const idx = state.archived.findIndex((i: any) => i.id === data.id);
                state.archived.splice(idx, 1);
            }
        },

        ARCHIVE_QUIZ(state: any, quiz: any) {
            const idx = state.list.findIndex((i: any) => i.id === quiz.id);
            state.list.splice(idx, 1);
            state.total--;

            quiz.archivedAt = Date.now() / 1000
            state.archived.push(quiz);
        },

        UNARCHIVE_QUIZ(state: any, quiz: any) {
            const idx = state.archived.findIndex((i: any) => i.id === quiz.id);
            state.archived.splice(idx, 1);

            quiz.archivedAt = null;
            state.list.push(quiz);
            state.total++;
        },

        SET_ARCHIVED_QUIZZES(state: any, data: any) {
            state.archived = data.data;
        },


        /**
         * 当前 quiz
         */

        SET_QUIZ(state: any, data: any) {
            if (data.questions) {
                data.questions.sort(function (a: any, b: any) {
                    return +a.label > +b.label ? 1 : -1;
                });
            }

            state.quiz = data;
        },

        UPDATE_QUESTION(state: any, data: any) {
            const index = state.quiz.questions.findIndex((i: any) => i.id === data.id)

            if (index >= 0) {
                state.quiz.questions.splice(index, 1, data);
            }
        },

        UPDATE_QUIZ_QUESTIONS(state: any, questions: any) {
            state.quiz.questions = questions.sort(function (a: any, b: any) {
                return +a.label > +b.label ? 1 : -1;
            });

            state.quiz.questionCount = questions.length;
        },

        ATTACH_CLASSROOMS(state: any, classes: any[]) {
            state.quiz.classrooms = classes;
            state.quiz.classroomCount = classes.length
            state.quiz.studentCount = classes.reduce((arr, cur) => {
                return arr + cur.studentCount
            }, 0)

            const idx = state.list.findIndex((i: any) => i.id === state.quizId)
            if (idx >= 0) {
                state.list[idx].classrooms = classes;
                state.list[idx].classroomCount = classes.length
                state.list[idx].studentCount = state.quiz.studentCount
            }
        },

        SET_STUDENTS(state: any, data: any) {
            state.students = data.students
            state.studentCacheId = data.quizId;
        },

        SET_RECORDS(state: any, data: any) {

            state.recordsCacheId = data.quizId;
            state.records = data.records
        },

        ADD_RECORDS(state: any, data: any) {
            const index = state.records.findIndex((i: any) => i.studentId === data.studentId);

            data.studentNumber = state.records[index].studentNumber;
            data.studentName = state.records[index].studentName;

            if (index >= 0) {
                state.records.splice(index, 1, data)
            } else {
                state.records.splice(index, 1)
            }

            state.recordCount = state.records.length

            const idx = state.list.findIndex((i: any) => i.id === data.quizId)
            console.log(data)
            if (idx >= 0) {
                state.list[idx].recordCount = state.records.length
            }
        },

        REMOVE_RECORD(state: any, data: any) {
            const index = state.records.findIndex((i: any) => i.studentId === data.studentId);
            state.records[index].id = null;
            state.records[index].score = null;
        }
    },
    getters: {
    },

    actions: {
        async list(context: any, data: any) {
            if (context.state.list && context.state.list.length > 0) {
                return {
                    total: context.state.total,
                    data: context.state.list
                };
            }

            const resp = await Api.quiz.list(data)

            context.commit('SET_QUIZZES', resp.data);

            return resp;
        },

        async archived(context: any, data: any) {
            // if (context.state.archived && context.state.archived.length > 0) {
            //     return {
            //         total: context.state.total,
            //         data: context.state.archived
            //     };
            // }

            data = data || {};
            data.archived = true;

            const resp = await Api.quiz.list(data)

            context.commit('SET_ARCHIVED_QUIZZES', resp.data);

            return resp;
        },

        async unshift(context: any, quiz: any) {
            context.commit('UNSHIFT_QUIZ', quiz)
        },

        async replace(context: any, quiz: any) {
            context.commit('REPLACE_QUIZ', quiz)
        },

        async archive(context: any, quiz: any) {

            context.commit('REMOVE_QUIZ', quiz)
        },

        async quiz(context: any, id: number) {
            const quizId = +id;

            if (context.state.quiz && context.state.quiz.id === quizId) {
                return {
                    data: context.state.quiz
                };
            }

            const resp = await Api.quiz.show(quizId, {
                with: ["classrooms", "questions"],
            });

            context.commit('SET_QUIZ', resp.data)

            return resp;
        },

        /**
        * 获取指定 quiz 的 全部学生及其 reocrd
        * @param context 
        * @param quiz 
        */
        async studentRecords(context: any, quiz: any) {
            const quizId = quiz.id || quiz;

            const force = quiz.force;

            if (!force && context.state.recordsCacheId === quizId && context.state.records.length) {
                return {
                    data: context.state.records
                };
            }

            const resp = await Api.quiz.studentRecords(quizId);

            const records = resp.data.data || resp.data;

            context.commit('SET_RECORDS', {
                quizId: quizId,
                records
            })

            return {
                data: records,
            }
        },

        /**
         * 获取指定 quiz 的学生
         * @param context 
         * @param quiz 
         */
        async students(context: any, quiz: any) {
            const quizId = quiz.id || quiz;

            if (context.state.quizId === quizId && context.state.students.length) {
                return context.state.students;
            }

            const resp = await Api.quiz.students(quizId);

            const students = resp.data.data || resp.data;

            context.commit('SET_STUDENTS', {
                quizId: quizId,
                students
            })

            return students;
        },

        /**
         * 获取指定 quiz 的 records
         * @param context 
         * @param quiz 
         */
        // async records(context: any, quiz: any) {
        //     const quizId = quiz.id || quiz;
        //     if (context.state.quizId === quizId && context.state.records.length) {
        //         return context.state.records;
        //     }

        //     const resp = await Api.quiz.records(quizId);

        //     const records = resp.data.data || resp.data;

        //     context.commit('SET_RECORDS', {
        //         quizId: quizId,
        //         records
        //     })

        //     return records
        // }

    }
}