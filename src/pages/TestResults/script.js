import Header from "@/components/Header";
import AffectGridModal from "@/components/AffectGridModal";
import IndividualResultModal from "@/components/IndividualResultModal";
import { test } from "@/mixins/Test";
import { result } from "@/mixins/Result";

export default {
  name: "TestList",

  components: {
    Header,
    AffectGridModal,
    IndividualResultModal,
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
      individualResult: {
        tasks: [],
        modal: false,
      },
    };
  },

  methods: {
    showAffectGrid(posInMatriz) {
      this.affectGrid.posInMatriz = posInMatriz;
      this.affectGrid.modal = true;
    },

    showIndividualResult(result) {
      this.individualResult.tasks = result.tasks;
      this.individualResult.modal = true;
    },
  },
};
