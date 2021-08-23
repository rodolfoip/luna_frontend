import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

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

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.minLength &&
        errors.push("Nome deve ter pelo menos 3 caracteres");
      !this.$v.form.name.required && errors.push("Nome é obrigatório");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Insira um e-mail válido");
      !this.$v.form.email.required && errors.push("E-mail é obrigatório");
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.minLength &&
        errors.push("Senha deve ter pelo menos 8 caracteres");
      !this.$v.form.password.required && errors.push("Senha é obrigatório");
      return errors;
    },
    confirmPasswordError() {
      const errors = [];
      if (!this.$v.form.confirmPassword.$dirty) return errors;
      !this.$v.form.confirmPassword.sameAs &&
        errors.push("A senha digitada é diferente");
      !this.$v.form.confirmPassword.required &&
        errors.push("Confirmar senha é obrigatório");
      return errors;
    },
  },

  methods: {
    register() {
      // TODO - Register user and go to appraiser login page
      this.$v.$touch();
      if (this.$v.$error && this.$v.$invalid) {
        return;
      }
      this.$router.push("/appraiser");
    },
  },

  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      confirmPassword: {
        required,
        sameAs: sameAs("password"),
      },
    },
  },
};
