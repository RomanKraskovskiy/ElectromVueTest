<template>
    <div class="obj-last">
        <div class="img"><ImgLoader :image="ob.img"/></div>
        <div class="name">{{ ob.name }}</div>
        <div class="desc">{{ ob.desc }}</div>
    </div>
</template>

<script>
import ImgLoader from "@/components/ImgLoader.vue"
import json from '@/assets/data.json'

export default {
    name: "ObjectLast",
    data() {
        return{
            ob: this.getObjById(this.id)
        }
    },
    props: {
        id: String
    },
    components: {
        ImgLoader
    },
    methods: {
        getObjById(id){
            console.log(id);
            return json.data[id];
        }
    }
}
</script>l