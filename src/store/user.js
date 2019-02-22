import firebase from 'firebase'

export default  {
    state: {
        isRegister: false,
        isAuth: false,
        _id: null,
    },
    mutations: {
        setNewUser(state, payload) {
            state.isRegister = true
            state._id = payload
        },
        setUser(state, payload) {
            state.isAuth = true
            state._id = payload
        },
        unsetUser(state) {
            state.isAuth = false
            state._id = null
        }
    },
    getters: {
        isAuth(state) {
            return state.isAuth
        },
        isRegister(state) {
            return state.isRegister
        }
    },
    actions: {
        signUp({commit}, payload) {
            const { email, password } = payload
            commit('cleanError')
            commit('setProcessing', true)
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function () {
                commit('setProcessing', false)
            })
            .catch(function (error) {
                commit('setProcessing', false)
                commit('setError', error.message)
            });
        },
        signIn({commit}, payload) {
            const { email, password } = payload
            commit('cleanError')
            commit('setProcessing', true)
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function () {
                commit('setProcessing', false)
            })
            .catch(function (error) {
                commit('setProcessing', false)
                commit('setError', error.message)
            });
        },
        signOut() {
            firebase.auth().signOut()
        },
        stateChange({commit}, payload) {
            const { uid } = payload
            if (payload) {
                commit('setUser', uid)
            } else {
                commit('unsetUser')
            }
        }
    }
}