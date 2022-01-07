import { getResultByTestId } from "@/services";

export const result = {
  data() {
    return {
      results: [],
    };
  },

  computed: {
    averageSUS() {
      return (
        this.results.reduce((sum, result) => sum + result.sus, 0) /
        this.results.length
      );
    },
    averageAffectGrid() {
      let affectGrid =
        this.results.reduce((sum, result) => sum + result.affectGrid, 0) /
        this.results.length;
      return Math.round(affectGrid);
    },
    averageEffectiveness() {
      let count = 0;
      let tasksLength = 0;
      this.results.forEach((result) => {
        tasksLength += result.tasks.length;
        count = result.tasks.reduce((sum, taskResult) => {
          return sum + !taskResult.aborted;
        }, count);
      });
      const percentage = Math.round((count / tasksLength) * 100);
      return percentage;
    },
  },

  methods: {
    getResults(testId) {
      getResultByTestId(testId).then((response) => {
        const { data } = response;
        this.results = data.results.map((item, index) => ({
          ...item,
          index: index + 1,
        }));
      });
    },
  },
};
