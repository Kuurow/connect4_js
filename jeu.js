console.log("Le jeu est prêt.");
document.getElementById('jeu').innerHTML = "";

function placerPion(ligne, colonne, joueur)
{
	/*
	var elt = document.getElementById('id-de-element');
	if (joueur == 1) 
	{ 
		elt.className = 'joueur1' ; 
	}
	else 
	{
		elt.className = 'joueur2' ;
	}
	*/	
}


var nbreLignes = 6 ;     //--- Initialisation des dimensions du plateau de jeu.
var nbreColonnes = 7 ;
var cellule = 43 ;

var jeu = document.getElementById('jeu')
var table = jeu.appendChild(document.createElement('table'));


for (var i = 0 ; i < nbreLignes; i++) 
{
  
  //--- Création de chaque ligne du plateau.
  var tr = table.appendChild(document.createElement('tr'));
    
  for (var j = 0; j < nbreColonnes; j++)  
  {
    //--- Création de la cellule(colonne) pour chaque ligne du plateau.
    var td = tr.appendChild(document.createElement('td'));
    cellule.id = ((nbreLignes - i) + '-' + (nbreColonnes - j));

    cellule--;   //--- Décompte des cellules (numéro).
    //--- Affichage de l'emplacement de chaque cellules du tableau.
    console.log(cellule.id);    
  }

}

placerPion(1, 2, 1);
placerPion(1, 5, 2);