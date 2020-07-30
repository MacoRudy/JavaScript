var compteur = 0;
var tableauNombre = [];

for (let i = 0; i < 100; i++) {
    tableauNombre.push(i);
}
console.log(tableauNombre.toString());
do {
        let nombreTire = parseInt(Math.random()*100);

        for (let j in tableauNombre) {

            if (tableauNombre[j] === nombreTire) {
                tableauNombre.splice(j, 1);
                j=0;
                break;
            }
        }
    compteur++
} while (tableauNombre.length > 0);

console.log("nombre d'essai %i", compteur)

