<template>
  <div>
    <h1>Collatz</h1>
    <input v-model="numero" type="number" placeholder="Introduce un numero" />
    <button @click="calcular">Ejecutar</button>
    <br />
    <br />
    <div class="contendor">
      <div
        class="tarjeta"
      >
        <ul>
          <li
            v-for="num in arraycollatz"
            :key="num"
            :class="{
              verde: $filters.parOimpar(num),
              rojo: !$filters.parOimpar(num),
            }"
            class="font-muy-grande"
          >
            {{ num }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",
  data() {
    return {
      numero: 0,
      arraycollatz: [],
    };
  },

  methods: {
    calcular() {
        this.arraycollatz=[]
      while (this.numero != 1) {
        if (this.numero % 2 == 0) {
          //es par
          this.numero = this.numero / 2;
          this.arraycollatz.push(this.numero);
        } else {
          //es impar
          this.numero = this.numero * 3 + 1;
          this.arraycollatz.push(this.numero);
        }
      }
    },
  },
};
</script>

<style>


@import "./../assets/css/styles";
</style>