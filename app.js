document.addEventListener("DOMContentLoaded", function () {
  // valid event value
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

    changeButtonValue("Prenumerera");
    changeButtonTopNav("Tecknat");

    changeLabelByFor("termsAccepted", "Jag godkänner villkoren");
    changeLabelByFor(
      "policyAccepted",
      "Jag/vi godkänner prenumerationstjänstens användaravtal"
    );

    changeATagInTerms("(Visa)", "(visa)");

    // ANDRA SIDAN I FLÖDET - PARTTAKER SELECT
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
  }

  // OVANFÖR FÄRDIGA FUNCTIONER

  // Functions to check sessionStorage and apply changes on specific pages
  function checkSessionAndRunPageSpecificFunctions() {
    // Pages where we need to check for the stored event
    const validPages = ["7000", "9100"];
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
        hideContinueShoppingButton();
        changeBookingConfirmationTitle("Tecknat");
        // =========================================
        changeShoppingCardText(
          "Antas då begärd avgift betalas",
          "Premunationer börjar när betalning har mottagits."
        );
      } else {
        console.log("No valid event found in sessionStorage on this page.");
      }
    } else {
      console.log("This is not a page where sessionStorage check is required.");
    }
  }

  // ======================= Helper Functions =======================
  //============= FÖRSTA SIDAN! -KNAPPAR ==========================
  function changeButtonValue(newValue) {
    var buttons = document.querySelectorAll(
      ".cwShopPageEventInfo .cwInfoArea .cwButton.cwShopNavNext"
    );
    var button = document.querySelector(
      ".cwShopPageEventInfo .cwControlAreaTop .cwButton.cwShopNavNext"
    );

    if (buttons.length > 0) {
      buttons.forEach(function (button) {
        button.value = newValue;
      });
      if (button) {
        button.value = newValue;
      }
    } else {
      console.log("Knappar hittades inte");
    }
  }

  function changeButtonTopNav(newValue) {
    var buttonConfirm = document.querySelector(
      ".cwShopPageEventInfo .cwControlAreaTop .cwButton.cwShopNavCart"
    );

    if (buttonConfirm) {
      buttonConfirm.value = newValue;
    } else {
      console.log("Knappar hittades inte");
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
    document.querySelector(
      ".cwShopPageEventInfo .cwDataArea p:first-of-type"
    ).style.display = "none";
  }
  // ====================================== FÖRSTA SIDA SLUT ====================================================

  // ============ ANDRA SIDAN I FLÖDET - PARTTAKER SELECT

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

  // ============ ANDRA SIDAN I FLÖDET - SLUT

  // TREDJE SIDAN

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

  // FÖR FLER SIDOR SIDOPANELEN

  function updateCwData() {
    const cwDataNames = document.querySelectorAll(".cwData .cwDataName");

    cwDataNames.forEach(function (item) {
      // Ta bort "Arrangör" och "Svensk filosofi"
      if (
        item.textContent === "Arrangör" ||
        item.nextElementSibling.textContent === "Svensk filosofi"
      ) {
        item.style.display = "none"; // göm "Arrangör"
        item.nextElementSibling.style.display = "none"; // göm "Svensk filosofi"
      }

      // byt "Aktivitet/artikel" mot "Prenumeration"
      if (item.textContent.includes("Aktivitet/artikel")) {
        item.textContent = "Prenumeration";
      }

      // Byt "Deltagare (Ändra)" mot "Prenumerant"
      if (item.textContent.includes("Deltagare")) {
        item.innerHTML = item.innerHTML.replace("Deltagare", "Prenumerant");
      }
    });
  }

  // Fjärde sidan i flödet "bokningsformulär"

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

  // KONTROLLERA BEKRÄFTA
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

  function hideContinueShoppingButton() {
    const button = document.querySelector('input[name="continue_shopping"]');
    if (button) {
      button.style.display = "none";
    }
  }

  // Call the function to hide the button

  changeControlAndConfirmButtonValue("Tecknat");

  function changeDivTextByContent(currentText, newText) {
    var divs = document.querySelectorAll(".cwFormCenter .cwInputArea div");

    divs.forEach(function (div) {
      if (div.innerText.trim() === currentText) {
        div.innerText = newText;
      }
    });
  }

  // NICLAS FIX FÖR STÄNG KNAPPEN ?? fungerar ej

  function removeInputClose() {
    document
      .querySelectorAll('input[name="close"]')
      .forEach(function (inputClose) {
        inputClose.setAttribute("name", "shopAbortConfirmed");
      });
  }

  removeInputClose();

  // ????????????? testa sista sidan kanske

  // OVANFÖR FÄRDIGA FUNKTIONER

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
});
