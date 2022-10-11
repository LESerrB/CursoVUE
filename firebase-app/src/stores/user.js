import { defineStore } from "pinia"; 

export const useUserStore = defineStore('userStrore', {
    state: () => ({
        userData: null,
    }),
    actions: {},
});