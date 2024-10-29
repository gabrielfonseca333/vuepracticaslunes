import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

var app = createApp(App);
app.use(router).mount("#app");

app.config.globalProperties.$filters = {


  parOimpar(numero) {
    if (numero % 2 == 0) {
      return true;
    } else {
      return false;
    }
  },


  getOperacion(numero, index){

      return  index+" * "+numero;
    },

    getResultado(numero, index){
      let resultado = index*numero;
      return resultado
    }

  }


