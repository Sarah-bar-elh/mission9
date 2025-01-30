// Correction automatique
document.getElementById('btn-correction').addEventListener('click', function () {
    let score = 0;
    const answers = {
      q1: ['1'],  // Beethoven
      q2: ['1'],  // Jazz
      q3: ['1'],  // Blues
      q4: ['1'],  // Nirvana
      q5: ['1'],  // Michael Jackson
      q6: ['1'],  // W.C. Handy
      q7: ['1'],  // Rock 'n' Roll
      q8: ['1'],  // Pink Floyd
      q9: ['1'],  // The Sugarhill Gang
      q10: ['1'], // Ed Sheeran
      q11: ['1'], // Antonio Vivaldi
      q12: ['1'], // The Ramones
      q13: ['1'], // Madonna
      q14: ['1'], // Bob Marley
      q15: ['1'], // Jean-Michel Jarre
      q16: ['1'], // Joy Division
      q17: ['1'], // Blade Runner
      q18: ['1'], // Korn
      q19: ['1'], // Depeche Mode
      q20: ['1'], // Radiohead
      q21: ['1'], // The Doors
      q22: ['1'], // Jimi Hendrix
      q23: ['1'], // Sgt. Pepper's Lonely Hearts Club Band
      q24: ['1'], // Led Zeppelin
      q25: ['1'], // Queen
      q26: ['1'], // Surrealistic Pillow
    };
  
    // Vérifier les réponses
    for (let question in answers) {
      const selected = [...document.querySelectorAll(`input[name="${question}"]:checked`)].map(el => el.value);
      if (JSON.stringify(selected) === JSON.stringify(answers[question])) {
        score++;
      }
    }
  
    alert(`Votre score est : ${score} / ${Object.keys(answers).length}`);
  });
  
  // Afficher le corrigé
  document.getElementById('btn-corrige').addEventListener('click', function () {
    const corriges = `
      <h1>Corrigé du QCM</h1>
      <p><strong>Question 1 :</strong> Ludwig van Beethoven</p>
      <p><strong>Question 2 :</strong> Jazz</p>
      <p><strong>Question 3 :</strong> Blues</p>
      <p><strong>Question 4 :</strong> Nirvana</p>
      <p><strong>Question 5 :</strong> Michael Jackson</p>
      <p><strong>Question 6 :</strong> W.C. Handy</p>
      <p><strong>Question 7 :</strong> Rock 'n' Roll</p>
      <p><strong>Question 8 :</strong> Pink Floyd</p>
      <p><strong>Question 9 :</strong> The Sugarhill Gang</p>
      <p><strong>Question 10 :</strong> Ed Sheeran</p>
      <p><strong>Question 11 :</strong> Antonio Vivaldi</p>
      <p><strong>Question 12 :</strong> The Ramones</p>
      <p><strong>Question 13 :</strong> Madonna</p>
      <p><strong>Question 14 :</strong> Bob Marley</p>
      <p><strong>Question 15 :</strong> Jean-Michel Jarre</p>
      <p><strong>Question 16 :</strong> Joy Division</p>
      <p><strong>Question 17 :</strong> Blade Runner</p>
      <p><strong>Question 18 :</strong> Korn</p>
      <p><strong>Question 19 :</strong> Depeche Mode</p>
      <p><strong>Question 20 :</strong> Radiohead</p>

    `;
    const newWindow = window.open("", "Corrigé", "width=400,height=400");
    newWindow.document.write(corriges);
    newWindow.document.write('<button onclick="window.close()">Fermer la fenêtre</button>');
  });
  
  // Réinitialiser les cases cochées
  document.getElementById('btn-effacer').addEventListener('click', function () {
    alert("Le formulaire a été réinitialisé.");
  });

  // bonton retour  
    document.getElementById("btn-retour").addEventListener("click", function() {
        window.location.href = "https://sarah-bar-elh.github.io/newbst_sio/mission.html";
    });
