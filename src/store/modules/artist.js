const state = {
    results: [],
    errors: {},
    isLoading: false,
    staticQuery: "",
}

const getters = {
    getResults: state => state.results,

    isLoading: state => state.isLoading,

    getStaticQuery: state => state.staticQuery,

    getErrors: state => state.errors,
}

const mutations = {
    SET_RESULTS: (state, payload) => state.results = payload,

    RESET_RESULTS: (state) => state.results = [],

    SET_LOADING: (state, payload) => state.isLoading = payload,

    SET_STATICQUERY: (state, payload) => state.staticQuery = payload,

    SET_ERRORS: (state, payload) => state.errors = payload,

    RESET_ERRORS: (state) => state.errors = {},
}

// artist?name=
const API_URL = "http://exa844-lkaguollhq-rj.a.run.app/hello_http";

const actions = {
    fetchArtist(state, query) {
        state.commit("SET_LOADING", true);
        state.commit("SET_STATICQUERY", query);

        axios.get(`${API_URL}/artist?name=${query}&option=`)
            .then(response => {
                state.commit("RESET_ERRORS")

                var res = JSON.parse(JSON.stringify(response.data)).result;
                res = JSON.parse(res)
                res.sort((a, b) => a.name.localeCompare(b.name));

                state.commit("SET_RESULTS", res);
                state.commit("SET_LOADING", false);
            })
            .catch((error) => {
                console.log(error.code, error.message);
                state.commit("SET_ERRORS", error)
                state.commit("SET_LOADING", false);
            })
    },

    scanProfile(state, profileLink){
        state.commit("SET_LOADING", true);

        axios.get(`${API_URL}/profile?id=${profileLink}`)
            .then(() => {
                state.commit("RESET_ERRORS")
                state.commit("SET_LOADING", false);
            })
            .catch((error) => {
                console.log(error.code, error.message);
                state.commit("SET_ERRORS", error)
                state.commit("SET_LOADING", false);
            })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}