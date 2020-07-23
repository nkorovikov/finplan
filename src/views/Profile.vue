<template>
  <div>
    <nav-bar :back-button="{
      show: true,
      to: 'Settings'
    }" />
    <v-text-field :label="$t('profile.name')" outlined v-model.trim="profile.name" type="tel" />
    <v-text-field
      :label="$t('profile.daily-budget')"
      outlined
      v-model.number="profile.dailyBudget"
      type="tel"
    />
    <v-text-field
      :label="$t('profile.week-budget')"
      outlined
      v-model.number="profile.weekBudget"
      type="tel"
    />
    <v-text-field
      :label="$t('profile.month-budget')"
      outlined
      v-model.number="profile.monthBudget"
      type="tel"
    />
    <v-radio-group v-model="profile.locale" row>
      <v-radio label="Русский" value="ru"></v-radio>
      <v-radio label="English" value="en"></v-radio>
    </v-radio-group>
    <div>
      <v-btn outlined @click.prevent="saveProfileHandler">{{ $t('profile.save') }}</v-btn>
    </div>
    <v-snackbar v-model="snackbar" :timeout="1000">{{ $t('profile.saved') }}!</v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ProfileModel from "../models/Profile";
import NavBar from "@/components/navbar/NavBar.vue";

const profile = namespace("Profile");

@Component({
  components: {
    NavBar
  }
})
export default class Profile extends Vue {
  private profile: ProfileModel = new ProfileModel("", 0, 0, 0, "ru");
  private snackbar = false;

  public async mounted() {
    this.profile = await this.get();
  }

  public saveProfileHandler(): void {
    this.saveProfile(this.profile);
    this.$i18n.locale = this.profile.getLocale();
    this.snackbar = true;
  }

  @profile.Action
  saveProfile!: (profile: ProfileModel) => void;

  @profile.Action
  get!: () => ProfileModel;
}
</script>