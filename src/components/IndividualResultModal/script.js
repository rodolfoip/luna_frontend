export default {
  name: "IndividualResultModal",

  props: {
    isExpanded: {
      type: Boolean,
      default: false,
    },
    tasks: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      headers: [
        { text: "N°", align: "start", value: "orderTask" },
        { text: "Tempo de realização", value: "timeTask" },
        { text: "Finalizou a tarefa?", value: "aborted" },
      ],
    };
  },

  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    },
  },
};
