import { Router } from "express";

let bikeRouter=Router()

// let createBike=(req,res,next)=>{
//     console.log("bike created succesfully")
// }
let createBike=(a,b)=>{
    return (req,res,next)=>{
            console.log("book create succssfully")
    }
}
bikeRouter
    .route("/")//locahost:8000/bikes
// .post((req,res,next)=>{
//     console.log(req.body)
//     res.json("bike post ")
// })
// .post(createBike)//use this format if you don't need to pass values
.post(createBike(1,2))//use this format if you  need to pass values

.get((req,res,next)=>{
    console.log(req.query)
    /* 
    req.query is object
    every data of query is a string
    {
        localhost:8000/bikes?name=nitan&age=30
        name:"nitan",
        age="30"
    }
     */
    res.json("bike get")
})
.patch((req,res,next)=>{
    res.json("bike patch")
})
.delete(
    (req,res,next)=>{
    res.json("delete response")
   console.log("i am middleware 1")
   let err=new Error("i am error")
    next(err)
},
    (req,res,next)=>{
   console.log("i am middleware 2")
    next()
},
    (err,req,res,next)=>{
   console.log("i am middleware 3")
   console.log(err.message)

},

)

bikeRouter
.route('/:id') //localhost:8000/bikes/any        always keep in last dynamic routing=>/:id
.post((req,res,next)=>{
    res.json("learn dynamic params")
    console.log(req.params)
    /* 
    req.params gives dynamic route parameter in the form of object

    req.params is object
    {
        id:1234
    }
     */
})
.get((req,res,next)=>{
    res.json("get dynamic params")
})


bikeRouter
    .route("/a/:id1/name/:id2")//localhost:8000/bikes/a/any/name/any
    .post((req,res,next)=>{
        console.log(req.params)
        res.json("hello")
    })  
    /* 
    
    {
        req.params gives dynamic route parameter in the form of object
            id:"any1",
            id2:"any2"
    }
     */
    
    //here a and name are static route params
    //and id1 and id2 are dynamic route params


export default bikeRouter