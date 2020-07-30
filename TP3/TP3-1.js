let ListeSavoir = [];

let SavoirInutile = function (savoir, auteur, dateSaisie) {
    this.savoir = savoir || "";
    this.auteur = auteur || "";
    this.dateSaisie = dateSaisie || new Date;
};


function compareAuteur(a, b) {
    // Use toUpperCase() to ignore character casing
    const AuteurA = a.auteur.toUpperCase();
    const AuteurB = b.auteur.toUpperCase();

    let comparison = 0;
    if (AuteurA > AuteurB) {
        comparison = 1;
    } else if (AuteurA < AuteurB) {
        comparison = -1;
    }
    return comparison;
}

function compareAuteurReverse(a, b) {
    // Use toUpperCase() to ignore character casing
    const AuteurA = a.auteur.toUpperCase();
    const AuteurB = b.auteur.toUpperCase();

    let comparison = 0;
    if (AuteurA > AuteurB) {
        comparison = -1;
    } else if (AuteurA < AuteurB) {
        comparison = 1;
    }
    return comparison;
}

function compareDate(a, b) {

    const DateA = a.dateSaisie;
    const DateB = b.dateSaisie;

    let comparison = 0;
    if (DateA - DateB < 0) {
        comparison = 1;
    } else if (DateA - DateB > 0) {
        comparison = -1;
    }
    return comparison;
}

function compareDateReverse(a, b) {

    const DateA = a.dateSaisie;
    const DateB = b.dateSaisie;

    let comparison = 0;
    if (DateA - DateB < 0) {
        comparison = -1;
    } else if (DateA - DateB > 0) {
        comparison = 1;
    }
    return comparison;
}

function triAuteurAZ() {
    ListeSavoir.sort(compareAuteur);
    afficherListe();
}

function triAuteurZA() {
    ListeSavoir.sort(compareAuteurReverse);
    afficherListe();
}

function triDateRA() {
    ListeSavoir.sort(compareDate);
    afficherListe();
}

function triDateAR() {
    ListeSavoir.sort(compareDateReverse);
    afficherListe();
}

function afficherListe() {
    clear();
    let olSavoir = document.createElement("ol");
    olSavoir.setAttribute("id","olListeSavoir");
    let divResultat = document.querySelector("#divResultat");
    divResultat.appendChild(olSavoir);
    for (let objet of ListeSavoir) {
        afficherSavoir(objet);
    }
}

function clear() {
    let olSavoir = document.getElementById("olListeSavoir");
    olSavoir.remove();
}

function afficherSavoir(UnSavoir) {

    let jour = UnSavoir.dateSaisie.getDate().toString().padStart(2, "0");
    let mois = (UnSavoir.dateSaisie.getMonth() + 1).toString().padStart(2, "0");
    let annee = UnSavoir.dateSaisie.getFullYear();

    let liSavoir = document.createElement("li");
    let pSavoir = document.createElement("p");
    let pInfos = document.createElement("p");


    pSavoir.innerText = UnSavoir.savoir;
    pInfos.innerText = `Par ${UnSavoir.auteur}, le ${jour}/${mois}/${annee}`;
    pSavoir.className = "savoir";
    pInfos.className = "infos";
    liSavoir.addEventListener("click", supprimer);

    let olSavoir = document.getElementById("olListeSavoir");

    olSavoir.appendChild(liSavoir);
    liSavoir.appendChild(pSavoir);
    liSavoir.appendChild(pInfos);


}

function ajouter() {
    let savoir = document.getElementById("libelleSavoir").value;
    let auteur = document.getElementById("auteur").value;
    let dateSaisie = document.getElementById("date").valueAsDate;
    if (toutEstSaisie(savoir, auteur, dateSaisie)) {
        let unSavoir = new SavoirInutile(savoir, auteur, dateSaisie);

        ListeSavoir.push(unSavoir);
        afficherSavoir(unSavoir);

        console.log(ListeSavoir);

        document.getElementById("libelleSavoir").value = "";
        document.getElementById("auteur").value = "";
        document.getElementById("date").valueAsDate = new Date();

        document.getElementById("libelleSavoir").focus();
    } else {
        alert("Tous les champs sont obligatoires");
    }
}

function chargementTermine() {
    document.getElementById("date").valueAsDate = new Date();
    document.getElementById("libelleSavoir").focus();
}

function toutEstSaisie(savoir, auteur, dateSaisie) {
    return savoir != "" && auteur != "" && dateSaisie != "";
}

function supprimer(event) {
    let savoir = event.currentTarget.getElementsByTagName("p")[0].innerText;
    if (confirm(`Voulez-vous supprimer le savoir "${savoir}"?`)) {
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}
