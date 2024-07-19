import { createRouter, createWebHistory } from "vue-router";
import { Hello, Test } from "../pages";

let loginPage = {
  path: "/",
  name: "login",
  title: "登录",
  component: Hello,
};

let testPage = {
  path: "/test",
  name: "test",
  title: "测试",
  component: Test,
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [loginPage, testPage],
});

export default router;
