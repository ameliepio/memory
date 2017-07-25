var couleur=["blue","blue","red","red","yellow","yellow","green","green","pink","pink","purple","purple","orange","orange"];
console.log(couleur);
var melange=[];// tableau vide pour le mélange
var carte=document.getElementsByClassName('carte');
var carteclic=[];

// etape 1 melange des cartes
for(i=0;i<14;i++){
var hasard=Math.floor(Math.random()*couleur.length);
console.log(hasard);

melange.push(couleur[hasard]);
console.log(melange);
carte[i].style.background=couleur[hasard];

}
//etape 2 cacher les cartes
for (j=0;j<carte.length;j++){

carte[j].style.opacity="0";
carte[j].addEventListener("click",opacite);
}

function opacite(){
this.style.opacity="1";
carteclic.push(this);
console.log(carteclic);
if ((carteclic.length==2) && (carteclic[0].style.backgroundColor==carteclic[1].style.backgroundColor))
{
carteclic=[];
}

else if ((carteclic.length==2) && carteclic[0].style.backgroundColor!=carteclic[1].style.backgroundColor) {

setTimeout (function(){

carteclic[0].style.opacity="0";

carteclic[1].style.opacity="0";

carteclic=[];
},1000);
}
}
