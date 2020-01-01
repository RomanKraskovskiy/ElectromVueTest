<template>
    <router-link :to="'/objectlast/' + id">
        <div class="object-block">
            <div class="img"><ImgLoader :image="ob.img"/></div>
            <div class="name">{{ ob.name }}</div>
            <div class="desc">{{ ob.desc }}</div>
        </div>
    </router-link>
</template>

<script>
import ImgLoader from "@/components/ImgLoader.vue"

export default {
    name: "Object-for",
    data() {
        return{
        }
    },
    props: {
        ob: Object,
        id: Number
    },
    components: {
        ImgLoader
    }
}
</script>