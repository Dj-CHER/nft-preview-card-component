function TO_DO1()
{
  document.getElementById("view").style.zIndex = "1";
  document.getElementById("view").style.height = "300px";
  document.getElementById("view").style.visibility = "visible";
  document.getElementById("view1").style.visibility = "visible";
  document.getElementById("view1").style.transform = "translateY(0)";
}


function TO_DO2()
{
    document.getElementById("view").style.height = "0px"; 
    document.getElementById("view").style.zIndex = "0";
    document.getElementById("view1").style.transform = "translateY(-70px)";
    document.getElementById("view1").style.visibility = "hidden";
    document.getElementById("view").style.visibility = "hidden"
}

