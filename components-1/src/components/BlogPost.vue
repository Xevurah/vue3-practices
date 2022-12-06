<script setup>
// const props = defineProps(['title', 'id', 'body','colorText'])
// console.log(props.title)
// console.log(props.id)

//NOTE - defineProps
defineProps({
    title: String,
    id: Number,
    body: {
        type: String,
        default: "Without description"
    },
    //REVIEW - changeFavoriteName as prop
    //changeFavoriteName: Function
})

//NOTE - defineEmits - personalizable emit
const emit = defineEmits(['changeFavoriteName'])

</script>
<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ id }} - {{ title }}</h5>
            <p>{{ body }}</p>
            
            <!-- NOTE personalizable emit - personalizable event -->
            <button @click="emit('changeFavoriteName', title)" class="btn btn-outline-primary">Favorite</button>

            <!-- NOTE passthrough prop function -->
            <!-- REVIEW checkout change on defineProps -->
            <!-- <button @click="changeFavoriteName(title)" class="btn btn-primary">Favorito</button> -->
        </div>
    </div>
</template>