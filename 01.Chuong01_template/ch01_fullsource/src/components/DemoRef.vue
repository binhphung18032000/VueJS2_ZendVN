<template>
    <div class="demo-ref">
        <input 
            ref="fileInputAvatar"
            type="file" 
            style="display: none;">
            
        <h1>DemoRef</h1>
        <button 
            v-on:click="handleClickInputFile"
            class="avatar">Thay đổi Avatar</button>
        
    </div>
</template>

<script>
export default {
    name: 'demo-ref',
    data() {
        return {

        }
    },
    methods: {
        handleClickInputFile(e) {
            this.$refs.fileInputAvatar.click()
            // console.log();
        }
    }
}
</script>

<style>
    .demo-ref {
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000;
    }
    .avatar {
        color: #fff;
        border: 2px solid #333;
        padding: 12px 15px;
        background-color: #333;
        transition: all .3s ease;
    }
    .avatar:hover {
        color: #333;
        background-color: #fff;
    }
</style>
