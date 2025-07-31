"use strict";

const baseZone = document.getElementById("baseZone");
const context = baseZone.getContext("2d");
const context2 = baseZone.getContext("2d");

//////////////////////////////////// Route et parc central ///////////////////

let centerParkDimensions = [150, 120, 700, 560];
context2.fillStyle = "#016630";
context2.fillRect(...centerParkDimensions);

////////////////////////////////// Marquages blanc de la route ////////////////
const contextWhiteMark1 = baseZone.getContext("2d");
contextWhiteMark1.fillStyle = "white";
// ligne sur route à gauche
contextWhiteMark1.fillRect(72.5, 120, 5, 20);
contextWhiteMark1.fillRect(72.5, 187.5, 5, 20);
contextWhiteMark1.fillRect(72.5, 255, 5, 20);
contextWhiteMark1.fillRect(72.5, 322.5, 5, 20);
contextWhiteMark1.fillRect(72.5, 390, 5, 20);
contextWhiteMark1.fillRect(72.5, 457.5, 5, 20);
contextWhiteMark1.fillRect(72.5, 525, 5, 20);
contextWhiteMark1.fillRect(72.5, 592.5, 5, 20);
contextWhiteMark1.fillRect(72.5, 660, 5, 20);

// ligne sur route à droite
contextWhiteMark1.fillRect(920, 120, 5, 20);
contextWhiteMark1.fillRect(920, 180, 5, 20);
contextWhiteMark1.fillRect(920, 240, 5, 20);
contextWhiteMark1.fillRect(920, 300, 5, 20);
contextWhiteMark1.fillRect(920, 360, 5, 20);
contextWhiteMark1.fillRect(920, 420, 5, 20);
contextWhiteMark1.fillRect(920, 480, 5, 20);
contextWhiteMark1.fillRect(920, 540, 5, 20);
contextWhiteMark1.fillRect(920, 600, 5, 20);
contextWhiteMark1.fillRect(920, 660, 5, 20);

// Ligne sur route en haut
contextWhiteMark1.fillRect(150, 58.5, 20, 5);
contextWhiteMark1.fillRect(230, 58.5, 20, 5);
contextWhiteMark1.fillRect(305, 58.5, 20, 5);
contextWhiteMark1.fillRect(380, 58.5, 20, 5);
contextWhiteMark1.fillRect(455, 58.5, 20, 5);
contextWhiteMark1.fillRect(530, 58.5, 20, 5);
contextWhiteMark1.fillRect(605, 58.5, 20, 5);
contextWhiteMark1.fillRect(680, 58.5, 20, 5);
contextWhiteMark1.fillRect(755, 58.5, 20, 5);
contextWhiteMark1.fillRect(830, 58.5, 20, 5);

// contextWhiteMark1.fillRect(850, 58.5, 20, 5);

// ligne sur route en bas
contextWhiteMark1.fillRect(150, 738.5, 20, 5);
contextWhiteMark1.fillRect(230, 738.5, 20, 5);
contextWhiteMark1.fillRect(305, 738.5, 20, 5);
contextWhiteMark1.fillRect(380, 738.5, 20, 5);
contextWhiteMark1.fillRect(455, 738.5, 20, 5);
contextWhiteMark1.fillRect(530, 738.5, 20, 5);
contextWhiteMark1.fillRect(605, 738.5, 20, 5);
contextWhiteMark1.fillRect(680, 738.5, 20, 5);
contextWhiteMark1.fillRect(755, 738.5, 20, 5);
contextWhiteMark1.fillRect(830, 738.5, 20, 5);

// // coin bas droit
contextWhiteMark1.fillRect(920, 718.5, 5, 20);
contextWhiteMark1.fillRect(905, 738.5, 20, 5);

// // coin haut droit
contextWhiteMark1.fillRect(900, 58.5, 20, 5);
contextWhiteMark1.fillRect(920, 58.5, 5, 20);

// // coin haut gauche
contextWhiteMark1.fillRect(72.5, 58.5, 20, 5);
contextWhiteMark1.fillRect(72.5, 58.5, 5, 20);

// // coin bas gauche
contextWhiteMark1.fillRect(72.5, 738.5, 20, 5);
contextWhiteMark1.fillRect(72.5, 718.5, 5, 20);

//////////////////////////// Voiture //////////////////////////
const contextCar = baseZone.getContext("2d");
let carLeftDimensions = [16.25, 20, 40, 80];
contextCar.fillStyle = "#551315";
contextCar.fillRect(...carLeftDimensions);

let carBottomDimensions = [16.25, 750, 80, 40];
let carRightDimensions = [936.25, 710, 40, 80];
let carTopDimensions = [900, 10, 80, 40];

////////////////////////// Feu de signalisation ///////////////
const contextFeu = baseZone.getContext("2d");
const feuDimension = [840, 480, 20, 20];
let contextFeuStyle = "red";
contextFeu.fillStyle = contextFeuStyle;
contextFeu.fillRect(...feuDimension);

function changeColor() {
  setInterval(() => {
    contextFeuStyle === "red"
      ? (contextFeuStyle = "green")
      : (contextFeuStyle = "red");
    contextFeu.fillStyle = contextFeuStyle;
    contextFeu.fillRect(...feuDimension);
  }, 3000);
}

///////////////////////// Mouvement //////////////////////////

function descendre() {
  contextCar.clearRect(...carLeftDimensions);
  carLeftDimensions[1] += 1;
  contextCar.fillRect(...carLeftDimensions);
}

function demarrer() {
  const intervalID = setInterval(() => {
    contextCar.clearRect(...carLeftDimensions);
    contextCar.fillStyle = "#551315";
    carLeftDimensions[1] += 1;
    contextCar.fillRect(...carLeftDimensions);

    if (carLeftDimensions[1] >= baseZone.height - carLeftDimensions[3]) {
      clearInterval(intervalID);
      contextCar.clearRect(...carLeftDimensions);
      contextCar.fillRect(...carBottomDimensions);
      const intervalID2 = setInterval(() => {
        contextCar.clearRect(...carBottomDimensions);
        contextCar.fillStyle = "#551315";
        carBottomDimensions[0] += 1;
        contextCar.fillRect(...carBottomDimensions);

        if (carBottomDimensions[0] >= baseZone.width - carBottomDimensions[2]) {
          clearInterval(intervalID2);
          contextCar.clearRect(...carBottomDimensions);
          contextCar.fillRect(...carRightDimensions);
          const intervalID3 = setInterval(() => {
            contextCar.clearRect(...carRightDimensions);
            contextCar.fillStyle = "#551315";
            carRightDimensions[1] -= 1;
            contextCar.fillRect(...carRightDimensions);

            if (
              carRightDimensions[1] === feuDimension[1] &&
              contextFeuStyle === "red"
            ) {
              clearInterval(intervalID3);
              const intervaleID5 = setInterval(() => {
                if (contextFeuStyle === "green") {
                  clearInterval(intervaleID5);
                  const intervalID6 = setInterval(() => {
                    contextCar.clearRect(...carRightDimensions);
                    contextCar.fillStyle = "#551315";
                    carRightDimensions[1] -= 1;
                    contextCar.fillRect(...carRightDimensions);

                    if (carRightDimensions[1] <= 0) {
                      clearInterval(intervalID6);
                      contextCar.clearRect(...carRightDimensions);
                      contextCar.fillRect(...carTopDimensions);
                      const intervalID4 = setInterval(() => {
                        contextCar.clearRect(...carTopDimensions);
                        contextCar.fillStyle = "#551315";
                        carTopDimensions[0] -= 1;
                        contextCar.fillRect(...carTopDimensions);

                        if (carTopDimensions[0] <= 0) {
                          clearInterval(intervalID4);
                          contextCar.clearRect(...carTopDimensions);
                          carLeftDimensions = [16.25, 20, 40, 80];
                          carBottomDimensions = [16.25, 750, 80, 40];
                          carRightDimensions = [936.25, 710, 40, 80];
                          carTopDimensions = [900, 10, 80, 40];
                          contextCar.fillRect(...carLeftDimensions);
                          demarrer();
                        }
                      }, 5);
                    }
                  }, 5);
                }
              }, 3);
            } else {
              if (carRightDimensions[1] <= 0) {
                clearInterval(intervalID3);
                contextCar.clearRect(...carRightDimensions);
                contextCar.fillRect(...carTopDimensions);
                const intervalID4 = setInterval(() => {
                  contextCar.clearRect(...carTopDimensions);
                  contextCar.fillStyle = "#551315";
                  carTopDimensions[0] -= 1;
                  contextCar.fillRect(...carTopDimensions);

                  if (carTopDimensions[0] <= 0) {
                    clearInterval(intervalID4);
                    contextCar.clearRect(...carTopDimensions);
                    carLeftDimensions = [16.25, 20, 40, 80];
                    carBottomDimensions = [16.25, 750, 80, 40];
                    carRightDimensions = [936.25, 710, 40, 80];
                    carTopDimensions = [900, 10, 80, 40];
                    contextCar.fillRect(...carLeftDimensions);
                    demarrer();
                  }
                }, 5);
              }
            }
          }, 5);
        }
      }, 5);
    }
  }, 5);
}
