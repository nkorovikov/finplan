<template>
  <div>
    <template v-if="profile.dailyBudget > 0">
      <h3>{{ $t('profile.daily-budget') }}</h3>
      <v-tooltip color="black" top>
        <template v-slot:activator="{ on, attrs }">
          <v-progress-linear
            rounded
            stream
            v-bind="attrs"
            v-on="on"
            :height="lineWidth"
            :value="dailyBudgetProgress"
            :color="dailyBudgetProgress === 100 ? 'red' : 'success'"
          />
        </template>
        <span>{{ dailyBudget + '/' + this.profile.dailyBudget }}</span>
      </v-tooltip>
      <br />
    </template>
    <template v-if="profile.weeklyBudget > 0">
      <h3>{{ $t('profile.week-budget') }}</h3>
      <v-tooltip color="black" top>
        <template v-slot:activator="{ on, attrs }">
          <v-progress-linear
            rounded
            stream
            v-bind="attrs"
            v-on="on"
            :height="lineWidth"
            :value="weeklyBudgetProgress"
            :color="weeklyBudgetProgress === 100 ? 'red' : 'success'"
          />
        </template>
        <span>{{ weeklyBudget + '/' + this.profile.weeklyBudget }}</span>
      </v-tooltip>
      <br />
    </template>
    <template v-if="profile.monthlyBudget > 0">
      <h3>{{ $t('profile.month-budget') }}</h3>
      <v-tooltip color="black" top>
        <template v-slot:activator="{ on, attrs }">
          <v-progress-linear
            rounded
            stream
            v-bind="attrs"
            v-on="on"
            :height="lineWidth"
            :value="monthlyBudgetProgress"
            :color="monthlyBudgetProgress === 100 ? 'red' : 'success'"
          />
        </template>
        <span>{{ monthlyBudget + '/' + this.profile.monthlyBudget }}</span>
      </v-tooltip>
      <br />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Profile from "@/models/Profile";

const profile = namespace("Profile");

@Component({
  components: {}
})
export default class Budget extends Vue {
  private profile: Profile = new Profile("", 0, 0, 0, "ru");
  private lineWidth = 5;

  @Prop() readonly dailyBudget!: number;
  @Prop() readonly weeklyBudget!: number;
  @Prop() readonly monthlyBudget!: number;

  public async mounted() {
    this.profile = await this.get();
  }

  get dailyBudgetProgress(): number {
    const progress = (this.dailyBudget / this.profile.getDailyBudget()) * 100;
    return progress > 100 ? 100 : progress;
  }

  get weeklyBudgetProgress(): number {
    const progress = (this.weeklyBudget / this.profile.getWeeklyBudget()) * 100;
    return progress > 100 ? 100 : progress;
  }

  get monthlyBudgetProgress(): number {
    const progress =
      (this.monthlyBudget / this.profile.getMonthlyBudget()) * 100;
    return progress > 100 ? 100 : progress;
  }

  @profile.Action
  get!: () => Profile;
}
</script>