import { mapGetters } from "vuex";

import Header from "../../components/Header";
import { getTestById } from "../../services/test";

export default {
  name: "TestList",

  components: {
    Header,
  },

  computed: {
    ...mapGetters({
      testSelected: "test/testSelected",
    }),
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
        getTestById(this.$route.params.id).then((response) => {
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
      console.log(item);
    },
  },
};
