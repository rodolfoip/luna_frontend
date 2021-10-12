import { required, minLength, numeric } from "vuelidate/lib/validators";
import Header from "../../components/Header";
import { registerTask, getTestById, updateTask } from "@/services";

export default {
  name: "TaskRegister",

  components: {
    Header,
  },

  mounted() {
    if (this.isEditPage) {
      this.loadTask();
    }
  },

  data() {
    return {
      form: {
        testId: null,
        order: null,
        description: null,
      },
      taskListRoute: {
        name: "TaskList",
        params: {
          id: this.$route.params.id,
        },
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
    isEditPage() {
      return this.$route.name === "TaskEdit";
    },
  },

  methods: {
    loadTask() {
      getTestById(this.$route.params.id).then((response) => {
        const { data } = response;
        data.usabilityTest.tasks.map((task) => {
          if (String(this.$route.params.order) === String(task.order)) {
            this.form = { ...task };
          }
        });
      });
    },
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

    async update() {
      this.$v.$touch();
      if (this.$v.$error && this.$v.$invalid) {
        return;
      }

      try {
        return await updateTask({
          testId: this.$route.params.id,
          order: this.$route.params.order,
          newOrder: this.form.order,
          description: this.form.description,
        });
      } catch (err) {
        return err;
      }
    },

    saveTask() {
      if (!this.isEditPage) {
        this.save()
          .then((response) => {
            if (
              response?.status === 201 &&
              response?.statusText === "Created"
            ) {
              console.log("Sucesso");
            }
          })
          .catch((err) => console.error(err));
      } else {
        this.update().then((response) => {
          if (response?.status === 204) {
            console.log("Sucesso");
          }
        });
      }
      this.$router.push(this.taskListRoute);
    },

    addNewTask() {
      if (!this.isEditPage) {
        this.save()
          .then((response) => {
            if (
              response?.status === 201 &&
              response?.statusText === "Created"
            ) {
              this.form = {
                testId: null,
                order: null,
                description: null,
              };
              this.$v.$reset();
            }
          })
          .catch((err) => console.error(err));
      } else {
        this.update().then((response) => {
          if (response?.status === 204) {
            this.form = {
              testId: null,
              order: null,
              description: null,
            };
            this.$v.$reset();
          }
        });
      }
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
