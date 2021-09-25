import Header from "../../components/Header";
import { listTests } from "../../services/test";

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
      items: [],
    };
  },

  mounted() {
    this.getTestList();
  },

  computed: {
    listTests() {
      return this.$data.items.map((test) => {
        return {
          ...test,
          realized: test.quantity > 0,
        };
      });
    },
  },

  methods: {
    getTestList() {
      listTests().then((response) => {
        const { data } = response;
        this.$data.items = data.list;
      });
    },
    openItem(item) {
      this.$store.dispatch({
        type: "test/setTest",
        value: item,
      });
      this.$router.push({ name: "TaskList", params: { id: item._id } });
    },
    editItem(item) {
      console.log("edit item", item);
    },
    deleteItem(item) {
      console.log("deleteItem", item);
    },
  },
};
