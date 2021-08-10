export default {
  name: "Task",

  data() {
    return {
      prototype_link: "https://rodolfoip.github.io/CalculadoraPriceSAC/",
      initDate: "",
      finishDate: "",
      clicks: 0,
      prototypeIframe: null,
    };
  },

  mounted() {
    this.prototypeIframe = document.getElementById("show-iframe");
    const deviceHeight = document.documentElement.clientHeight;
    this.prototypeIframe.style.height = Number(deviceHeight) + 100 + "px";
  },

  methods: {
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
