<script setup lang="ts">
import { ref } from "vue";
import Image from 'primevue/image';

const props = defineProps<{
  data: any
}>()
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>

<template>
    <div class="mb-4">
        <div class="font-medium"><span class="uppercase">{{ props.data.title }}</span></div> 
        <div class="font-medium mt-2"><span>{{ props.data.description }}</span></div> 
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div v-for="item in props.data.gallery" :key="item.src">
            <Image :src="item.src" alt="Image" width="300" height="300" preview />           
        </div>
    </div>
</template>