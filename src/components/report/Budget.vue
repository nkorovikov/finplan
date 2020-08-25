<template>
  <div v-show="show">
    <v-card dark color="#00E5FF" class="pl-2 pt-3 pr-2">
      <budget-progress-element
        :budgetLimit="profile.dailyBudget"
        :budgetUsed="dailyBudget"
        :progressTitle="$t('profile.daily-budget')"
      />

      <budget-progress-element
        :budgetLimit="profile.weeklyBudget"
        :budgetUsed="weeklyBudget"
        :progressTitle="$t('profile.week-budget')"
      />

      <budget-progress-element
        :budgetLimit="profile.monthlyBudget"
        :budgetUsed="monthlyBudget"
        :progressTitle="$t('profile.month-budget')"
      />
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Profile from "@/models/Profile";
import BudgetProgressElement from "./BudgetProgressElement.vue";
import { VCard } from "vuetify/lib";

const profile = namespace("Profile");

@Component({
  components: { BudgetProgressElement, VCard },
})
export default class Budget extends Vue {
  private profile: Profile = new Profile("", 0, 0, 0, "ru");
  private lineWidth = 14;

  @Prop() readonly dailyBudget!: number;
  @Prop() readonly weeklyBudget!: number;
  @Prop() readonly monthlyBudget!: number;

  public async mounted() {
    this.profile = await this.get();
  }

  get show() {
    return (
      !!this.profile.getDailyBudget() ||
      !!this.profile.getWeeklyBudget() ||
      !!this.profile.getMonthlyBudget()
    );
  }

  @profile.Action
  get!: () => Profile;
}
</script>
