<template>
  <v-app>
    <AppHeader />
    <v-content>
      <router-view/>
    </v-content>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

