function calculateAccount() {
    var principal = parseFloat(document.getElementById("principal").value);
    var interest_rate = parseFloat(document.getElementById("interest_rate").value);
    var term = parseFloat(document.getElementById("term").value);
    var compound_frequency = parseFloat(document.getElementById("compound_frequency").value);
   
    // Logique de calcul de l'épargne simple
    var simple_interest = (principal * interest_rate * term) / 100;
   
    // Logique de calcul de l'épargne composée
    var compound_interest = principal * (Math.pow((1 + interest_rate / 100 / compound_frequency), compound_frequency * term) - 1);
   
    // Affichage des résultats
    var output = "Intérêt simple : " + simple_interest.toFixed(2) + "<br>" +
                  "Intérêt composé : " + compound_interest.toFixed(2);
   
    document.getElementById("results").innerHTML = output;
   }