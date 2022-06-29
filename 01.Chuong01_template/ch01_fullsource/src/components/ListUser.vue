<template>
    <div class="list-user">
        <user 
            v-for="user in listUser"
            v-bind:key="user.id"
            v-bind:user="user"
            v-on:deleteUser="deleteUser"
        />
        <!-- <user />
        <user />
        <user /> -->
    </div>
</template>

<script>
/*
App
    ListUser -> Không được quyền thay đổi arrListUser -> Truyền tiếp Event thêm một lần nữa ra App.vue
        User -> Truyền Event thông báo ra cho thằng ListUser
        User
        User

*/
import User from './User.vue';
export default {
    name: 'list-user',
    props: {
        listUser: {
            type: Array,
            default: []
        }
    },
    data() {
        return {

        }
    },
    components: {
        User
    },
    methods: {
        deleteUser(data) {
            // console.log('deleteUser ListUser.vue', data)
            this.$emit('deleteUserEvent', data);
        }
    }
}
</script>

<style>
    .list-user {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list-user .user {
        padding: 30px;
        /* flex: 1; */
        margin-bottom: 30px;
        border: 1px solid #333;
        width: calc(33.3333% - 20px)
    }
</style>
