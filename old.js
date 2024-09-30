// Funktion för att ändra textvärdet på knappar Start sida både uppe och i submit

// KOD SOM GÖR SÅ DET KÖRS NÄR DOM:EN ÄR LADDAD OCH INTE INNAN

document.addEventListener("DOMContentLoaded", function () {
  /*
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "https://robcogwork.github.io/stepbystepjs/style.css";
          document.head.appendChild(link);
        
          */
  // valid event values
  const validEvent = "227643";

  // Get the current URL's query parameters
  const params = new URLSearchParams(window.location.search);

  // Check if the 'event' parameter exists and if its value matches the validEvent
  if (params.has("event") && params.get("event") === validEvent) {
    console.log("Valid event:", params.get("event"));

    // spara i session storage
    sessionStorage.setItem("validEvent", validEvent);

    //======================================================================================
    // Kör denna kod om det är rätt event
    //=====================================================================================

    // Your entire script goes inside this function
    function changeButtonValue(newValue) {
      // Välj alla knappar med den specifika CSS-klassen
      var buttons = document.querySelectorAll(
        ".cwShopPageEventInfo .cwInfoArea .cwButton.cwShopNavNext"
      );

      var button = document.querySelector(
        ".cwShopPageEventInfo .cwControlAreaTop .cwButton.cwShopNavNext"
      );

      var buttonAbort = document.querySelector(
        ".cwShopPageEventInfo .cwControlAreaTop .cwButton.cwShopNavCart"
      );

      // Om knappar hittas, ändra värdet
      if (buttons.length > 0) {
        buttons.forEach(function (button) {
          button.value = newValue;
        });
        button.value = newValue;

        buttonAbort.value = "Beställd";
      } else {
        console.log("Knappar hittades inte");
      }
    }

    // Exempelanvändning: ändra knapptexten
    changeButtonValue("Beställ");

    // ===================== Ändra text för "Kontrollera och bekräfta" knappar =====================
    function changeControlAndConfirmButtonValue(newValue) {
      var buttons = document.querySelectorAll(
        ".cwShopPageAddCommentAndConfirm .cwControlAreaTop .cwButton.cwShopNavCart"
      );

      if (buttons.length > 0) {
        buttons.forEach(function (button) {
          button.value = newValue;
        });
      } else {
        console.log("Knappar hittades inte");
      }
    }

    // Ändra texten på knappen för "Kontrollera och bekräfta"
    changeControlAndConfirmButtonValue("Beställd");

    // ===================== Ändra text för villkorsrutor =====================
    function changeLabelByFor(forValue, newLabelText) {
      // Välj rätt label med attributet "for"
      var label = document.querySelector(
        `#cwShopForm .terms label[for='${forValue}']`
      );

      if (label) {
        label.innerText = newLabelText;
      } else {
        console.log(`Etikett med 'for' attributet '${forValue}' hittades inte`);
      }
    }

    // Ändra etikett för godkännande av villkor
    changeLabelByFor("termsAccepted", "Jag godkänner beställningsvillkoren");
    changeLabelByFor(
      "policyAccepted",
      "Jag/vi godkänner beställningstjänstens användaravtal"
    );

    // ===================== Ändra rubrik för sida 2 =====================
    function changePartakerTitle(newTitle) {
      var paragraph = document.querySelector(
        "#cwShopForm.cwShopPagePartaker1Select .cwShopPageName"
      );

      if (paragraph) {
        paragraph.innerText = newTitle;
      } else {
        console.log("Rubrik för deltagare hittades inte");
      }
    }

    // Ändra rubrik
    changePartakerTitle("Beställare");

    // ===================== Ändra paragraftext under rubrik på sida 2 =====================
    function changePartakerParagraphText(newText) {
      var paragraph = document.querySelector(
        "#cwShopForm.cwShopPagePartaker1Select .cwInputArea p"
      );

      if (paragraph) {
        paragraph.innerText = newText;
      } else {
        console.log("Paragraf hittades inte");
      }
    }

    // Ändra text
    changePartakerParagraphText(
      "Det måste finnas en fysisk person som är kontaktperson och ansvarig för beställningen."
    );

    // ===================== Ändra text på titel för registreringsformulär på sida 3 =====================
    function changePartakerRegFormTitle(newTitle) {
      var titleElement = document.querySelector(
        "#cwShopForm.cwShopPagePartaker1RegForm .cwShopPageName"
      );

      if (titleElement) {
        titleElement.innerText = newTitle;
      } else {
        console.log("Titel för registreringsformulär hittades inte");
      }
    }

    // Ändra titel på registreringsformulär
    changePartakerRegFormTitle("Beställningsformulär");

    // ===================== Ändra text på kostnadsmeddelande på botten av sida 3 =====================
    function changeTotalAmountMsg(newCostText) {
      var costElement = document.querySelector(
        "#cwShopForm .cwResponseCostContainer > span"
      );

      if (costElement) {
        costElement.innerText = newCostText;
      } else {
        console.log("Kostnadstext hittades inte");
      }
    }

    // Ändra meddelandet om beräknad kostnad
    changeTotalAmountMsg("Beräknad kostnad för markerade artiklar: ");

    // ===================== Ändra textinnehåll i en div ex sida kontrollera bekräfta step by step =====================
    function changeDivTextByContent(currentText, newText) {
      var divs = document.querySelectorAll(".cwFormCenter .cwInputArea div");

      divs.forEach(function (div) {
        if (div.innerText.trim() === currentText) {
          div.innerText = newText;
        }
      });
    }

    // Ändra texten i div
    changeDivTextByContent(
      "Eventuella upplysningar i samband med bokningen",
      "Eventuella upplysningar i samband med beställningen"
    );

    changeDivTextByContent(
      "Skicka kopia av bokningsinformationen till annan e-postadress",
      "Skicka kopia av beställningsinformationen till annan e-postadressn"
    );

    // ===================== Ändra rubrik för bekräftelsesida =====================
    function changeBookingConfirmationTitle(newTitle) {
      var articleTitle = document.querySelector(
        "#cwShopForm.cwShopPageShoppingChart .cwFormCenter .cwColumnFull .cwShopPageName"
      );

      if (articleTitle) {
        articleTitle.innerText = newTitle;
      } else {
        console.log("Bekräftelserubriken hittades inte");
      }
    }

    // Ändra rubriken på bekräftelsesidan
    changeBookingConfirmationTitle("Beställningsbekräftelse");

    // ===================== Ändra texten i bekräftelseboxen =====================
    function changeTextInConfirmationBox(text) {
      var newText = document.querySelector(".cwCheckoutItem p:nth-of-type(2)");

      if (newText) {
        newText.innerText = text;
      } else {
        console.log("Text i bekräftelseboxen hittades inte");
      }
    }

    // Ändra text i bekräftelseboxen
    changeTextInConfirmationBox("Bokning slutförd");

    // ===================== Ändra text på "Avsluta beställning" knappar =====================
    function changeCancelAbortButtonText(newText) {
      var buttons = document.querySelectorAll(
        ".cwShopPageConfirmAbort .cwButton.cwShopNavMain"
      );

      if (buttons.length > 0) {
        buttons.forEach(function (button) {
          if (button.tagName.toLowerCase() === "input") {
            button.value = newText;
          } else if (button.tagName.toLowerCase() === "button") {
            button.innerText = newText;
          }
        });
      } else {
        console.log("Knappar för att avsluta hittades inte");
      }
    }

    changeCancelAbortButtonText("Ja, avsluta beställningen");

    function changeCancelAbortButtonTopRightText(newText) {
      var button = document.querySelector(
        ".cwShopPageConfirmAbort .cwControlAreaTop .cwButton.cwShopNavCart"
      );

      if (button) {
        button.value = newText;
      } else {
        console.log("Knappar för att avsluta hittades inte");
      }
    }

    changeCancelAbortButtonTopRightText("Beställd");

    // ===================== Ändra text för rubrik och paragraf i avslutningssektionen =====================
    function changeCancelAbortTitle(newTitle) {
      var titleElement = document.querySelector(
        ".cwShopPageConfirmAbort .cwInputArea .cwShopPageName"
      );

      if (titleElement) {
        titleElement.innerText = newTitle;
      } else {
        console.log("Rubrik för avslutning hittades inte");
      }
    }

    changeCancelAbortTitle("Vill du avsluta beställningen?");
    // ============= KANSKE BYTA PLATS ? =======================

    function changeCancelAbortParagraphTextByContent(currentText, newText) {
      var paragraphs = document.querySelectorAll(
        ".cwShopPageConfirmAbort .cwInputArea > p"
      );

      paragraphs.forEach(function (paragraph) {
        if (paragraph.innerText.trim() === currentText) {
          paragraph.innerText = newText;
        }
      });
    }

    // Exempel för att ändra text i paragrafer
    changeCancelAbortParagraphTextByContent(
      "Om du avslutar kan du fortfarande lägga till fler bokningar men måste då börja om från början.",
      "Om du avslutar kan du fortfarande lägga till fler beställningar men måste då börja om från början."
    );
    changeCancelAbortParagraphTextByContent(
      "Vill du ångra bokningar som du redan gjort klickar du på Bokat innan du avbryter bokningen.",
      "Vill du ångra beställningar som du redan gjort klickar du på Beställd innan du avbryter beställningen."
    );
    changeCancelAbortParagraphTextByContent(
      "Observera att du kommer att förbli inloggad även efter att du lämnat bokningen.",
      "Observera att du kommer att förbli inloggad även efter att du lämnat beställningssidan."
    );

    changeCancelAbortParagraphTextByContent("Avanmäld", "Beställning avbruten");

    // Ny paragraph test
    function changeParagraphTextByContent(currentText, newText) {
      var paragraphs = document.querySelectorAll(".cwCheckoutItemProperty");
      paragraphs.forEach(function (paragraph) {
        if (paragraph.innerText.trim() === currentText) {
          paragraph.innerText = newText;
        }
      });
    }

    // Ändra texten i <p> som innehåller "Avanmäld"
    changeParagraphTextByContent("Avanmäld", "Avbeställd");

    function changeErrorMessage(newText) {
      // Check if an element with the class 'cwErrMsg' exists in the DOM
      const errorElement = document.querySelector(".cwErrMsg");

      if (errorElement) {
        // If it exists, change the inner text to the new text
        errorElement.textContent = newText;
      }
    }

    // Example usage:
    changeErrorMessage(
      "Observera att du har tidigare beställningar som avser samma artikel."
    );

    //
    function currentPageSession() {
      // Pages where we need to check for the stored event
      const validPages = ["7000", "9100"];
      const currentPage = params.get("p");

      // Check if we are on a valid page (p=7000 or p=9100)
      if (validPages.includes(currentPage)) {
        // Retrieve the event from sessionStorage
        const storedEvent = sessionStorage.getItem("validEvent");

        // If the event is stored and matches the valid event, run the specific code
        if (storedEvent === validEvent) {
          console.log("Valid event detected on page", currentPage);

          // Function to change the shopping card text
          function changeShoppingCardText(currentText, newText) {
            var paragraphs = document.querySelectorAll(
              ".cwShopPageShoppingChart .cwCheckoutItemProperty"
            );
            paragraphs.forEach(function (paragraph) {
              if (paragraph.innerText.trim() === currentText) {
                paragraph.innerText = newText;
              }
            });
          }

          // Change the shopping card text for the specific case
          changeShoppingCardText(
            "Antagen till aktivitet",
            "Tack för din beställning"
          );

          changeShoppingCardText(
            "Bokning slutförd",
            "Tack för din beställning"
          );

          function changeShoppingCartTitle(newTitle) {
            var titleElement = document.querySelector(
              ".cwShopPageShoppingChart .cwInputArea .cwShopPageName"
            );

            if (titleElement) {
              titleElement.innerText = newTitle;
            } else {
              console.log("Rubrik för avslutning hittades inte");
            }
          }

          changeShoppingCartTitle("Beställningar");

          function changeCancelAbortTitle(newTitle) {
            var titleElement = document.querySelector(
              ".cwShopPageConfirmAbort .cwInputArea .cwShopPageName"
            );

            if (titleElement) {
              titleElement.innerText = newTitle;
            } else {
              console.log("Rubrik för avslutning hittades inte");
            }
          }

          changeCancelAbortTitle("Vill du avsluta beställningen?");

          function changeCancelAbortButtonText(newText) {
            var buttons = document.querySelectorAll(
              ".cwShopPageConfirmAbort .cwButton.cwShopNavMain"
            );

            if (buttons.length > 0) {
              buttons.forEach(function (button) {
                if (button.tagName.toLowerCase() === "input") {
                  button.value = newText;
                } else if (button.tagName.toLowerCase() === "button") {
                  button.innerText = newText;
                }
              });
            } else {
              console.log("Knappar för att avsluta hittades inte");
            }
          }

          changeCancelAbortButtonText("Ja, avsluta beställningen");

          // Exempelanvändning: ändra knapptexten
          changeButtonValue("Beställ");

          function changeButtonValue(newValue) {
            // Select the button with the specific class `.cwShopNavCart`
            var buttonAbort = document.querySelector(
              ".cwShopPageConfirmAbort .cwControlAreaTop .cwButton.cwShopNavCart"
            );

            // If the button is found, change its value
            if (buttonAbort) {
              buttonAbort.value = newValue;
            } else {
              console.log("Button with class 'cwShopNavCart' not found.");
            }
          }

          changeButtonValue("Beställd");
        } else {
          console.log("No valid event found in sessionStorage on this page.");
        }
      } else {
        console.log("This is not a valid page for event check.");
      }
    }

    //
    //==================================================================================
    // ==================== SLUT PÅ KODEN FÖR EVENTET - FORMULÄRET =====================
    //==================================================================================
  } else {
    console.log("Invalid or missing event parameter");
  }
});

// ändra styling för css

// END OF SCRIPT
