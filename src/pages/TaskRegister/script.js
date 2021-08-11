import Header from "../../components/Header";

export default {
  name: "TaskRegister",

  components: {
    Header,
  },

  methods: {
    save() {
      // TODO - save task
    },

    addNewTask() {
      // TODO - save task and clean form
      this.save();
    },
  },
};
