<script setup lang="ts">
import { ref } from "vue";
import Carousel from 'primevue/carousel';

const props = defineProps<{
  projects: any
}>()
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<template>
    <Carousel :showNavigators="false" :showIndicators="true" :value="projects" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="5000">
        <template #item="slotProps">
            <div class="project-item m-2 p-4 h-[250px] sm:h-[350px] bg-center bg-cover" :style="'background-image: url('+slotProps.data.data.image+')'">
                <a :href="'/projects/'+slotProps.data.id+'/'" class="project-title uppercase font-medium text-4xl text-gray-700">
                    <div>{{slotProps.data.data.title}}</div>
                </a>
            </div>
        </template>
    </Carousel>
</template>