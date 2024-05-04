function array_min(a){
    var mini=100

    for(let i=0;i<a.length;i++){
        if(a[i]<mini){
            mini = a[i]
        }
    }
    return mini
}

var a=[3,5,8,9,18],b=[2,5,8,9,10]

console.log("the minimum in array is",array_min(a))
console.log("the minimum in array is",array_min(b))