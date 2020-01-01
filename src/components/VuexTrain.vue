<template>
    <div>
        <VuexTrainAdd/>
        <hr>
        <h1>Posts count: {{ postsCount }}</h1>
        <div class="vuex-test" v-for="post in validPosts" v-bind:key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>
<style scoped>
    .vuex-test{
        margin-top: 20px;
        width: 50%;
        margin-left: 25%;
        border: 1px solid grey;
        border-radius: 5px;
    }
    .vuex-test * {
        padding: 3px;
    }
</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import VuexTrainAdd from '@/components/VuexTrainAdd.vue';
export default {
    name: 'VuexTrain',
    computed: mapGetters(['allPosts', 'postsCount', 'validPosts']),
    methods: mapActions(['fetchPosts']),
    /*computed: {
        allPosts(){
            return this.$store.getters.allPosts;
        }
    },*/
    async mounted () {
        this.fetchPosts(10);
        //this.$store.dispatch('fetchPosts');
    },
    components: {
        VuexTrainAdd
    }
}
</script>
