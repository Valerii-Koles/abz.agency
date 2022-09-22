// import axios from "axios"

export default {
    state: {
        info: [],
    },
    getters: {
        allUsers(state) {
            return state.info
        }
    },
    mutations: {
        updateUsers(state,info) {
            state.info = info
        }
    },
    actions: {
        // async fetchUsers() {
        //     try {
        //         const res = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?count=6');
        //         this.info = res.data
        //         console.log(res.data)
        //     } catch (e) {
        //         console.log('error')
        //     }
        // }
        async fetchUsers(ctx) {
            const res = await fetch(
                "https://frontend-test-assignment-api.abz.agency/api/v1/users?count=6"
            );
            const info = await res.json();
            ctx.commit('updateUsers', info)
        }
    },
}
