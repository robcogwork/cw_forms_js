document.addEventListener("DOMContentLoaded", function () {
  // Valid event value
  const validEvent = "227643";

  // Get the current URL's query parameters
  const params = new URLSearchParams(window.location.search);

  // Check if the 'event' parameter exists and matches the validEvent
  if (params.has("event") && params.get("event") === validEvent) {
    console.log("Valid event:", params.get("event"));

    // Store the event in sessionStorage
    sessionStorage.setItem("validEvent", validEvent);

    // Call the function that handles dynamic button text changes
    runEventRelatedChanges();
  } else {
    console.log("Invalid or missing event parameter");
  }

  // Function to handle the dynamic changes after the event is stored
  function runEventRelatedChanges() {
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

    changeBookingConfirmationTitle("Beställningsbekräftelse");

    changeTextInConfirmationBox("Bokning slutförd");

    currentPageSession(); // Execute session check for the final pages
  }

  // Function to check for valid session and execute dynamic changes on the final pages
  function currentPageSession() {
    // Pages where we need to check for the stored event
    const validPages = ["7000", "9100"];
    const currentPage = params.get("p");

    // Check if we are on a valid page (p=7000 or p=9100)
    if (validPages.includes(currentPage)) {
      const storedEvent = sessionStorage.getItem("validEvent");

      // If the event is stored, execute specific page logic
      if (storedEvent === validEvent) {
        console.log("Valid event detected on page", currentPage);

        changeShoppingCardText(
          "Antagen till aktivitet",
          "Tack för din beställning"
        );
        changeShoppingCartTitle("Beställningar");
        changeCancelAbortTitle("Vill du avsluta beställningen?");
        changeCancelAbortButtonText("Ja, avsluta beställningen");
        changeButtonValue("Beställd");

        // Call all paragraph-related text changes for Cancel Abort
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

        // Call error message change function
        changeErrorMessage(
          "Observera att du har tidigare beställningar som avser samma artikel."
        );
      } else {
        console.log("No valid event found in sessionStorage on this page.");
      }
    } else {
      console.log("This is not a valid page for event check.");
    }
  }

  // Individual helper functions
  function changeButtonValue(newValue) {
    var buttonAbort = document.querySelector(
      ".cwShopPageConfirmAbort .cwControlAreaTop .cwButton.cwShopNavCart"
    );

    if (buttonAbort) {
      buttonAbort.value = newValue;
    } else {
      console.log("Button with class 'cwShopNavCart' not found.");
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

  function changeShoppingCardText(currentText, newText) {
    var paragraphs = document.querySelectorAll(".cwShopPageShoppingChart p");
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

  function changeErrorMessage(newText) {
    var errorElement = document.querySelector(".cwErrMsg");

    if (errorElement) {
      errorElement.textContent = newText;
    }
  }
});
