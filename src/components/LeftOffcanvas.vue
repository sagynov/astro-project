<script setup lang="ts">
import { AlignRight } from 'lucide-vue-next';
import { ref } from 'vue';
import Drawer from 'primevue/drawer';
import { Button } from 'primevue';

const props = defineProps<{
  menu: Array<any>
}>()

const open = ref(false);

const close = () => {
    open.value = false;
}
</script>

<template>
	<Drawer v-model:visible="open" header="Menu">
		<div class="mt-6">
			<a class="block p-2" v-for="item in menu" :href="item.data.link" :key="item.data.slug">{{ item.data.name }}</a>
		</div>
	</Drawer>
	<Button @click="open = true"><AlignRight color="white" /></Button>
</template>