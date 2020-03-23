<template>
  <div>
    <bounce-loader :loading="isLoading" color="#68d391" :size="100" />
    <assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import AssetsTable from '@/components/AssetsTable';
import api from '@/api';

export default {
  name: 'Home',
  components: { AssetsTable },

  data() {
    return {
      assets: [],
      isLoading: false
    };
  },

  created() {
    this.isLoading = true;

    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  }
};
</script>

<style></style>
