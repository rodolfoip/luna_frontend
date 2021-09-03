import { required, minLength, numeric } from "vuelidate/lib/validators";
import Header from "../../components/Header";

export default {
  name: "TaskRegister",

  components: {
    Header,
  },

  data() {
    return {
      form: {
        testId: null,
        order: null,
        description: null,
      },
    };
  },

  computed: {
    orderErrors() {
      const errors = [];
      if (!this.$v.form.order.$dirty) return errors;
      !this.$v.form.order.numeric && errors.push("Ordem deve ser um número");
      !this.$v.form.order.required && errors.push("Ordem é obrigatório");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.form.description.$dirty) return errors;
      !this.$v.form.description.minLength &&
        errors.push("Descrição deve ter pelo menos 10 caracteres");
      !this.$v.form.description.required &&
        errors.push("Descrição é obrigatório");
      return errors;
    },
  },

  methods: {
    save() {
      // TODO - save task
      this.$v.$touch();
      if (this.$v.$error && this.$v.$invalid) {
        return;
      }
    },

    addNewTask() {
      // TODO - save task and clean form
      this.save();
    },
  },

  validations: {
    form: {
      order: {
        required,
        numeric,
      },
      description: {
        required,
        minLength: minLength(5),
      },
    },
  },
};
