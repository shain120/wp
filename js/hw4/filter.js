function filter(a,b){
    var result=[]

    for(var i = 0; i < a.length; i++){
        if(b(a[i])){
            result.push(a[i])
        }
    }
    return result
}

console.log("filter even number:", filter([1,2,3,4],function (x){ return x%2 == 1 }))