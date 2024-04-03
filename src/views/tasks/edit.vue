<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
                <form class="space-y-4 md:space-y-6" @submit.prevent="updateTask">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" id="name" v-model="model.task.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            placeholder="Task ..." required>
                        <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
                    </div>
                    <div>
                        <label for="description"
                            class="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <input type="text" id="description" v-model="model.task.description"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            placeholder="Description" required>
                        <span v-if="errors.description" class="text-red-500">{{ errors.description }}</span>
                    </div>
                    <div>
                        <label for="status" class="block mb-2 text-sm font-medium text-gray-900">Status</label>
                        <input type="text" v-model="model.task.status" id="status" placeholder="Done ..."
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            required>
                        <span v-if="errors.status" class="text-red-500">{{ errors.status }}</span>
                    </div>
                    <button type="submit"
                        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">UPDATE</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    name: 'taskedit',
    data() {
        return {
            taskId: '',
            errors: {},
            model: {
                task: {
                    name: '',
                    description: '',
                    status: '',
                }
            }
        }
    },
    mounted() {
        this.taskId = this.$route.params.id;
        this.getTaskData(this.$route.params.id);
    },
    methods: {
        getTaskData(taskId) {
            axios.get(`http://127.0.0.1:8000/api/V1/tasks/${taskId}`).then(res => {
                this.model.task = res.data.task;
            }).catch(error => {
                if (error.response && error.response.status === 404) {
                    console.error('Task not found:', error.response.data.message);
                } else {
                    console.error('Error fetching task:', error.message);
                }
            });
        },
        updateTask() {
            axios.put(`http://127.0.0.1:8000/api/V1/tasks/${this.taskId}`, this.model.task).then(res => {
                console.log(res.data);
                alert(res.data.message);
                this.errors = {}; // Clear any previous errors
            }).catch(error => {
                if (error.response && error.response.status === 422) {
                    this.errors = error.response.data.errors;
                } else if (error.response && error.response.status === 404) {
                    alert(error.response.data.message);
                } else {
                    console.error('Update failed:', error.message);
                }
            });
        }
        
    }
}
</script>
