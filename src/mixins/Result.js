import { getResultByTestId } from "@/services";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
dayjs.extend(customParseFormat);
dayjs.extend(duration);

export const result = {
  data() {
    return {
      results: [],
    };
  },

  computed: {
    averageSUS() {
      const percentage =
        this.results.reduce((sum, result) => sum + result.sus, 0) /
        this.results.length;
      return Math.round(percentage);
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
          effectiveness: this.calcEffectiveness(item.tasks),
          efficiency: this.calcEfficiency(item.tasks),
        }));
      });
    },

    calcEffectiveness(tasks) {
      let count = tasks.reduce((sum, task) => sum + !task.aborted, 0);
      return Math.round((count / tasks.length) * 100);
    },

    calcEfficiency(tasks) {
      let count = dayjs.duration();
      tasks.map((task) => {
        const taskFormated = dayjs(task.timeTask, "mm:ss");
        count = count.add({
          minutes: taskFormated.minute(),
          seconds: taskFormated.second(),
        });
      });
      return count.format("HH:mm:ss");
    },
  },
};
