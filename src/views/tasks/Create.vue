<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
                <form class="space-y-4 md:space-y-6" @submit.prevent="saveTask">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" id="name" v-model="model.task.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            placeholder="Task ...">
                    </div>
                    <div>
                        <label for="description"
                            class="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <input type="text" id="description" v-model="model.task.description"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            placeholder="Description" required>
                    </div>
                    <div>
                        <label for="status" class="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <input type="text" v-model="model.task.status" id="status" placeholder="Done ..."
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            required>
                    </div>
                    <button type="submit"
                        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">SUBMIT</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const model = ref({
    task: {
        name: '',
        description: '',
        status: '',
    }
});

const saveTask = async () => {
    try {
        console.log(model.value.task.status);
        const response = await axios.post('http://127.0.0.1:8000/api/V1/tasks', model.value.task);
        if (response.data.status == 200) {
            model.value.task.name = '';
            model.value.task.description = '';
            model.value.task.status = '';

            console.log(response.data.message);

            router.push('/tasks');
        }
        else {
            console.error(response.data.message);
            router.push('/tasks');
        }
    } catch (error) {
        console.error(error);
        router.push('/tasks');
    }
}
</script>