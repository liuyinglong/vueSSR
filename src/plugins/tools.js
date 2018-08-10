/**
 * create by focus on 2018/7/24 20:03
 */
import $ from "jquery"

export default {
    /**
     *
     * @returns {*}
     * @constructor
     */
    IEVersion: function () {
        let userAgent = navigator.userAgent //取得浏览器的userAgent字符串
        let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 //判断是否IE<11浏览器
        let isEdge = userAgent.indexOf("Edge") > -1 && !isIE //判断是否IE的Edge浏览器
        let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1
        if (isIE) {
            let reIE = new RegExp("MSIE (\\d+\\.\\d+);")
            reIE.test(userAgent)
            let fIEVersion = parseFloat(RegExp["$1"])
            if (fIEVersion === 7) {
                return 7
            }
            if (fIEVersion === 8) {
                return 8
            }
            if (fIEVersion === 9) {
                return 9
            }
            if (fIEVersion === 10) {
                return 10
            }
            return 6//IE版本<=7
        }
        if (isEdge) {
            return 'edge'//edge
        }
        if (isIE11) {
            return 11 //IE11
        }
        return -1//不是ie浏览器
    },

    /**
     * 获取文档高度
     * @returns {number}
     */
    getScrollHeight: function () {
        let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
        return scrollHeight
    },

    /**
     * 获取窗口高度
     * @returns {number}
     */
    getWindowHeight: function () {
        let windowHeight = 0
        if (document.compatMode === "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight
        } else {
            windowHeight = document.body.clientHeight
        }
        return windowHeight
    },

    getScrollTop: function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },

    animationScroll(scrollTop, {animation = 1, time = 300}) {
        if (animation) {
            $('html,body').animate({
                scrollTop: scrollTop
            }, time)
            return
        }
        window.scrollTo(0, scrollTop)
    },

    loadImage(images) {
        images.forEach(function (src) {
            let img = new Image()
            img.src = src
        })
    },

    inServer() {
        return process.env.VUE_ENV === "server"
    }

}
 