import Header from "../../components/Header";

export default {
  name: "TestList",

  components: {
    Header,
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
  },
};
