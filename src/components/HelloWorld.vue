<template>
  <div class="hello">
    <div class="container">
      <ObjectsFor/>
    </div>
  </div>
</template>

<script>
import ObjectsFor from '@/components/ObjectsFor.vue'

export default {
  name: 'HelloWorld',
  components : {
    ObjectsFor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
