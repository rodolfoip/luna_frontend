export default {
  name: "ParticipantLogin",

  data() {
    return {
      accessCode: "",
    };
  },

  methods: {
    initTest() {
      // TODO - Validate access code and init test
      this.$router.push("/usability-test/init");
    },
  },
};
