<template>
    <div>
        <nav-bar
                :back-button="this.category.getCategoryId() ? {
        show: true,
        to: 'CategoriesShow',
        params: { id: this.category.getCategoryId() },
      } : {show: true, to: 'Categories',}"
        />
        <i class="material-icons mr-1">{{ category.icon }}</i>
        <span style="vertical-align: super;">
      {{ category.name }}
    </span>
        <v-btn
                :to="{ name: 'CategoriesUpdate', params: { id: $route.params.id } }"
                outlined
                block
                class="mb-1"
        >
            <i class="material-icons mr-1">create</i>{{ $t("common.update") }}
        </v-btn>
        <sub-category-listing/>
        <v-btn
                v-if="canCreateSubCategory"
                :to="{ name: 'SubCategoryCreate', params: { id: $route.params.id } }"
                outlined
                block
                class="mb-1"
        >
            <i class="material-icons mr-1">add</i
            >{{ $t("categories.create-subcategory") }}
        </v-btn>
        <v-btn
                v-if="canDeleteCategory"
                @click.prevent="deleteHandler($route.params.id)"
                outlined
                block
        >
            <i class="material-icons mr-1">delete</i>{{ $t("common.delete") }}
        </v-btn>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import {VBtn} from "vuetify/lib";
import {namespace} from "vuex-class";
import Category from "../models/Category";
import Expense from "@/models/Expense";
import ListingDirector from "@/library/builders/ListingDirector";
import ListingBuilder from "@/library/builders/ListingBuilder";

const categories = namespace("Categories");
const expenses = namespace("Expenses");

@Component({
    components: {
        NavBar,
        VBtn,
        SubCategoryListing: new ListingDirector(
            new ListingBuilder()
        ).makeSubCategoryListing(),
    },
})
export default class CategoriesShow extends Vue {
    private category: Category | undefined = new Category(0, "", 1, "");

    @expenses.Getter
    public sortedById!: Array<Expense>;

    @categories.Getter
    public sortedCategoriesById!: Array<Category>;

    @categories.Action
    findById!: (id: number) => Category;

    public async mounted() {
        this.category = await this.findById(Number(this.$route.params.id));
    }

    get canDeleteCategory(): boolean {
        if (!this.category) {
            return false
        }

        if (this.sortedById.find((e: Expense) => e.getCategoryId() === Number(this.$route.params.id))) {
            return false;
        }

        return this.sortedCategoriesById.filter(
            (a: Category): boolean => a.getType() === this.category?.getType()
        ).filter((b: Category): boolean => b.getCategoryId() === this.category?.getId()).length === 0
    }

    get canCreateSubCategory(): boolean {
        if (!this.category) {
            return false
        }

        if (this.sortedById.find((e: Expense) => e.getCategoryId() === Number(this.$route.params.id))) {
            return false;
        }

        if (!this.category.getCategoryId()) {
            return true
        }

        let deepCount = 0
        let parent: Category | undefined = this.category
        // eslint-disable-next-line no-constant-condition
        while (parent) {
            parent = this.sortedCategoriesById.find((b: Category): boolean => b.getId() === parent?.getCategoryId())
            deepCount++
        }

        return deepCount !== 3;
    }

    @Watch("$route")
    async route(to: any, from: any) {
        this.category = await this.findById(Number(this.$route.params.id));
    }

    @categories.Action
    deleteCategory!: (id: number) => void;

    public deleteHandler(id: number): void {
        this.deleteCategory(id);
        this.$router.push({name: "Categories"});
    }
}
</script>
