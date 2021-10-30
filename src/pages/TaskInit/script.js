import Header from "@/components/Header";
import { test } from "@/mixins/Test";

export default {
  name: "TaskInit",

  components: {
    Header,
  },

  mixins: [test],

  computed: {
    taskOrder() {
      return this.$route.params.order;
    },
    actualTask() {
      return this.tasks.find((task) => {
        return task.order === this.taskOrder;
      });
    },
  },

  methods: {
    initTest() {
      this.$router.push({ name: "Task", params: { order: this.taskOrder } });
    },
  },
};
