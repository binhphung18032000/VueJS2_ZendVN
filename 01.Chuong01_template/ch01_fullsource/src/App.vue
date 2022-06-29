<template>
  <div id="app">
    <!-- <CompHeader></CompHeader> -->
    <!-- <CompHeader /> -->
    <!-- <comp-header v-bind:titleHeader="title"/> -->
    <div class="container">
      <button v-on:click="title = 'Học lập trình VueJs tại ZendVn'">Thay doi title từ Component App.vue</button>
      <comp-header 
        v-bind:listUser="listUser" 
        v-bind:title="title"
        v-on:changeTitleEvent="handleChangeTitle"
      />
      <list-user 
        v-on:deleteUserEvent="handleDeleteUser"
        v-bind:listUser="listUser" 
      />
      <comp-footer v-bind:title="title"/>
      <demo-ref />
      <demo-slot />
    </div>
  </div>
</template>

<script>
/*
App (title, listUser[])
  CompHeader (title)
  ListUser (listUser[])
    User (user - object)
    User (user - object)
  CompFooter (title)
  -> props -> Những data truyền từ Component cha vào Component con
    -> Cú pháp giống thuộc tính -> Ràng buộc thuộc tính
      -> Sử dụng v-bind:
*/
import ListUser from './components/ListUser.vue';
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
import DemoRef from './components/DemoRef.vue';
import DemoSlot from './components/DemoSlot.vue';
export default {
  name: 'app',
  data () {
    return {
      title: 'Hello VueJs - Header world',
      listUser: [
        { id: 100, email: 'test1@gmail.com', active: true },
        { id: 101, email: 'test2@gmail.com', active: false },
        { id: 102, email: 'test3@gmail.com', active: true },
        { id: 103, email: 'test4@gmail.com', active: true },
        { id: 104, email: 'test5@gmail.com', active: false },
        { id: 105, email: 'test6@gmail.com', active: true },
        { id: 106, email: 'test7@gmail.com', active: false },
      ]
    }
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser,
    DemoRef,
    DemoSlot
  },
  methods: {
    handleChangeTitle(data) {
      // this.title = 'Học lập trình VueJs -> Do Header thay đổi';
      this.title = data.title;
      // console.log('handleChangeTitle được gọi sau khi kích hoạt thành công App.vue', data);
    },
    handleDeleteUser(data) {
      var indexDelete = -1;
      this.listUser.forEach((u, idx) => {
        // console.log(u.id, idx, data.id);
        if(u.id === data.id) {
          indexDelete = idx;
        }
      });
      if(indexDelete != -1) {
        this.listUser.splice(indexDelete, 1);
        // console.log("test =", test);
      }
      // console.log('IndexDelete sau khi chạy vòng for', indexDelete);
      // console.log('handleDeleteUser trong App.vue', data);
    }
  },
  // End methods
  beforeCreate() {
    console.log('beforeCreate', this.title, document.querySelector('.container'));
  },
  created() {
    // Gọi API, Call Ajax
    console.log('created', this.title, document.querySelector('.container'));
  },
  beforeMount() {
    console.log('beforeMount', this.title, document.querySelector('.container'));
  },
  mounted() {
    // Nếu muốn sử dụng jQuery -> Chỉ truy xuất DOM được trong mouted -> Có thể sư dụng jQuery
    console.log('mounted', this.title, document.querySelector('.container').classList);
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.title);  
  },
  updated() {
    console.log('updated', this.title);
    // 
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    // Destroyed các thư viện của bên thứ 3.
    console.log('destroyed');
  }
}
/*
Props Down -> Truyền dữ liệu từ thằng cha vào con -> Thằng con chỉ được xài thôi. Không được thay đổi trực tiếp
Event Up -> Truyền thông điệp (Truyền sự kiện) thông báo cho Component cha biết là nó muốn thay đổi dữ liệu -> Nhiệm vụ của Component cha là nhận được thông điệp và tiến hành thay đổi data
  -> Custom Event trong VueJs

  click -> Sự kiện có sẵn trong VueJs
  v-on:click="changeTitle"
    'click' -> Tên của sự kiện
    'changeTitle' -> Hàm xử lí khi sự kiện được kích hoạt (Khi người dùng click)
*/
</script>

<style>
  * {
    box-sizing: border-box;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
    min-height: 3000px;
  }
</style>
