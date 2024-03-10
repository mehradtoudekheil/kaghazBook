import React from 'react'
// import images
import ablahImg from "../../assets/images/products/ablah.webp"
import farasoNikBadImg from "../../assets/images/products/farasooye-nik-bad.webp";
import ghaleHeyvanatImg from "../../assets/images/products/ghale-heyvanat.webp";
import jangJahaniImg from "../../assets/images/products/jang-jahani-aval.webp";
import jenayatVaMokafatImg from "../../assets/images/products/jenayat-mokafat.webp";
import jozAzKolImg from "../../assets/images/products/joz-az-kol.webp";
import steveJobsImg from "../../assets/images/products/steve-jobs.webp";
import kimiagarImg from "../../assets/images/products/kimiagar.webp";
import istgahAkharImg from "../../assets/images/products/istgah-akhar.webp";
import vaghtiNicheGeristImg from "../../assets/images/products/vaghti-niche-gerist.webp";


function ImageMaker({imageName , listedClass}) {
let image;
    switch(imageName){
        case "ablahImg" : 
        image = <img src={ablahImg} className={listedClass} alt="" />
        break;
        case "farasoNikBadImg" : 
        image = <img src={farasoNikBadImg} className={listedClass} alt="" />
        break;
        case "ghaleHeyvanatImg" : 
        image = <img src={ghaleHeyvanatImg} className={listedClass} alt="" />
        break;
        case "jangJahaniImg" : 
        image = <img src={jangJahaniImg} className={listedClass} alt="" />
        break;
        case "jenayatVaMokafatImg" : 
        image = <img src={jenayatVaMokafatImg} className={listedClass} alt="" />
        break;
        case "jozAzKolImg" : 
        image = <img src={jozAzKolImg} className={listedClass} alt="" />
        break;
        case "steveJobsImg" : 
        image = <img src={steveJobsImg} className={listedClass} alt="" />
        break;
        case "kimiagarImg" : 
        image = <img src={kimiagarImg} className={listedClass} alt="" />
        break;
        case "istgahAkharImg" : 
        image = <img src={istgahAkharImg} className={listedClass} alt="" />
        break;
        case "vaghtiNicheGeristImg" : 
        image = <img src={vaghtiNicheGeristImg} className={listedClass} alt="" />
        break;
    }
    
  return (
   <>
   {image}
   </>
  )
}

export default ImageMaker