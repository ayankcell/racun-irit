export const state = () => ({
    nextPage: 2,
    pageData: [],
    isInitial: true,
})

export const mutations = {
    setNext(state, page) {
        state.nextPage = page
    },
    initialCommit(state){
        state.isInitial = false
    },
    pushPageData(state, data) {
        state.pageData.push(data)
    }
}