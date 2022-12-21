<script setup>
import { useRoute, useRouter } from 'vue-router';

//NOTE - Import from getData.js
import { useGetData } from '@/composables/getData'

const router = useRouter();
const route = useRoute();

//NOTE - Destructuration
const { data, loading, getData, error } = useGetData()

const back = () => {
    router.push('/pokemon')
}

// NOTE - Maked Composable src/composables/getData.js
// const getData = async () => {
//     try {
//         const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
//         console.log(data);
//         poke.value = data
//     } catch (e) {
//         console.log(e);
//         poke.value = null;
//     }
// };

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
    <p v-if="loading">Loading information...</p>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="">
        <h1 class= "text-capitalize">{{ $route.params.name }}</h1>
    </div>
    <div class="alert alert-danger mt-2" v-if="error">This Pokemon Doesn't Exist</div>
    <button @click="back" class="btn btn-outline-success">Back</button>
</template>