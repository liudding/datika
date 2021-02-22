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
    }
}


export default {
    state: () => ({
        id: null,
        uuid: '',
        name: '',
        mobile: '',
        token: null
    }),
    mutations,

    getters: {
        
    },

    actions: {
        async login(context: any, data: any) {
            const resp = await Api.auth.login(data)

            // 清除全部数据
            localStorage.removeItem('APP_STATE_DATA')

            context.commit('SET_AUTH_TOKEN', resp.data.token);
        },

        async profile(context: any) {
            const resp = await Api.auth.profile()

            context.commit('SET_PROFILE', resp.data);
        },

        async logout(context: any) {
            await Api.auth.logout()

            context.commit('SET_AUTH_TOKEN', '');
            // 清除全部数据
            localStorage.removeItem('APP_STATE_DATA')
        },

        async feLogout(context: any) {
            context.commit('SET_AUTH_TOKEN', '');
        }
    }
}