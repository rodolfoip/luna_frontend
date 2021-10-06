import { mapGetters } from "vuex";

import Header from "@/components/Header";
import { getTestById } from "@/services/test";
import { deleteTask } from "@/services/task";

export default {
  name: "TestList",

  components: {
    Header,
  },

  computed: {
    ...mapGetters({
      testSelected: "test/testSelected",
    }),
    testId() {
      return this.$route.params.id;
    },
  },

  data() {
    return {
      expanded: [],
      singleExpand: false,
      headers: [
        { text: "Ordem", align: "start", value: "order" },
        { text: "Description", value: "description" },
        { text: "Ações", value: "actions", sortable: false },
      ],
      items: [],
      testRegisterRoute: {
        name: "TaskRegister",
        params: {
          id: this.testId,
        },
      },
    };
  },

  mounted() {
    this.loadTasks();
  },

  methods: {
    loadTasks() {
      if (this.testSelected) {
        this.items = this.testSelected.tasks;
      } else {
        getTestById(this.testId).then((response) => {
          const { data } = response;
          this.items = data.usabilityTest.tasks;
        });
      }
    },
    openItem(item) {
      console.log(item);
    },
    editItem(item) {
      console.log(item);
    },
    deleteItem(item) {
      deleteTask({ testId: this.testId, order: item.order })
        .then(() => {
          console.log("success");
        })
        .catch(({ response }) => {
          console.error(response);
        })
        .finally(() => {
          this.loadTasks();
        });
    },
  },
};
