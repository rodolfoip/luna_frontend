import Header from "../../components/Header";
import AffectGridModal from "../../components/AffectGridModal";

export default {
  name: "TestList",

  components: {
    Header,
    AffectGridModal,
  },

  data() {
    return {
      headers: [
        { text: "Tarefa", align: "start", value: "name" },
        { text: "Eficácia", value: "effectiveness" },
        { text: "Eficiência", value: "efficiency" },
        { text: "Satisfação", value: "satisfaction" },
        { text: "Affect Grid", value: "affectGrid", sortable: false },
        { text: "Ações", value: "actions", sortable: false },
      ],
      items: [
        {
          name: "Tarefa 1",
          effectiveness: 60,
          efficiency: 80,
          satisfaction: 60,
          affectGrid: 45,
        },
        {
          name: "Tarefa 2",
          effectiveness: 70,
          efficiency: 90,
          satisfaction: 65,
          affectGrid: 65,
        },
      ],
      affectGrid: {
        modal: false,
        posInMatriz: 0,
      },
    };
  },

  methods: {
    openItem(item) {
      console.log(item);
    },

    editItem(item) {
      console.log(item);
    },

    deleteItem(item) {
      console.log(item);
    },

    showAffectGrid(posInMatriz) {
      this.affectGrid.posInMatriz = posInMatriz;
      this.affectGrid.modal = true;
    },
  },
};
