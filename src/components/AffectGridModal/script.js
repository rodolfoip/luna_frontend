export default {
  name: "AffectGridModal",

  props: {
    isExpanded: {
      type: Boolean,
      default: false,
    },
    posInMatriz: {
      type: Number,
      required: true,
    },
  },

  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    },
  },
};
