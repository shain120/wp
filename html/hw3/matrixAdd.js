function matrixAdd(a,b){
    var c=[]
    for (var i=0; i<a.length; i++) {
        c[i] = []
        for (var j=0; j<a[i].length; j++) {
            c[i][j]=a[i][j]+b[i][j]
        }
    }
    return c
}

var a=[[3,4],[1,2]], b=[[2,8],[5,7]]
console.log("a=[[3,4],[1,2]]+b=[[2,8],[5,7]]= ",matrixAdd(a,b))
