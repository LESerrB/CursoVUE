import { defineStore } from "pinia"; 

export const useUserStore = defineStore('userStrore', {
    state: () => ({
        userData: 'leserrb@test.com'
    }),
    getters: {
        minuscula(state){
            return state.userData.toLowerCase();
        },
    },
    actions: {
        registerUser(name){
            this.userData = name;
        },
    },
});