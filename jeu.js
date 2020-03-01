console.log("Le jeu est prêt.");
document.getElementById('jeu').innerHTML = "";

function placerPion(ligne, colonne, joueur)
{

}


var lignes = 6 ;     //--- Initialisation des dimensions du plateau de jeu.
var colonnes = 7 ;
var cellule = 43 ;

var jeu = document.getElementById('jeu')
var table = jeu.appendChild(document.createElement('table'));


for (var i = 0 ; i < lignes; i++) 
{
  
  //--- Création de chaque ligne du plateau.
  var tr = table.appendChild(document.createElement('tr'));
    
  for (var j = 0; j < colonnes; j++)  
  {
    //--- Création de la cellule(colonne) pour chaque ligne du plateau.
    var td = tr.appendChild(document.createElement('td'));

    cellule--;   //--- Décompte des cellules (numéro).
    //--- Affichage de l'emplacement de chaque cellules du tableau.
    console.log(cellule.id = 'Emplacement de la cellule n° ' + cellule + ' | Ligne : ' + (lignes - i) + ', colonne : ' + (colonnes - j));    
  }

}

placerPion(1, 2, 1);
placerPion(1, 5, 2);