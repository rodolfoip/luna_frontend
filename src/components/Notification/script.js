export default {
  name: "Notification",

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: Number,
      default: 2000,
    },
    type: {
      type: String,
      default: "success",
    },
    text: {
      type: String,
      required: true,
    },
  },

  methods: {
    hideNotification() {
      this.$emit("hide-notification");
    },
  },
};
