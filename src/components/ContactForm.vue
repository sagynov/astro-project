<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import { ref } from 'vue';

const name = ref(null);
const email = ref(null);
const message = ref(null);
</script>

<template>
    <div class="grid sm:grid-cols-2 gap-4">
        <InputText type="text" v-model="name" placeholder="Name" />
        <InputText type="text" v-model="email" placeholder="Email" />
        <Textarea v-model="message" class="col-span-2" rows="5" placeholder="Message" cols="30" />
        <Button label="Send Message" class="col-span-2 !p-3" />
    </div>
</template>