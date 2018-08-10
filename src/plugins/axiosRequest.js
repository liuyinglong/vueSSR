/**
 * create by focus on 2018/6/19 14:10
 */

import axios from "axios"

class Request {
    constructor({serverUrl = ""}) {
        this.serverUrl = serverUrl
        this.urlReg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
    }

    /**
     * 构建Url
     * 如果为完整地址 则返回完整地址
     * 如果为非完整地址 则返回serverUrl+传入的地址
     * @param url
     * @returns {*}
     */
    constructUrl(url) {
        if (this.urlReg.test(url)) {
            return url
        }
        return this.serverUrl + url
    }

    /**
     * 发起请求
     * @param url
     * @param options
     */
    http(url, options = {}) {
        options.url = this.constructUrl(url)
        return axios(options)
    }
}

export default Request
