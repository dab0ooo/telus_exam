import jsonData from './data.json' assert {type: 'json'}
import fs from 'fs'
import * as helpers from './helpers.js'


export const fetchByPhoneNumber = (phoneNumber) =>{

    return new Promise((resolve,reject) => {
        fs.readFile('./data.json', 'utf8', (error, data) => {
            if(error){
               console.log(error);
               return;
            }
        
            let fileData = JSON.parse(data)
            let index = fileData.findIndex(i => i.phoneNumber === phoneNumber);
            resolve(fileData[index])
       
       })
     
    })
}  


export const upsertData = (phoneNumber,payload) =>{

    return new Promise(async (resolve,reject) => {
        fs.readFile('./data.json', 'utf8', async (error, data) => {
            if(error){
               console.log(error);
               return;
            }
            let fileData = JSON.parse(data)
            let index = fileData.findIndex(i => i.phoneNumber === phoneNumber);
            if(index> 0){
                fileData.splice(index,1)
            }   
            let newData = [...fileData]
            newData.push({phoneNumber,...payload})
           
            resolve(await writeInFile(newData,'UPDATED',phoneNumber))
       
       })
        

    })
}  


export const deleteData = (phoneNumber) =>{

    return new Promise(async (resolve,reject) => {
        fs.readFile('./data.json', 'utf8', async (error, data) => {
            if(error){
               console.log(error);
               return;
            }
            let fileData = JSON.parse(data)
            let index = fileData.findIndex(i => i.phoneNumber === phoneNumber);
            if(index> 0){
                fileData.splice(index,1)
            }   
            
            let newData = [...fileData]
            resolve( await writeInFile(newData, 'DELETED',phoneNumber))
           
       
       })
        

    })
}  

const writeInFile = (newData, action, phoneNumber) => {
    return new Promise((resolve,reject)=>{
        fs.writeFile('data.json', JSON.stringify(newData), function(err) {
            if (err) throw err;
            resolve("PHONE NUMBER " + phoneNumber + " SUCCESSFULLY " + action)
        });
    })
    
}

