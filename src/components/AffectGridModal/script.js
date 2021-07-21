import AffectGrid from "@/components/AffectGrid";
export default {
  name: "AffectGridModal",

  components: {
    AffectGrid,
  },

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
