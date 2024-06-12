function solve(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var a = [num1,num2,num3,num4];
    var o = ['+','-','x','÷'];
    var bl = false;

    function swap(arr,i,j) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        return arr;
    }

    function op(x,y,opt) {
        if(opt==0) return x+y;
        else if(opt==1) return x-y;
        else if(opt==2) return x*y;
        else return x/y;
    }

    function next_permutation(arr,idx) {
        if(bl) return 0;
        if(idx==3){
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    for (let k = 0; k < 4; k++) {
                        if(op(op(arr[0],arr[1],i),op(arr[2],arr[3],j),k)===24) {
                            document.getElementById("ans").innerText = "(" + a[0] + o[i] + a[1] + ")" + o[k] + "(" + a[2] + o[j] + a[3] + ") = 24";
                            document.getElementById("ans").style = "color : #102C57;";
                            bl = true;
                            return 0;
                        }
                    }
                }
            }
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    for (let k = 0; k < 4; k++) {
                        if(op(op(op(arr[0],arr[1],i),arr[2],j),arr[3],k)===24) {
                            document.getElementById("ans").innerText = "((" + a[0] + o[i] + a[1] + ")" + o[j] + arr[2]+")" + o[k] + arr[3] + " = 24";
                            document.getElementById("ans").style = "color : #102C57;";
                            bl = true;
                            return 0;
                        }
                    }
                }
            }
        }
        else {
            for (let i = idx; i < 4; i++) {
                arr = swap(arr,i,idx);
                next_permutation(arr,idx+1);
                arr = swap(arr,i,idx);
            }
        }
    }
    next_permutation(a,0);
    if(!bl) {
        document.getElementById("ans").innerText = "No Answer!";
        document.getElementById("ans").style = "color : red;";
    }
}//