import { getTestByAccessCode } from "@/services";
import Notification from "@/components/Notification";

export default {
  name: "ParticipantLogin",

  components: {
    Notification,
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
};
