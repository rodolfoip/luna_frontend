import Header from "@/components/Header";
import Notification from "@/components/Notification";
import { listTests, deleteTest } from "@/services/test";
import { getResultByTestId } from "@/services";

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
        { text: "Código", align: "start", value: "accessCode" },
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
    async getTestList() {
      listTests(this.userId).then((response) => {
        const { data } = response;
        this.$data.items = data.list.map((item) => {
          this.getResultByTest(item._id).then((results) => {
            item.quantity = results.data.results.length;
          });
          return item;
        });
      });
    },
    async getResultByTest(testId) {
      return await getResultByTestId(testId);
    },
    openTaskList(item) {
      this.$router.push({ name: "TaskList", params: { id: item._id } });
    },
    editItem(item) {
      this.$store.dispatch({
        type: "test/setTest",
        value: item,
      });
      this.$router.push({ name: "TestEdit", params: { id: item._id } });
    },
    deleteItem(item) {
      deleteTest(this.userId, item._id)
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
    logout() {
      this.$store.dispatch({
        type: "user/clearUserData",
      });

      this.$router.push("/");
    },
  },
};
