let evUrunleri=["blender","150","kettle","250","süpürge","300"];
let teknoUrunleri=["tablet","1600","telefon","4000","televizyon","8000"];
let gamerUrunleri=["klavye","400","mause","250","kulaklık","900"];
let i;
let urunAciklama,urunSecenek;
let eklenecekler=[];


for(i=0;i<document.getElementsByName("kategori").length;i++)
{
    document.getElementsByName("kategori")[i].addEventListener("change",urunleriGetir);
}

function olustur(){
    urunAciklama=document.createElement("label");
    urunSecenek=document.createElement("input");
    document.getElementById("urunPanel").appendChild(urunAciklama);
    document.getElementById("urunPanel").appendChild(urunSecenek);
    urunSecenek.type="checkbox";
    urunSecenek.setAttribute("name","urunler");
    urunAciklama.setAttribute("for","urunler");
    urunAciklama.setAttribute("class","urunler");
}

function urunleriGetir(){
    const silinecekler = document.getElementById("urunPanel");
    while (silinecekler.hasChildNodes()) {
      silinecekler.removeChild(silinecekler.firstChild);
    }


    if(document.getElementById("kategoriEv").checked)
    {
        for(i=0;i<evUrunleri.length;i=i+2)
        {
            olustur();
            urunSecenek.value=evUrunleri[i+1];
            urunAciklama.innerHTML=evUrunleri[i]; 
        }
    }

    
    else if(document.getElementById("kategoriTekno").checked)
    {
        for(i=0;i<teknoUrunleri.length;i=i+2)
        {
        olustur();
        urunSecenek.value=teknoUrunleri[i+1];
        urunAciklama.innerHTML=teknoUrunleri[i];
        }
    }


    else if(document.getElementById("kategoriGamer").checked)
    {
        for(i=0;i<gamerUrunleri.length;i=i+2)
        {
        olustur();
        urunSecenek.value=gamerUrunleri[i+1];
        urunAciklama.innerHTML=gamerUrunleri[i];
        }
    }


    const listeUrunlerFiyat=document.getElementsByName("urunler");
    const listeUrunlerAd=document.getElementsByClassName("urunler");

    
    document.addEventListener("change",()=>{
        let urunFiyat=0;
        eklenecekler=[];
        for(i=0;i<listeUrunlerFiyat.length;i++){
            if(listeUrunlerFiyat[i].checked){
                urunFiyat+=Number(listeUrunlerFiyat[i].value);
                eklenecekler.push(listeUrunlerAd[i].innerHTML);
            }
        }
        console.log(urunFiyat);
        console.log(eklenecekler);
    }
   