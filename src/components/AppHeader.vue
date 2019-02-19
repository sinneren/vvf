<template>
    <v-app>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-tile v-for="(item, i) in menuItems" :key="`navDrawer${i}`" :to="item.route">
                    <v-list-tile-action>
                        <v-icon left v-html="item.icon" />
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark class="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"  class="hidden-md-and-up" />
            <div>
                <v-toolbar-title v-text="'VVF'" />
            </div>
            <v-spacer />
            <v-toolbar-items class="hidden-md-and-down">
                <v-btn flat v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route">
                    <v-icon left v-html="item.icon" />
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            drawer: false
        }
    },
    computed: {
        menuItems() {
            return [
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
                }, {
                    icon: 'exit_to_app',
                    title: 'Выйти',
                    route: '/logout'
                }, {
                    icon: 'input',
                    title: 'Войти',
                    route: '/signin'
                }, {
                    icon: 'lock_open',
                    title: 'Регистрация',
                    route: '/signup'
                }
            ]
        }
    }
}
</script>
<style scoped>

</style>


