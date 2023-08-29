import { defineStore } from "pinia"

export const useDataStore = defineStore('data', {
    state: () => ({
        isHoveringContent: false,
        isHoverNavigation: false
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})