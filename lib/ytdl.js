const axios = require('axios').default
const Formdata = require('form-data')

const getK = async (url)  => {
    return axios({
        method: 'post',
        url: 'https://yt1s.com/api/ajaxSearch/index',
        data: `q=${url}&vt=home`,
    })
}

const yta = async (k, vid) => {
    var form = new Formdata()
    form.append('vid', vid)
    form.append('k', k)

    var config = {
        method: 'post',
        url: 'https://yt1s.com/api/ajaxConvert/convert',
        headers: {
            ...form.getHeaders()
        },
        data: form
    };
    const res99 = await axios(config)
    return res99.data
}

module.exports = {yta, getK}