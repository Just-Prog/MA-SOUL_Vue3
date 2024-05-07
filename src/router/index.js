import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("@/pages/MainPage.vue"),
      meta: {
        title: "首页",
        id: "0",
        sidebar_items: [
          { name: "首页", icon: "House", id: "0-1", to: "/" },
          { name: "首页2", icon: "Notebook", id: "0-2", to: "/" },
          { name: "首页3", icon: "House", id: "0-3", to: "/" },
        ],
        showOnNav: 1,
      },
    },
    {
      path: "/course",
      name: "Course",
      component: () => import("@/pages/CourseMainPage.vue"),
      meta: {
        title: "课程",
        id: "1",
        sidebar_items: [
          { name: "课程首页", icon: "House", id: "1-1", to: "/" },
          { name: "我的课程", icon: "Notebook", id: "1-2", to: "/" },
          { name: "首页", icon: "House", id: "1-3", to: "/" },
        ],
        showOnNav: 1,
      },
    },
    {
      path: "/practice",
      name: "Practice",
      component: () => import("@/pages/PracticeMainPage.vue"),
      meta: {
        title: "题库",
        id: "2",
        sidebar_items: [
          { name: "首页", icon: "House", id: "2-1", to: "/" },
          { name: "首页", icon: "Notebook", id: "2-2", to: "/" },
          { name: "首页", icon: "House", id: "2-3", to: "/" },
        ],
        showOnNav: 1,
      },
    },
    {
      path: "/contest",
      name: "Contest",
      component: () => import("@/pages/ContestMainPage.vue"),
      meta: {
        title: "比赛",
        id: "3",
        sidebar_items: [
          { name: "比赛首页", icon: "House", id: "3-1", to: "/", params: "" },
          { name: "首页", icon: "House", id: "3-2", to: "/", params: "" },
          { name: "首页", icon: "House", id: "3-3", to: "/", params: "" },
        ],
        showOnNav: 1,
      },
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/pages/AboutPage.vue"),
      meta: { title: "关于" },
      // no nav
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404Page",
      component: () => import("@/pages/404.vue"),
      meta: { title: "404" },
    },
  ],
});

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title + " - MA-SOUL 码魂 - 为信息学未来镀金"
  }
  next();
})

export default router
