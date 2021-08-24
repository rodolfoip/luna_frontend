import Header from "../../components/Header";
import { registerTest } from "../../services";

import { required, minLength, url } from "vuelidate/lib/validators";

export default {
  name: "TestRegister",

  components: {
    Header,
  },

  data() {
    return {
      form: {
        name: "",
        code: "",
        external_link: "",
        prototype_link: "",
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
    codeErrors() {
      const errors = [];
      if (!this.$v.form.code.$dirty) return errors;
      !this.$v.form.code.minLength &&
        errors.push("Código deve ter pelo menos 3 caracteres");
      !this.$v.form.code.required && errors.push("Código é obrigatório");
      return errors;
    },
    externalLinkError() {
      const errors = [];
      if (!this.$v.form.external_link.$dirty) return errors;
      !this.$v.form.external_link.url && errors.push("Digite uma url");
      !this.$v.form.external_link.required && errors.push("Link é obrigatório");
      return errors;
    },
    prototypeLinkError() {
      const errors = [];
      if (!this.$v.form.prototype_link.$dirty) return errors;
      !this.$v.form.prototype_link.url && errors.push("Digite uma url");
      !this.$v.form.prototype_link.required &&
        errors.push("Link é obrigatório");
      return errors;
    },
  },

  methods: {
    async register() {
      this.$v.$touch();
      if (this.$v.$error && this.$v.$invalid) {
        return;
      }

      try {
        await registerTest({
          name: this.form.name,
          accessCode: this.form.code,
          externalLink: this.form.external_link,
          prototypeLink: this.form.prototype_link,
        });
      } catch (err) {
        console.error(err.response.data.error);
      }
    },
  },

  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },
      code: {
        required,
        minLength: minLength(3),
      },
      external_link: {
        required,
        url,
      },
      prototype_link: {
        required,
        url,
      },
    },
  },
};
