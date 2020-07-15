<template>
  <v-card>
    <v-list dense nav>
      <v-list-item @click.prevent="reload">
        <v-list-item-icon>
          <v-icon>mdi-update</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Update app</v-list-item-title>
        </v-list-item-content>
        
      </v-list-item>
      <v-list-item :to="{name: 'About'}">
        <v-list-item-icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item-content>
        
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Settings extends Vue {
  public reload() {
    this.$router.push({ name: "Home" });
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  }
}
</script>