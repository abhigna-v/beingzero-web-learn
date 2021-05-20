var cnt=0;
var arr=new Array();
for (var x =0;x<90;x++)
{
    arr.push(0);
}
function fun()
{
    if(cnt==90){
        alert("all numbers are generated refresh to start new one!!");
        document.getElementById("div1").innerHTML="0";
        return;
    }
    var rnum;
    do{
        rnum=Math.floor(Math.random() * 90) + 1; 
        //alert(rnum+"**"+arr[rnum]);
    }while(arr[rnum-1]==1);
    arr[rnum-1]=1;
    //alert(JSON.stringify(arr));
    cnt=cnt+1;
    document.getElementById("div1").innerHTML=rnum;
    //document.getElementById(rnum).innerHTML="****";
    document.getElementById(rnum).style.color="purple";
    document.getElementById(rnum).style.fontSize="30px";
    //alert("bye:("+123+"count :"+cnt);
    //alert(rnum+"**");
}