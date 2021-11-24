import { mapGetters } from "vuex";

export const user = {
  computed: {
    ...mapGetters({
      userId: "user/userId",
    }),
  },
};
