function yillar()
{
    var tarih=new Date();
    var yil=tarih.getFullYear();

    for(var i=yil;i>=1950;i--)
    {
        var secenek=document.createElement("option");
        document.getElementById("aracYili").options.add(secenek);
        secenek.value=i;
        secenek.text=i;
    }
}
 
 
 function vergiHesapla()
 {
    let aracTipi,i,odenecekVergi,aracGucu,aracYili;
    
    // 1. döngü bloğu araç türünü alma
   for(i=0;i<document.getElementById('aracTipi').length;i++){
    
    if(document.getElementById('aracTipi').options[i].selected){
        aracTipi = document.getElementById('aracTipi').options[i].value;
    }
        console.log(aracTipi);
   }

   // 2. döngü bloğu motor türü
   for(i=0;i<document.getElementsByName("motorGucu").length;i++)
   {
       if(document.getElementsByName("motorGucu")[i].checked)
       {
           aracGucu=document.getElementsByName("motorGucu")[i].value;
       }

       console.log(aracGucu);
   }

   // 3. döngü bloğu araç yılı seçimi

    for(i=0;i<document.getElementById('aracYili').length;i++){
    
    if(document.getElementById('aracYili').options[i].selected){
        
        aracYili = document.getElementById('aracYili').options[i].value;
    }
    console.log(aracTipi);
   }
   
   //1. Kontrol bloğu
   if(aracTipi == "motorsiklet"){
        odenecekVergi = 100;
   }else if(aracTipi == "otomobil"){
        odenecekVergi = 200
   }
     
    // 2. kontrol bloğu motor türüne göre eklenecek vergi
    if(aracGucu == "1000cc-1600cc")
    {
        odenecekVergi = odenecekVergi + 50;
    }
    else if(aracGucu == "1601cc-2000cc")
    {
        odenecekVergi = odenecekVergi + 100;
    }else if(aracGucu == "2001cc")
    {
        odenecekVergi = odenecekVergi + 150;
    }


    // 3. kontol bloğu araba yılı için
    if(aracYili <= 2010){
        odenecekVergi = odenecekVergi - 25;
    }else if(aracYili >= 2010){
        odenecekVergi = odenecekVergi + 50;
    }
    
    document.getElementById('sonuc').innerHTML = 'Ödemeniz gereken vergi: '+ odenecekVergi;

}  

