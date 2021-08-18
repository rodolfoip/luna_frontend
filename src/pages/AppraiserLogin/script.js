import { login } from "@/services";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "AppraiserLogin",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Insira um e-mail válido");
      !this.$v.email.required && errors.push("E-mail é obrigatório");
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Senha é obrigatório");
      return errors;
    },
  },

  methods: {
    async login() {
      this.$v.$touch();
      if (this.$v.$error && this.$v.$invalid) {
        return;
      }

      try {
        const payload = await login({
          email: this.email,
          password: this.password,
        });
        const { data } = payload;

        this.$store.dispatch({
          type: "user/setAccessToken",
          value: data.accessToken,
        });

        this.$router.push("/usability-test/list");
      } catch (err) {
        console.error(err.response.data.error);
      }
    },
  },

  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      email,
    },
  },
};
