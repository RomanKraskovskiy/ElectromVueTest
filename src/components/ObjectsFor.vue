<template>
    <div class="objects-block">
        <div v-for="(ob,index) in objs" v-bind:key="ob.name" :id="'block-' + index" class="object">
            <ObjectFor :ob="ob" :id="index"/>
        </div>
    </div>
</template>

<script>
import ObjectFor from '@/components/ObjectFor.vue'
import json from '@/assets/data.json'

export default {
    name: "ObjectsFor",
    data () {
        return {
            objs : this.getData()
        }
    },
    methods: {
        getData(){      
            return json.data;
        }

    },
    components: {
        ObjectFor
    }
}

</script>
