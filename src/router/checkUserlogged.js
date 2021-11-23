import VueX from "@/store";

export default (to, from, next) => {
  if (!VueX.getters["user/accessToken"] && !VueX.getters["user/userId"]) {
    next("/");
  } else {
    next();
  }
};
