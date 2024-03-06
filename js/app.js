let multik_name = document.querySelector('.multik_name');
let multik_logo = document.querySelector('.multik_logo');
let search_btn = document.querySelector('button');
let btn = document.querySelector('.btn');
let logo = document.querySelector('.logo');
let search = document.querySelector('#search');

let arr_multik = ["Ajdar o'rgatuvchilar", 'Adamslar oilasi', 'Sinbad', 'Asalarilar fitnasi'];
let arr_random = arr_multik[Math.floor(Math.random() * arr_multik.length)];

let ajdar = 'https://t.me/Multikland_TV/1459';
let ajdar_logo = 'https://lh3.googleusercontent.com/proxy/8BtFgrUO2JbPYM3NEYn8AnpN2kv8mtraDLQHn5uMPRUSfXDNvNsuPsNUDZyP8O9Udw0Z6y1TwgKTTF97Ddduq0A';
let asalari = 'https://t.me/Multikland_TV/1332';
let asalari_logo = 'https://uzbek-tilida.ru/_ld/15/03409024.jpg';
let adamslar = 'https://t.me/Multikland_TV/1428'
let adamslar_logo = 'https://topfilms.me/uploads/posts/2022-04/1649446882_1634498967_2560x-50-kopija.jpg'
let asteriks = 'https://t.me/Multikland_TV/1438';
let asteriks_logo = 'https://lh3.googleusercontent.com/proxy/Sw0C9bsDmxd9sbmBx7wS5AZDK-YjuZKWY1PV0nQ5n0vpMYxBR3yUzncafdZqABYvrG7oExDVWYgOXRHbxY0Ue3r8J0jtKaTLUPwd7WSGZPEK1daLmRr0zGUvSkcYbw'
let bigfutlar = 'https://t.me/Multikland_TV/1442';
let bigfutlar_logo = 'https://lh3.googleusercontent.com/proxy/YYb6sm8bi1IrUs1ClYLO6MDTVmjmFyK8SR5VE-eINOEExMFTfEuNlBd-kTxbnq9vxED3pCuemVeV2KX_CPRBmZ6xyg';
let boshqotirma = 'https://t.me/Multikland_TV/1389';
let boshqotirma_logo = 'https://kinolar.net/uploads/posts/2021-11/1637153445_zy4vy0v4e1puqunzayosqvm4btli_igzolbazx08mp3r6lsqabux3sq6g6rc4x2g_low.jpg';
let chaqmoq = 'https://t.me/Multikland_TV/1462';
let chaqmoq_logo = 'https://www.uzmovie.me/_ld/1/44832235.jpg';
let olmaxon = 'https://t.me/Multikland_TV/1333';
let olmaxon_logo = 'https://cdn.splay.uz/media/contents_meta/realnaya-belka/images/poster_v.jpg';
let elemental = 'https://t.me/Multikland_TV/1322';
let elemental_logo = 'https://musicart.xboxlive.com/7/c6e96600-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080';
let etik_mushuk = 'https://t.me/Multikland_TV/1338';
let etik_mushuk_logo = 'https://files.itv.uz/uploads/content/poster/2018/12/06/3f051c5c5a72b0e5bb1cdda611e433a9-q-700x1002.jpeg';
let emojilar = 'https://t.me/Multikland_TV/1325';
let emojilar_logo = 'https://cdn.splay.uz/media/contents_meta/emodzhi-film/images/poster_v.jpg';
let ferdinand = 'https://t.me/Multikland_TV/1434';
let ferdinand_logo = 'https://static.okko.tv/images/v3/16430187?scale=1&quality=80';
let grinch = 'https://t.me/Multikland_TV/1329';
let grinch_logo = 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e3163c1e-f5cc-431f-b5e6-a9d65ae45b2f/600x900';






let krudslar_logo = 'https://kinolar.net/uploads/posts/2021-11/1636982880_1636982782727.png'
let sinbad = 'https://t.me/Multikland_TV/1470';
let sinbad_logo = 'https://upload.wikimedia.org/wikipedia/ru/b/b3/Sinbad_3A-Legend-of-the-Seven-Seas-631803.jpg';

search_btn.addEventListener('click', ()=>{

    if (search.value == '') {
        btn.setAttribute('href', '');
        logo.setAttribute('href', '');
        btn.textContent = 'Tugmani bosing';
        multik_logo.setAttribute('src', './images/logo.jpg');
        multik_name.textContent = 'Multfilm nomi';
    }

    else if (search.value == "Ajdar o'rgatuvchilar" || search.value == 'ajdar orgatuvchilar' || search.value == 'Ajdar orgatuvchilar' || search.value == "ajdar o'rgatuvchilar") {
      btn.setAttribute('href', ajdar);
      logo.setAttribute('href', ajdar);
      multik_logo.setAttribute('src', ajdar_logo);
      multik_name.textContent = "Ajdar o'rgatuvchilar";
    } 

    else if (search.value == "Asalarilar" || search.value == 'asalarilar fitnasi' || search.value == 'Asalarilar fitnasi' || search.value == 'asalarilar') {
      btn.setAttribute('href', asalari);
      logo.setAttribute('href', asalari);
      multik_logo.setAttribute('src', asalari_logo);
      multik_name.textContent = "Asalarilar fitnasi";
    } 

    else if (search.value == "adamslar" || search.value == 'Adamslar' || search.value == 'Adamslar oilasi' || search.value == 'adamslar oilasi') {
      btn.setAttribute('href', adamslar);
      logo.setAttribute('href', adamslar);
      multik_logo.setAttribute('src', adamslar_logo);
      multik_name.textContent = "Adamslar oilasi";
    } 

    else if (search.value == "asteriks va obeliks" || search.value == 'asteriks' || search.value == 'Asteriks' || search.value == 'Asteriks va obeliks' || search.value == 'Asteriks va Obeliks' || search.value == 'Asteriks va obeliks sehrli damlama') {
      btn.setAttribute('href', asteriks);
      logo.setAttribute('href', asteriks);
      multik_logo.setAttribute('src', asteriks_logo);
      multik_name.textContent = "Asteriks va Obeliks sehrli damlama";
    } 

    else if (search.value == "bigfutlar" || search.value == 'bigfutlar oilasi' || search.value == 'Bigfutlar' || search.value == 'Bigfutlar oilasi' || search.value == 'ulkan oyoq' || search.value == 'Ulkan oyoq') {
      btn.setAttribute('href', bigfutlar);
      logo.setAttribute('href', bigfutlar);
      multik_logo.setAttribute('src', bigfutlar_logo);
      multik_name.textContent = "Bigfutlar oilasi";
    } 

    else if (search.value == 'boshqotirma' || search.value == 'Boshqotirma') {
      btn.setAttribute('href', boshqotirma);
      logo.setAttribute('href', boshqotirma);
      multik_logo.setAttribute('src', boshqotirma_logo);
      multik_name.textContent = "Boshqotirma";
    } 

    else if (search.value == 'chaqmoq Makvin' || search.value == 'Chaqmoq makvin' || search.value == 'Chaqmoq' || search.value == 'chaqmoq' || search.value == 'Chaqmoq Makvin'  || search.value == 'chaqmoq makvin') {
      btn.setAttribute('href', chaqmoq);
      logo.setAttribute('href', chaqmoq);
      multik_logo.setAttribute('src', chaqmoq_logo);
      multik_name.textContent = "Chaqmoq Makvin";
    } 

    else if (search.value == 'dovyurak olmaxon' || search.value == 'Dovyurak olmaxon') {
      btn.setAttribute('href', olmaxon);
      logo.setAttribute('href', olmaxon);
      multik_logo.setAttribute('src', olmaxon_logo);
      multik_name.textContent = "Dovyurak olmaxon";
    } 

    else if (search.value == 'elemental' || search.value == 'Elemental' || search.value == 'elementar' || search.value == 'Elementar') {
      btn.setAttribute('href', elemental);
      logo.setAttribute('href', elemental);
      multik_logo.setAttribute('src', elemental_logo);
      multik_name.textContent = "Elemental";
    } 

    else if (search.value == 'etik kiygan mushuk' || search.value == 'Etik kiygan mushuk') {
      btn.setAttribute('href', etik_mushuk);
      logo.setAttribute('href', etik_mushuk);
      multik_logo.setAttribute('src', etik_mushuk_logo);
      multik_name.textContent = "Etik kiygan mushuk";
    } 

    else if (search.value == 'emojilar' || search.value == 'Emojilar' || search.value == 'Quvnoq qahramonlar') {
      btn.setAttribute('href', emojilar);
      logo.setAttribute('href', emojilar);
      multik_logo.setAttribute('src', emojilar_logo);
      multik_name.textContent = "Emojilar";
    } 

    else if (search.value == 'Ferdinand' || search.value == 'ferdinand') {
      btn.setAttribute('href', ferdinand);
      logo.setAttribute('href', ferdinand);
      multik_logo.setAttribute('src', ferdinand_logo);
      multik_name.textContent = "Ferdinand";
    } 

    else if (search.value == 'grinch' || search.value == 'Grinch') {
      btn.setAttribute('href', grinch);
      logo.setAttribute('href', grinch);
      multik_logo.setAttribute('src', grinch_logo);
      multik_name.textContent = "Grinch";
    } 






    else if (search.value == 'Sinbad' || search.value == 'Sinbad: 7 dengiz afsonasi' || search.value == 'sinbad') {
      btn.setAttribute('href', sinbad);
      logo.setAttribute('href', sinbad);
      multik_logo.setAttribute('src', sinbad_logo);
      multik_name.textContent = 'Sinbad: 7 dengiz afsonasi';
    } 
    
    else if (search.value != arr_random) {
        multik_logo.setAttribute('src', './images/logo.jpg')
        multik_name.textContent = 'Multfilm topilmadi'
        btn.setAttribute('href', '');
        logo.setAttribute('href', '');
    }
});






