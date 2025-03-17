<script setup lang="ts">
import { AlignRight } from 'lucide-vue-next';
import { ref } from 'vue';
const open = ref(false);

const close = () => {
    open.value = false;
}
</script>

<template>
    <div @click="open = true" class="flex justify-end sm:hidden bg-[#ff5e14] p-2 cursor-pointer">
		<AlignRight color="white" />
	</div>
	<div :class="[{'translate-x-[500px]': !open, 'translate-x-0': open}, 'flex transition-transform duration-500 bg-neutral-900 text-white w-[200px] p-4 flex-col absolute h-full top-0 right-0 z-10']">
		<button class="cursor-pointer" @click="close">X</button>
        <div class="mt-6">
			<div>Menu 1</div>
			<div>Menu 2</div>
		</div>
	</div>
</template>