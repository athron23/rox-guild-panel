let isAdmin=false;

function login(){
 let p=document.getElementById("pass").value;
 if(p===ADMIN_PASS){
  isAdmin=true;
  alert("หัวกิลด์ login แล้ว");
 }
}

// โหลดจาก Google Sheet
fetch(SHEET_CSV)
.then(r=>r.text())
.then(csv=>{
 let rows=csv.split("\n").slice(1);

 rows.forEach(r=>{
  let name=r.split(",")[0];
  if(!name) return;

  let div=document.createElement("div");
  div.className="char";
  div.draggable=true;
  div.innerText=name;
  document.getElementById("pool").appendChild(div);
 });

 enableDrag();
});

// drag
function enableDrag(){

 document.addEventListener("dragstart",e=>{
  if(!isAdmin) return e.preventDefault();
  e.dataTransfer.setData("text",e.target.innerText);
 });

 document.querySelectorAll(".raid").forEach(r=>{
  r.ondragover=e=>e.preventDefault();

  r.ondrop=e=>{
   if(!isAdmin) return;
   e.preventDefault();

   let name=e.dataTransfer.getData("text");

   if(r.querySelectorAll(".char").length>=15){
    alert("เต็ม 15");
    return;
   }

   let d=document.createElement("div");
   d.className="char";
   d.innerText=name;
   r.appendChild(d);

   syncRealtime();
  };
 });
}

// realtime sync
function syncRealtime(){
 let data={};

 document.querySelectorAll(".raid").forEach(r=>{
  data[r.id]=[];
  r.querySelectorAll(".char").forEach(c=>{
   data[r.id].push(c.innerText);
  });
 });

 db.ref("raid").set(data);
}

// realtime listen
db.ref("raid").on("value",snap=>{
 if(!snap.val()) return;

 let data=snap.val();

 for(let raid in data){
  let box=document.getElementById(raid);
  box.innerHTML=raid.toUpperCase();

  data[raid].forEach(n=>{
   let d=document.createElement("div");
   d.className="char";
   d.innerText=n;
   box.appendChild(d);
  });
 }
});

function save(){
 alert("ถ้าจะ save กลับ Google Sheet เดี๋ยวผมต่อ webhook ให้ขั้นต่อไป");
}
