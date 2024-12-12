export const state = () => ({
    modalOpened: false
})

export const mutations = {
    close(state){
        state.modalOpened = false
    },
    open(state){
        state.modalOpened = true
    }
}