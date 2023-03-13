import * as service from './service.js'


export const getData = async (phoneNumber) => {
     let res = await service.fetchByPhoneNumber(phoneNumber)
     return res
}

export const updateData = async (phoneNumber,payload) => {
    let res = await service.upsertData(phoneNumber,payload)
    return res
}

export const deleteData = async (phoneNumber) => {
    let res = await service.deleteData(phoneNumber)
    return res
}