import { fetchList, fetchUserInfo, fetchItemInfo } from "../api/index.js";

export default {
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                // console.log(data);
                commit("SET_USER", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, id) {
        return fetchItemInfo(id)
            .then(({ data }) => {
                console.log(data);
                commit("SET_ITEM", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(({ data }) => {
                commit("SET_LIST", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
