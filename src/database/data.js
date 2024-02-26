const sugProducts = [
    {
        id : 1 ,
        Name : "موبایل اندروید", 
        cat : "mobile",
        price : 1250000,
        discuntPrice : 1,
        quantity : 1,
        imageSrc: "../img/phone-y21.webp",
        discuntPercent: 14,
        fav: false,
        suggest : false,
        addToCart : false
    },
    {
        id : 2 ,
        Name : "ایرپاد پرو", 
        cat : "digital",
        price : 12000000,
        discuntPrice : 1,
        quantity : 1,
        imageSrc: "../../img/airopod.jpg",
        discuntPercent: 7,
        fav: false,
        suggest : false,
        addToCart : false
    },
    {
        id : 3 ,
        Name : "کتاب آواره و سایه اش", 
        cat : "book",
        price : 75000,
        discuntPrice : 1,
        quantity : 1,
        imageSrc: "../../img/book.webp",
        discuntPercent: 10,
        fav: false,
        suggest : false,
        addToCart : false
    },
    {
        id : 4 ,
        Name : "مچ بند ورزشی", 
        cat : "sport",
        price : 120000,
        discuntPrice : 1,
        quantity : 1,
        imageSrc: "../../img/moch-band.webp",
        discuntPercent: 40,
        fav: false,
        suggest : false,
        addToCart : false
    },
    {
        id : 5 ,
        Name : "کیف دوشی مردانه", 
        cat : "lebas",
        price : 450000,
        discuntPrice : 1,
        quantity : 1,
        imageSrc: "../../img/bag.webp",
        discuntPercent: 5,
        fav: false,
        suggest : false,
        addToCart : false
    },
    {
        id : 6 ,
        Name : "ساعت هوشمند", 
        cat : "digital",
        price : 8000000,
        discuntPrice : 10,
        quantity : 1,
        imageSrc: "../../img/iwatch.jpg",
        discuntPercent: 12,
        fav: false,
        suggest : false,
        addToCart : false
    },
    {
        id : 7 ,
        Name : "لامپ کم مصرف", 
        cat : "home",
        price : 70000,
        discuntPrice : 1,
        quantity : 1,
        imageSrc: "../../img/lamp.webp",
        discuntPercent: 10,
        fav: false,
        suggest : false,
        addToCart : false
    },
    {
        id : 8 ,
        Name : "شیکر ورزشی", 
        cat : "sport",
        price : 120000,
        discuntPrice : 1,
        quantity : 1,
        imageSrc: "../../img/shaker.jpg",
        discuntPercent: 5,
        fav: false,
        suggest : false,
        addToCart : false
    },
    {
        id : 9 ,
        Name : "سرخ کن بدون روغن", 
        cat : "home",
        price : 3500000,
        discuntPrice : 2,
        quantity : 4,
        imageSrc: "../../img/phone-y21.webp",
        discuntPercent: 15,
        fav: false,
        suggest : false,
        addToCart : false
    },
    {
        id : 10 ,
        Name : "اسپیکر بلوتوثی", 
        cat : "digital",
        price : 1,
        discuntPrice : 1500000,
        quantity : 5,
        imageSrc: "../../img/phone-y21.webp",
        discuntPercent: 10,
        fav: false,
        suggest : false,
        addToCart : false
    }
   
]

export const    getSugProducts = () => {
    return sugProducts;
}



const cartProducts = [];

export const    getCartProducts = () => {
    return cartProducts;
}
