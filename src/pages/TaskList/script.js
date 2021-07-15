import Header from "../../components/Header";

export default {
  name: "TestList",

  components: {
    Header,
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
      items: [
        {
          order: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit quam non molestie congue. Morbi sodales, dolor et vestibulum volutpat, urna odio tristique sapien, quis vestibulum sem turpis at turpis. Suspendisse ac dolor et neque bibendum fringilla nec sit amet justo.",
        },
        {
          order: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit quam non molestie congue. Morbi sodales, dolor et vestibulum volutpat, urna odio tristique sapien, quis vestibulum sem turpis at turpis. Suspendisse ac dolor et neque bibendum fringilla nec sit amet justo.",
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
