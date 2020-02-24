<template>
  <v-navigation-drawer v-model="drawer" app right temporary>
    <v-list nav class="py-0">
      <v-divider></v-divider>

      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: Boolean
  },
  data() {
    return {
      items: [
        { title: "Higher Enrollment", icon: "mdi-view-dashboard" },
        { title: "Student Success", icon: "mdi-image" },
        { title: "What is Nearpeer?", icon: "mdi-help-box" },
        { title: "About", icon: "mdi-help-box" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
