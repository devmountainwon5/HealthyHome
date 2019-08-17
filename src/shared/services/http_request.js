import axios from 'axios';

export default {
    get: (url, config) => {
        return new Promise((resolve, reject) => {
            axios.get(url, config)
                .then(({ data }) => {
                    if (data.success) {
                        resolve(data);
                    } else {
                        reject(`Get request failed: ${data.msg}`);
                    }
                })
                .catch((err) => {
                    reject(`Error on get request: ${err}`);
                });
        })
    },
    post: (url, config, data) => {
        return new Promise((resolve, reject) => {
            axios.post(url, data, config)
                .then(({ data }) => {
                    if (data.success) {
                        resolve(data);
                    } else {
                        reject(`Post request failed: ${data.msg}`);
                    }
                })
                .catch((err) => {
                    reject(`Error on post request: ${err}`);
                });
        })
    },
    put: (url, config, data) => {
        return new Promise((resolve, reject) => {
            axios.put(url, data, config)
                .then(({ data }) => {
                    if (data.success) {
                        resolve(data);
                    } else {
                        reject(`Put request failed: ${data.msg}`);
                    }
                })
                .catch((err) => {
                    reject(`Error on put request: ${err}`);
                });
        })
    },
    delete: (url, config) => {
        return new Promise((resolve, reject) => {
            axios.delete(url, config)
                .then(({ data }) => {
                    if (data.success) {
                        resolve(data);
                    } else {
                        reject(`Delete request failed: ${data.msg}`);
                    }
                })
                .catch((err) => {
                    reject(`Error on delete request: ${err}`);
                });
        })
    },
}