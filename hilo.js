

const cardTypes = ['clubs', 'diamonds','hearts','spades']
let pachet = {
    'clubs':[],
    'diamonds':[],
    'hearts': [],
    'spades':[]
};
let score=0;
let vecheaCarte= 0;

function adaugaCartiInPachet (nrPachete=1){
    for (let i=0; i< cardTypes.length; i++){// index card type
        // i = index (0, 1, 2, 3)
        //cardTypes [i] = 'clubs', 'diamonds','hearts','spades'
        for (let j=2; j<=14; j++) {// card number
            pachet[cardTypes[i]].push(j);
        }
    }
    console.log(pachet);
}


function incarcare (){
    //genereaza pachet
    adaugaCartiInPachet();
    // adaugare carte noua
    nouaCarte = schimbaCarte();
    //ar urma comparatie
    vecheaCarte=nouaCarte;
    //setare scor 0
    afiseazaScor();
}

function afiseazaScor (){
const divScore = document.getElementById('score')
const spanScore= divScore.getElementsByTagName('span')[0];
spanScore.textContent = score;


}

function schimbaCarte(){
const indexType = Math.floor(Math.random() * 4);
const cardNumber = Math.floor(Math.random()*13 +2);
const pozitie = pachet[cardTypes[indexType]].indexOf(cardNumber);
const fileName = 'cards/'+ cardTypes[indexType] + '_' + cardNumber + '.svg';
if (pozitie == -1){
    console.log (`Am obtinut ${fileName} si nu e in pachet`);
    schimbaCarte ();
    return;
}
pachet[cardTypes[indexType]].splice (pozitie, 1); //i-am dat splice adica am eliminat pozitia si 1 inseamna ca am sters 1 element
console.log(pachet);
// lastCardNumber = cardNumber;
console.log (fileName);
const imgElement = document.querySelector('#card > img');
imgElement.setAttribute('src', fileName);
return cardNumber;
}

function showFace(happy){
    const divIdToShow = 'face-' + (happy ? 'happy': 'sad'); //shorthand if daca e happy pui happy daca nu e, pui sad
    const divIdToHide = 'face-' + (!happy ? 'happy': 'sad'); //shorthand if daca e happy pui happy daca nu e, pui sad
    document.getElementById(divIdToShow).style.display='block';
    document.getElementById(divIdToHide).style.display='none';
}

function higher(){
    nouaCarte = schimbaCarte();
    if (typeof nouaCarte !== 'number') return;
    if (nouaCarte >= vecheaCarte){
        score++
        showFace(true);
        afiseazaScor();
    } else{
        score --;
        showFace(false);
        afiseazaScor();
    }
    vecheaCarte=nouaCarte;
}

function lower (){

 nouaCarte = schimbaCarte();
 if (typeof nouaCarte !== 'number') return;
    if (nouaCarte <= vecheaCarte){
        score++
        showFace(true);
        afiseazaScor();
    } else{
        score --;
        showFace(false);
        afiseazaScor();
    }
    vecheaCarte=nouaCarte;

}
document.addEventListener('DOMContentLoaded', incarcare)    