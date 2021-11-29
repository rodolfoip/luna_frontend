import { getTestByAccessCode } from "@/services";

export default {
  name: "ParticipantLogin",

  data() {
    return {
      accessCode: "",
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
          console.error(err);
        });
    },
  },
};
