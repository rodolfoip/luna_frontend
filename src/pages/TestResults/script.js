import Header from "@/components/Header";
import AffectGridModal from "@/components/AffectGridModal";
import { test } from "@/mixins/Test";
import { result } from "@/mixins/Result";

export default {
  name: "TestList",

  components: {
    Header,
    AffectGridModal,
  },

  mixins: [test, result],

  data() {
    return {
      headers: [
        { text: "N°", align: "start", value: "index" },
        { text: "Eficácia", value: "effectiveness" },
        { text: "Eficiência (Em horas)", value: "efficiency" },
        { text: "Satisfação", value: "sus" },
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
