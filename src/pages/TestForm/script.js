import Header from "@/components/Header";

import { required, minLength, url } from "vuelidate/lib/validators";
import { registerTest, updateTest, getTestById } from "@/services/test";

export default {
  name: "TestForm",

  components: {
    Header,
  },

  data() {
    return {
      form: {
        name: "",
        accessCode: "",
        externalLink: "",
        prototypeLink: "",
      },
    };
  },

  mounted() {
    if (this.isEditPage) {
      this.loadTest();
    }
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
      if (!this.$v.form.accessCode.$dirty) return errors;
      !this.$v.form.accessCode.minLength &&
        errors.push("Código deve ter pelo menos 3 caracteres");
      !this.$v.form.accessCode.required && errors.push("Código é obrigatório");
      return errors;
    },
    externalLinkError() {
      const errors = [];
      if (!this.$v.form.externalLink.$dirty) return errors;
      !this.$v.form.externalLink.url && errors.push("Digite uma url");
      !this.$v.form.externalLink.required && errors.push("Link é obrigatório");
      return errors;
    },
    prototypeLinkError() {
      const errors = [];
      if (!this.$v.form.prototypeLink.$dirty) return errors;
      !this.$v.form.prototypeLink.url && errors.push("Digite uma url");
      !this.$v.form.prototypeLink.required && errors.push("Link é obrigatório");
      return errors;
    },
    isEditPage() {
      return this.$route.name === "TestEdit";
    },
    testName() {
      return this.form.name ? this.form.name : "Teste XXX";
    },
  },

  methods: {
    loadTest() {
      getTestById(this.$route.params.id).then((response) => {
        const { data } = response;
        this.form = { ...data.usabilityTest };
      });
    },
    async register() {
      this.$v.$touch();
      if (this.$v.$error && this.$v.$invalid) {
        return;
      }

      try {
        return await registerTest({
          name: this.form.name,
          accessCode: this.form.accessCode,
          externalLink: this.form.externalLink,
          prototypeLink: this.form.prototypeLink,
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
        return await updateTest({
          _id: this.$route.params.id,
          name: this.form.name,
          externalLink: this.form.externalLink,
          prototypeLink: this.form.prototypeLink,
          tasks: this.form.tasks,
          quantity: this.form.quantity,
        });
      } catch (err) {
        return err;
      }
    },
    saveTest() {
      if (!this.isEditPage) {
        this.register()
          .then((response) => {
            if (
              response?.status === 201 &&
              response?.statusText === "Created"
            ) {
              this.$router.push("/usability-test/list");
            }
          })
          .catch((err) => console.error(err));
      } else {
        this.update()
          .then((response) => {
            if (response?.status === 204) {
              this.$router.push("/usability-test/list");
            }
          })
          .catch((err) => console.error(err));
      }
    },
    addTask() {
      if (!this.isEditPage) {
        this.register()
          .then((response) => {
            if (
              response?.status === 201 &&
              response?.statusText === "Created"
            ) {
              this.$store.dispatch({
                type: "test/setTest",
                value: response.data.usabilityTest,
              });
              this.$router.push({
                name: "TaskRegister",
                params: {
                  id: response.data.usabilityTest._id,
                },
              });
            }
          })
          .catch((err) => console.error(err));
      }
      this.$router.push({
        name: "TaskRegister",
        params: {
          id: this.$route.params.id,
        },
      });
    },
  },

  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },
      accessCode: {
        required,
        minLength: minLength(3),
      },
      externalLink: {
        required,
        url,
      },
      prototypeLink: {
        required,
        url,
      },
    },
  },
};
