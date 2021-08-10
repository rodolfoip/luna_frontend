export default {
  name: "AppraiserRegister",

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  methods: {
    register() {
      // TODO - Register user and go to appraiser login page
      this.$router.push("/appraiser");
    },
  },
};
