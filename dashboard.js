let v=localStorage.getItem("visits")||0;
localStorage.setItem("visits",++v);

document.getElementById("o").innerText=
localStorage.getItem("orders")||0;
document.getElementById("v").innerText=v;