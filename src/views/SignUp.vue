<template>
    <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Регистрация</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="email" type="email" required v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="password" type="password" required v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="signUp">Зарегистрироваться</v-btn>
              </v-card-actions>
            </v-card>
            <v-alert
                :value="error"
                type="error"
                >
                {{error}}
            </v-alert>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
    data(){
        return {
            email: null,
            password: null,
            drawer: null
        }
    },
    computed: {
        error() {
            return this.$store.getters.getError
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch('signUp', { email: this.email, password: this.password })
        }
    }
}
</script>
<style scoped>

</style>

