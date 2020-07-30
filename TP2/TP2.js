function afficherInfos() {
    try {
        // recuperation des textes

        var savoir = document.getElementById("savoir").value;
        var auteur = document.getElementById("auteur").value;
        var date = document.getElementById("date").valueAsDate;
        // parsing de la date pour avoir dd/mm/yyyy
        var dateParse = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

        // creation de la variable pour savoir si premier element ou pas
        var testDiv = document.getElementById("divInfos");

        // popup si champ non rempli
        if (savoir == "" || auteur == "") {
            alert("Tout les champs sont obligatoires");
        } else {

            // si première entrée
            if (testDiv == null) {
                //donne une id pour faire la verification
                var lien = document.createElement("div");
                lien.setAttribute("id", "divInfos");

                // donne une id pour le insert a la suite de liste
                var liste = document.createElement("ol");
                liste.setAttribute("id", "liste");

                var puce = document.createElement("li");

                // creation de la classe pour effacer avec le listener
                var titre = document.createElement("h1");
                titre.setAttribute("class", "titre");
                var paragraphe = document.createElement("p");

                titre.innerText = savoir;
                paragraphe.innerText = "Par " + auteur + ", le " + dateParse;

                lien.appendChild(liste);
                liste.appendChild(puce);
                puce.appendChild(titre);
                puce.appendChild(paragraphe);

                // insertion des elements créés
                document.getElementById("btn_valider").insertAdjacentElement("afterend", lien);

                // si div deja existante
            } else {
                var puce = document.createElement("li");

                var titre = document.createElement("h1");
                titre.setAttribute("class", "titre")

                var paragraphe = document.createElement("p");

                titre.innerText = savoir;
                paragraphe.innerText = "Par " + auteur + ", le " + dateParse;

                // recuperation de la liste pour mettre un autre puce
                var liste = document.getElementById("liste");

                liste.appendChild(puce);
                puce.appendChild(titre);
                puce.appendChild(paragraphe);
                document.getElementById("liste").insertAdjacentElement("afterend", liste);

            }


            // recuperation de toutes les lignes de type h1
            var ligne = document.getElementsByClassName('titre');

            // ajout du listener en cas de clic sur le h1
            for (var i = 0; i < ligne.length; i++) {
                ligne[i].addEventListener('click', function (e) {
                    // effacage de la ligne

                    e.currentTarget.parentNode.remove();
                }, false);
            }

        }
    }
    catch
        (error)
        {
            console.log(error);
            alert(error);
        }

    }

/*function deleteLigne(Event) {
Event.currentTarget.parentNode.remove();
}*/