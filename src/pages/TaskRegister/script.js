import { required, minLength, numeric } from "vuelidate/lib/validators";
import Header from "../../components/Header";
import { registerTask } from "@/services";

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
    async save() {
      this.$v.$touch();
      if (this.$v.$error && this.$v.$invalid) {
        return;
      }

      try {
        return await registerTask({
          testId: this.$route.params.id,
          order: this.form.order,
          description: this.form.description,
        });
      } catch (err) {
        return err;
      }
    },

    registerTask() {
      this.save()
        .then((response) => {
          if (response?.status === 201 && response?.statusText === "Created") {
            this.$router.push({
              name: "TaskList",
              params: {
                id: this.$route.params.id,
              },
            });
          }
        })
        .catch((err) => console.error(err));
    },

    addNewTask() {
      this.save()
        .then((response) => {
          if (response?.status === 201 && response?.statusText === "Created") {
            this.form = {
              testId: null,
              order: null,
              description: null,
            };
            this.$v.$reset();
          }
        })
        .catch((err) => console.error(err));
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
