import { defineStore } from "pinia"

interface MyStoreState {
    isHoveringContent: boolean,
    isHoverNavigation: boolean,
    projects: string[] = []

}


export const useDataStore = defineStore('data', {
    state: (): MyStoreState => ({
        isHoveringContent: false,
        isHoverNavigation: false,
        projects:[] 
    }),
})