const SHEET_URL = "PUT_APPS_SCRIPT_URL";
const WHATSAPP = "213XXXXXXXXX";

function openOrder(id){
  document.getElementById("order"+id).style.display="block";
}

document.querySelectorAll(".product-images").forEach(box=>{
  const imgs=box.querySelectorAll("img");let i=0;
  setInterval(()=>{
    imgs[i].classList.remove("active");
    i=(i+1)%imgs.length;
    imgs[i].classList.add("active");
  },3000);
});

function sendOrder(id,product){
  const name=name1.value.trim();
  const phone=phone1.value.trim();
  const wilaya=wilaya1.value;
  const color=color1.value;
  const size=size1.value;
  const msg=msg1;

  if(!name||!phone||wilaya.includes("اختر")||
     color.includes("اختر")||size.includes("اختر")){
    msg.style.color="red";
    msg.innerHTML="يرجى ملء جميع الحقول";
    return;
  }

  fetch(SHEET_URL,{
    method:"POST",
    body:JSON.stringify({name,phone,wilaya,color,size,product})
  }).then(()=>{
    let o=localStorage.getItem("orders")||0;
    localStorage.setItem("orders",++o);

    const text=`طلب جديد
الاسم:${name}
الهاتف:${phone}
الولاية:${wilaya}
اللون:${color}
المقاس:${size}
المنتج:${product}`;

    window.location=
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  });
}