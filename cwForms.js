function changeButtonValue(newValue) {
  var buttons = document.querySelectorAll(
    ".cwArea .cwShopPageEventInfo  .cwButton.cwShopNavNext"
  );

  if (buttons.length > 0) {
    buttons.forEach(function (button) {
      button.value = newValue;
    });
  } else {
    console.log("Buttons not found");
  }
}

changeButtonValue("Nya värdet ex. Prenumerera");

function godkannAvtal(newHeading, newParagraph, newLabel, newChoice) {
  // Select the elements based on their tags and class names
  var heading = document.querySelector(".cwFormCenter .cwShopPageName");
  var paragraph = document.querySelector(".cwFormCenter p");
  var label = document.querySelector(".cwFormCenter label");
  var choice = document.querySelector(".cwFormCenter p:nth-child(2)");

  // Check if the elements are found and update their text content
  if (heading) {
    heading.textContent = newHeading;
  }

  if (paragraph) {
    paragraph.textContent = newParagraph;
  }

  if (label) {
    label.textContent = newLabel;
  }

  if (choice) {
    choice.textContent = newChoice;
  }
}

// Call the function with the desired new values
godkannAvtal("Ny Rubrik", "Ny text för själva boxen");

// ändra terms .terms > label
// #cwShopForm .cwShopPageEventInfo > .terms for policyAccepted and termsAccepted
// // för paragrafen #cwShopForm .cwShopPagePartaker1Select .cwInputArea > p

// #cwShopForm .cwShopPagePartaker1RegForm (titel)  .cwShopPageName
// kostnads text #cwShopForm .cwResponseCostContainer > span

// #cwShopForm .cwShopPageAddCommentAndConfirm #cwFormCenter .cwShopPageName (titel)
//  #cwShopForm .cwShopPageAddCommentAndConfirm #cwFormCenter div:nth-child(3)
//  #cwShopForm .cwShopPageAddCommentAndConfirm #cwFormCenter div:nth-child(4)
//  #cwShopForm .cwShopPageAddCommentAndConfirm #cwFormCenter h3 (titel artiklar)

// CANCEL - AVBOKA
// KNAPP .cwShopPageConfirmAbort .cwButton .cwShopNavMain / .cwButton:nth-child(2)
// KNAPP .cwShopPageConfirmAbort .cwButton .cwButton .cwShopNavCart
// Titel  .cwShopPageConfirmAbort .cwInputArea .cwShopPageName
// paragraf  .cwShopPageConfirmAbort .cwInputArea > p
// paragraf  .cwShopPageConfirmAbort .cwInputArea  p:nth-child(2)
// paragraf  .cwShopPageConfirmAbort .cwInputArea > p:nth-child(3)

/* exempel för webbshoppen 


  
  
  <div>
{CONTENT}
<script>
function changeButtonValue(newValue) {
  var buttons = document.querySelectorAll(
    ".cwArea .cwShopPageEventInfo  .cwButton.cwShopNavNext"
  );
  if (buttons.length > 0) {
    buttons.forEach(function (button) {
      button.value = newValue;
    });
  } else {
    console.log("Buttons not found");
  }
}

document.addEventListener('DOMContentLoaded', function() {
changeButtonValue("Prenumerera");

});

</script>
</div>  
  */

//KNAPPAR
// första sidan
function changeButtonValue(newValue) {
  var buttons = document.querySelectorAll(
    ".cwArea .cwShopPageEventInfo .cwButton.cwShopNavNext"
  );

  if (buttons.length > 0) {
    buttons.forEach(function (button) {
      button.value = newValue;
    });
  } else {
    console.log("Buttons not found");
  }
}

//========================= Ändra text på knapp första Kontrollera bekräfta =============================
changeButtonValue("Nya värdet ex. Prenumerera");

// ============================================== Slut ============================================

function changeControlAndConfirmButtonValue(newValue) {
  var buttons = document.querySelectorAll(
    ".cwShopPageAddCommentAndConfirm .cwControlAreaTop .cwButton.cwShopNavCart"
  );

  if (buttons.length > 0) {
    buttons.forEach(function (button) {
      button.value = newValue;
    });
  } else {
    console.log("Buttons not found");
  }
}

changeControlAndConfirmButtonValue("Beställd");

// ============================================== Slut ============================================

// ==============================================  TERMS POLICY ============================================ FUNGERAR
// terms and policy
function changeLabelByFor(forValue, newLabelText) {
  var label = document.querySelector(
    `#cwShopForm .terms label[for='${forValue}']`
  );
  if (label) {
    label.innerText = newLabelText;
  } else {
    console.log(`Label with 'for' attribute '${forValue}' not found`);
  }
}

// Terms accepted (1a)
changeLabelByFor("termsAccepted", "Jag godkänner beställningsvillkoren");

// Policy Accepted (2a)
changeLabelByFor(
  "policyAccepted",
  "Jag/vi godkänner beställningstjänstens användaravtal"
);

// ============================================== TERMS POLICY END ============================================

// ============================================== Ändra text för Titel sida 2 ============================================ FUNGERAR

function changePartakerTitle(newTitle) {
  var paragraph = document.querySelector(
    "#cwShopForm.cwShopPagePartaker1Select .cwShopPageName"
  );
  if (paragraph) {
    paragraph.innerText = newTitle;
  } else {
    console.log("Partaker paragraph not found");
  }
}

changePartakerTitle("Beställare");

// ============================================== Slut ============================================

// ============================================== Ändra text under Titel sida 2 ============================================ FUNGERAR

function changePartakerParagraphText(newText) {
  var paragraph = document.querySelector(
    "#cwShopForm.cwShopPagePartaker1Select .cwInputArea p"
  );
  if (paragraph) {
    paragraph.innerText = newText;
  } else {
    console.log("Partaker paragraph not found");
  }
}

changePartakerParagraphText(
  "Det måste finnas en fysisk person som är kontaktperson och ansvarig för beställningen."
);

// ============================================== Slut ============================================

// ============================================== Ändra text på titel sida 3 ============================================ FUNGERAR
function changePartakerRegFormTitle(newTitle) {
  var titleElement = document.querySelector(
    "#cwShopForm.cwShopPagePartaker1RegForm .cwShopPageName"
  );
  if (titleElement) {
    titleElement.innerText = newTitle;
  } else {
    console.log("Partaker registration form title not found");
  }
}

changePartakerRegFormTitle("Beställningsformulär");

// ============================================== Slut ============================================

// ============================================== Ändra text på beräknad meddelande på botten sida 3 ============================================ FUNGERAR

function changeTotalAmountMsg(newCostText) {
  var costElement = document.querySelector(
    "#cwShopForm .cwResponseCostContainer > span"
  );
  if (costElement) {
    costElement.innerText = newCostText;
  } else {
    console.log("Cost text not found");
  }
}

changeTotalAmountMsg("Beräknad kostnad för markerade artiklar: ");

// ============================================== Slut ============================================

// ============================================== Kontrollera och bekräfta - texter - kopiera texten som står och byt ut mot nya, funktionen hittar elementet via texten ============================================ Fungerar på detta sätt

function changeDivTextByContent(currentText, newText) {
  var divs = document.querySelectorAll(".cwFormCenter .cwInputArea div");
  divs.forEach(function (div) {
    if (div.innerText.trim() === currentText) {
      div.innerText = newText;
    }
  });
}

// Exampel
changeDivTextByContent(
  "Eventuella upplysningar i samband med bokningen",
  "Eventuella upplysningar i samband med beställningen"
);

// Exampel
changeDivTextByContent(
  "Skicka kopia av bokningsinformationen till annan e-postadress",
  "Skicka kopia av beställningsinformationen till annan e-postadress"
);

// ============================================== Bekräftelse sidans Titel ============================================ FUNGERAR

function changeBookingConfirmationTitle(newTitle) {
  var articleTitle = document.querySelector(
    "#cwShopForm.cwShopPageShoppingChart .cwFormCenter .cwColumnFull .cwShopPageName"
  );
  if (articleTitle) {
    articleTitle.innerText = newTitle;
  } else {
    console.log("Booking confirmation title not found");
  }
}

// Example usage:
changeBookingConfirmationTitle("Beställningsbekräftelse");

// ============================================== Bekräftelse sidans boknings info text ============================================ FUNGERAR
function changeTextInConfirmationBox(text) {
  var newText = document.querySelector(".cwCheckoutItem p:nth-of-type(2)");
  if (newText) {
    newText.innerText = text;
  } else {
    console.log("");
  }
}

// Example usage:
changeTextInConfirmationBox("Bokning slutförd");

// ============================================== Slut ============================================

//================ ÄNDRA KNAPPEN I AVSLUTA BOKNING / BESTÄLLNINGEN I MENYN TOP-BAR ===============================

function changeCancelAbortButtonText(newText) {
  var button = document.querySelector(
    ".cwShopPageConfirmAbort .cwControlAreaTop .cwButton.cwShopNavMain"
  );
  if (button) {
    button.value = newText;
  } else {
    console.log(`Cancel/Abort button not found`);
  }
}

changeCancelAbortButtonText("Ja, avsluta beställningen");

// ============================================== Slut ============================================
//================ ÄNDRA KNAPPEN I AVSLUTA BOKNING / BESTÄLLNINGEN I MENYN TOP-BAR ===============================

function changeCancelAbortButtonTopRightText(newText) {
  var button = document.querySelector(
    ".cwShopPageConfirmAbort .cwControlAreaTop .cwButton.cwShopNavCart"
  );
  if (button) {
    button.value = newText;
  } else {
    console.log(`Cancel/Abort button not found`);
  }
}

changeCancelAbortButtonTopRightText("Beställd");

// ============================================== Slut ============================================

//================ ÄNDRA KNAPPEN I FORMULÄRET BOKNING =============================== FUngerar

function changeCancelAbortSubmitButtonText(newText) {
  var button = document.querySelector(
    ".cwShopPageConfirmAbort .cwInputArea .cwButton.cwShopNavMain"
  );
  if (button) {
    button.value = newText;
  } else {
    console.log(`Cancel/Abort button not found`);
  }
}

changeCancelAbortSubmitButtonText("Ja, avsluta beställningen");

// ============================================== Slut ============================================

function changeCancelAbortTitle(newTitle) {
  var titleElement = document.querySelector(
    ".cwShopPageConfirmAbort .cwInputArea .cwShopPageName"
  );
  if (titleElement) {
    titleElement.innerText = newTitle;
  } else {
    console.log("Cancel/Abort title not found");
  }
}

changeCancelAbortTitle("Vill du avsluta beställningen?");

// ============================================== Slut ============================================

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

// Example usage:
changeCancelAbortParagraphTextByContent(
  "Om du avslutar kan du fortfarande lägga till fler bokningar men måste då börja om från början.",
  "Om du avslutar kan du fortfarande lägga till fler beställningar men måste då börja om från början."
);

changeCancelAbortParagraphTextByContent(
  "Vill du ångra bokningar som du redan gjort klickar du på Bokat innan du avbryter bokningen. Om bokningen redan blivit bindande måste du dock kontakta arrangören för att ångra bokningen.",
  "Vill du ångra bokningar som du redan gjort klickar du på Beställd innan du avbryter beställningen. Om beställningen redan blivit bindande måste du dock kontakta försäljaren för att ångra beställningen."
);

changeCancelAbortParagraphTextByContent(
  "Observera att du kommer att förbli inloggad även efter att du lämnat bokningen.",
  "Observera att du kommer att förbli inloggad även efter att du lämnat beställnins sidan."
);
