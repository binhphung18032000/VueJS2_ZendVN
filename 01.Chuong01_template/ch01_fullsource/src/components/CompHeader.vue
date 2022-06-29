<template>
    <header>
        <ul>
            <li v-for="user in listUser" v-bind:key="user.id">{{ user.email }}</li>
        </ul>
        <h1>{{ title }} <br> 
            <button v-on:click="changeTitleHeader">Thay đổi title từ CompHeader.vue</button>
        </h1>
    </header>
</template>

<script>
export default {
    name: 'comp-header',
    props: {
        title: String,
        listUser: {
            type: Array,
            default: []
        }
    },

    data() {
        return {
            
        }
    },
    methods: {
        changeTitleHeader(e) {
            // Không được phép thay đổi trực tiếp props từ component cha
            // -> Truyền sự kiện thông báo ra bên ngoài
            // -> Kích hoạt sự kiện 'changeTitleEvent' trong CompHeader.vue
            // -> Khi kích hoạt function bên ngoài App.vue nó sẽ chạy
            // -> Khi function đó được chạy -> THay đổi dữ liệu
            console.log('Trước khi kích hoạt sự kiện changeTitleEvent trong CompHeader.vue');
            var data = {
                title: 'test -> data truyền thông qua biến event'
            }
            this.$emit('changeTitleEvent', data)
            console.log('Sau khi kích hoạt sự kiện changeTitleEvent trong CompHeader.vue');
            // this.title = 'Học lập trình Front End';
            // console.log(this.title);
        }
    }
}
</script>

<style>

</style>
