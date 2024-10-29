<template>
  <div>
    <h1>Tabla Multiplicar</h1>

    <div style="width: 50%; margin: 0 auto">
        <input class="form-control" 
        v-model="numero"
        type="number"
        placeholder="Introduce un numero">
      <button @click="calcular()" class="btn btn-outline-primary">Calcular</button>
    </div>
    

    <h2>Con método</h2>
    <div class="tarjeta">
      
      <div>
        <ul v-html="html">
        </ul>
      </div>
    </div>

    <hr />

    <h2>Con directivas</h2>
    <div class="tarjeta">
      <div>
        <ul v-for="num in arraytabla" :key="num">
            <li>{{num.index}} * {{numero}} = {{num.resultado}}</li>
        </ul>
      </div>
    </div>

    <hr />

    <h2>Con filters</h2>
    <div class="tarjeta">
      <div>
        <ul v-for="num in arraytabla" :key="num" >
          <li>{{$filters.getOperacion(numero, num.index)}} = {{$filters.getResultado(numero, num.index)}}</li>
        </ul>
      </div>
    </div>

    <hr />

    <h2>Con filters en TABLA</h2>
    <div class="tarjeta">
      <div>
        <table class="table table-hover" border="1" width="100%">
            <thead>
                <tr>
                <th>Operacion</th>
                <th>Resultado</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="num in arraytabla" :key="num">
                    <td>{{$filters.getOperacion(numero, num.index)}}</td>
                    <td>{{$filters.getResultado(numero, num.index)}}</td>
                </tr>
            </tbody>
            
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
      html: "",
      arraytabla:[]
    };
  },

  methods: {

    calcular(){

        this.arraytabla=[]
        this.html = ""
        for(let i = 1; i<=10;i++){
            let resultado = i*this.numero;
            this.html += "<li>"+i + " * " + this.numero + " = " + resultado+"</li>"

            //ahora para la directiva relleno el array
            this.arraytabla.push({
                index: i,
                resultado: resultado
            })
           
        }

    }



  },
};
</script>

<style>
</style>