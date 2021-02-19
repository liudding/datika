import Api from '@/api';
import { MutationTree } from 'vuex';
import { UserState } from '../type'


const mutations: MutationTree<UserState> = {
    SET_AUTH_TOKEN(state: UserState, token: string) {
        state.token = token
    },

    SET_PROFILE(state: UserState, profile: any) {
        state.name = profile.name;
        state.mobile = profile.mobile ? profile.mobile : state.mobile;
    }
}


export default {
    state: () => ({
        name: '',
        mobile: ''
    }),
    mutations,

    getters: {
        
    },

    actions: {
        async login(context: any, data: any) {
            const resp = await Api.auth.login(data)

            context.commit('SET_AUTH_TOKEN', resp.data.token);
            localStorage.setItem('token', resp.data.token);
        },

        async profile(context: any) {
            const resp = await Api.auth.profile()

            context.commit('SET_PROFILE', resp.data);
        },

        async logout(context: any) {
            await Api.auth.logout()

            context.commit('SET_AUTH_TOKEN', '');
            localStorage.removeItem('token');
        },

        async feLogout(context: any) {
            context.commit('SET_AUTH_TOKEN', '');
            localStorage.setItem('token', '');
        }
    }
}