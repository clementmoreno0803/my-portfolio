import { defineStore } from "pinia"
import axios from 'axios'

export const useDataStore = defineStore('data', {
    state: () => ({
        isHoveringContent: false,
        isHoverNavigation: false,
        isHoverProject: false,
        isHoveringFooter: false,
        isHoveringFooterContent: false,
        projects: []
    }),
    getters: {
        projectsPreview() {
            return this.projects.slice(0, 3);
        }
    },
    actions: {
        async getDataFromFirebase() {
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