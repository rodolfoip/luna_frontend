import Header from "../../components/Header";

export default {
  name: "TaskInit",

  components: {
    Header,
  },

  methods: {
    initTest() {
      const orderParam = this.$route.params.order;
      this.$router.push({ name: "Task", params: { order: orderParam } });
    },
  },
};
