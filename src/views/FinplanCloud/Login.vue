<template>
  <div>
    <nav-bar :back-button="{
      show: true,
      to: 'FinplanCloud'
    }" />
    <v-form v-model="valid">
      <v-text-field label="Email" outlined v-model.trim="email" :rules="emailRules" />
      <v-text-field
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        :hint="$t('cloud.login.password-hint')"
        counter
        @click:append="showPassword = !showPassword"
        :label="$t('cloud.login.password')"
        outlined
        :rules="passwordRules"
        v-model.trim="password"
      />
      <div>
        <v-btn outlined @click.prevent="send">{{ $t('cloud.login.login') }}</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import i18n from "../../i18n";

@Component({
  components: {
    NavBar
  }
})
export default class Login extends Vue {
  private email = "";
  private password = "";
  private showPassword = false;
  private emailRules = [
    (v: any) => !!v || i18n.t("cloud.login.validation.email.required"),
    (v: any) => /.+@.+/.test(v) || i18n.t("cloud.login.validation.email.valid")
  ];

  private passwordRules = [
    (v: any) => !!v || i18n.t("cloud.login.validation.password.required"),
    (v: any) => v.length > 5 || i18n.t("cloud.login.validation.password.length")
  ];
  private valid = false;

  public async send() {
    if (!this.valid) {
      return;
    }
    try {
      const response = await this.$axios.post(
        "https://finplan-env-production.herokuapp.com/api/login",
        {
          email: this.email,
          password: this.password
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      this.$router.push({ name: "FinplanCloud" });
    } catch (e) {
      console.log(e);
    }
  }
}
</script>