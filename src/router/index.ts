import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteLocationNormalized } from 'vue-router';
import routes from './routes'
import store from '@/store'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


function isLoggedIn(): boolean {
  return !!(store as any).state.user.token;
}

// permission judge function
function hasPermission(to: RouteLocationNormalized) {

  return true;

  // if (!to.meta || !to.meta.roles) {
  //   return false;
  // }

  // const rolesRequired = to.meta.roles as string[];

  // const roles: string[] = []; // user roles;

  // if (!rolesRequired || roles.includes('admin')) return true;

  // return roles.some(role => rolesRequired.indexOf(role) >= 0)
}

const whiteList = ['/login', '/login/password', '/register'] // no redirect whitelist

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

  return to.meta.login !== false
}

router.beforeEach((to, from, next) => {
  if (!isLoggedIn() && !needLogin(to)) {
    next()
    return
  }

  if (!isLoggedIn()) {
    next({ path: '/login', replace: true })
    return;
  }

  if (to.path.indexOf('/login') === 0) {
    next({ path: '/' })
    return;
  }

  if (hasPermission(to)) {
    next()
  } else {
    next({ path: '/401', replace: true })
  }

})

export default router
