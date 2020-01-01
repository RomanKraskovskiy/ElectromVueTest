<template>
    <form @submit.prevent="submitAddPost">
        <p><input type="text" v-model="title"></p>
        <p><input type="text" v-model="body"></p>
        <p><button type="submit">Add</button></p>
    </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name:'VuexTrainAdd',
    methods: {
        ...mapMutations(['addPost']),
        submitAddPost(){
            this.addPost({
                title: this.title,
                body: this.body,
                id: Date.now()
            });
            this.title = '';
            this.body = '';
        }
    },
    data () {
        return {
            title: '',
            body: ''
        }
    }
}
</script>