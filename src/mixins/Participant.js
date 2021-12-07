import { getTestByAccessCode } from "@/services";
import { mapGetters } from "vuex";

export const participant = {
  computed: {
    ...mapGetters({
      testSelected: "test/testSelected",
    }),
    testAccessCode() {
      return this.$route.params.accessCode ?? this.testSelected.accessCode;
    },
    tasks() {
      return this.testSelected?.tasks || [];
    },
  },

  methods: {
    loadTestByAccessCode() {
      getTestByAccessCode(this.testAccessCode).then((response) => {
        const { data } = response;
        this.$store.dispatch({
          type: "test/setTest",
          value: data,
        });
      });
    },
  },
};
