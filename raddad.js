document.addEventListener("DOMContentLoaded", function () {
  // valid event value
  const validEvent = "224133";

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

    changeButtonValue("Ge en gåva");
    /*  changeButtonTopNav("Tecknat"); */

    changeButtonConfirmValue("Donerat");

    changeLabelByFor("termsAccepted", "Jag godkänner villkoren");
    changeLabelByFor("policyAccepted", "Jag/vi godkänner användaravtalet");

    changeATagInTerms("(Visa)", "(visa)");

    // ANDRA SIDAN I FLÖDET - PARTTAKER SELECT
    /*  changePartakerTitle("Donator"); */

    changePartakerParagraphText(
      "Det måste finnas en fysisk person som är kontaktperson och ansvarig för donationen."
    );

    /* changePartakerTitleThirdPage("Donator");
     */
    updateCwData();

    changePartakerRegFormTitle("Gåvobelopp");

    changeDivTextByContent(
      "Eventuella upplysningar i samband med bokningen",
      "Eventuella upplysningar i samband med donationen"
    );

    /*  changeDivTextByContent(
      "Skicka kopia av bokningsinformationen till annan e-postadress",
      "Skicka kopia av information om donationen till annan e-postadress"
    ); */

    changeDivTextByContent(
      "Skicka kopia av bokningsinformationen till annan e-postadress",
      "Skicka kopia av information om donationen till annan e-postadress"
    );

    changeErrorMessage(
      "Observera att du har tidigare donationer som avser samma gåvobelopp."
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
        // =========================================
        changeShoppingCardText(
          "Antagen till aktivitet",
          "Gåvan anses mottagen när gåvobeloppet har registrerats."
        );
        changeShoppingCardText("Avanmäld", "Återkallad");
        changeBookingConfirmationTitle("Donerat");
        changeCancelAbortTitle("Vill du verkligen avbryta donationen?");
        changeCancelAbortButtonTopRightText("Donerat");
        changeCancelAbortButtonText("Ja, avbryt donationen!");
        changeCancelAbortParagraphTextByContent(
          "Om du avbryter bokningen kommer bokningar som du ännu inte fullföljt att gå förlorade. Redan slutförda bokningar kommer däremot inte att påverkas.",
          "Om du avbryter donationen kommer donationer som du ännu inte fullföljt att gå förlorade. Redan slutförda donationer kommer däremot inte att påverkas."
        );
        changeCancelAbortParagraphTextByContent(
          "Vill du ångra bokningar som du redan gjort klickar du på Bokat innan du avbryter bokningen. Om bokningen redan blivit bindande måste du dock kontakta arrangören för att ångra bokningen.",
          "Vill du ångra donationer som du redan gjort klickar du på Donerat innan du avbryter donationen."
        );
        changeCancelAbortParagraphTextByContent(
          "Observera att du kommer att förbli inloggad även efter att du lämnat bokningen.",
          ""
        );
      } else {
        console.log("No valid event found in sessionStorage on this page.");
      }
    } else {
      console.log("This is not a page where sessionStorage check is required.");
    }
  }

  // ======================= Helper Functions =======================

  function changeButtonConfirmValue(newValue) {
    var buttonConfirm = document.querySelector(
      ".cwControlAreaTop .cwButton.cwShopNavCart"
    );

    // Update buttonConfirm if it exists
    if (buttonConfirm) {
      buttonConfirm.value = newValue;
    } else {
      console.log("buttonConfirm not found");
    }
  }
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
  /* 
  function changeButtonTopNav(newValue) {
    var buttonConfirm = document.querySelector(
      ".cwShopPageEventInfo .cwControlAreaTop .cwButton.cwShopNavCart"
    );

    if (buttonConfirm) {
      buttonConfirm.value = newValue;
    } else {
      console.log("Knappar hittades inte");
    }
  } */

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
  // ====================================== FÖRSTA SIDA SLUT ====================================================

  // ============ ANDRA SIDAN I FLÖDET - PARTTAKER SELECT

  /* function changePartakerTitle(newTitle) {
    var paragraph = document.querySelector(
      "#cwShopForm.cwShopPagePartaker1Select .cwShopPageName"
    );

    if (paragraph) {
      paragraph.innerText = newTitle;
    } else {
      console.log("Rubrik för deltagare hittades inte");
    }
  } */

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

  // ============ ANDRA SIDAN I FLÖDET - SLUT

  // TREDJE SIDAN

  /*   function changePartakerTitleThirdPage(newTitle) {
    var paragraph = document.querySelector(
      ".cwShopPagePartaker1Find .cwFormCenter .cwShopPageName"
    );

    if (paragraph) {
      paragraph.innerText = newTitle;
    } else {
      console.log("Rubrik för deltagare hittades inte");
    }
  } */

  // FÖR FLER SIDOR SIDOPANELEN

  function updateCwData() {
    const cwDataNames = document.querySelectorAll(".cwData .cwDataName");

    cwDataNames.forEach(function (item) {
      if (item.textContent.includes("Aktivitet/artikel")) {
        item.textContent = "Gåvoobjekt";
      }

      // byt "Aktivitet/artikel" mot "Prenumeration"
      if (item.textContent.includes("Arrangör")) {
        item.textContent = "Mottagare";
      }

      // Byt "Deltagare (Ändra)" mot "Prenumerant"
      if (item.textContent.includes("Deltagare")) {
        item.innerHTML = item.innerHTML.replace("Deltagare", "Donator");
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
  /*  function changeControlAndConfirmButtonValue(newValue) {
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
  } */

  /*  function hideContinueShoppingButton() {
    const button = document.querySelector('input[name="continue_shopping"]');
    if (button) {
      button.style.display = "none";
    }
  } */

  // Call the function to hide the button

  /*   changeControlAndConfirmButtonValue("Tecknat"); */

  function changeErrorMessage(newText) {
    const errorElement = document.querySelector(".cwErrMsg");

    if (errorElement) {
      errorElement.textContent = newText;
    }
  }

  function changeDivTextByContent(currentText, newText) {
    var divs = document.querySelectorAll(".cwInputArea div"); // Target divs inside .cwInputArea

    divs.forEach(function (div) {
      if (div.innerText.trim() === currentText) {
        div.innerText = newText;
      }
    });
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

  function changeCancelAbortButtonTopRightText(newText) {
    var button = document.querySelector(
      ".cwShopPageConfirmAbort .cwControlAreaTop .cwShopNavCart"
    );

    if (button) {
      button.value = newText;
    } else {
      console.log("Knappar för att avsluta hittades inte");
    }
  }

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
});
