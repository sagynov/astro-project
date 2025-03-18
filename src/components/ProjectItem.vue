<script setup lang="ts">
import { ref } from "vue";
import Galleria from 'primevue/galleria';

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
    <div class="flex justify-center">
        <Galleria class="w-full" :value="props.data.gallery" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.src" class="w-24" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
    <div class=" mb-4">
        <div class="font-medium">PROJECT NAME:</div> 
        <div>{{ props.data.title }}</div>
        <div class="font-medium mt-2">PROJECT DESCRIPTION:</div> 
        <div>{{ props.data.description }}</div>
    </div>
</template>