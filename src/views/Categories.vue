<template>
  <div>
    <router-link :to="{name: 'Home'}" tag="button">
      <i class="material-icons">arrow_back</i>
      Back
    </router-link>
    <div>
      <div>
        <div v-for="category in sortedById" :key=category.id>
          <i class="material-icons">{{ category.cssClass }}</i>
          {{ category.name }}
          <i class="material-icons">{{ category.type === 1 ? 'add' : 'remove' }}</i>
          <router-link :to="{name: 'CategoriesUpdate', params: { id: category.id }}" tag="i" class="material-icons">create</router-link>
          <i class="material-icons">delete</i>
          </div>
      </div>
      <router-link :to="{name: 'CategoriesCreate'}" tag="button">
        <i class="material-icons">add</i>
        Create
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Category from "../models/Category";

const categories = namespace("Categories");

@Component({
  components: {}
})
export default class Categories extends Vue {
  @categories.Getter
  public sortedById!: Array<Category>;
}
</script>