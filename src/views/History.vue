<template>
  <div>
    <nav-bar
      :back-button="{
        show: true,
        to: 'Report',
      }"
    />
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">{{ $t("history.date") }}</th>
            <th class="text-left">{{ $t("history.category") }}</th>
            <th class="text-right text-no-wrap">{{ $t("history.sum") }}</th>
            <th class="text-right"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(expence, index) in descSortedByCreatedAt" :key="index">
            <td>{{ expence.id }}</td>
            <td class="text-left">
              {{
                new Date(expence.createdAt).toLocaleString(
                  "ru-RU",
                  dateFormatOptions
                )
              }}
            </td>
            <td class="text-left">
              {{
                sortedCategoriesById.find((c) => expence.categoryId === c.id)
                  .name
              }}
            </td>
            <td class="text-right text-no-wrap">
              {{
                sortedCategoriesById.find((c) => expence.categoryId === c.id)
                  .type === 1
                  ? "+"
                  : "-"
              }}
              {{ expence.sum }}
            </td>
            <td class="text-right">
              <i
                @click.prevent="deleteHandler(expence.id)"
                class="material-icons"
                >delete</i
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Expense from "../models/Expense";
import Category from "../models/Category";
import NavBar from "@/components/navbar/NavBar.vue";
import { VSimpleTable } from "vuetify/lib";

const expenses = namespace("Expenses");
const categories = namespace("Categories");

@Component({
  components: {
    NavBar,
    VSimpleTable,
  },
})
export default class History extends Vue {
  private dateFormatOptions: object = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  @expenses.Getter
  public descSortedByCreatedAt!: Array<Expense>;

  @categories.Getter
  public sortedCategoriesById!: Array<Category>;

  @expenses.Action
  deleteExpense!: (id: number) => void;

  public deleteHandler(id: number): void {
    this.deleteExpense(id);
  }
}
</script>
