let multik_name = document.querySelector('.multik_name');
let multik_logo = document.querySelector('.multik_logo');
let multik_video = document.querySelector('.multik_video');
let search_btn = document.querySelector('button');
let btn = document.querySelector('.btn');
let logo = document.querySelector('.logo');
let search = document.querySelector('#search'); // HTML dan elementlar tanlab olindi

let arr_multik = ["Ajdar o'rgatuvchilar", 'Adamslar oilasi', 'Sinbad', 'Asalarilar fitnasi', 'salom', 'alik'];
// Multfilmlar massivi
let arr_random = arr_multik[Math.floor(Math.random() * arr_multik.length)];
// Multfilmlar massivida mavjud bolmagan multfilmlarni aniqlash uchun




// Multfilm havolasi va rasmlarini o'zgaruvchiga bog'lab qo'yish boshlandi
let ajdar = 'https://t.me/Multikland_TV/1459';
let ajdar_logo = './images/ajdar.png';
let asalari = 'https://t.me/Multikland_TV/1332';
let asalari_logo = './images/asalarilar.jpg';
let adamslar = 'https://t.me/Multikland_TV/1428'
let adamslar_logo = './images/adamslar.jpg'
let asteriks = 'https://t.me/Multikland_TV/1438';
let asteriks_logo = './images/asteriks.jpg'
let bigfutlar = 'https://t.me/Multikland_TV/1442';
let bigfutlar_logo = './images/bigfutlar.jpg';
let boshqotirma = 'https://t.me/Multikland_TV/1389';
let boshqotirma_logo = './images/boshqotirma.jpg';
let chaqmoq = 'https://t.me/Multikland_TV/1462';
let chaqmoq_logo = './images/chaqmoq.jpg';
let olmaxon = 'https://t.me/Multikland_TV/1333';
let olmaxon_logo = './images/olmaxon.jpg';
let elemental = 'https://t.me/Multikland_TV/1322';
let elemental_logo = './images/elemental.jpg';
let etik_mushuk = 'https://t.me/Multikland_TV/1338';
let etik_mushuk_logo = './images/mushuk.jpeg';
let emojilar = 'https://t.me/Multikland_TV/1325';
let emojilar_logo = './images/emojilar.jpg';
let ferdinand = 'https://t.me/Multikland_TV/1434';
let ferdinand_logo = './images/ferdinand.jpg';
let finnik = 'https://t.me/Multikland_TV/1453';
let finnik_logo = './images/finnik.jpg'
let grinch = 'https://t.me/Multikland_TV/1329';
let grinch_logo = './images/grinch.webp';
let hayvonlar = 'https://t.me/Multikland_TV/1348';
let hayvonlar_logo = './images/zootopiya.jpg';
let jahldor = 'https://t.me/Multikland_TV/1336';
let jahldor_logo = './images/qushlar.jpg';
let garoyib_futbol = 'https://t.me/Multikland_TV/1456';
let garoyib_futbol_logo = './images/garoyib_futbol.webp';
let kichkina = 'https://t.me/Multikland_TV/1366';
let kichkina_logo = './images/kichkina.jpg';
let kungfupanda = 'https://t.me/Multikland_TV/1382';
let kungfupanda4 = 'https://t.me/Multikland_TV/1477';
let panda_logo = './images/kungfupanda.jpg';
let kuyla = 'https://t.me/Multikland_TV/1468';
let kuyla_logo = './images/kuyla.jpg';
let koko = 'https://t.me/Multikland_TV/1432';
let koko_logo = './images/koko.jpg';
let kochish = 'https://t.me/Multikland_TV/1440';
let kochish_logo = './images/kochish.jpg';
let loraks = 'https://t.me/Multikland_TV/1385';
let loraks_logo = './images/loraks.jpg';
let laylaklar = 'https://t.me/Multikland_TV/1474';
let laylaklar_logo = './images/laylaklar.jpg';
let muzyurak = 'https://t.me/Multikland_TV/1303';
let muzyurak_logo = './images/muzyurak.jpg';
let muzlikdavri = 'https://t.me/Multikland_TV/1305';
let muzlik_logo = './images/muzlik.jpg';
let megamiya = 'https://t.me/Multikland_TV/1330';
let megamiya_logo = './images/megamiya.webp';
let maxluqlar_tatil = 'https://t.me/Multikland_TV/1342';
let maxluqlar_tatil_logo = './images/maxluqlar_tatil.jpg';
let moana = 'https://t.me/Multikland_TV/1430';
let moana_logo = './images/moana.jpeg';
let musiqachi_it = 'https://t.me/Multikland_TV/1393';
let musiqachi_it_logo = './images/musiqachi.jpg';
let robot_dost = 'https://t.me/Multikland_TV/1390';
let robot_dost_logo = './images/robotdost.jpg';
let mumiyo = 'https://t.me/Multikland_TV/1454';
let mumiyo_logo = './images/mumiyo.jpg';
let ovmavsumi = 'https://t.me/Multikland_TV/1292';
let ovmavsumi_logo = './images/ovmavsumi.jpg';










let qahramonlar = 'https://t.me/Multikland_TV/1431';
let qahramonlar_logo = './images/qahramonlar.png';
let krudslar = 'https://t.me/Multikland_TV/1349';
let krudslar_logo = './images/krudslar.png';
let sinbad = 'https://t.me/Multikland_TV/1470';
let sinbad_logo = './images/sinbad.jpg';

// Qidiruv tugmasi bosilganda multfilm bor/yo'qligi tekshirish va uni HTML ga chiqarish boshlandi... 
search_btn.addEventListener('click', () => {

  if (search.value == '') {
    btn.setAttribute('href', '');
    logo.setAttribute('href', '');
    btn.textContent = 'Tomosha qilish';
    multik_logo.setAttribute('src', './images/logo.jpg');
    multik_name.textContent = 'Multfilm nomi';
  }

  else if (search.value == 'Ajdar orgatuvchilar' || search.value == "Ajdar o'rgatuvchilar") {
    btn.setAttribute('href', ajdar);
    logo.setAttribute('href', ajdar);
    multik_logo.setAttribute('src', ajdar_logo);
    multik_name.textContent = "Ajdar o'rgatuvchilar";
  }

  else if (search.value == "Asalarilar" || search.value == 'Asalarilar fitnasi' || search.value == 'Asalari' || search.value == 'Asalari fitnasi') {
    btn.setAttribute('href', asalari);
    logo.setAttribute('href', asalari);
    multik_logo.setAttribute('src', asalari_logo);
    multik_name.textContent = "Asalarilar fitnasi";
  }

  else if (search.value == 'Adamslar' || search.value == 'Adamslar oilasi') {
    btn.setAttribute('href', adamslar);
    logo.setAttribute('href', adamslar);
    multik_logo.setAttribute('src', adamslar_logo);
    multik_name.textContent = "Adamslar oilasi";
  }

  else if (search.value == 'Asteriks' || search.value == 'Asteriks va obeliks' || search.value == 'Asteriks va obeliks sehrli damlama') {
    btn.setAttribute('href', asteriks);
    logo.setAttribute('href', asteriks);
    multik_logo.setAttribute('src', asteriks_logo);
    multik_name.textContent = "Asteriks va Obeliks sehrli damlama";
  }

  else if (search.value == 'Bigfutlar' || search.value == 'Bigfutlar oilasi' || search.value == 'Ulkan oyoq') {
    btn.setAttribute('href', bigfutlar);
    logo.setAttribute('href', bigfutlar);
    multik_logo.setAttribute('src', bigfutlar_logo);
    multik_name.textContent = "Bigfutlar oilasi";
  }

  else if (search.value == 'Boshqotirma') {
    btn.setAttribute('href', boshqotirma);
    logo.setAttribute('href', boshqotirma);
    multik_logo.setAttribute('src', boshqotirma_logo);
    multik_name.textContent = "Boshqotirma";
  }

  else if (search.value == 'Chaqmoq makvin' || search.value == 'Chaqmoq') {
    btn.setAttribute('href', chaqmoq);
    logo.setAttribute('href', chaqmoq);
    multik_logo.setAttribute('src', chaqmoq_logo);
    multik_name.textContent = "Chaqmoq Makvin";
  }

  else if (search.value == 'Dovyurak olmaxon') {
    btn.setAttribute('href', olmaxon);
    logo.setAttribute('href', olmaxon);
    multik_logo.setAttribute('src', olmaxon_logo);
    multik_name.textContent = "Dovyurak olmaxon";
  }

  else if (search.value == 'Elemental' || search.value == 'Elementar') {
    btn.setAttribute('href', elemental);
    logo.setAttribute('href', elemental);
    multik_logo.setAttribute('src', elemental_logo);
    multik_name.textContent = "Elemental";
  }

  else if (search.value == 'Etik kiygan mushuk') {
    btn.setAttribute('href', etik_mushuk);
    logo.setAttribute('href', etik_mushuk);
    multik_logo.setAttribute('src', etik_mushuk_logo);
    multik_name.textContent = "Etik kiygan mushuk";
  }

  else if (search.value == 'Emojilar' || search.value == 'Quvnoq qahramonlar') {
    btn.setAttribute('href', emojilar);
    logo.setAttribute('href', emojilar);
    multik_logo.setAttribute('src', emojilar_logo);
    multik_name.textContent = "Emojilar";
  }

  else if (search.value == 'Ferdinand') {
    btn.setAttribute('href', ferdinand);
    logo.setAttribute('href', ferdinand);
    multik_logo.setAttribute('src', ferdinand_logo);
    multik_name.textContent = "Ferdinand";
  }


  else if (search.value == 'Finnik' || search.value == "finnik") {
    btn.setAttribute('href', finnik);
    logo.setAttribute('href', finnik);
    multik_logo.setAttribute('src', finnik_logo);
    multik_name.textContent = "Finnik";
  }
  else if (search.value == 'Grinch') {
    btn.setAttribute('href', grinch);
    logo.setAttribute('href', grinch);
    multik_logo.setAttribute('src', grinch_logo);
    multik_name.textContent = "Grinch";
  }

  else if (search.value == "G'aroyib futbol" || search.value == 'Garoyib futbol' || search.value == 'Sehrli futbol') {
    btn.setAttribute('href', grinch);
    logo.setAttribute('href', grinch);
    multik_logo.setAttribute('src', grinch_logo);
    multik_name.textContent = "Grinch";
  }

  else if (search.value == 'Hayvonlar shaxri' || search.value == 'Hayvonlar shahri' || search.value == 'Zootopia') {
    btn.setAttribute('href', hayvonlar);
    logo.setAttribute('href', hayvonlar);
    multik_logo.setAttribute('src', hayvonlar_logo);
    multik_name.textContent = "Hayvonlar shahri";
  }

  else if (search.value == 'Jahldor qushlar' || search.value == 'Angry birds') {
    btn.setAttribute('href', jahldor);
    logo.setAttribute('href', jahldor);
    multik_logo.setAttribute('src', jahldor_logo);
    multik_name.textContent = "Jahldor qushlar";
  }

  else if (search.value == 'Kichkina xojayin' || search.value == "Kichkina xo'jayin" || search.value == "Kichkina") {
    btn.setAttribute('href', kichkina);
    logo.setAttribute('href', kichkina);
    multik_logo.setAttribute('src', kichkina_logo);
    multik_name.textContent = "Kichkina xo'jayin";
  }

  else if (search.value == 'Kung fu panda' || search.value == "kung fu panda" || search.value == "Panda") {
    btn.setAttribute('href', kungfupanda);
    logo.setAttribute('href', kungfupanda);
    multik_logo.setAttribute('src', panda_logo);
    multik_name.textContent = "Kung fu panda";
  }

  else if (search.value == 'Kung fu panda 4') {
    btn.setAttribute('href', kungfupanda);
    logo.setAttribute('href', kungfupanda);
    multik_logo.setAttribute('src', panda_logo);
    multik_name.textContent = "Kung fu panda 4";
  }

  else if (search.value == 'Kuyla' || search.value == 'kuyla') {
    btn.setAttribute('href', kuyla);
    logo.setAttribute('href', kuyla);
    multik_logo.setAttribute('src', kuyla_logo);
    multik_name.textContent = "Kuyla";
  }

  else if (search.value == 'Koko' || search.value == 'Koko siri') {
    btn.setAttribute('href', koko);
    logo.setAttribute('href', koko);
    multik_logo.setAttribute('src', koko_logo);
    multik_name.textContent = "Koko siri";
  }

  else if (search.value == 'Kochish' || search.value == "Ko'chish") {
    btn.setAttribute('href', kochish);
    logo.setAttribute('href', kochish);
    multik_logo.setAttribute('src', kochish_logo);
    multik_name.textContent = "Ko'chish";
  }

  else if (search.value == 'Loraks' || search.value == "loraks") {
    btn.setAttribute('href', loraks);
    logo.setAttribute('href', loraks);
    multik_logo.setAttribute('src', loraks_logo);
    multik_name.textContent = "Loraks";
  }

  else if (search.value == 'Laylaklar' || search.value == "laylaklar") {
    btn.setAttribute('href', laylaklar);
    logo.setAttribute('href', laylaklar);
    multik_logo.setAttribute('src', laylaklar_logo);
    multik_name.textContent = "Laylaklar";
  }

  else if (search.value == 'Muz yurak' || search.value == "Muzyurak" || search.value == "muz yurak") {
    btn.setAttribute('href', muzyurak);
    logo.setAttribute('href', muzyurak);
    multik_logo.setAttribute('src', muzyurak_logo);
    multik_name.textContent = "Muz yurak";
  }

  else if (search.value == 'Muzlik davri' || search.value == "muzlik davri") {
    btn.setAttribute('href', muzlikdavri);
    logo.setAttribute('href', muzlikdavri);
    multik_logo.setAttribute('src', muzlik_logo);
    multik_name.textContent = "Muzlik davri";
  }

  else if (search.value == 'Megamiya' || search.value == "Megamiyya") {
    btn.setAttribute('href', megamiya);
    logo.setAttribute('href', megamiya);
    multik_logo.setAttribute('src', megamiya_logo);
    multik_name.textContent = "Megamiya";
  }

  else if (search.value == "Maxluqlar ta'tilda" || search.value == "Maxluqlar tatilda" || search.value == 'Mahluqlar tatilda') {
    btn.setAttribute('href', maxluqlar_tatil);
    logo.setAttribute('href', maxluqlar_tatil);
    multik_logo.setAttribute('src', maxluqlar_tatil_logo);
    multik_name.textContent = "Maxluqlar ta'tilda";
  }

  else if (search.value == "Moana") {
    btn.setAttribute('href', moana);
    logo.setAttribute('href', moana);
    multik_logo.setAttribute('src', moana_logo);
    multik_name.textContent = "Moana";
  }

  else if (search.value == "Musiqachi it") {
    btn.setAttribute('href', musiqachi_it);
    logo.setAttribute('href', musiqachi_it);
    multik_logo.setAttribute('src', musiqachi_it_logo);
    multik_name.textContent = "Musiqachi it";
  }

  else if (search.value == "Mening robot do'stim" || search.value == "Robot do'st" || search.value == "Mening robot dostim") {
    btn.setAttribute('href', robot_dost);
    logo.setAttribute('href', robot_dost);
    multik_logo.setAttribute('src', robot_dost_logo);
    multik_name.textContent = "Mening robot do'stim";
  }

  else if (search.value == "Mitti mumiyolar" || search.value == "Mumiyolar" || search.value == "Mitti mumiyo") {
    btn.setAttribute('href', mumiyo);
    logo.setAttribute('href', mumiyo);
    multik_logo.setAttribute('src', mumiyo_logo);
    multik_name.textContent = "Mitti mumiyolar";
  }

  else if (search.value == "Ov mavsumi" || search.value == "Ov") {
    btn.setAttribute('href', ovmavsumi);
    logo.setAttribute('href', ovmavsumi);
    multik_logo.setAttribute('src', ovmavsumi_logo);
    multik_name.textContent = "Ov mavsumi";
  }











  else if (search.value == 'Krudslar oilasi' || search.value == 'Krudslar') {
    btn.setAttribute('href', krudslar);
    logo.setAttribute('href', krudslar);
    multik_logo.setAttribute('src', krudslar_logo);
    multik_name.textContent = "Krudslar oilasi";
  }

  else if (search.value == 'Sinbad' || search.value == 'Sinbad 7 dengiz afsonasi') {
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
  } // Agar Multfilmlar massivida mavjud bo'lmagan multfilm qidirilsa ushbu sikl ishlaydi!
});

btn.addEventListener('click', () => {
  search.value = ''
})