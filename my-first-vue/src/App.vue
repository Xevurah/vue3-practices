<script setup>
import { ref, computed } from 'vue'
const name = 'Dinamic Vue';
const Colores = ["red", "green", "blue"];
const Frutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
const FrutasObject = [
  { name: "Manzana", price: "$1.00", description: "Una manzana", },
  { name: "Pera", price: "$2.00", description: "Una pera", },
  { name: "Naranja", price: "$3.00", description: "Una naranja", },
];
const FrutasObjectVforVif = [
  { name: "Manzana", price: "$1.00", description: "Una manzana", stock: 0 },
  { name: "Pera", price: "$2.00", description: "Una pera", stock: 10 },
  { name: "Naranja", price: "$3.00", description: "Una naranja", stock: 20 },
];
const FrutaOnlyObject = { name: "Manzana", price: "$1.00", description: "Una manzana", };
const activo = false;
const handleClick = (message) => { console.log(message); };
const counter = ref(0);
const increment = () => counter.value++;
const decrement = () => counter.value--;
const reset = () => counter.value = 0;
const arrayFavoritos = ref([])
const add = () => {
  arrayFavoritos.value.push(counter.value)
}

//NOTE - Computed class
const classCounter = computed(() => {
  if (counter.value === 0) {
    return 'zero'
  }
  if (counter.value > 0) {
    return 'positive'
  }
  if (counter.value < 0) {
    return 'negative'
  }

})

//NOTE - Computed disabled
const blockBtnAdd = computed(() => {
  const numSearch = arrayFavoritos.value.find(num => num === counter.value)
  return numSearch || numSearch === 0;
})

</script>

<template>
  <div class="container text-center mt-4">
    <!-- NOTE - Title  -->
    <h1>Hi {{ name }}</h1>

    <br>
    <br>

    <!-- NOTE - Array -->
    <h2>{{ Colores }}</h2>

    <br>
    <br>

    <!-- NOTE - Array + Index -->
    <h2 :style="`color:${Colores[2]}`">I'm blue</h2>

    <br>
    <br>

    <!-- NOTE - v-if & v-else -->
    <h2 v-if="activo">I'm Active</h2>
    <p v-else-if="!activo">I'm Inactive</p>
    <p v-else>Status?</p>

    <br>
    <br>

    <!-- NOTE - v-for Array -->
    <ul>
      <li v-for="(fruta, index) in Frutas" :key="index">Index = {{ index }} - {{ fruta }}</li>
    </ul>

    <br>
    <br>

    <!-- NOTE - v-for Array of Objects -->
    <ul>
      <li v-for="(fruta, index) in FrutasObject" :key="index">Index = {{ index }} - {{ fruta.name }}
        <ul>
          <li>
            <h2>{{ fruta.price }}</h2>
            <p>{{ fruta.description }}</p>
          </li>
        </ul>
      </li>
    </ul>

    <br>
    <br>

    <!-- NOTE - v-for Object -->
    <ul>
      <li v-for="(value, property, index) in FrutaOnlyObject" :key="value">
        {{ index }} - {{ property }} : {{ value }}
      </li>
    </ul>

    <br>
    <br>

    <!-- NOTE v-for + v-if -->
    <ul>
      <template v-for="(fruta, index) in FrutasObjectVforVif" :key="index">
        <li v-if="fruta.stock > 0">Index = {{ index }} - {{ fruta.name }}
          <ul>
            <li>
              <h2>Price: {{ fruta.price }}</h2>
              <p>Description: {{ fruta.description }}</p>
              <p>Stock: {{ fruta.stock }}</p>
            </li>
          </ul>
        </li>
      </template>
    </ul>

    <br>
    <br>

    <!-- NOTE v-on or @'event' -->
    <button @click="handleClick('Click Izquierdo')">
      Click Izquierdo
    </button>
    <button @click.right.prevent="handleClick('Click Derecho')">
      <!-- NOTE prevent added - will not open the default window of right click -->
      Click Derecho
    </button>
    <button @click.middle="handleClick('Click Centro')">
      Click Centro
    </button>

    <br>
    <br>

    <!-- NOTE reactivity -->
    <!-- LINK - bootstrap  -->

    <div class="btn-group">
      <button @click="increment" class="btn btn-success">more</button>
      <button @click="decrement" class="btn btn-danger">less</button>
      <button @click="reset" class="btn btn-secondary">reset</button>

      <!-- NOTE reactive-computed array -->
      <button @click="add" :disabled="blockBtnAdd" class="btn btn-primary">add</button>
    </div>

    <br>
    <br>

    <!-- NOTE computed class on Script -->
    <h2 :class="classCounter">{{ counter }}</h2>

    <!-- NOTE reactive array -s-e-c-o-n-d -->
    <h2>{{ arrayFavoritos }}</h2>
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="(num, index) in arrayFavoritos" :key="index">
        {{ num }}
      </li>
    </ul>
  </div>
</template>

<style>
h1 {
  color: red
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.zero {
  color: cyan
}
</style>