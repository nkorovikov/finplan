<template>
  <div>
    <nav-bar />
    <v-text-field
      hide-details
      type="tel"
      :append-icon="icon"
      outlined
      @click:append="changeType"
      v-model.trim="sum"
    />
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          color="#00E5FF"
          v-model="createdAt"
          prepend-icon="event"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        first-day-of-week="1"
        dark
        color="#00E5FF"
        v-model="createdAt"
        @input="menu = false"
      ></v-date-picker>
    </v-menu>
    <v-container v-if="thereAreNoCategories">
      {{ $t("home.no-categories") }}.
      <router-link tag="a" :to="{ name: 'CategoriesCreate' }">{{
        $t("home.create")
      }}</router-link>
    </v-container>
    <v-container v-else class="overflower-categories">
      <v-row v-for="i in Math.ceil(categories.length / 2)" :key="i" no-gutters>
        <v-col
          v-for="category in categories.slice((i - 1) * 2, (i - 1) * 2 + 2)"
          :key="category.id"
          @click.prevent="saveExpenseHandler(category.id)"
        >
          <v-card class="pa-4" tile outlined>
            <div>
              <i class="material-icons">{{ category.icon }}</i>
            </div>
            <div>
              <span style="vertical-align: super;">{{ category.name }}</span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-btn outlined block :to="{ name: 'Categories' }">{{
      $t("home.categories")
    }}</v-btn>
    <v-snackbar v-model="snackbar" :timeout="1000"
      >{{ $t("home.added") }}!</v-snackbar
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Expense from "../models/Expense";
import Category from "../models/Category";
import NavBar from "@/components/navbar/NavBar.vue";
import {
  VTextField,
  VMenu,
  VDatePicker,
  VContainer,
  VRow,
  VCol,
  VCard,
  VBtn,
  VSnackbar,
} from "vuetify/lib";

const expenses = namespace("Expenses");
const categories = namespace("Categories");

@Component({
  components: {
    NavBar,
    VTextField,
    VMenu,
    VDatePicker,
    VContainer,
    VRow,
    VCol,
    VCard,
    VBtn,
    VSnackbar,
  },
})
export default class Home extends Vue {
  private sum = "";
  private icon = "mdi-minus";
  private createdAt =
    new Date().getFullYear() +
    (new Date().getMonth() + 1 > 10 ? "-" : "-0") +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();
  private menu = false;
  private snackbar = false;

  @expenses.Getter
  public sortedById!: Array<Expense>;

  @categories.Getter
  public incomes!: Array<Category>;

  @categories.Getter
  public outcomes!: Array<Category>;

  @expenses.Action
  saveExpense!: (expense: Expense) => void;

  get categories(): Array<Category> {
    if (this.icon === "mdi-plus") {
      return this.incomes;
    }
    return this.outcomes;
  }

  get thereAreNoCategories(): boolean {
    return this.categories.length === 0;
  }

  public changeType(): void {
    if (this.icon === "mdi-plus") {
      this.icon = "mdi-minus";
      return;
    }
    this.icon = "mdi-plus";
  }

  public saveExpenseHandler(categoryId: number): void {
    const numSum = Number(this.sum);

    if (numSum < 0 || numSum === 0) {
      return;
    }

    const lastId: number = this.sortedById.length
      ? this.sortedById[this.sortedById.length - 1].getId()
      : 0;

    this.saveExpense(
      new Expense(
        lastId + 1,
        numSum,
        categoryId,
        new Date(
          new Date(this.createdAt).toLocaleString("en-EN", {
            timeZone: "UTC",
          })
        ).getTime()
      )
    );

    this.sum = "";
    this.snackbar = true;
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 425px) {
  .overflower-categories {
    height: 350px;
    overflow-y: scroll;
  }
}
</style>
