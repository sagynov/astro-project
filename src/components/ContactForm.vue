<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';

const toast = useToast();


const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');

const submit = () => {
    name.value = '';
    email.value = '';
    message.value = '';
    toast.add({ severity: 'success', summary: 'Application sent', detail: 'We will contact you soon', group: 'tl', life: 3000 });
}
</script>

<template>
    <Toast position="top-left" group="tl" />
    <div class="grid sm:grid-cols-2 gap-4">
        <InputText type="text" class="col-span-2" v-model="name" placeholder="Name" />
        <InputText type="text" v-model="phone" placeholder="Phone" />
        <InputText type="text" v-model="email" placeholder="Email" />
        <Textarea v-model="message" class="col-span-2" rows="5" placeholder="Message" cols="30" />
        <Button @click="submit" label="Send Message" class="col-span-2 !p-3" />
    </div>
</template>