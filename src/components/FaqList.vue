<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

const props = defineProps<{
  tabs: Array<any>
}>()

</script>

<template>
	<div class="p-4 sm:p-12">
		<div class="mb-4">
			<h3 class="text-white font-medium uppercase">FAQS</h3>
		</div>
		<div>
			<Accordion value="0">
				<AccordionPanel v-for="tab in props.tabs" :key="tab.data.slug" :value="tab.data.question">
					<AccordionHeader>{{ tab.data.question }}</AccordionHeader>
					<AccordionContent>
						<p class="m-0">{{ tab.data.answer }}</p>
					</AccordionContent>
				</AccordionPanel>
			</Accordion>
		</div>
	</div>
</template>