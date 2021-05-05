var red_val=0,green_val=0,blue_val=0;
function showValue1(newValue)
{
    red_val=newValue;
    //alert(red_val+" "+green_val+" "+blue_val);
    var bgcolor = "rgb(" + red_val + "," + green_val + "," + blue_val + ")";
    document.getElementById("display").style.backgroundColor=bgcolor;
    var rgbval="rgb( "+red_val+" , "+green_val+", "+blue_val+" )";
    //alert(rgbval);
    document.getElementById("rgbval1").innerHTML=rgbval;
    document.getElementById("range1").innerHTML=red_val;

}
function showValue2(newValue)
{
    green_val=newValue;
	//alert(red_val+" "+green_val+" "+blue_val);
    var bgcolor = "rgb(" + red_val + "," + green_val + "," + blue_val + ")";
    document.getElementById("display").style.backgroundColor=bgcolor;
    var rgbval="rgb( "+red_val+" , "+green_val+", "+blue_val+" )";
    //alert(rgbval);
    document.getElementById("rgbval1").innerHTML=rgbval;
    document.getElementById("range2").innerHTML=green_val;
}
function showValue3(newValue)
{
    blue_val=newValue;
	//alert(red_val+" "+green_val+" "+blue_val);
    var bgcolor = "rgb(" + red_val + "," + green_val + "," + blue_val + ")";
    document.getElementById("display").style.backgroundColor=bgcolor;
    var rgbval="rgb( "+red_val+" , "+green_val+", "+blue_val+" )";
    document.getElementById("rgbval1").innerHTML=rgbval;
    document.getElementById("range3").innerHTML=blue_val;
}