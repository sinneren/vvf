<template>
    <div id="app">
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-tile v-for="(item, i) in menuItems" :key="`navDrawer${i}`" :to="item.route">
                    <v-list-tile-action>
                        <v-icon left v-html="item.icon" />
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title" />
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click.prevent="signOut" v-if="isAuth">
                    <v-list-tile-action>
                        <v-icon left>exit_to_app</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Выйти</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark class="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />
            <router-link to='/' tag="button">
                <v-toolbar-title v-text="'VVF'" />
            </router-link>
            <v-spacer />
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route">
                    <v-icon left v-html="item.icon" />
                    {{item.title}}
                </v-btn>
                <v-btn flat @click.prevent="signOut" v-if="isAuth">
                    <v-icon left>exit_to_app</v-icon>
                    Выйти
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: false
        }
    },
    methods: {
        signOut() {
            this.$store.dispatch('signOut')
        }
    },
    computed: {
        isAuth() {
            return this.$store.getters.isAuth
        },
        menuItems() {
            return this.isAuth ? [
                {
                    icon: 'visibility',
                    title: 'Читать',
                    route: '/books',
                }, {
                    icon: 'extension',
                    title: 'Учить',
                    route: '/words'
                }, {
                    icon: 'account_circle',
                    title: 'Кабинет',
                    route: '/profile'
                }
            ] : [
               {
                    icon: 'input',
                    title: 'Войти',
                    route: '/signin'
                }, {
                    icon: 'lock_open',
                    title: 'Регистрация',
                    route: '/signup'
                }]
        }
    }
}
</script>
<style scoped>

</style>


