<template>
  <div>
    <template v-if="profile.dailyBudget > 0">
      <v-tooltip color="black" open-on-click :open-on-hover="false" right>
        <template v-slot:activator="{ on, attrs }">
          <h4 v-bind="attrs" v-on="on">{{ $t('profile.daily-budget') }}</h4>
        </template>
        <span>{{ dailyBudget + '/' + this.profile.dailyBudget }}</span>
      </v-tooltip>
      <v-progress-linear
        rounded
        :height="lineWidth"
        :value="dailyBudgetProgress"
        :color="dailyBudgetProgress === 100 ? 'red' : 'success'"
      />
      <br />
    </template>
    <template v-if="profile.weeklyBudget > 0">
      <v-tooltip color="black" open-on-click :open-on-hover="false" right>
        <template v-slot:activator="{ on, attrs }">
          <h4 v-bind="attrs" v-on="on">{{ $t('profile.week-budget') }}</h4>
        </template>
        <span>{{ weeklyBudget + '/' + this.profile.weeklyBudget }}</span>
      </v-tooltip>
      <v-progress-linear
        rounded
        :height="lineWidth"
        :value="weeklyBudgetProgress"
        :color="weeklyBudgetProgress === 100 ? 'red' : 'success'"
      />
      <br />
    </template>
    <template v-if="profile.monthlyBudget > 0">
      <v-tooltip color="black" open-on-click :open-on-hover="false" right>
        <template v-slot:activator="{ on, attrs }">
          <h4 v-bind="attrs" v-on="on">{{ $t('profile.month-budget') }}</h4>
        </template>
        <span>{{ monthlyBudget + '/' + this.profile.monthlyBudget }}</span>
      </v-tooltip>
      <v-progress-linear
        rounded
        :height="lineWidth"
        :value="monthlyBudgetProgress"
        :color="monthlyBudgetProgress === 100 ? 'red' : 'success'"
      />
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
  private lineWidth = 14;

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