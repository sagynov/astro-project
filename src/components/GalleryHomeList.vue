<script setup lang="ts">
import Image from 'primevue/image';
const props = defineProps<{
  gallery: Array<any>,
}>()
</script>

<template>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div v-for="{data} in gallery.slice(0, 8)" :key="data.slug">
            <Image :src="data.image" alt="Image" width="300" height="300" preview />           
        </div>
    </div>
</template>