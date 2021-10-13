import { getTestById } from "@/services";

export const test = {
  data() {
    return {
      tasks: [],
    };
  },

  mounted() {
    this.loadTasks();
  },

  computed: {
    testId() {
      return this.$route.params.id;
    },
  },

  methods: {
    loadTasks() {
      getTestById(this.testId).then((response) => {
        const { data } = response;
        this.tasks = data.usabilityTest.tasks;
      });
    },
  },
};
