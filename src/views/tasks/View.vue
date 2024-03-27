<template>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
                <div class="flex items-center justify-between">
                    <button wire:click="create()"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Create New
                        Post</button>
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Manage My tasks
                    </h2>
                </div>
                <table class="table-fixed w-full">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="px-4 py-2 w-20">No.</th>
                            <th class="px-4 py-2">Name</th>
                            <th class="px-4 py-2">description</th>
                            <th class="px-4 py-2">status</th>
                            <th class="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border px-4 py-2">1</td>
                            <td class="border px-4 py-2">Title goes here</td>
                            <td class="border px-4 py-2">Body</td>
                            <td class="border px-4 py-2">doing</td>
                            <td class="border px-4 py-2">
                                <button wire:click="edit({{ $post->id }})"
                                    class="bg-blue-400 ml-6 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Edit</button>
                                <button wire:click="delete({{ $post->id }})"
                                    class="bg-red-400 ml-6 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </td>
                        </tr>
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
    data(){
        return {
            tasks: []
        }
    },
    mounted(){
        this.getTasks();
    },
    methods:{
        getTasks(){
            axios.get('http://127.0.0.1:8000/api/V1/tasks').then(res => {
                console.log(res);
            });
        }
    },
}
</script>