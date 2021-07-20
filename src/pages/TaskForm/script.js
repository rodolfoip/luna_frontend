import Header from "@/components/Header";

export default {
  name: "TaskForm",

  components: {
    Header,
  },

  data() {
    return {
      formQuestions: [
        {
          label: "Eu acho que gostaria de usar esse sistema com frequência.",
          answer: "",
        },
        {
          label: "Eu acho o sistema desnecessariamente complexo.",
          answer: "",
        },
        {
          label: "Eu achei o sistema fácil de usar.",
          answer: "",
        },
        {
          label:
            "Eu acho que precisaria de ajuda de uma pessoa com conhecimentos técnicos para usar o sistema.",
          answer: "",
        },
        {
          label:
            "Eu acho que as várias funções do sistema estão muito bem integradas.",
          answer: "",
        },
        {
          label: "Eu acho que o sistema apresenta muita inconsistência.",
          answer: "",
        },
        {
          label:
            "Eu imagino que as pessoas aprenderão como usar esse sistema rapidamente.",
          answer: "",
        },
        {
          label: "Eu achei o sistema atrapalhado de usar.",
          answer: "",
        },
        {
          label: "Eu me senti confiante ao usar o sistema.",
          answer: "",
        },
        {
          label:
            "Eu precisei aprender várias coisas novas antes de conseguir usar o sistema.",
          answer: "",
        },
      ],
    };
  },
};
