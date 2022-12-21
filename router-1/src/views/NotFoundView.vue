<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
            <use xlink:href="#exclamation-triangle-fill" />
        </svg>
        <div class="d-grid gap-2 d-md-block">
            <h1>Error 404 Page Not Found</h1>
            <router-link to="/"><button class="btn btn-outline-danger">Go Back</button></router-link>
        </div>
    </div>
</template>