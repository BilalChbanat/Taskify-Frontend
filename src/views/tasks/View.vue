<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
                <div class="flex items-center justify-between">
                    <RouterLink to="tasks/create"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Create New
                        Task</RouterLink>
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Manage My tasks
                    </h2>
                </div>
                <table class="table-fixed w-full">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="px-4 py-2 w-20">No.</th>
                            <th class="px-4 py-2">Name</th>
                            <th class="px-4 py-2">Description</th>
                            <th class="px-4 py-2">Status</th>
                            <th class="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="tasks.length > 0">
                            <tr v-for="(task, index) in tasks" :key="task.id">
                                <td class="border px-4 py-2">{{ task.id }}</td>
                                <td class="border px-4 py-2">{{ task.name }}</td>
                                <td class="border px-4 py-2">{{ task.description }}</td>
                                <td class="border px-4 py-2">{{ task.status }}</td>
                                <td class="border px-4 py-2">
                                    <RouterLink :to="{ path: '/tasks/' + task.id + '/edit' }"
                                        class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                        Edit
                                    </RouterLink>
                                    <button type="button" @click="deleteTask(task.id)"
                                        class="bg-red-400 ml-2 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td class="border px-4 py-2" colspan="5">No tasks available</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'tasks',
    data() {
        return {
            tasks: []
        }
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        async getTasks() {
            try {
                const accessToken = localStorage.getItem('token');
                const response = await axios.get('http://127.0.0.1:8000/api/V1/tasks', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                this.tasks = response.data.data;
                console.log(response);

            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        },

        async deleteTask(taskId) {
            if (confirm('Are you sure you want to delete this task?')) {
                try {
                    const response = await axios.delete(`http://127.0.0.1:8000/api/V1/tasks/${taskId}`);
                    alert(response.data.message);
                    // Remove the deleted task from the local tasks array
                    this.tasks = this.tasks.filter(task => task.id !== taskId);
                } catch (error) {
                    if (error.response && error.response.status === 404) {
                        alert(error.response.data.message);
                    } else {
                        console.error('Error deleting task:', error);
                    }
                }
            }
        }
    }
}
</script>
