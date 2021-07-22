import Header from "@/components/Header";
import AffectGrid from "@/components/AffectGrid";

export default {
  name: "TaskAffectGrid",

  components: {
    Header,
    AffectGrid,
  },

  data() {
    return {
      posInMatriz: 0,
    };
  },

  methods: {
    setPosition(position) {
      this.posInMatriz = position;
    },
  },
};
