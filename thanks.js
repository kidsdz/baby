document.getElementById("stats").innerHTML =
"📦 عدد الطلبات: " + (localStorage.getItem("orders") || 1);