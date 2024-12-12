export const state = () => ({
    baseHost : 'https://public-api.wordpress.com/rest/v1.1/sites/racunproduk.wordpress.com',
    perPage: 18,
    isSearchVisible: false,
    // monthString: new Date().toLocaleDateString("id-ID", {month: "long",year: "numeric"})
})

export const mutations = {
    toggleSearch(state,isVisible){
        state.isSearchVisible = isVisible
    },
}