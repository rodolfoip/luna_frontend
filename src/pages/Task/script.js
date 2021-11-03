import { test } from "@/mixins/Test";

export default {
  name: "Task",

  mixins: [test],

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
    };
  },

  methods: {
    onLoadTask() {
      this.prototypeIframe = document.getElementById("show-iframe");
      const deviceHeight = document.documentElement.clientHeight;
      this.prototypeIframe.style.height = Number(deviceHeight) + 100 + "px";
    },
    onLoadPrototype() {
      this.initDate = Date.now();
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
      console.log("abort");
    },

    finish() {
      this.finishDate = Date.now();
    },
  },
};
