var bonne_rep = 0; var nb_questions = 40;
var nb_erreurs = 0; var mem_nb_alea="";
var jouer=false;

 


function debuter()
{
	jouer = true;
	bonne_rep = 0; nb_questions = 40;
	nb_erreurs = 0; mem_nb_alea="";
	console.log('jouer',jouer);
	init();
	suivant();
}

function init()
{
	document.getElementById('restant').innerText = nb_questions;
	var correct = document.getElementById('score').innerText = 40-nb_erreurs;
	console.log('correct',correct);
	const nom = document.getElementById('nom').value;
 	const prenom = document.getElementById('prenom').value;
	if (nb_questions == 0) {
		document.getElementById('result').innerText = "Votre scrore " + correct + " sur 40" ;
		document.getElementById('votre-nom').innerText = "Votre nom " + nom ;
		document.getElementById('votre-prenom').innerText = "Votre prénom " + prenom ;
		document.getElementById("tout").classList.add('tout');
		document.getElementById("autre").classList.remove('tout');

	}
}

function valider(num_rep)
{
	if(jouer==false)
	return;
console.log('num_rep',num_rep);
	if(num_rep != bonne_rep)
	nb_erreurs++;
	nb_questions--;
	if(nb_questions==0)
	jouer=false;
	init();
	suivant();
}

function suivant()
{
	var indice; var test=true; var nb_alea=0;
console.log('indice',indice);
	if(jouer==false)
	return;

	while (test==true)
	{
		
		nb_alea = Math.floor(Math.random()*10) + 1;
		if(mem_nb_alea.indexOf('-' + nb_alea + '-')>-1)
		nb_alea = Math.floor(Math.random()*10) + 1;
		else
		{
			test=false;
			mem_nb_alea += '-' + nb_alea + '-';
		}
	}
	var chaine_question = questions(nb_alea);
	console.log('chaine_question',chaine_question);
	var tab_question = chaine_question.split('*');
	document.getElementById('question').innerText = tab_question[0];
	for (indice=1; indice<=4; indice++)
	{
		document.getElementById('rep' + indice).innerText = tab_question[indice];
	}
	bonne_rep = tab_question[5];

}
