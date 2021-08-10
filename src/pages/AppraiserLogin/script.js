export default {
  name: "AppraiserLogin",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      // TODO - Login and redirect to usability test list page
      this.$router.push("/usability-test/list");
    },
  },
};
