import Api from '@/api';

export default {
    namespaced: true,
    state: () => ({
        list: [],
        archived: [],
        total: 0,
    }),
    mutations: {
        CLEAR(state: any) {
            state.list = [];
            state.archived = [];
            state.total = 0;
        },
        SET_CLASSROOMS(state: any, data: any) {
            state.list = data.data;
            state.total = data.meta.total;
        },

        UNSHIFT_CLASSROOM(state: any, data: any) {
            state.list.unshift(data);
            state.total++;
        },

        REPLACE_CLASSROOM(state: any, data: any) {
            const index = state.list.findIndex((i: any) => i.id === data.id);
            state.list.splice(index, 1, data);
        },

        UPDATE_STUDENT_COUNT(state: any, data: any) {
            const index = state.list.findIndex((i: any) => i.id === data.id);
            state.list[index].studentCount = data.studentCount || data.count;
        },

        REMOVE_CLASSROOM(state: any, data: any) {
            const index = state.list.findIndex((i: any) => i.id === data.id);
            state.list.splice(index, 1);

            state.total --;
        },

        SET_ARCHIVED_CLASSROOMS(state: any, data: any) {
            state.archived = data.data;
            // state.total = data.total;
        },

    },
    actions: {
        async list(context: any, data: any) {
            if (context.state.list && context.state.list.length > 0) {
                return {
                    total: context.state.total,
                    data: context.state.list
                };
            }

            const resp = await Api.classroom.list(data)

            context.commit('SET_CLASSROOMS', resp.data);

            return resp;
        },

        async archived(context: any, data: any) {
            if (context.state.archived && context.state.archived.length > 0) {
                return {
                    total: context.state.total,
                    data: context.state.archived
                };
            }

            data = data || {};
            data.archived = true;

            const resp = await Api.classroom.list(data)

            context.commit('SET_ARCHIVED_CLASSROOMS', resp.data);

            return resp;
        },

        async find(context: any, id: number) {
            const classroom = context.state.list.find((i: any) => i.id === id)
            if (classroom) return classroom;

            const resp = await Api.classroom.show(id);

            return resp.data;
        },

        async unshift(context: any, classroom: any) {
            context.commit('UNSHIFT_CLASSROOM', classroom)
        },

        async replace(context: any, classroom: any) {
            context.commit('REPLACE_CLASSROOM', classroom)
        },

        async archive(context: any, classroom: any) {

            context.commit('REMOVE_CLASSROOM', classroom)
        }
    }
}