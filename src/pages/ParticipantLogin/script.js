import { required, minLength } from "vuelidate/lib/validators";
import { getTestByAccessCode } from "@/services";
import Notification from "@/components/Notification";

export default {
  name: "ParticipantLogin",

  components: {
    Notification,
  },

  computed: {
    accessCodeError() {
      const errors = [];
      if (!this.$v.accessCode.$dirty) return errors;
      !this.$v.accessCode.minLength &&
        errors.push("Código de acesso deve ter pelo menos 3 caracteres");
      !this.$v.accessCode.required &&
        errors.push("Código de acesso é obrigatório");
      return errors;
    },
  },

  data() {
    return {
      accessCode: "",
      alertConfig: {
        show: false,
        type: "error",
        text: "Teste não encontrado, tente outro código",
      },
    };
  },

  methods: {
    initTest() {
      this.$v.$touch();
      if (this.$v.$error && this.$v.$invalid) {
        return;
      }

      getTestByAccessCode(this.accessCode)
        .then((response) => {
          const { data } = response;

          this.$router.push({
            name: "TestInit",
            params: {
              accessCode: data.usabilityTest.accessCode,
            },
          });

          this.$store.dispatch({
            type: "test/setTest",
            value: data.usabilityTest,
          });
        })
        .catch((err) => {
          this.alertConfig.show = true;
          console.error(err);
        });
    },
  },
  validations: {
    accessCode: {
      required,
      minLength: minLength(3),
    },
  },
};
