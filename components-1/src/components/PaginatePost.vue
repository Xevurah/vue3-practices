<script setup>
const prop = defineProps(['begin','end','maxLength']);
const emit = defineEmits(['next','previous'])
</script>

<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-primary" @click="emit('previous')" :disabled="begin<=0">Previous</button>
        <button type="button" class="btn btn-outline-primary" @click="emit('next')" :disabled="(end>=maxLength)">Next</button>
    </div>
</template>