// Обработка перехода на другую страницу
document.querySelector(".btnesa").addEventListener("click", function(){
    document.location.href = "../FirstPage/index.html";
});

// Массив с элементами списка
let listgroupItems = [
    { class: "Acer", class2: "active", desk: "Acer" },
    { class: "hp", class2: "", desk: "HP" },
    { class: "Asus", class2: "", desk: "Asus" },
    { class: "Dell", class2: "", desk: "Dell" },
    { class: "Lenovo", class2: "", desk: "Lenovo" },
    { class: "lg", class2: "", desk: "LG" },
    { class: "Casper", class2: "", desk: "Casper" },
    { class: "Fujitsu", class2: "", desk: "Fujitsu" },
    { class: "Nexus", class2: "", desk: "Nexus" },
    { class: "Samsung", class2: "", desk: "Samsung" },
    { class: "Toshiba", class2: "", desk: "Toshiba" },
    { class: "Sony", class2: "", desk: "Sony" },
];

// Отображение элементов списка в list-group
listgroupItems.forEach(item => {
    let newlistgroup = `
        <li class="list-group-item ${item.class2}" id="${item.class}" aria-current="true">${item.desk}</li>
    `;
    document.querySelector(".list-group").innerHTML += newlistgroup;
});

let computers = [
    
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer2", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Acer", img: "https://www.mgstore.az/image/catalog/1883944_v01_b.jpg", ad: "Acer", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},

    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "hp", img: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", ad: "HP", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    
    
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Asus", img: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", ad: "Asus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},

    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Dell", img: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", ad: "Dell", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Lenovo", img: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", ad: "Lenovo", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Lenovo", img: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", ad: "Lenovo", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Lenovo", img: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", ad: "Lenovo", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Lenovo", img: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", ad: "Lenovo", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Lenovo", img: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", ad: "Lenovo", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Lenovo", img: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", ad: "Lenovo", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Lenovo", img: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", ad: "Lenovo", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Lenovo", img: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", ad: "Lenovo", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Lenovo", img: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", ad: "Lenovo", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Lenovo", img: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", ad: "Lenovo", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "lg", img: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", ad: "lg", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "lg", img: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", ad: "lg", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "lg", img: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", ad: "lg", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "lg", img: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", ad: "lg", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "lg", img: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", ad: "lg", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "lg", img: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", ad: "lg", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "lg", img: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", ad: "lg", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "lg", img: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", ad: "lg", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "lg", img: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", ad: "lg", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "lg", img: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", ad: "lg", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Casper", img: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", ad: "Casper", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Casper", img: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", ad: "Casper", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Casper", img: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", ad: "Casper", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Casper", img: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", ad: "Casper", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Casper", img: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", ad: "Casper", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Casper", img: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", ad: "Casper", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Casper", img: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", ad: "Casper", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Casper", img: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", ad: "Casper", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Casper", img: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", ad: "Casper", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Casper", img: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", ad: "Casper", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Fujitsu", img: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", ad: "Fujitsu", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Fujitsu", img: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", ad: "Fujitsu", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Fujitsu", img: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", ad: "Fujitsu", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Fujitsu", img: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", ad: "Fujitsu", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Fujitsu", img: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", ad: "Fujitsu", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Fujitsu", img: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", ad: "Fujitsu", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Fujitsu", img: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", ad: "Fujitsu", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Fujitsu", img: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", ad: "Fujitsu", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Fujitsu", img: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", ad: "Fujitsu", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Nexus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", ad: "Nexus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Nexus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", ad: "Nexus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Nexus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", ad: "Nexus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Nexus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", ad: "Nexus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Nexus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", ad: "Nexus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Nexus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", ad: "Nexus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Nexus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", ad: "Nexus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Nexus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", ad: "Nexus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Nexus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", ad: "Nexus", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Samsung", img: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", ad: "Samsung", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Samsung", img: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", ad: "Samsung", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Samsung", img: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", ad: "Samsung", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Samsung", img: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", ad: "Samsung", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Samsung", img: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", ad: "Samsung", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Samsung", img: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", ad: "Samsung", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Samsung", img: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", ad: "Samsung", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Samsung", img: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", ad: "Samsung", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Samsung", img: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", ad: "Samsung", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Toshiba", img: "https://compstore.az/data/img/201202/660/medium_l750.webp", ad: "Toshiba", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Toshiba", img: "https://compstore.az/data/img/201202/660/medium_l750.webp", ad: "Toshiba", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Toshiba", img: "https://compstore.az/data/img/201202/660/medium_l750.webp", ad: "Toshiba", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Toshiba", img: "https://compstore.az/data/img/201202/660/medium_l750.webp", ad: "Toshiba", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Toshiba", img: "https://compstore.az/data/img/201202/660/medium_l750.webp", ad: "Toshiba", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Toshiba", img: "https://compstore.az/data/img/201202/660/medium_l750.webp", ad: "Toshiba", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Toshiba", img: "https://compstore.az/data/img/201202/660/medium_l750.webp", ad: "Toshiba", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Toshiba", img: "https://compstore.az/data/img/201202/660/medium_l750.webp", ad: "Toshiba", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", ad: "Sony", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", ad: "Sony", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", ad: "Sony", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", ad: "Sony", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", ad: "Sony", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", ad: "Sony", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", ad: "Sony", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", ad: "Sony", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", ad: "Sony", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
    { name: "Sony", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", ad: "Sony", tesvir: "tesviri", qiymet: 123, yeni: "xeyr", telefon: "010-727-7847", emy:"12", cpu:"Core i5", daim:"256", day:"SDD", es:"Windows10", vk:"12"},
];

function displayComputers(category) {
    document.querySelector(".card-grid").innerHTML = ''
    computers
        .filter(computer => computer.name === category)
        .forEach(item => {
            let newCard = `
            <div class="card2 d-block">
                <img src="${item.img}" alt="">
                <p>Ad: ${item.ad}</p>
                <p>Tesvir: ${item.tesvir}</p>
                <p>Qiymet: ${item.qiymet}</p>
                <p>Yeni: ${item.yeni}</p>
                <p>Telefon: ${item.telefon}</p>
                <button type="button" id="btn"   class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Etrafli</button>
            </div>
            `;
            document.querySelector(".card-grid").innerHTML += newCard;
        });
}

let activeCategory = document.querySelector(".list-group-item.active").id;
displayComputers(activeCategory);

document.querySelectorAll(".list-group-item").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll(".list-group-item").forEach(el => el.classList.remove("active"));
        this.classList.add("active");

        let selectedCategory = this.id;
        displayComputers(selectedCategory);
    });
});




document.addEventListener("DOMContentLoaded", () => {
    function createModal(contentId, card) {
        const modalElement = document.createElement('div');
        modalElement.className = 'modal fade';
        modalElement.id = contentId;
        modalElement.tabIndex = -1;
        modalElement.setAttribute('aria-labelledby', `${contentId}Label`);
        modalElement.setAttribute('aria-hidden', 'true');

        modalElement.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="${contentId}Label">Komputer Haqqinda etrafli mellumat</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img class="imgModal" src="${card.img}" alt="Computer Image">
                        <div class="EveryOne">
                        <ul>
                            <li>Ad: ${card.name}</li>
                            <li>Təsvir: ${card.tesvir}</li>
                            <li>Qiymət: ${card.qiymet}</li>
                            <li>Telefon: ${card.telefon}</li>
                            <li>Yeni: ${card.yeni}</li>
                            <li>Əməli Yaddaş: ${card.emy}</li>
                            <li>CPU: ${card.cpu}</li>
                            <li>Daimi Yaddaş: ${card.daim}</li>
                            <li>Daimi Yaddaş Tipi: ${card.day}</li>
                            <li>Əməliyyat Sistemi: ${card.es}</li>
                            <li>Video Kart: ${card.vk}</li>
                        </ul></div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modalElement);

        return new bootstrap.Modal(modalElement);
    }

    // Add event listeners to buttons
    document.querySelector(".card-grid").addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-primary")) {
            const cardIndex = event.target.getAttribute('data-index');
            const card = computers[cardIndex];
            
            const modalId = `modal-${cardIndex}`;
            const modal = createModal(modalId, card);
            modal.show();

            modal._element.addEventListener('hidden.bs.modal', function () {
                modal._element.remove();
            });
        }
    });

    // Display computers in cards
    function displayComputers(category) {
        document.querySelector(".card-grid").innerHTML = '';

        computers
            .filter(computer => computer.name === category)
            .forEach((item, index) => {
                let newCard = `
                <div class="card2 d-block">
                    <img src="${item.img}" alt="">
                    <p>Ad: ${item.ad}</p>
                    <p>Təsvir: ${item.tesvir}</p>
                    <p>Qiymət: ${item.qiymet}</p>
                    <p>Yeni: ${item.yeni}</p>
                    <p>Telefon: ${item.telefon}</p>
                    <button type="button" class="btn btn-primary" data-index="${index}">Etrafli</button>
                </div>
                `;
                document.querySelector(".card-grid").innerHTML += newCard;
            });
    }

    const initialCategory = 'Acer';
    displayComputers(initialCategory);

    // Add event listeners to category buttons (if needed)
    document.querySelectorAll(".list-group-item").forEach(item => {
        item.addEventListener("click", function() {
            document.querySelectorAll(".list-group-item").forEach(el => el.classList.remove("active"));
            this.classList.add("active");

            let selectedCategory = this.id;
            displayComputers(selectedCategory);
        });
    });
});





