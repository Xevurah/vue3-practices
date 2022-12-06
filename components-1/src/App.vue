<!-- REVIEW - complete form of script setup
<script>
import { ref } from 'vue';

export default{
  setup(){
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    }
    return {
      counter,
      increment
    }
  }
}
</script> -->

<!-- REVIEW - OPTION API <script>
export default {
  data(){
    return {
      counter: 0
    }
  },
  methods:{
    increment(){
      this.counter ++
    }
  }
}
</script> -->

<!-- SECTION COMPOSITION API - Components -->
<script setup>
import ButtonCounter from './components/ButtonCounter.vue'
import BlogPost from './components/BlogPost.vue';
import PaginatePost from './components/PaginatePost.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import { onMounted, ref } from 'vue';
import { computed } from '@vue/reactivity';


const posts = ref([])

//NOTE - reactive reference for slice
const postXpage = 10;
const begin = ref(0);
const end = ref(postXpage);

//NOTE - loading
const loading = ref(true);

const maxLength = computed(() => posts.value.length);

const favorito = ref('')

const changeFavorite = (title) => {
  favorito.value = title;
}

const next = () => {
  begin.value += postXpage;
  end.value += postXpage;
}
const previous = () => {
  begin.value += -postXpage;
  end.value += -postXpage;
}

// //REVIEW - async - await
// onMounted(async () => {
//   // loading.value = true;
//   //REVIEW - try - catch
//   try {
//     //REVIEW - fetch
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     posts.value = await res.json()
//   } catch (error) {
//     console.log(error)
//   } finally {
//     // REVIEW - only for visualization
//     // setTimeout(()=>{loading.value=false},2000)
//     loading.value = false
//   }
// })

//REVIEW - fetch
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => posts.value = data)
//   .finally(() => {
//     // REVIEW - only for visualization
//     // setTimeout(()=>{loading.value=false},2000)
//     loading.value = false
//   })

//NOTE - correct way of using - fetch - async - await - try - catch
//NOTE - async - await
const fetchData = async () => {
  try {
    //NOTE - fetch
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  } catch (error) {
    console.log(error)
  } finally {
    // NOTE - only for visualization
    // setTimeout(()=>{loading.value=false},2000)
    loading.value = false
  }
}

fetchData()

</script>

<template>
  <!-- NOTE - loading -->
  <LoadingSpinner v-if="loading" />

  <div class="container" v-else>
    <h1>APP</h1>
    <h2>My Favorite Post: {{ favorito }}</h2>

    <!-- NOTE - paginate througt posts -->
    <PaginatePost class="mb-2" @next="next" @previous="previous" :begin="begin" :end="end" :maxLength="maxLength" />

    <!-- NOTE - Example:component -->
    <ButtonCounter v-if="false" />

    <!-- NOTE - v-for - restapi - components - defineprops - compositionapi - prop function -->
    <!-- REVIEW change from emit to prop function -->
    <!-- <BlogPost v-for="post in posts" :key="post.id" :title="post.title" :id="post.id" :body="post.body"
       :changeFavoriteName="changeFavorite"></BlogPost> -->

    <!-- NOTE - v-for - restapi - components - defineprops - compositionapi - personalizable event -->
    <BlogPost v-for="post in posts.slice(begin, end)" :key="post.id" :title="post.title" :id="post.id" :body="post.body"
      @changeFavoriteName="changeFavorite"></BlogPost>

  </div>
</template>