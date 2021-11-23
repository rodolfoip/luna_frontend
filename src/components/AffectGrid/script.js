export default {
  name: "AffectGrid",

  props: {
    posInMatriz: {
      type: Number,
      default: 45,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      positionSelected: null,
    };
  },

  computed: {
    activePosition() {
      if (this.clickable) {
        return this.positionSelected;
      }
      return this.posInMatriz;
    },
  },

  methods: {
    onClickPosition(position) {
      if (this.clickable) {
        this.positionSelected = position;
        this.$emit("on-click-position", position);
      }
    },
  },
};
