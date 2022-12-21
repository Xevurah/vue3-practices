<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        PokeAPI
      </router-link>
      <div>
        <router-link active-class="active" class="btn btn-outline-success me-2" to="/">Home</router-link>
        <router-link active-class="active" class="btn btn-outline-success" to="/pokemon">Pokemon</router-link>
      </div>
    </div>
  </nav>
  <div class="container mx-auto text-center">
    <RouterView />
  </div>
</template>

