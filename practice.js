


// function removeDup(array)
// {
//     return array.filter((item,index)=>array.indexOf(item)==index)
// }
// let a=[1,2,3,1,10 ]//[1,2,3,10]
// let output=removeDup(a)
// console.log(output)
let ar1=[1,2,3,10,1,2,5]
let uniquearr=[...new Set(ar1)]
console.log(uniquearr)