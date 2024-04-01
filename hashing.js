//Password@123 => "$2b$10$0BRWyL7NPT1Iyqoelk1u0.7SiV.Q2gFZszjB5hLWyf81fi/pQl8qq"

//same text has different hash code
import bcrypt from "bcrypt"

//*********************generate hash code */

// let password="Password@123"

// let hashedPassword= await bcrypt.hash(password,10)
// console.log(hashedPassword)


//*********************compare hash code */
let loginPassword="Password@123"
let isValidPassword=await bcrypt.compare(loginPassword,"$2b$10$0BRWyL7NPT1Iyqoelk1u0.7SiV.Q2gFZszjB5hLWyf81fi/pQl8qq")
console.log(isValidPassword)

