<script setup>
import { RouterLink } from 'vue-router';

//NOTE - Import from getData.js
import { useGetData } from '@/composables/getData'

//NOTE - Destructuration
const { data, loading, getData, error } = useGetData()

// NOTE - Maked Composable src/composables/getData.js
// const getData = async () => {
//   try {
//     const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
//     pokemon.value = data.results
//   } catch (e) {
//     console.log(e);
//   }
// }

getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>
  <h1>Pokemon</h1>
  <p v-if="loading">Loading information...</p>
  <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
  <div v-if="data">
    <ul class="list-group">
      <li class="list-group-item" v-for="poke in data.results">
        <router-link class="text-capitalize" :to="`/pokemon/${poke.name}`">{{ poke.name }}</router-link>
      </li>
    </ul>
    <div class="mt-2">
      <button :disabled="!data.previous" class="btn btn-success me-2" @click="getData(data.previous)">Previous</button>
      <button :disabled="!data.next" class="btn btn-success" @click="getData(data.next)">Next</button>
    </div>
  </div>
</template>