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
  },

  methods: {
    getResults(testId) {
      getResultByTestId(testId).then((response) => {
        this.results = response.data.results;
      });
    },
  },
};
