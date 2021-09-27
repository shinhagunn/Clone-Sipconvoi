<template>
  <div>
    <div>{{ product.price }}</div>
    <div>{{ product.name }}</div>
    <div>{{ product.key }}</div>
  </div>
</template>

<script>
import data from "../data";

export default {
  computed: {
    product() {
      return data.find(product => product.key == this.getProductKey());
    }
  },
  methods: {
    getProductKey() {
      return this.$route.params.id
    }
  }
}
</script>
