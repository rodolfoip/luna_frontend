import { login } from "@/services";
import { required, email } from "vuelidate/lib/validators";
import Notification from "@/components/Notification";

export default {
  name: "AppraiserLogin",

  components: {
    Notification,
  },

  data() {
    return {
      email: "",
      password: "",
      alertConfig: {
        show: false,
        type: "error",
        text: "Login error",
      },
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
        const { data } = payload.data;

        this.$store.dispatch({
          type: "user/setAccessToken",
          value: data.accessToken,
        });

        this.$store.dispatch({
          type: "user/setUserId",
          value: data._id,
        });

        this.$router.push("/usability-test/list");
      } catch (err) {
        const { status, data } = err.response;
        if (status === 401) {
          this.alertConfig.text = "Verifique os campos ou faça um cadastro";
          this.alertConfig.show = true;
        } else {
          this.alertConfig.text = data.error;
          this.alertConfig.show = true;
        }
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
    },
  },
};
