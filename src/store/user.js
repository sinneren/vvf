import firebase from 'firebase'

export default  {
    state: {
        isAuth: false,
        _id: null,
    },
    mutations: {
        setUser(state, payload) {
            state.isAuth = true
            state._id = payload
        }
    },
    getters: {
        isAuth(state) {
            return state.isAuth
        }
    },
    actions: {
        signUp({commit}, payload) {
            const { email, password } = payload
            commit('setProcessing', true)
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (resp) {
                const { uid } = resp.user
                commit('setUser', uid)
                commit('cleanError')
                commit('setProcessing', false)
            })
            .catch(function (error) {
                commit('setProcessing', false)
                commit('setError', error.message)
            });
        },
        signIn({commit}, payload) {
            const { email, password } = payload
            commit('setProcessing', true)
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (resp) {
                console.log(resp)
                const { uid } = resp.user
                commit('setUser', uid)
                commit('cleanError')
                commit('setProcessing', false)
            })
            .catch(function (error) {
                commit('setProcessing', false)
                commit('setError', error.message)
            });
        }
    }
}