import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteLocationNormalized } from 'vue-router';
import routes from './routes'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


function isLoggedIn(): boolean {
    return false;
}

// permission judge function
function hasPermission(rolesRequired: string[]) {
    const roles: string[] = []; // user roles;

    if (!rolesRequired || roles.includes('admin')) return true;

    return roles.some(role => rolesRequired.indexOf(role) >= 0)
}

const whiteList = ['/login', '/login/password', '/auth-redirect'] // no redirect whitelist

function isInWhitelist(to: RouteLocationNormalized) {
    return whiteList.indexOf(to.path) !== -1;
}

function needLogin(to: RouteLocationNormalized) {
    if (isInWhitelist(to)) {
        return false
    }

    if (!to.meta) {
        return true;
    }

    if (to.meta.login === undefined || to.meta.login === null) {
        // 如果未设置 “需要登录”，则默认为必须登录
        return true
    }

    return to.meta.login;
}

router.beforeEach((to, from, next) => {
    if (!needLogin(to)) {
        next()
        return
    }

    if (!isLoggedIn()) {
        next({ path: '/login', replace: true })
        return;
    }


    if (to.path === '/login') {
        next({ path: '/' })
        return;
    }

    if (hasPermission(to.meta.roles)) {
        next()
    } else {
        next({ path: '/401', replace: true })
    }

})

export default router
