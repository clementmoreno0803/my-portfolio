import { defineStore } from "pinia"
import Projet from "@/types/project"

interface MyStoreState {
    isHoveringContent: boolean,
    isHoverNavigation: boolean,
    isHoverProject: boolean,
    isHoveringFooter: boolean,
    isHoveringFooterContent: boolean,
    projects: Projet[] = []

}


export const useDataStore = defineStore('data', {
    state: (): MyStoreState => ({
        isHoveringContent: false,
        isHoverNavigation: false,
        isHoverProject: false,
        isHoveringFooter: false,
        isHoveringFooterContent: false,
        projects: []
    }),
    actions: {
        getDataFromFirebase() {
            try {
                await axios.get('https://portfolio-44c30-default-rtdb.firebaseio.com/.json')
                    .then((response) => {
                        const data = response.data
                        this.projects = data
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }
})