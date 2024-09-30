document.addEventListener("DOMContentLoaded", function () {
  // valid event value
  const validEvent = "227643";

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
    // Your functions that should run when the event parameter is present
    changeButtonValue("Beställ");
    changeControlAndConfirmButtonValue("Beställd");
    changeLabelByFor("termsAccepted", "Jag godkänner beställningsvillkoren");
    changeLabelByFor(
      "policyAccepted",
      "Jag/vi godkänner beställningstjänstens användaravtal"
    );
    changePartakerTitle("Beställare");
    changePartakerParagraphText(
      "Det måste finnas en fysisk person som är kontaktperson och ansvarig för beställningen."
    );
    changePartakerRegFormTitle("Beställningsformulär");
    changeTotalAmountMsg("Beräknad kostnad för markerade artiklar:");
    changeDivTextByContent(
      "Eventuella upplysningar i samband med bokningen",
      "Eventuella upplysningar i samband med beställningen"
    );
    changeDivTextByContent(
      "Skicka kopia av bokningsinformationen till annan e-postadress",
      "Skicka kopia av beställningsinformationen till annan e-postadress"
    );
    changeBookingConfirmationTitle("Beställningsbekräftelse");
    changeTextInConfirmationBox("Bokning slutförd");
    changeCancelAbortButtonText("Ja, avsluta beställningen");
    changeCancelAbortButtonTopRightText("Beställd");
    changeCancelAbortTitle("Vill du avsluta beställningen?");

    changeParagraphTextByContent("Avanmäld", "Beställning avbruten");
    changeErrorMessage(
      "Observera att du har tidigare beställningar som avser samma artikel."
    );
  }

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

        // Run functions specific to these pages
        changeShoppingCardText(
          "Antagen till aktivitet",
          "Tack för din beställning"
        );
        changeShoppingCardText("Bokning slutförd", "Tack för din beställning");
        changeShoppingCartTitle("Beställningar");
        changeCancelAbortTitle("Vill du avsluta beställningen?");
        changeCancelAbortButtonText("Ja, avsluta beställningen");
        changeButtonValue("Beställd");
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
      } else {
        console.log("No valid event found in sessionStorage on this page.");
      }
    } else {
      console.log("This is not a page where sessionStorage check is required.");
    }
  }

  // ======================= Helper Functions =======================

  // Function definitions remain the same

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
  function changeButtonValue(newValue) {
    var buttons = document.querySelectorAll(
      ".cwShopPageEventInfo .cwInfoArea .cwButton.cwShopNavNext"
    );
    var button = document.querySelector(
      ".cwShopPageEventInfo .cwControlAreaTop .cwButton.cwShopNavNext"
    );
    var buttonAbort = document.querySelector(
      ".cwShopPageEventInfo .cwControlAreaTop .cwButton.cwShopNavCart"
    );

    if (buttons.length > 0) {
      buttons.forEach(function (button) {
        button.value = newValue;
      });
      if (button) {
        button.value = newValue;
      }
      if (buttonAbort) {
        buttonAbort.value = "Beställd";
      }
    } else {
      console.log("Knappar hittades inte");
    }
  }

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

  function changeDivTextByContent(currentText, newText) {
    var divs = document.querySelectorAll(".cwFormCenter .cwInputArea div");

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

  function changeTextInConfirmationBox(text) {
    var newText = document.querySelector(".cwCheckoutItem p:nth-of-type(2)");

    if (newText) {
      newText.innerText = text;
    } else {
      console.log("Text i bekräftelseboxen hittades inte");
    }
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

  changeCancelAbortButtonTopRightText("Beställt");

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

  function changeParagraphTextByContent(currentText, newText) {
    var paragraphs = document.querySelectorAll(".cwCheckoutItemProperty");
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
});
