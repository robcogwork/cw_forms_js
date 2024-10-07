document.addEventListener("DOMContentLoaded", function () {
  // Valid event value
  const validEvent = "227318";

  // Get the current URL's query parameters
  const params = new URLSearchParams(window.location.search);

  // Store the event in sessionStorage if present in the URL
  if (params.has("event") && params.get("event") === validEvent) {
    console.log("Valid event detected and stored:", params.get("event"));
    sessionStorage.setItem("validEvent", validEvent);

    // Run functions specific to the initial event page
    runInitialEventFunctions();
  } else {
    console.log("No event parameter in URL or invalid event.");
  }

  // Run functions that need to check sessionStorage on all pages
  checkSessionAndRunPageSpecificFunctions();

  // ======================= Function Definitions =======================

  // Functions specific to the initial event page
  function runInitialEventFunctions() {
    // KÖRS ENDAST OM DET ÄR RÄTT EVENT NR
    // FÖRSTA SIDAN
    updateRegStatusText();

    changeButtonTopNav("Tecknat");
    changeButtonValue("Prenumerera");
    changeLabelByFor("termsAccepted", "Jag godkänner villkoren");
    changeLabelByFor(
      "policyAccepted",
      "Jag/vi godkänner prenumerationstjänstens användaravtal"
    );

    changeATagInTerms("(Visa)", "(visa)");

    // ANDRA SIDAN I FLÖDET - PARTICIPANT SELECT
    changePartakerTitle("Prenumerant");

    changePartakerParagraphText(
      "Det måste finnas en fysisk person som är kontaktperson och ansvarig för prenumerationen."
    );

    hideElements();

    hideOrganizer();

    changePartakerTitleThirdPage("Prenumerant");

    updateCwData();

    changePartakerRegFormTitle("Belopp");

    changeDivTextByContent(
      "Skicka kopia av bokningsinformationen till annan e-postadress",
      "Skicka kopia av information om prenumerationen till annan e-postadress"
    );

    changeErrorMessage(
      "Observera att du har tidigare prenumerationer med samma profil."
    );
  }

  // Functions to check sessionStorage and apply changes on specific pages
  function checkSessionAndRunPageSpecificFunctions() {
    // Pages where we need to check for the stored event
    const validPages = ["7000", "9100", "8040"];
    const currentPage = params.get("p");

    // Check if we are on a valid page (p=7000 or p=9100)
    if (validPages.includes(currentPage)) {
      // Retrieve the event from sessionStorage
      const storedEvent = sessionStorage.getItem("validEvent");

      // If the event is stored and matches the valid event, run the specific code
      if (storedEvent === validEvent) {
        console.log(
          "Valid event detected in sessionStorage on page",
          currentPage
        );
        changeButtonTopNav("Tecknat");
        hideContinueShoppingButton();
        changeBookingConfirmationTitle("Tecknat");
        changeShoppingCardText(
          "Antas då begärd avgift betalas",
          "Premunationer börjar när betalning har mottagits."
        );
        changePaySubmitButtonText();
      } else {
        console.log("No valid event found in sessionStorage on this page.");
      }
    } else {
      console.log("This is not a page where sessionStorage check is required.");
    }
  }

  // ======================= Helper Functions =======================
  //============= FÖRSTA SIDAN! - KNAPPAR ==========================
  function changeButtonValue(newValue) {
    var buttons = document.querySelectorAll(
      ".cwShopPageEventInfo .cwInfoArea .cwButton.cwShopNavNext"
    );
    var button = document.querySelector(
      ".cwShopPageEventInfo .cwControlAreaTop .cwButton.cwShopNavNext"
    );

    var buttonConfirm = document.querySelector(
      ".cwControlAreaTop .cwButton.cwShopNavCart"
    );

    // Update all buttons in the .cwInfoArea
    if (buttons.length > 0) {
      buttons.forEach(function (btn) {
        btn.value = newValue;
      });
    }

    // Update the single button in the .cwControlAreaTop
    if (button) {
      button.value = newValue;
    }

    // Update buttonConfirm if it exists
    if (buttonConfirm) {
      buttonConfirm.value = "Tecknat";
    } else {
      console.log("buttonConfirm not found");
    }
  }

  function changeLabelByFor(forValue, newLabelText) {
    var label = document.querySelector(
      `#cwShopForm .terms label[for='${forValue}']`
    );

    if (label) {
      label.innerText = newLabelText;
    } else {
      console.log(`Etikett med 'for' attributet '${forValue}' hittades inte`);
    }
  }

  function changeATagInTerms(currentText, newText) {
    var aTags = document.querySelectorAll(".cwShopPageEventInfo .terms a");
    aTags.forEach(function (aTag) {
      if (aTag.innerText.trim() === currentText) {
        aTag.innerText = newText;
      }
    });
  }

  function hideOrganizer() {
    var organizer = document.querySelector(
      ".cwShopPageEventInfo .cwDataArea p:first-of-type"
    );
    if (organizer) {
      organizer.style.display = "none";
    }
  }
  // ====================================== FÖRSTA SIDAN SLUT ====================================================

  // ============ ANDRA SIDAN I FLÖDET - PARTICIPANT SELECT ==============

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

  function hideElements() {
    const cwData = document.querySelectorAll(".cwData .cwDataName");

    cwData.forEach(function (item) {
      if (
        item.textContent === "Arrangör" ||
        item.nextElementSibling.textContent === "Svensk filosofi"
      ) {
        item.style.display = "none"; // Hide the "Arrangör" label
        item.nextElementSibling.style.display = "none"; // Hide the corresponding value "Svensk filosofi"
      }
    });
  }

  // ============ ANDRA SIDAN I FLÖDET - SLUT ============================

  // ======================== TREDJE SIDAN ==============================

  function changePartakerTitleThirdPage(newTitle) {
    var paragraph = document.querySelector(
      ".cwShopPagePartaker1Find .cwFormCenter .cwShopPageName"
    );

    if (paragraph) {
      paragraph.innerText = newTitle;
    } else {
      console.log("Rubrik för deltagare hittades inte");
    }
  }

  // ===================== FÖR FLER SIDOR SIDOPANELEN ====================

  function changeButtonTopNav(newValue) {
    var buttonConfirm = document.querySelector(
      ".cwControlAreaTop .cwButton.cwShopNavCart"
    );

    if (buttonConfirm) {
      buttonConfirm.value = newValue;
    } else {
      console.log("Knappar hittades inte");
    }
  }

  function updateRegStatusText() {
    const regStatusElement = document.querySelector(".cwRegStatus");

    if (regStatusElement) {
      regStatusElement.textContent = "Prenumeration";
    } else {
      console.error('Element with class "cwRegStatus" not found.');
    }
  }

  function updateCwData() {
    const cwDataNames = document.querySelectorAll(".cwData .cwDataName");

    cwDataNames.forEach(function (item) {
      // Ta bort "Arrangör" och "Svensk filosofi"
      if (
        item.textContent === "Arrangör" ||
        item.nextElementSibling.textContent === "Svensk filosofi"
      ) {
        item.style.display = "none"; // Göm "Arrangör"
        item.nextElementSibling.style.display = "none"; // Göm "Svensk filosofi"
      }

      // Byt "Aktivitet/artikel" mot "Prenumeration"
      if (item.textContent.includes("Aktivitet/artikel")) {
        item.textContent = "Prenumeration";
      }

      // Byt "Deltagare (Ändra)" mot "Prenumerant"
      if (item.textContent.includes("Deltagare")) {
        item.innerHTML = item.innerHTML.replace("Deltagare", "Prenumerant");
      }
    });
  }

  // =========== FJÄRDE SIDAN I FLÖDET "BOKNINGSFORMULÄR" ===============

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

  // ======================== HJÄLPFUNKTIONER ===========================

  function hideContinueShoppingButton() {
    const button = document.querySelector('input[name="continue_shopping"]');
    if (button) {
      button.style.display = "none";
    }
  }

  function changeDivTextByContent(currentText, newText) {
    var divs = document.querySelectorAll(".cwFormCenter .cwInputArea div");

    divs.forEach(function (div) {
      if (div.innerText.trim() === currentText) {
        div.innerText = newText;
      }
    });
  }

  // ================== KONTROLLERA & BEKRÄFTA ==========================

  function changeControlAndConfirmButtonValue(newValue) {
    var buttons = document.querySelectorAll(
      ".cwShopPageAddCommentAndConfirm .cwControlAreaTop .cwButton.cwShopNavCart"
    );

    if (buttons.length > 0) {
      buttons.forEach(function (btn) {
        btn.value = newValue;
      });
    } else {
      console.log("Knappar hittades inte");
    }
  }

  // Call the function to change the button value
  changeControlAndConfirmButtonValue("Tecknat");

  // =================== FIX FÖR "STÄNG" KNAPPEN =======================

  function removeInputClose() {
    document
      .querySelectorAll('input[name="close"]')
      .forEach(function (inputClose) {
        inputClose.setAttribute("name", "shopAbortConfirmed");
      });
  }

  // Call the function to adjust the "Stäng" button
  removeInputClose();

  // ====================== ÖVRIGA FUNKTIONER ==========================

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

  function changeErrorMessage(newText) {
    const errorElement = document.querySelector(".cwErrMsg");

    if (errorElement) {
      errorElement.textContent = newText;
    }
  }

  function changePaySubmitButtonText() {
    const button = document.querySelector(".cwButton.cwShopNavMain");
    if (button && button.textContent.trim() === "Visa bokningsöversikt") {
      button.textContent = "Visa prenumerationsöversikt";
    }
  }
});
