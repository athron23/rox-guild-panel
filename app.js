const GAS_URL="https://script.google.com/macros/s/AKfycbxz5pPwMzeOkoz9O_v607AZFniRdd4Y9-USE3BpvkAbsxq2rAGAJ5aSXEv6q3mBtW4/exec";

let isAdmin=false;

function login(){
 if(document.getElementById("pass").value===ADMIN_PASS){
  isAdmin=true;
  alert("หัวกิลด์เข้าแล้ว");
 }
}

// =====================
// โหลดจาก Google Sheet
// =====================
fetch(SHEET_CSV)
.then(r=>r.text())
.then(csv=>{
 let rows=csv.split("\n").slice(1);

 rows.forEach(r=>{
  let col=r.split(",");
  let name=col[0];
  let job=col[1];

  if(!name) return;

  createChar(name,job,"pool");
 });

 enableDrag();
});

// =====================
// เพิ่มตัวละคร + ส่ง sheet
// =====================
function addChar(){

 if(!isAdmin){
  alert("หัวกิลด์เท่านั้น");
  return;
 }

 let name=document.getElementById("charName").value.trim();
 let job=document.getElementById("charJob").value;

 if(!name) return;

 createChar(name,job,"pool");

 // 🔥 ส่งไป Google Sheet
 fetch(GAS_URL,{
  method:"POST",
  body:JSON.stringify({
   name:name,
   job:job
  })
 });

 document.getElementById("charName").value="";
}

// =====================
// สร้างตัวละครในหน้า
// =====================
function createChar(name,job,where){

 let d=document.createElement("div");
 d.className="char";
 d.draggable=true;
 d.dataset.name=name;
 d.dataset.job=job;

 let img=document.createElement("img");
 img.src="icons/"+job+".png";

 let span=document.createElement("span");
 span.innerText=name;

 d.appendChild(img);
 d.appendChild(span);

 document.getElementById(where).appendChild(d);
}

// =====================
// drag & drop
// =====================
function enableDrag(){

 document.addEventListener("dragstart",e=>{
  if(!isAdmin) return e.preventDefault();

  if(!e.target.classList.contains("char")) return;

  e.dataTransfer.setData("name",e.target.dataset.name);
  e.dataTransfer.setData("job",e.target.dataset.job);

  // ลบตัวเก่า
  e.target.remove();
 });

 document.querySelectorAll(".raid,.pool").forEach(box=>{
  box.ondragover=e=>e.preventDefault();

  box.ondrop=e=>{
   if(!isAdmin) return;

   e.preventDefault();

   let name=e.dataTransfer.getData("name");
   let job=e.dataTransfer.getData("job");

   if(box.classList.contains("raid")){
    if(box.querySelectorAll(".char").length>=15){
      alert("เต็ม 15");
      return;
    }
   }

   createChar(name,job,box.id);
   syncRealtime();
  };
 });
}

// =====================
// realtime save firebase
// =====================
function syncRealtime(){

 let data={};

 document.querySelectorAll(".raid").forEach(r=>{
  data[r.id]=[];

  r.querySelectorAll(".char").forEach(c=>{
   data[r.id].push({
    name:c.dataset.name,
    job:c.dataset.job
   });
  });
 });

 db.ref("raid").set(data);
}

// =====================
// realtime load
// =====================
db.ref("raid").on("value",snap=>{

 if(!snap.val()) return;

 let data=snap.val();

 document.querySelectorAll(".raid").forEach(r=>{
  r.innerHTML="<h2>"+r.id.toUpperCase()+"</h2>";
 });

 for(let raid in data){
  data[raid].forEach(c=>{
   createChar(c.name,c.job,raid);
  });
 }
});
