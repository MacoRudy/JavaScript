var phrase = "une phrase sans majuscule" ;
var mots = phrase.split(/ /);
var resultat = "";
for (let i = 0; i < mots.length ; i++) {
    if (i>0) {
        resultat += " ";
    }
        resultat += mots[i].substring(0,1).toLocaleUpperCase() + mots[i].substring(1);
}

console.log(resultat)

