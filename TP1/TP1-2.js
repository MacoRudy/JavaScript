var phrase = "une chaine avec des lettres dans un certain ordre pour donner du sens";

var phraseSansEspaces = Array.from(phrase.replace(/ /g,''));

phraseSansEspaces.sort();

console.log(phraseSansEspaces.toString());