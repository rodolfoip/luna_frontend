import Header from "@/components/Header";
import AffectGridModal from "@/components/AffectGridModal";
import { test } from "@/mixins/Test";

export default {
  name: "TestList",

  components: {
    Header,
    AffectGridModal,
  },

  mixins: [test],

  data() {
    return {
      headers: [
        { text: "Tarefa", align: "start", value: "order" },
        { text: "Eficácia", value: "effectiveness" },
        { text: "Eficiência", value: "efficiency" },
        { text: "Satisfação", value: "satisfaction" },
        { text: "Affect Grid", value: "affectGrid", sortable: false },
      ],
      affectGrid: {
        modal: false,
        posInMatriz: 0,
      },
    };
  },

  methods: {
    showAffectGrid(posInMatriz) {
      this.affectGrid.posInMatriz = posInMatriz;
      this.affectGrid.modal = true;
    },
  },
};
