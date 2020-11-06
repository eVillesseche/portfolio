document.getElementById("myBtn").addEventListener("click", open_close);

var menuState = 0 // close
function open_close() {
  if(menuState === 0){
     menuState = 1;
     document.getElementById("mySidenav").style.width = "250px";
     //document.getElementById("main").style.marginLeft = "250px";
  }
  else {
     menuState = 0;
     document.getElementById("mySidenav").style.width = "0";
     //document.getElementById("main").style.marginLeft = "0";
      document.body.style.zindex= "18000";
  }
  console.log(menuState);
}
