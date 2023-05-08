import axios from "axios";

const config = {
	baseUrl: "https://api.hnpwa.com/v0/",
};

const fetchList = (pageName) => {
    console.log(pageName);
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
};

const fetchUserInfo = (username) => {
    return axios.get(`${config.baseUrl}user/${username}.json`);
};

const fetchItemInfo = (itemid) => {
    return axios.get(`${config.baseUrl}item/${itemid}.json`);
};

export { fetchList, fetchUserInfo, fetchItemInfo };
