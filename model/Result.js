/**
 * @description 返回结果的数据模型
 * @author Yang
 */

const { CODE_SUCCESS } = require('../config')

/**
 * 基础模块
 */
class BaseModel {
    constructor({code, data, message}) {
        
        this.code = code
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}

/**
 * 成功的数据模型
 */
class SuccessModel extends BaseModel {
    constructor(data = {}) {
        super({
            code: CODE_SUCCESS,
            data
        })
    }
}

/**
 * 失败的数据模型
 */
class ErrorModel extends BaseModel {
    constructor({ code, message }) {
        super({
            code,
            message
        })
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}
