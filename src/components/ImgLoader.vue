<template>
  <img :src="require('@/assets/' + image)">
</template>
<script>

export default {
    name: 'ImgLoader',
    props: {
        image: String
    }
};
</script>