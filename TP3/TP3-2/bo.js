

var SavoirInutile = function(savoir, auteur, dateDecouverte)
{
    this.savoir = savoir || "";
    this.auteur = auteur || "";
    this.dateDecouverte = dateDecouverte || new Date();
}

SavoirInutile.prototype.toutEstSaisie = function() {
    return this.savoir!="" && this.auteur!="" && this.dateSaisie!="";
}

SavoirInutile.prototype.informations = function(){
    var jour = this.dateDecouverte.getDate().toString().padStart(2, "0");
    var mois = (this.dateDecouverte.getMonth() + 1).toString().padStart(2, "0");
    var annee = this.dateDecouverte.getFullYear();
    return `Par ${this.auteur}, le ${jour}/${mois}/${annee}`;
}