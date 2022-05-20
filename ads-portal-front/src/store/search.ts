import { defineStore } from 'pinia'


export const useSearchInputStore = defineStore('searchInput', {
    state: () => ({
        searchInput: '',
    }),
    actions: {
        changeInput(value: string) {
            this.searchInput = value
        }
    },
})