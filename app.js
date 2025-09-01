const SITE_CONTENT = {
  title: "ร้อยรักดวงใจสายใยผูกพัน",
  retireeName: "นางสาว… ผู้เกษียณอายุราชการ",
  retireeNameEn: "Honoring Ms.…",
  org: "หน่วยงาน/โรงพยาบาล…",
  orgEn: "Organization / Hospital",
  date: "วันพุธที่ 17 กันยายน 2568",
  time: "08:30–13:30 น.",
  eventDateISO: "2025-09-17T08:30:00+07:00",
  venue: "ห้องกระจก ชั้น 12 อาคารเฉลิมพระเกียรติฯ",
  heroCopy: "ขอเรียนเชิญร่วมแสดงมุทิตาจิตแด่ผู้เกษียณ",
  heroCopyEn: "You're cordially invited to the retirement celebration.",
  contact: "ฝ่ายจัดงาน 02-xxx-xxxx | email@org.go.th",
  themeColors: [
    { name: "Pink", hex: "#f4b3cf" },
    { name: "Gold", hex: "#d4af37" }
  ],
  program: [
    { time: "08:30", th: "ลงทะเบียน", en: "Registration" },
    { time: "09:00", th: "พิธีมุทิตาจิต", en: "Ceremony" },
    { time: "11:00", th: "รับประทานอาหาร", en: "Luncheon" }
  ]
};

function $(s,c=document){return c.querySelector(s);}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500);}
function populate(){
  $("#title").textContent = SITE_CONTENT.title;
  $("#retireeLine").textContent = SITE_CONTENT.retireeName;
  $("#retireeLineEn").textContent = SITE_CONTENT.retireeNameEn;
  $("#orgLine").textContent = SITE_CONTENT.org;
  $("#orgLineEn").textContent = SITE_CONTENT.orgEn;
  $("#heroCopy").textContent = SITE_CONTENT.heroCopy;
  $("#heroCopyEn").textContent = SITE_CONTENT.heroCopyEn;
  $("#dateTime").textContent = `${SITE_CONTENT.date} • ${SITE_CONTENT.time}`;
  $("#venue").textContent = SITE_CONTENT.venue;
  $("#contact").textContent = SITE_CONTENT.contact;
  $("#orgFooter").textContent = SITE_CONTENT.org;
  $("#year").textContent = new Date().getFullYear();
  // theme chips
  const chips=$("#themeColors");
  SITE_CONTENT.themeColors.forEach(c=>{
    const el=document.createElement("div");
    el.className="chip";
    el.innerHTML=`<span class="swatch" style="background:${c.hex};width:14px;height:14px;border-radius:50%;display:inline-block"></span> ${c.name}`;
    chips.appendChild(el);
  });
  // program
  const list=$("#programList");
  SITE_CONTENT.program.forEach(p=>{
    const li=document.createElement("li");
    li.innerHTML=`<time>${p.time}</time> ${p.th} <span class="en">${p.en}</span>`;
    list.appendChild(li);
  });
}
populate();

// countdown
function tick(){
  const end=new Date(SITE_CONTENT.eventDateISO).getTime();
  const now=Date.now();let d=0,h=0,m=0,s=0;
  if(end>now){let gap=end-now;s=Math.floor(gap/1000)%60;m=Math.floor(gap/60000)%60;h=Math.floor(gap/3600000)%24;d=Math.floor(gap/86400000);}
  $("#dd").textContent=d;$("#hh").textContent=h;$("#mm").textContent=m;$("#ss").textContent=s;
}
tick();setInterval(tick,1000);

// music
$("#btnPlay").addEventListener("click",()=>{const a=$("#bgm");a.play();$("#musicStatus").textContent="กำลังเล่นเพลง";toast("กำลังเล่นเพลง");});
$("#btnPrint").addEventListener("click",()=>window.print());
