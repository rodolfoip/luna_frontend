import Header from "../../components/Header";

export default {
  name: "TestList",

  components: {
    Header,
  },

  data() {
    return {
      headers: [
        { text: "Nome", align: "start", value: "name" },
        { text: "Realizado?", value: "realized" },
        { text: "Qtd realizados", value: "quantity" },
        { text: "Ações", value: "actions", sortable: false },
      ],
      items: [
        {
          name: "Teste 1",
          realized: false,
          quantity: 10,
        },
        {
          name: "Teste 2",
          realized: true,
          quantity: 15,
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
