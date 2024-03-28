// LogoutComponent.vue
<template>
    <button @click="logout">Logout</button>
</template>

<script>
import ApiService from './ApiService';

export default {
    methods: {
        async logout() {
            try {
                await ApiService.logout();
                localStorage.removeItem('token');
                // Redirect to login page or perform other actions after logout
            } catch (error) {
                console.error('Logout failed:', error);
            }
        }
    }
};
</script>
