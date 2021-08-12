import Header from "../../components/Header";

export default {
  name: "TaskInit",

  components: {
    Header,
  },

  methods: {
    initTest() {
      const orderParam = this.$router.params.order;
      this.$router.push({ name: "Task", params: { order: orderParam } });
    },
  },
};
