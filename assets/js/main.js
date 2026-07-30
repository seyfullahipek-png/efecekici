"use strict";
document.addEventListener("DOMContentLoaded",()=>{
  const header=document.getElementById("siteHeader");
  const updateHeader=()=>header?.classList.toggle("scrolled",window.scrollY>20);
  updateHeader();window.addEventListener("scroll",updateHeader,{passive:true});
  document.querySelectorAll("[data-current-year]").forEach(el=>el.textContent=new Date().getFullYear());
  const current=(location.pathname.split("/").pop()||"index.html").toLowerCase();
  document.querySelectorAll(".navbar .nav-link").forEach(a=>{const href=(a.getAttribute("href")||"").split("/").pop().toLowerCase();if(href===current)a.classList.add("active")});
  document.querySelectorAll("[data-track]").forEach(el=>el.addEventListener("click",()=>{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:el.dataset.track,link_url:el.href||""})}));
  const cookie=document.getElementById("cookieBanner");
  if(cookie&&!localStorage.getItem("kocalarCookieAccepted"))setTimeout(()=>cookie.classList.add("show"),900);
  document.getElementById("acceptCookies")?.addEventListener("click",()=>{localStorage.setItem("kocalarCookieAccepted","1");cookie?.classList.remove("show")});
  document.querySelectorAll("[data-whatsapp-form]").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const status=form.querySelector(".alert-status");
      const hp=form.querySelector('[name="website"]');
      if(hp&&hp.value) return;
      if(!form.checkValidity()){form.classList.add("was-validated");if(status){status.className="alert alert-danger alert-status show";status.textContent="Lütfen zorunlu alanları doğru şekilde doldurun."};return;}
      const fd=new FormData(form);const clean=v=>String(v||"").replace(/[<>]/g,"").trim().slice(0,500);
      const lines=["Merhaba, Kocalar Yol Yardım için hizmet talep ediyorum.",""];
      for(const [k,v] of fd.entries()){if(k!=="website"&&k!=="kvkk"&&clean(v))lines.push(`${k}: ${clean(v)}`)}
      const url="https://wa.me/905352437016?text="+encodeURIComponent(lines.join("\n"));
      window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"quote_request"});
      if(status){status.className="alert alert-success alert-status show";status.textContent="Bilgileriniz hazırlandı. WhatsApp açılıyor…"}
      window.open(url,"_blank","noopener,noreferrer");
    });
  });
});
