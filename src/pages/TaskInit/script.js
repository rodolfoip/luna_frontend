import Header from "@/components/Header";
import { participant } from "@/mixins/Participant";

export default {
  name: "TaskInit",

  components: {
    Header,
  },

  mixins: [participant],

  computed: {
    taskOrder() {
      return this.$route.params.order;
    },
    actualTask() {
      return this.tasks.find((task) => {
        return Number(task.order) === Number(this.taskOrder);
      });
    },
  },

  methods: {
    initTest() {
      this.$router.push({ name: "Task", params: { order: this.taskOrder } });
    },
  },
};
