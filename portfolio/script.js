let bezoeker = {
    naam : prompt("Wat is je naam?"),
    leeftijd : prompt("Wat is je leeftijd?")


}
if (naam!= null) {

    document.getElementById("naam").innerHTML = "Welkom " + bezoeker.naam ;

    
}

if(bezoeker.leeftijd > 18) {
    document.getElementById("welkom").style.backgroundColor = 'green';
}
else{
    document.getElementById("welkom").style.backgroundColor = 'red';
}