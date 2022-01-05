import { required } from "vuelidate/lib/validators";
import Header from "@/components/Header";
import { updateResult } from "@/services";

export default {
  name: "TaskForm",

  components: {
    Header,
  },

  computed: {
    resultId() {
      return this.$route.params.id;
    },
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

  methods: {
    saveSusForm() {
      this.$v.$touch();
      if (this.$v.$error && this.$v.$invalid) {
        return;
      }

      const susScore = this.calculateSusScore();

      updateResult({
        _id: this.resultId,
        sus: susScore,
      }).then((response) => {
        const { data } = response;
        this.affectGridPage(data.result._id);
      });
    },

    calculateSusScore() {
      let even = 0;
      let odd = 0;

      this.formQuestions.map((question, index) => {
        const questionNumber = index + 1;
        if (questionNumber % 2 === 0) {
          even = even + question.answer;
        } else {
          odd = odd + question.answer;
        }
      });

      odd = odd - 5;
      even = 25 - even;
      let susScore = odd + even;
      susScore = susScore * 2.5;

      return susScore;
    },

    affectGridPage(resultId) {
      this.$router.push({
        name: "AffectGrid",
        id: resultId,
      });
    },
  },

  validations: {
    formQuestions: {
      required,
      $each: {
        answer: {
          required,
        },
      },
    },
  },
};
