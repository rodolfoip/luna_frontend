import Header from "@/components/Header";
import { participant } from "@/mixins/Participant";

export default {
  name: "TestInit",

  mixins: [participant],

  components: {
    Header,
  },

  computed: {
    taskInitRoute() {
      return {
        name: "TaskInit",
        params: {
          id: this.testId,
          order: 1,
        },
      };
    },
  },
};
