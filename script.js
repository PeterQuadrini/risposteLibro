function getAnswer() {
  var question = document.getElementById("question").value;
  var answer = getRandomAnswer();
  document.getElementById("answer").innerHTML = answer;
}

const answers = [
    "Si",
    "No",
    "Forse",
    "E' possibile",
    "E' improbabile",
    "Se ci credi tutto può accadere",
    "Abbi Fede...",
    "Non tutti i mali vengono per nuocere",
    "Capisci chi ti ama veramente, gli altri lasciali andare",
    "Occhio non vede cuore non duole",
    "Forse ti dovresti concentrare su altro",
    "Non temere",
    "A certe domande non ci sono risposte, ma la tua liberta' non te la togliera' mai nessuno",
];

function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}
