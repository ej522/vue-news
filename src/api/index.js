import axios from 'axios';

// 1. Http Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList() {
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList() {
    try {
        const response = axios.get(`${config.baseUrl}ask/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchList(pageName) {
    try {
        const response = axios.get(`${config.baseUrl}${pageName}/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
    
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchItem(itemid) {
    return axios.get(`${config.baseUrl}item/${itemid}.json`);
}



export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItem
}
 