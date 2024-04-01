
/* 
id card
    infoObj=>{...}
    logo=secretKey
    expiryInfo
 */


import jwt from "jsonwebtoken"
//generate token
// let infoObj={
//     id:"123",
// }
// let secretKey="dw13"
// let expiryInfo={
//     expiresIn:"365d",    //it must be in format
// }
// let token=jwt.sign(infoObj,secretKey,expiryInfo)
// console.log(token)
let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImlhdCI6MTcxMTYyODYwNCwiZXhwIjoxNzQzMTY0NjA0fQ.qBnQy1--MUCPPv3rfgIg7IcSR_Fuidwcrq3TgUivQtU"


try {
    let infoObj=jwt.verify(token,"dw13")
    //to be a verified token 
    // a token key must be made from secret key
    //it should not exceed expiryInfo
    console.log(infoObj)
} catch (error) {
    console.log(error.message)
}

