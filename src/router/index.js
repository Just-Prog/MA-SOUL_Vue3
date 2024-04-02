import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("../views/MainPage.vue"),
      meta: { title: "首页", id: "0"},
    },
    {
      path: "/course",
      name: "Course",
      component: () => import("../views/CourseView.vue"),
      meta: { title: "课程", id: "1"},
    },
    {
      path: "/practice",
      name: "Practice",
      component: () => import("../views/PracticeView.vue"),
      meta: { title: "题库", id: "2"},
    },
    {
      path: "/contest",
      name: "Contest",
      component: () => import("../views/ContestView.vue"),
      meta: { title: "比赛", id: "3"},
    },
    {
      path: "/about",
      name: "关于",
      component: () => import("../views/AboutView.vue"),
      meta: { title: "关于", id: "5"},
    },
    {
      path: "/community",
      name: "讨论社区",
      component: () => import("../views/AboutView.vue"),
      meta: { title: "讨论", id: "4 "},
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
