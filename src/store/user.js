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
    actions: {
        signUp({commit}, payload) {
            const { email, password } = payload
            commit('setProcessing', true)
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (resp) {
                const { uid } = resp
                commit('setUser', uid)
                commit('setProcessing', false)
                commit('cleanError')
            })
            .catch(function (error) {
                commit('setProcessing', false)
                commit('setError', error.message)
            });
        }
    }
}