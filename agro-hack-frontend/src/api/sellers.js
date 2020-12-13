import request from "./client"
const prefix = '/sellers'

export default {
    async get() {
        return request({
            'url': `${prefix}`
        })
    },
    async nearby() {
        
    }
}