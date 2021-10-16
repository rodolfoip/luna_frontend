import Header from "@/components/Header";
import Notification from "@/components/Notification";
import { listTests, deleteTest } from "@/services/test";

export default {
  name: "TestList",

  components: {
    Header,
    Notification,
  },

  data() {
    return {
      alertConfig: {
        show: false,
        timeout: 2000,
        type: "success",
        text: "Teste excluído com sucesso",
      },
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
    openResults(item) {
      this.$router.push({ name: "TestResults", params: { id: item._id } });
    },
    editItem(item) {
      this.$store.dispatch({
        type: "test/setTest",
        value: item,
      });
      this.$router.push({ name: "TestEdit", params: { id: item._id } });
    },
    deleteItem(item) {
      deleteTest(item._id)
        .then(() => {
          this.alertConfig.show = true;
        })
        .catch(({ response }) => {
          this.alertConfig.text = response.data.error;
          this.alertConfig.type = "red accent-4";
          this.alertConfig.show = true;
        })
        .finally(() => {
          this.getTestList();
        });
    },
  },
};
