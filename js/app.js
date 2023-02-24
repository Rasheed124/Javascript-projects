

const appData = [

    {
        id: 1,
        img: "../img/ramadan1.jpg",
        dua: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ ",
        duaTransliteration: "Rabbighfir warham wa anta khair-ur-raahimeen",
        duaTranslation: "O! My Lord forgive and have Mercy and You are the Best of Merciful",
    },
    {
        id: 2,
        img: "../img/ramadan2.jpg",
        dua: "اَسْتَغْفِرُ اللہَ رَبِّی مِنْ کُلِّ ذَنْبٍ وَّ اَتُوْبُ اِلَیْہِ",
        duaTransliteration: "Astagfirullaha Rab – Bi Min Kulli Zambi Wa Atoobu Ilayhi.",
        duaTranslation: "I seek forgiveness from Allah, my Lord, from every sin I committed",
    },
    {
        id: 3,
        img: "../img/ramadan3.jpg",
        dua: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ ",
        duaTransliteration: "Rabbighfir warham wa anta khair-ur-raahimeen",
        duaTranslation: "I seek forgiveness from Allah, my Lord, from every sin I committed",
    },
    {
        id: 4,
        img: "../img/ramadan4.jpg",
        dua: "اَللَّهُمَّ أَجِرْنِي مِنَ النَّارِ ",
        duaTransliteration: "Allahuma Ajirni minan naar",
        duaTranslation: "O Allah, save me from the fire (Jahannam)",

    },
    {
        id: 5,
        img: "../img/ramadan5.jpg",
        dua: "اَللَّهُمَّ إِنَّكَ عَفْوٌ تٌحِبٌّ العَفْوَ فَأَعْفَوْ عَنِّي",
        duaTransliteration: "Allahumma innaka `afuwwun tuhibbul `afwa fa`fu",
        duaTranslation: "O Allah, You are the Most Forgiving and You love to Forgive, so forgive me.",

    },
    {
        id: 6,
        img: "../img/ramadan6.jpg",
        dua: "اللهم سلِّمني إلى رمضان، اللهم سلم لي رمضان، وتَسلَّمه منّي متقبَّلا",
        duaTransliteration: "Allahumma sallimnee ilaa Ramadhan, Allahumma sallim lee Ramadhan, wa tasallamhu minnee",
        duaTranslation: "O Allah, commit me to Ramadan. Oh Allah, commit Ramadan for me. And receive it from me with acceptance",
    },
]

const container = document.querySelector(".container");
const duaOne = document.querySelector(".dua .one");
const duaTwo = document.querySelector(".dua .two");
const duaThree = document.querySelector(".dua .three");
const body = document.querySelector("body");




const setRandomAppData = () => {

    let result = Math.floor(Math.random() * appData.length);
    return result;

}

const getEachDua = () => {

    let data = appData[setRandomAppData()];
    body.style.backgroundImage = `url(${data.img})`;
    duaOne.textContent = data.dua;
    duaTwo.textContent = data.duaTransliteration;
    duaThree.textContent = data.duaTranslation;

    return data
}


setInterval(setRandomAppData, 5000);

setRandomAppData();

setInterval(getEachDua, 5000);

getEachDua();
