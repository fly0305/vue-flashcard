const mutations = {
    login(state, payload) {
        state.user = payload;
    },
    refresh(state, payload) {
        state.user = payload;
    },
    logout(state) {
        state.user = {
            username: null,
            email: null,
            access_token: "",
            expires_in: null,
        }
    },
    me(state, payload) {
        state.user = payload;
    },
    decks(state, payload) {
        state.decks.push.apply(state.decks, payload)
    },
    resetDecks(state) {
        state.decks = []
    },
    resetDecksPage(state) {
        state.decksPage = 1;
    },
    decksPageIncrement(state) {
        state.decksPage++;
    },
    query(state, payload) {
        state.query = payload;
    },
    search(state, payload) {
        state.decks = payload;
        state.decksPage = 1;
    },
}

export default mutations;
