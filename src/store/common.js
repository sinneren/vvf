export default  {
    state: {
        processing: false,
        error: null,
    },
    mutations: {
        setProceccing(state, payload) {
            state.processing = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        cleanError(state) {
            state.error = null
        }
    },
    getters: {
        getProcessing(state) {
            return state.processing;
        },
        getError(state) {
            return state.error
        }
    },
    actions: {

    }
}