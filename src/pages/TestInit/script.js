import Header from "@/components/Header";
import { test } from "@/mixins/Test";

export default {
  name: "TestInit",

  mixins: [test],

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
