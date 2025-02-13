const inputArea = document.getElementById('input-area');
const outputArea = document.getElementById('output-area');

inputArea.addEventListener('input', function() {
  const inputText = inputArea.value;
  const words = inputText.split(/\s+/); // Split by any whitespace

  let numberedText = "";
  for (let i = 0; i < words.length; i++) {
      if (words[i].trim() !== ""){ // Check if the word is not just whitespace
          numberedText += (i + 1) + ". " + words[i] + " ";
      }

  }

  outputArea.textContent = numberedText.trim(); //Set the text content and trim the last space
});

// const errorMessage = document.getElementById('error-message');

// inputArea.addEventListener('input', function () {
//     validateInput();
// });

// function validateInput() {
//     const inputText = inputArea.value.trim();

//     if (inputText === "") {
//         errorMessage.style.display = "block";
//         outputArea.textContent = "";
//         return false;
//     } else {
//         errorMessage.style.display = "none";
//         const words = inputText.split(/\s+/);

//         let numberedText = "";
//         for (let i = 0; i < words.length; i++) {
//             if (words[i].trim() !== "") {
//                 numberedText += (i + 1) + ". " + words[i] + " ";
//             }
//         }

//         outputArea.textContent = numberedText.trim();
//         return true;
//     }
// }

