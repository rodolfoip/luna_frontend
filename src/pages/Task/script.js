import { participant } from "@/mixins/Participant";
import dayjs from "dayjs";
import { registerResult, getResultByTestId, addTaskResult } from "@/services";
import { mapGetters } from "vuex";
import Notification from "@/components/Notification";

export default {
  name: "Task",

  components: {
    Notification,
  },

  mixins: [participant],

  mounted() {
    this.loadResult();
  },

  computed: {
    ...mapGetters({
      resultSelected: "result/resultSelected",
    }),
    taskOrder() {
      return this.$route.params.order;
    },
    actualTask() {
      return this.tasks.find((task) => {
        return Number(task.order) === Number(this.taskOrder);
      });
    },
    nextOrder() {
      if (!this.isLastTask) {
        const orderIndex = this.tasks.findIndex(
          (item) => Number(item.order) === Number(this.taskOrder)
        );
        return this.tasks[orderIndex + 1].order;
      }
    },
    isLastTask() {
      return !this.tasks.some(
        (task) => Number(task.order) > Number(this.taskOrder)
      );
    },
    taskHasResult() {
      if (!this.resultSelected) {
        return false;
      }
      return this.resultSelected.tasks.every(
        (task) => Number(task.orderTask) !== Number(this.taskOrder)
      );
    },
  },

  data() {
    return {
      prototype_link: "https://rodolfoip.github.io/CalculadoraPriceSAC/",
      initDate: "",
      finishDate: "",
      clicks: 0,
      menu: 0,
      prototypeIframe: null,
      aborted: false,
      alertConfig: {
        show: false,
        type: "error",
        text: "Ocorreu um erro inesperado",
      },
    };
  },

  methods: {
    onLoadTask() {
      this.prototypeIframe = document.getElementById("show-iframe");
      const deviceHeight = document.documentElement.clientHeight;
      this.prototypeIframe.style.height = Number(deviceHeight) + 100 + "px";
    },
    onLoadPrototype() {
      this.initDate = dayjs();
      const $this = this;
      focus();
      addEventListener("blur", function () {
        if (document.activeElement === document.getElementById("show-iframe")) {
          $this.countClicks();
          setTimeout(function () {
            document.querySelector("input").focus();
          }, 100);
        }
      });
    },

    countClicks() {
      this.clicks += 1;
    },

    abort() {
      this.aborted = true;
      this.finish();
    },

    loadResult() {
      if (this.testSelected._id !== this.resultSelected?.testId) {
        getResultByTestId(this.testSelected._id).then((response) => {
          const { data } = response;

          const actualResult = data.results.find((result) => {
            return result.tasks.every(
              (task) => Number(task.orderTask) !== Number(this.taskOrder)
            );
          });

          this.$store.dispatch({
            type: "result/setResult",
            value: actualResult,
          });
        });
      }
    },

    finish() {
      this.finishDate = dayjs();
      const diffTimeTask = this.finishDate.diff(this.initDate);
      if (this.taskHasResult) {
        addTaskResult({
          _id: this.resultSelected._id,
          orderTask: this.taskOrder,
          timeTask: dayjs(diffTimeTask).format("mm:ss"),
          aborted: this.aborted,
        })
          .then((response) => {
            this.testNextStep(response);
          })
          .catch((err) => {
            const { data } = err.response;
            this.alertConfig.text = data.error;
            this.alertConfig.show = true;
          });
      } else {
        registerResult({
          testId: this.testSelected._id,
          orderTask: this.taskOrder,
          timeTask: dayjs(diffTimeTask).format("mm:ss"),
          aborted: this.aborted,
        })
          .then((response) => {
            this.testNextStep(response);
          })
          .catch((err) => {
            const { data } = err.response;
            this.alertConfig.text = data.error;
            this.alertConfig.show = true;
          });
      }
    },
    testNextStep(response) {
      const { data } = response;
      this.$store.dispatch({
        type: "result/setResult",
        value: data.result,
      });
      if (!this.isLastTask) {
        this.nextTask();
      } else {
        this.susForm(data.result._id);
      }
    },
    nextTask() {
      this.$router.push({
        name: "TaskInit",
        params: {
          accessCode: this.testAccessCode,
          order: this.nextOrder,
        },
      });
    },
    susForm(resultId) {
      this.$router.push({
        name: "SusForm",
        params: {
          id: resultId,
        },
      });
    },
  },
};
