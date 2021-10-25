import { loginByAccessCode } from "@/services";

export default {
  name: "ParticipantLogin",

  data() {
    return {
      accessCode: "",
    };
  },

  methods: {
    initTest() {
      loginByAccessCode(this.accessCode)
        .then((response) => {
          const { data } = response;

          this.$router.push({
            name: "TestInit",
            params: {
              id: data.usabilityTest._id,
            },
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
