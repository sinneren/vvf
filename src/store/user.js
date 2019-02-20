import firebase from 'firebase'

export default  {
    state: {
        user: {
            isAuth: false,
            _id: null,
        }
    },
    mutations: {

    },
    actions: {
        signUp({commit}, payload) {
            const { email, password } = payload

            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (resp) {
                console.log(resp)
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        }
    }
}