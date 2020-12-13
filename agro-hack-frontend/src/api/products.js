import request from "./client"
const prefix = '/products'

export default {
    async get() {
        return request({
            'url': `${prefix}`
        })
    },
    async nearby() {
        
    }
}