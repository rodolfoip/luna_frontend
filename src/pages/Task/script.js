import { participant } from "@/mixins/Participant";
import dayjs from "dayjs";
import { registerResult } from "@/services";

export default {
  name: "Task",

  mixins: [participant],

  computed: {
    taskOrder() {
      return this.$route.params.order;
    },
    actualTask() {
      return this.tasks.find((task) => {
        return Number(task.order) === Number(this.taskOrder);
      });
    },
  },

  data() {
    return {
      prototype_link: "https://rodolfoip.github.io/CalculadoraPriceSAC/",
      initDate: "",
      finishDate: "",
      clicks: 0,
      prototypeIframe: null,
      aborted: false,
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

    finish() {
      this.finishDate = dayjs();
      const diffTimeTask = this.finishDate.diff(this.initDate);
      registerResult({
        testId: this.testSelected._id,
        orderTask: this.taskOrder,
        timeTask: dayjs(diffTimeTask).format("mm:ss"),
        aborted: this.aborted,
        clicks: this.clicks,
      }).then((response) => {
        const { data } = response;
        this.susFormPage(data.result._id);
      });
    },
    susFormPage(resultId) {
      this.$router.push({
        name: "TaskForm",
        params: {
          id: resultId,
        },
      });
    },
  },
};
