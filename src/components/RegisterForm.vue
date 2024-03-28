<template>
    <!-- //////////// -->
    <section class="flex flex-col items-center pt-6">
        <div
            class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Create an
                    account
                </h1>
                <form class="space-y-4 md:space-y-6" @submit.prevent="register">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your full
                            name</label>
                        <input type="text" id="name" v-model="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                            placeholder="Emelia Erickson">
                    </div>
                    <div>
                        <label for="E-mail"
                            class="block mb-2 text-sm font-medium text-gray-900 ">E-mail</label>
                        <input type="email" id="E-mail" v-model="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                            placeholder="E-mail" required>
                    </div>
                    <div>
                        <label for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" v-model="password" id="password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                            required="">
                    </div>
                    <button type="submit"
                        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create
                        an account</button>
                    <p class="text-sm font-light text-gray-500 ">Already have an account? <RouterLink
                            class="font-medium text-blue-600 hover:underline " to="/login">Sign in
                            here</RouterLink>
                    </p>
                </form>
            </div>
        </div>
    </section>
    <!-- //////////// -->
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                console.log('Registration successful:', response.data);
                // Redirect to login page or perform other actions after registration
            } catch (error) {
                console.error('Registration failed:', error);
            }
        }
    }
};
</script>
