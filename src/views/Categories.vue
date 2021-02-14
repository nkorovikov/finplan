<template>
    <div>
        <nav-bar
                :back-button="{
        show: true,
        to: 'Home',
      }"
        />
        <category-listing/>
        <v-btn v-if="canCreateCategory" block outlined :to="{ name: 'CategoriesCreate' }">
            <i class="material-icons">add</i>
            {{ $t("categories.create") }}
        </v-btn>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import {VBtn} from "vuetify/lib";
import ListingDirector from "@/library/builders/ListingDirector";
import ListingBuilder from "@/library/builders/ListingBuilder";
import Category from "@/models/Category";
import {namespace} from "vuex-class";

const categories = namespace("Categories");

@Component({
    components: {
        NavBar,
        VBtn,
        CategoryListing: new ListingDirector(
            new ListingBuilder()
        ).makeCategoryListing(),
    },
})
export default class Categories extends Vue {
    @categories.Getter
    public rootCategories!: Array<Category>;

    get canCreateCategory(): boolean {
        return this.rootCategories.length < 10;
    }
}
</script>
