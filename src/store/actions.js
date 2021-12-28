import {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchItem
} from '../api/index.js';

export default {
    // promise
    //FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    // FETCH_JOBS({commit}) {
    //     return fetchJobsList()
    //         .then(({data}) => {
    //             commit('SET_JOBS', data);
    //          })
    //         .catch(error => console.log(error))
    // },
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    // FETCH_ASK({commit}) {
    //     returnfetchAskList()
    //         .then(({data}) => {
    //             commit('SET_ASK', data);
    //         })
    //         .catch(error => console.log(error))
    // },
    async FETCH_ASK({commit}) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },

    // FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //         .then(({data}) => {
    //             commit('SET_USER', data);
    //          })
    //         .catch(error => console.log(error))
    // },
    async FETCH_USER(context, name) {
        const response = await fetchUserInfo(name);
        context.commit('SET_USER', response.data)
    },

    // FETCH_ITEM({ commit }, id) {
    //     return fetchItem(id)
    //         .then(({ data }) => {
    //             commit('SET_ITEM', data)
    //         })
    //         .catch(error => console.log(error))
    // },
    async FETCH_ITEM(context, id) {
        const response = await fetchItem(id);
        context.commit('SET_ITEM', response.data);
        return response
    },

    // FETCH_LIST({commit}, pageName) {
    //     return fetchList(pageName)
    //         .then(response => {
    //             commit('SET_LIST', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error));
    // },
    async FETCH_LIST(context, pageName) {
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        return response
    },
}