import Api from '@/api';
import { MutationTree } from 'vuex';
import { UserState } from '../type'


const mutations: MutationTree<UserState> = {
    SET_AUTH_TOKEN(state: UserState, token: string) {
        state.token = token
    },

    SET_PROFILE(state: UserState, profile: any) {
        state.id = profile.id;
        state.uuid = profile.uuid;
        state.name = profile.name;
        state.mobile = profile.mobile ? profile.mobile : state.mobile;
    },


    SET_SETTINGS(state: any, settings: any) {
        state.settings = settings;
    }
}


export default {
    state: () => ({
        id: null,
        uuid: '',
        name: '',
        mobile: '',
        token: localStorage.getItem('AUTH_TOKEN'),

        settings: {
            default_question_count: 10,
            auto_archive_quizzes: 6,
            scan_beep: true,
            scan_speech: false,
        }
    }),
    mutations,

    getters: {
       
    },

    actions: {
        async login(context: any, data: any) {
            const resp = await Api.auth.login(data)

            // 清除全部数据
            context.commit('quiz/CLEAR')
            context.commit('classroom/CLEAR')

            context.commit('SET_AUTH_TOKEN', resp.data.token);
        },

        async register(context: any, data: any) {
            return await Api.auth.registerWithNoVerification(data)
        },

        async profile(context: any) {
            const resp = await Api.auth.profile()

            context.commit('SET_PROFILE', resp.data);
        },

        async logout(context: any) {

            try {
                await Api.auth.logout()
            } catch {
                console.error('Logout error');
            } finally {
                // 清除全部数据
                context.commit('quiz/CLEAR')
                context.commit('classroom/CLEAR')
                context.commit('SET_AUTH_TOKEN', '');
                context.commit('SET_PROFILE', {});
            }
        },

        async feLogout(context: any) {
            context.commit('SET_AUTH_TOKEN', '');
            localStorage.removeItem('AUTH_TOKEN')
        },

        async getSettings(context: any) {
            const resp = await Api.settings.get();

            const settings = typeof resp.data.preferences === 'string' ? JSON.parse(resp.data.preferences) : resp.data.preferences

            context.commit('SET_SETTINGS', Object.assign(context.state.settings, settings));
        },

        async updateSettings(context: any, data: any) {
            await Api.settings.update(data);

            context.commit('SET_SETTINGS', data);
        }
    }
}