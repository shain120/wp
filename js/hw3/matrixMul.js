function matrixMul(a,b){
    var c=[]
    for (var i=0; i<a.length; i++) {
        c[i]=[0,0]
        for (var j=0; j<a[0].length; j++) {
            for(var k=0;k<a.length; k++){
                c[i][j]+=a[i][k]*b[k][j]
            }
        }
    }
    return c    
}

var a=[[3,4],[1,2]], b=[[2,8],[5,7]]
console.log("a=[[3,4],[1,2]]*b=[[2,8],[5,7]]= ",matrixMul(a,b))