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
    testTasks() {
      return this.tasks;
    },
  },

  methods: {
    getTest() {
      getTestById(this.userId, this.testId).then((response) => {
        const { data } = response;

        this.$store.dispatch({
          type: "test/setTest",
          value: data.usabilityTest,
        });

        this.getResults(data.usabilityTest._id);

        this.loadTasks();
        return test;
      });
    },

    loadTasks() {
      this.tasks = this.testSelected.tasks;
    },
  },
};
