import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("../views/MainPage.vue"),
      meta: {
        title: "首页",
        id: "0",
        modules: [
          { name: "首页", icon: "House", id: "0-1", to: "/" },
          { name: "首页2", icon: "Notebook", id: "0-2", to: "/" },
          { name: "首页3", icon: "House", id: "0-3", to: "/" },
        ],
      },
    },
    {
      path: "/course",
      name: "Course",
      component: () => import("../views/CourseView.vue"),
      meta: {
        title: "课程",
        id: "1",
        modules: [
          { name: "课程首页", icon: "House", id: "1-1", to: "/" },
          { name: "我的课程", icon: "Notebook", id: "1-2", to: "/" },
          { name: "首页", icon: "House", id: "1-3", to: "/" },
        ],
      },
    },
    {
      path: "/practice",
      name: "Practice",
      component: () => import("../views/PracticeView.vue"),
      meta: {
        title: "题库",
        id: "2",
        modules: [
          { name: "首页", icon: "House", id: "2-1", to: "/" },
          { name: "首页", icon: "Notebook", id: "2-2", to: "/" },
          { name: "首页", icon: "House", id: "2-3", to: "/" },
        ],
      },
    },
    {
      path: "/contest",
      name: "Contest",
      component: () => import("../views/ContestView.vue"),
      meta: {
        title: "比赛",
        id: "3",
        modules: [
          { name: "比赛首页", icon: "House", id: "3-1", to: "/" },
          { name: "首页", icon: "House", id: "3-2", to: "/" },
          { name: "首页", icon: "House", id: "3-3", to: "/" },
        ],
      },
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
