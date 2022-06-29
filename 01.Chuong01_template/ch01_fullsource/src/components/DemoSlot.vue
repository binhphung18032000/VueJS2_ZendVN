<template>
    <div class="demo-slot">
        <comp-tabs title="Tiêu đề của tab">
            <ul class="tabs-header">
                <li 
                    v-for="(item, index) in tabsHeader" 
                    v-bind:key="index"
                    v-on:click="setActiveTab(index)"
                    v-bind:class="{ active: tabActive == index }"
                >{{ item.text }}</li>
            </ul>
            <div class="tab-content tab1" v-if="tabActive === 0">
                <p>Tab1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus natus ex neque dicta porro libero, repellendus sapiente, nihil atque ipsam quam? Ipsam, quo incidunt eaque officiis magnam dolorem placeat assumenda!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam quae, veniam saepe ratione earum, beatae ab voluptas, dolore perspiciatis optio architecto cupiditate alias quas! Velit nostrum quasi officiis officia.</p>
            </div>
            <div class="tab-content tab2" v-else-if="tabActive === 1">
                <p>Tab2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis sint quas voluptate modi illum veniam atque? Autem aliquid est suscipit at enim, expedita adipisci quaerat illum repellat, quia explicabo!

                </p>
            </div>
            <div class="tab-content tab3" v-else>
                <p>Tab3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi dicta quia repudiandae non qui aut id omnis reprehenderit animi? Fugiat expedita ipsam eveniet suscipit nisi hic doloribus veritatis, modi eligendi.</p>
            </div>
        </comp-tabs>
    </div>
</template>

<script>
import CompTabs from './CompTabs.vue';
export default {
    name: 'demo-slot',
    components: {
        CompTabs
    },
    data() {
        return {
            tabsHeader: [
                { text: 'Tab1' },
                { text: 'Tab2' },
                { text: 'Tab3' },
            ],
            tabActive: 1
        }
    },
    methods: {
        setActiveTab(index) {
            console.log('setActiveTab: ', index);
            this.tabActive = index;
        }
    }
}
</script>

<style>
    .demo-slot {
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000;
    }

</style>
