import { getTestById } from "@/services";
import { mapGetters } from "vuex";

export const test = {
  data() {
    return {
      tasks: [],
    };
  },

  beforeMount() {
    this.getTest();
  },

  computed: {
    ...mapGetters({
      testSelected: "test/testSelected",
    }),
    testId() {
      return this.$route.params.id;
    },
  },

  methods: {
    getTest() {
      getTestById(this.userId, this.testId).then((response) => {
        const { data } = response;
        const test = {
          ...data.usabilityTest,
          realized: data.usabilityTest.quantity > 0,
        };

        this.$store.dispatch({
          type: "test/setTest",
          value: test,
        });

        this.loadTasks();
        return test;
      });
    },

    loadTasks() {
      this.tasks = this.testSelected.tasks;
    },
  },
};
