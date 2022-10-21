function sommaNumeri(a,b) {
    var c = a + b;
    return c;
}
function disturbaUtente() { 
    alert('Cliccami!!! Guardamiiiiii distrauittiiiii! ');
}

function cambiaTestoInAlto(nuovoNesto) {
    var testoInAlto = document.getElementById('testo-in-alto');
    testoInAlto.innerText = nuovoNesto;
}

function cambiaColoreTestoInAlto(colore){
    var testoInAlto = document.getElementById('testo-in-alto');
    testoInAlto.style.color = colore;

}


function contaVociMenu () {
    var vociMenu = document.getElementsByClassName('voce-menu');
    var numeroVociMenu = vociMenu.length;
    return numeroVociMenu;
}

function calcolaAltezzaNavbar() {
    var numeroVociMenu = contaVociMenu ();
    var nuovaAltezza = numeroVociMenu * 100;
    var nuovoValoreAltezza = nuovaAltezza + '%';
    return nuovoValoreAltezza;
}

function impostaAltezzaNavbar() {
    //calcoliamo il nuovo valore di maxHeight
    var altezzaNavbar = calcolaAltezzaNavbar();
    // selezionare il nav fratello di un elemento con classe . side-menu:checked
    var navbar = document.getElementById('navbar');
    // modifichiamo lo stile assegnando una nuova maxheighta navabar
    navbar.style.maxHeight = altezzaNavbar;
}

function resetAltezzaNavBar() {
    document.getElementById('navbar').removeAttribute('style');
}

/* se la funzione checkbox è checked -> impostaAltezzaNavbar
se no resetaltezzanavbar */

function toggleMenu(){
    var checkbox = document.getElementById('side-menu');
    if (checkbox.checked){
        resetAltezzaNavBar();
    } else{
        impostaAltezzaNavbar();
    
    }
}
