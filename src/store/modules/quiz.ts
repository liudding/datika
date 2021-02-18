import Api from '@/api';

export default {
    namespaced: true,
    state: () => ({
        list: [],
        archived: [],
        total: 0
    }),
    mutations: {
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
            // state.total = data.total;
        },

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
        }

    }
}