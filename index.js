let intrebari=[];
let intrebari_con=0;

//functia ce verifica inputurile si activeaza butonul add
function verificare (){
    let intrebare = document.getElementById('intrebare').value;
    let raspuns1 = document.getElementById('raspuns1').value;
    let raspuns2 = document.getElementById('raspuns2').value;

    if(intrebare.length >  0 && raspuns1.length >=3 && raspuns2.length >= 3){
        document.getElementById('add').disabled = false;

    }else{
        document.getElementById('add').disabled = true;
    }
    
} 

//functie ce adauga intrebarea in array
function adaug_intrebare(){
    let intrebare = document.getElementById('intrebare').value;

    if(intrebare.toLowerCase()== 'finish'){
        document.getElementById('mesaj').innerText = "Nu se mai adauga intrebari";
        return
    }

    if(intrebare_con >=5) {
        document.getElementById('mesaj').innerText="Maxim 5 intrebari";
        return
    }

    let raspuns1 = document.getElementById('raspuns1').value;
    let raspuns2 = document.getElementById('raspuns2').value;


let intrebare_obiect={
    id: intrebari_con +1,
    intrebare: intrebare,
    raspuns: [raspuns1, raspuns2]
};
intrebari.push(intrebare_obiect);
intrebari_con++
document.getElementById('intrebare').value = '';
document.getElementById('raspuns1').value = '';
document.getElementById('raspuns2').value = '';
document.getElementById('add').disabled = true;
console.log(intrebare_obiect);
localStorage.setItem('intrebare', JSON.stringify(intrebari));

}