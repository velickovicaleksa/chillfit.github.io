document.getElementById("show").addEventListener("click",function(){
    if(document.getElementById("show").src.endsWith('hide.png')) {
        document.getElementById("lozinka").type ="text";
        document.getElementById("show").src="assets/img/Icons/view.png";
    }
    else {
        document.getElementById("lozinka").type ="password";
        document.getElementById("show").src="assets/img/Icons/hide.png";
    }
    
});

let drzave = [
    {idDrzave:0, ime:"Choose"},
    {idDrzave:1, ime:"Srbija"},
    {idDrzave:2, ime:"Bosna i Hercegovina"},
    {idDrzave:3, ime:"Crna Gora"}
];

let gradovi = [
    //{idGrada:0, ime:"Izaberi"},
    {idGrada:1, ime:"Beograd"},
    {idGrada:1, ime:"Novi Sad"},
    {idGrada:2, ime:"Sarajevo"},
    {idGrada:2, ime:"Tuzla"},
    {idGrada:3, ime:"Podgorica"},
    {idGrada:3, ime:"Nikšić"}
];
 //Ispisivanje drzava
let listaOpen = `<p>Izaberite drzavu: * </p><select id="drzave" name="drzaveIme">`;
let listaZatvori = `</select>`;
for(let index in drzave) {
    listaOpen+=`<option id="${drzave[index].idDrzave}"class="country">${drzave[index].ime}</option>`;
}
listaOpen+=listaZatvori;
document.getElementById("countries").innerHTML = listaOpen;

//Ispisivanje gradova
let listaOpen_gr = `<p>Izaberite grad: * </p><select id="gradovi" name="gradoviName" disabled>`;
listaOpen_gr+=listaZatvori;
document.getElementById("cities").innerHTML = listaOpen_gr;


document.getElementById("drzave").addEventListener("change",function(){
   var drzavice = document.getElementById("drzave");
   var listaOpen_gr_filter =listaOpen_gr;
   var sredjeniGradovi = gradovi.filter((element)=>element.idGrada==drzavice.selectedIndex);
   if(drzavice.selectedIndex!=0) {
     listaOpen_gr_filter = `<p>Izaberite grad: * </p><select id="gradovi" name="gradoviName"><option>Izaberi grad</option>`;
   }
   for(let index of sredjeniGradovi) {
        listaOpen_gr_filter+=`<option id="${index.ime}">${index.ime}</option>`;
   }
   listaOpen_gr_filter+=`</select>`;
   document.getElementById("cities").innerHTML = listaOpen_gr_filter;

});


let imeSredi = document.getElementById("tekst_ime");
imeSredi.addEventListener("blur",function(){
    var imeValidacija = /^[A-ZŠĐŽĆČ]{1}[a-zšđžčć]{2,9}(\s[A-ZŠĐŽĆČ]{1}[a-zšđžčć]{2,9})?$/;
    if(imeValidacija.test(imeSredi.value)){
        //document.getElementById("posalji").removeAttribute("disabled");
        //document.getElementById("posalji").classList.remove("disabled");
        imeSredi.style.border="2px solid green";
        document.getElementsByClassName("dangermsg")[0].textContent ="";
    }
    else {
        imeSredi.style.border="2px solid red";
        document.getElementsByClassName("dangermsg")[0].textContent = "Ime mora da sadrži minimum 3, a maksimalno 10 karaktera. Ex: \"Aleksa\"";

    }
    srediDugme();
});

let prezimeSredi = document.getElementById("tekst_prezime");
prezimeSredi.addEventListener("blur",function(){
    var prezimeValidacija = /^[A-ZŠĐŽĆČ]{1}[a-zšđžčć]{3,11}(\s[A-ZŠĐŽĆČ]{1}[a-zšđžčć]{3,11})?$/;
    if(prezimeValidacija.test(prezimeSredi.value)){
        //document.getElementById("posalji").removeAttribute("disabled");
        //document.getElementById("posalji").classList.remove("disabled");
        prezimeSredi.style.border="2px solid green";
        document.getElementsByClassName("dangermsg")[1].textContent ="";
    }
    else {
        prezimeSredi.style.border="2px solid red";
        document.getElementsByClassName("dangermsg")[1].textContent = "Prezime mora da sadrži minimum 4, a maksimalno 12 karaktera. Ex: \"Veličković\"";
    }
    srediDugme();
});

let emailSredi = document.getElementById("tekst_mejl");
emailSredi.addEventListener("blur",function(){
    var emailValidacija = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailValidacija.test(emailSredi.value)){
        //document.getElementById("posalji").removeAttribute("disabled");
        //document.getElementById("posalji").classList.remove("disabled");
        emailSredi.style.border="2px solid green";
        document.getElementsByClassName("dangermsg")[2].textContent ="";
    }
    else {
        emailSredi.style.border="2px solid red";
        document.getElementsByClassName("dangermsg")[2].textContent = "Email mora biti formata: slovo+@+domen. Ex: \"aleksavelickovic@.icloud.com\"";
    }
    srediDugme();
});

let radioSredi = document.getElementsByName("pol");
for(let index of radioSredi) {
    index.addEventListener("change",function(){
        //if(index.checked) {
            //document.getElementById("posalji").removeAttribute("disabled");
            //document.getElementById("posalji").classList.remove("disabled");
        //}
        srediDugme();});
}

let srediBroj = document.getElementById("lozinka");
let validacijaBroj = /^06\d{7,8}$/;
srediBroj.addEventListener("blur", function(){
    if(validacijaBroj.test(srediBroj.value)){
        srediBroj.style.border="2px solid green";
        document.getElementsByClassName("dangermsg")[3].textContent ="";
    }
    else {
        srediBroj.style.border="2px solid red";
        document.getElementsByClassName("dangermsg")[3].textContent ="Broj mora biti u formatu (06..) i imati minimum 9, a maksimalno 10 cifara";
    }
})

let drzaveSredi = document.getElementById("drzave");

drzaveSredi.addEventListener("change",function(){
    if(drzaveSredi.selectedIndex!==0) {
        var gradoviSredi = document.getElementById("gradovi");
        gradoviSredi.addEventListener("change",function(){
            if(gradoviSredi.selectedIndex!==0) {
                document.getElementsByClassName("dangermsg")[5].textContent ="";
                //document.getElementById("posalji").removeAttribute("disabled","disabled");
                //document.getElementById("posalji").classList.remove("disabled");
            }
            else {
                //document.getElementById("posalji").setAttribute("disabled","disabled");
                //document.getElementById("posalji").classList.add("disabled");
                document.getElementsByClassName("dangermsg")[5].textContent ="Morate odabrati grad!";
            }
            srediDugme();
        });
        //document.getElementById("posalji").removeAttribute("disabled");
        //document.getElementById("posalji").classList.remove("disabled");
        document.getElementsByClassName("dangermsg")[4].textContent ="";

    }
    else {
        //document.getElementById("posalji").setAttribute("disabled","disabled");
        //document.getElementById("posalji").classList.add("disabled");
        document.getElementsByClassName("dangermsg")[4].textContent ="Morate odabrati drzavu!";
    }
    console.log(document.getElementById("gradovi"));
    srediDugme();
    
});



let srediCek = document.getElementById("politika");
srediCek.addEventListener("change",function(){
    if(srediCek.checked) {
        document.getElementsByClassName("dangermsg")[6].textContent ="";
        //document.getElementById("posalji").removeAttribute("disabled","disabled");
        //document.getElementById("posalji").classList.remove("disabled");
    }
    else {
        //document.getElementById("posalji").setAttribute("disabled","disabled");
        //document.getElementById("posalji").classList.add("disabled");
        document.getElementsByClassName("dangermsg")[6].textContent ="Obavezno polje";
    }
    srediDugme();
});

let srediTekst = document.getElementById("polje_tekst");
var textareaValidacija = /^[A-Z][\s\S]{19,999}$/;
srediTekst.addEventListener("blur",function(){
    if(textareaValidacija.test(srediTekst.value)) {
        document.getElementsByClassName("dangermsg")[7].textContent ="";
        srediTekst.style.border="2px solid green";
    }
    else {
        document.getElementsByClassName("dangermsg")[7].textContent ="Poruka može sadržati minimum 20, a maksimum 1000 karaktera i mora početi velikim slovom.";
        srediTekst.style.border="2px solid red";
    }
});
/*function srediDugme() {
    let imeSredi = document.getElementById("tekst_ime");
    let prezimeSredi = document.getElementById("tekst_prezime");
    let emailSredi = document.getElementById("tekst_mejl");
    var imeValidacija = /^[A-ZŠĐŽĆČ]{1}[a-zšđžčć]{2,9}(\s[A-ZŠĐŽĆČ]{1}[a-zšđžčć]{2,9})?$/;
    var emailValidacija = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let radioSredi = document.getElementsByName("pol");
    let drzaveSredi = document.getElementById("drzave");
    let gradoviSredi = document.getElementById("gradovi");
    let srediCek = document.getElementById("politika");
    if(imeValidacija.test(imeSredi) && imeValidacija.test(prezimeSredi) && emailValidacija.test(emailSredi) && radioSredi.checked && drzaveSredi.selectedIndex!=0 && 
    gradoviSredi.selectedIndex!=0 && srediCek.checked){
        document.getElementById("posalji").removeAttribute("disabled","disabled");
        document.getElementById("posalji").classList.remove("disabled");
    }
    else {
        document.getElementById("posalji").setAttribute("disabled","disabled");
        document.getElementById("posalji").classList.add("disabled");
    }
}*/

function srediDugme() {
    let imeSredi = document.getElementById("tekst_ime").value;
    let prezimeSredi = document.getElementById("tekst_prezime").value;
    let emailSredi = document.getElementById("tekst_mejl").value;
    var imeValidacija = /^[A-ZŠĐŽĆČ]{1}[a-zšđžčć]{2,9}(\s[A-ZŠĐŽĆČ]{1}[a-zšđžčć]{2,9})?$/;
    var emailValidacija = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let radioSredi = document.getElementsByName("pol");
    let drzaveSredi = document.getElementById("drzave");
    let gradoviSredi = document.getElementById("gradovi");
    let srediCek = document.getElementById("politika");

    let isRadioChecked = false;
    for (let index of radioSredi) {
        if (index.checked) {
            isRadioChecked = true;
            break;
        }
    }

    if (
        imeValidacija.test(imeSredi) &&
        imeValidacija.test(prezimeSredi) &&
        emailValidacija.test(emailSredi) &&
        isRadioChecked &&
        drzaveSredi.selectedIndex !== 0 &&
        gradoviSredi.selectedIndex !== 0 &&
        srediCek.checked
    ) {
        document.getElementById("posalji").removeAttribute("disabled");
        document.getElementById("posalji").classList.remove("disabled");
    } else {
        document.getElementById("posalji").setAttribute("disabled", "disabled");
        document.getElementById("posalji").classList.add("disabled");
    }
}

function sabmituj(){

    if(document.getElementById("lozinka").value.length!=0){
        if(!validacijaBroj.test(document.getElementById("lozinka").value)){
            return false;
        }
    }
    else {
        event.preventDefault();
        document.getElementById("success").style.display = "block";
    }

    if(document.getElementById("tekst_polje").value.length!=0){
        if(!textareaValidacija.test(document.getElementById("tekst_polje").value)){
            return false;
        }
    }
    else {
        event.preventDefault();
        document.getElementById("success").style.display = "block";
    }
    

    
}