import { required, numeric, between } from "vuelidate/lib/validators";
import Header from "@/components/Header";
import AffectGrid from "@/components/AffectGrid";
import Notification from "@/components/Notification";
import { getResultById, updateResult } from "@/services";

export default {
  name: "TaskAffectGrid",

  components: {
    Header,
    AffectGrid,
    Notification,
  },

  computed: {
    resultId() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.loadResult();
  },

  data() {
    return {
      posInMatriz: null,
      result: null,
      alertConfig: {
        show: false,
        type: "error",
        text: "Selecione um valor na matriz",
      },
    };
  },

  methods: {
    setPosition(position) {
      this.posInMatriz = position;
    },
    loadResult() {
      getResultById(this.resultId)
        .then((response) => {
          const { data } = response;
          this.result = data.result;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    saveAffectGrid() {
      this.$v.$touch();
      if (this.$v.$error && this.$v.$invalid) {
        this.alertConfig.show = true;
        return;
      }
      updateResult({
        _id: this.resultId,
        sus: this.result.sus,
        affectGrid: this.posInMatriz,
      })
        .then(() => {
          this.alertConfig = {
            show: true,
            type: "success",
            text: "Affect Grid salvo com sucesso",
          };
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  validations: {
    posInMatriz: {
      required,
      numeric,
      between: between(1, 81),
    },
  },
};
