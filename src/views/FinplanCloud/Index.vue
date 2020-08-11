<template>
  <div>
    <nav-bar :back-button="{
      show: true,
      to: 'Settings'
    }" />
    <v-card dark class="mx-auto" max-width="344">
      <v-card-title>Finplan Cloud</v-card-title>

      <v-card-actions v-if="!isAuth">
        <v-btn :to="{name: 'Login'}" text>{{ $t('cloud.index.login') }}</v-btn>
      </v-card-actions>
      <v-card-actions v-else>
        <v-btn @click.prevent="logout" text>{{ $t('cloud.index.logout') }}</v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="isAuth">
          <v-divider></v-divider>

          <v-card-actions>
            <v-btn @click.prevent="download" text>{{ $t('cloud.index.download') }}</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn @click.prevent="upload" text>{{ $t('cloud.index.upload') }}</v-btn>
          </v-card-actions>
        </div>
      </v-expand-transition>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="1000">{{ $t(snackbarText) }}!</v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import { namespace } from "vuex-class";
import Expense from "@/models/Expense";
import Category from "@/models/Category";
import Profile from "@/models/Profile";

const expenses = namespace("Expenses");
const categories = namespace("Categories");
const profile = namespace("Profile");

@Component({
  components: {
    NavBar
  }
})
export default class Index extends Vue {
  private token = "";
  private snackbar = false;
  private snackbarText = "";

  public mounted() {
    this.token = localStorage.getItem("token") ?? "";
  }

  @expenses.Getter
  public sortedByCreatedAt!: Array<Expense>;

  @categories.Getter
  public sortedById!: Array<Category>;

  @profile.Action
  get!: () => Profile;

  @profile.Action
  saveProfile!: (profile: Profile) => void;

  @expenses.Action
  replaceAllExpenses!: (expenses: Array<Expense>) => void;

  @categories.Action
  replaceAllCategories!: (categories: Array<Category>) => void;

  get isAuth() {
    return this.token.length > 0;
  }

  public logout() {
    this.token = "";
    localStorage.setItem("token", "");
  }

  public async upload() {
    const profile = await this.get();

    const config = {
      headers: { Authorization: this.token }
    };

    try {
      const response = await this.$axios.post(
        "https://finplan-env-production.herokuapp.com/api/profile",
        profile,
        config
      );
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await this.$axios.post(
        "https://finplan-env-production.herokuapp.com/api/categories",
        this.sortedById,
        config
      );
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await this.$axios.post(
        "https://finplan-env-production.herokuapp.com/api/expenses",
        this.sortedByCreatedAt,
        config
      );
    } catch (e) {
      console.log(e);
    }

    this.snackbarText = "cloud.index.uploaded";
    this.snackbar = true;
  }

  public async download() {
    const config = {
      headers: { Authorization: this.token }
    };

    try {
      const response = await this.$axios.get(
        "https://finplan-env-production.herokuapp.com/api/profile",
        config
      );
      const profile = new Profile(
        response.data.profile.name,
        response.data.profile.dailyBudget,
        response.data.profile.weeklyBudget,
        response.data.profile.monthlyBudget,
        response.data.profile.locale
      );
      this.saveProfile(profile);
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await this.$axios.get(
        "https://finplan-env-production.herokuapp.com/api/categories",
        config
      );
      const categories = response.data.categories.map(
        (category: any) =>
          new Category(category.id, category.name, category.type, category.icon)
      );
      this.replaceAllCategories(categories);
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await this.$axios.get(
        "https://finplan-env-production.herokuapp.com/api/expenses",
        config
      );
      const expenses = response.data.expenses.map(
        (expense: any) =>
          new Expense(
            expense.id,
            expense.sum,
            expense.categoryId,
            expense.createdAt
          )
      );
      this.replaceAllExpenses(expenses);
    } catch (e) {
      console.log(e);
    }

    this.snackbarText = "cloud.index.downloaded";
    this.snackbar = true;
  }
}
</script>