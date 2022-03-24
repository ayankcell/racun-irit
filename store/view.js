export const state = () => ({
    isSingular: false
})

export const mutations = {
    isSingular(state, status){
        state.isSingular = status
    }
}