const sugProducts = [
    {
        id : 1 ,
        Name : "ابله", 
        writer : "داستایفسکی",
        translator : "سروش حبیبی",
        brand : "چشمه",
        info : "",
        cat : "ADABIAT",
        price : 450000,
        discuntPrice : 45000,
        quantity : 4,
        imageSrc: "ablahImg",
        discuntPercent: 10,
        point: 4.7,
        tags : ["داستایفسکی" , "ادبیات روس" , "ابله" , "رمان"],
        fav: false,
        suggest : false,
        addToCart : false,
        indexQ : 0
    },
    {
        id : 2 ,
        Name : "وقتی نیچه گریست", 
        writer : "اروین یالوم",
        translator : "سپیده حبیب",
        brand : "قطره",
        info : "",
        cat : "RAVAN",
        price : 140000,
        discuntPrice : 40000,
        quantity : 5,
        imageSrc: "vaghtiNicheGeristImg",
        discuntPercent: 1,
        point: 5.0,
        tags : ["روانشناسی" , "اروین یالوم" , "نیچه" , "فلسفه"],
        fav: false,
        suggest : false,
        addToCart : false,
        indexQ : 0
    },
    {
        id : 3,
        Name : "فراسوی نیک و بد", 
        writer : "فردریش نیچه",
        translator : "ساناز بهبودی",
        brand : "قطره",
        info : "",
        cat : "FALSAFE",
        price : 140000,
        discuntPrice : 40000,
        quantity : 5,
        imageSrc: "farasoNikBadImg",
        discuntPercent: 1,
        point: 3.7,
        tags : ["نیچه" , "فلسفه" , "کتاب" , "لورم"],
        fav: false,
        suggest : false,
        addToCart : false,
        indexQ : 0
    },
    {
        id : 4 ,
        Name : "کیمیا گر", 
        writer : "پائولو کوئلیو",
        translator : "حسین نعیمی",
        brand : "الف",
        info : "",
        cat : "ADABIAT",
        price : 140000,
        discuntPrice : 40000,
        quantity : 5,
        imageSrc: "kimiagarImg",
        discuntPercent: 1,
        point: 2.7,
        tags : ["رمان" , "کیمیاگر" , "لورم" , "لورم"],
        fav: false,
        suggest : false,
        addToCart : false,
        indexQ : 0
    },
    {
        id : 5 ,
        Name : "جنایت و مکافات", 
        writer : "فئودور داستایفسکی",
        translator : "اصغر رستگار",
        brand : "نگاه",
        info : "",
        cat : "ADABIAT",
        price : 140000,
        discuntPrice : 40000,
        quantity : 5,
        imageSrc: "jenayatVaMokafatImg",
        discuntPercent: 1,
        point: 2.5,
        tags : ["ادبیات روس" , "داستایفسکی" , "رمان" , "جنایت و مکافات"],
        fav: false,
        suggest : false,
        addToCart : false,
        indexQ : 0
    },
    {
        id : 6 ,
        Name : "جز از کل", 
        writer : "استیو تولتز",
        translator : "پیمان خاکسار",
        brand : "جهان نو",
        info : "",
        cat : "RAVAN",
        price : 140000,
        discuntPrice : 40000,
        quantity : 5,
        imageSrc: "jozAzKolImg",
        discuntPercent: 1,
        point: 4.0,
        tags : ["جز از کا" , "خودشناسی" , "روانشناسی" , "لورم"],
        fav: false,
        suggest : false,
        addToCart : false,
        indexQ : 0
    },
    {
        id : 7 ,
        Name : "استیو جابز چه کسی بود؟", 
        writer : "مک بلویزو",
        translator : "حمید رضا بیات",
        brand : "بهار",
        info : "",
        cat : "BIO",
        price : 140000,
        discuntPrice : 40000,
        quantity : 5,
        imageSrc: "steveJobsImg",
        discuntPercent: 1,
        point: 1.0,
        tags : ["زندگینامه" , "استیو جابز" , "لورم" , "لورم"],
        fav: false,
        suggest : false,
        addToCart : false,
        indexQ : 0
    },
    {
        id : 8 ,
        Name : "جنگ جهانی اول", 
        writer : "رابرت گرین",
        translator : "مهدی حقیقت خواه",
        brand : "کارنامه",
        info : "",
        cat : "TARIKH",
        price : 140000,
        discuntPrice : 40000,
        quantity : 5,
        imageSrc: "jangJahaniImg",
        discuntPercent: 1,
        point: 3.4,
        tags : ["تاریخ" , "جغرافیا" , "جنگ" , "لورم"],
        fav: false,
        suggest : false,
        addToCart : false,
        indexQ : 0
    },
    {
        id : 9 ,
        Name : "ایستگاه اخر", 
        writer : "مت دلانپا",
        translator : "مریم مومنی",
        brand : "زعفران",
        info : "",
        cat : "KOODAK",
        price : 140000,
        discuntPrice : 40000,
        quantity : 5,
        imageSrc: "istgahAkharImg",
        discuntPercent: 1,
        point: 2.0,
        tags : ["کودک" , "نوجوان" , "داستان" , "لورم"],
        fav: false,
        suggest : false,
        addToCart : false,
        indexQ : 0
    },
    {
        id : 10 ,
        Name : "قلعه حیوانات", 
        writer : "جورج اورول",
        translator : "معصومه شاطرزاده",
        brand : "قطره",
        info : "",
        cat : "ADABIAT",
        price : 140000,
        discuntPrice : 40000,
        quantity : 5,
        imageSrc: "ghaleHeyvanatImg",
        discuntPercent: 1,
        point: 4.8,
        tags : ["رمان" , "جورج اورول" , "لورم" , "لورم"],
        fav: false,
        suggest : false,
        addToCart : false,
        indexQ : 0
    },

]

const category = [
    {
        id : 1 , 
        value : ["ادبیات فارسی" , "ادبیات روس" , "ادبیات فرانسه" , "شعر کلاسیک " , "شعر نو" , "دیوان اشعار" , "ادبیات انگلیس"]
    },
    {
        id : 2 , 
        value : ["one" , "tow" , " three" , "four"]
    },
    {
        id : 3 , 
        value : ["one" , "tow" , " three" , "four"]
    },
    {
        id : 4 , 
        value : ["one" , "tow" , " three" , "four"]
    },
    {
        id : 5 , 
        value : ["one" , "tow" , " three" , "four"]
    },
    {
        id : 6 , 
        value : ["one" , "tow" , " three" , "four"]
    },
    {
        id : 7 , 
        value : ["one" , "tow" , " three" , "four"]
    }, 
     {
        id : 8 , 
        value : ["one" , "tow" , " three" , "four"]
    },  
    {
        id : 9 , 
        value : ["one" , "tow" , " three" , "four"]
    }, 
     {
        id : 10 , 
        value : ["one" , "tow" , " three" , "four"]
    },
    {
        id : 11 , 
        value : ["one" , "tow" , " three" , "four"]
    },
    {
        id : 12 , 
        value : ["one" , "tow" , " three" , "four"]
    },
]

export const getCategory = () => {
    return category;
}

export const    getSugProducts = () => {
    return sugProducts;
}



const cartProducts = [];

export const    getCartProducts = () => {
    return cartProducts;
}


