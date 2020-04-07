const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      const joueur = buttons[i].innerHTML;
      const robot = buttons[Math.floor(Math.random()* buttons.length)].innerHTML;
      let resultat = "";
      if(joueur === robot) {
          resultat = "egalite";
      } else if ((joueur === "pierre" && robot === "ciseaux") || (joueur === "feuille" && robot === "pierre") || (joueur === "ciseaux" && robot === "feuille")) {
          resultat = "gagne";
      } else {
          resultat = "perdu";
      }
        document.querySelector(".resultat").innerHTML = `
        joueur : ${joueur} </br>
        robot : ${robot} </br>
        ${resultat}
        `;
     // alert(`joueur : ${joueur} VS robot : ${robot}`); 
    });
}