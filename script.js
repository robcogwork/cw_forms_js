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

/*
Dark ligth 

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = "Toggle Dark/Light Mode";
    document.body.appendChild(toggleButton);

    // Function to set theme based on the user's preference
    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // If no saved theme, use the system preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDarkScheme ? 'dark' : 'light');
    }

    // Toggle between dark and light mode on button click
    toggleButton.addEventListener('click', function() {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});





*/

/* ändra text på svensk filosofi */

/*

cwShopPageEventInfo
terms
label

Ja vi godkänner användaravtalet / prenumerationen


 function godkannAvtal(newHeading, newParagraph, newLabel, newChoice) {
    // Select the elements based on their tags and class names
    var heading = document.querySelector('.cwFormCenter .cwShopPageName');
    var paragraph = document.querySelector('.cwFormCenter p');
    var label = document.querySelector('.cwFormCenter label');
    var choice = document.querySelector('.cwFormCenter p:nth-child(2)');
    
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

https://minaaktiviteter.se/svenskfilosofi/shop/new?event=227318


cwShopPagePartaker1Select

*/

/*

============== FUNCTION FÖR ATT SKAPA KORT FRÅN EN ARRAY ============================

*/

/*
lägg till en klass city-container 
*/

/* 
document.querySelector('.city-container').innerHTML = generateCityBlocks(fasForeningsArray);
*/

function generateCityBlocks(organizations) {
  let cityBlocks = "";

  organizations.forEach((org) => {
    // Create block for each organization
    cityBlocks += `
        <!-- wp:columns {"align":"wide","style":{"spacing":{"padding":{"top":"0","bottom":"0"}}},"className":"list-wrapper-main"} -->
        <div class="wp-block-columns alignwide list-wrapper-main" style="padding-top:0;padding-bottom:0">
          <!-- wp:column {"width":"100%"} -->
          <div class="wp-block-column" style="flex-basis:100%">
            <!-- wp:group {"style":{"spacing":{"blockGap":"0","padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"},"margin":{"top":"0px","bottom":"0px"}}},"backgroundColor":"ast-global-color-0","layout":{"type":"constrained"}} -->
            <div class="wp-block-group has-ast-global-color-0-background-color has-background" style="margin-top:0px;margin-bottom:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"></div>
            <!-- /wp:group -->
  
            <!-- wp:group {"style":{"spacing":{"blockGap":"0","padding":{"left":"12px","right":"12px","top":"8px","bottom":"8px"},"margin":{"top":"20px","bottom":"20px"}}},"backgroundColor":"ast-global-color-0","layout":{"type":"constrained","justifyContent":"left"}} -->
            <div class="wp-block-group has-ast-global-color-0-background-color has-background" style="margin-top:20px;margin-bottom:20px;padding-top:8px;padding-right:12px;padding-bottom:8px;padding-left:12px">
              <!-- wp:heading {"level":4,"style":{"elements":{"link":{"color":{"text":"var:preset|color|ast-global-color-4"}}},"spacing":{"padding":{"top":"0px","bottom":"8px"},"margin":{"top":"0px","bottom":"0px"}}},"textColor":"ast-global-color-4"} -->
              <h4 class="wp-block-heading has-ast-global-color-4-color has-text-color has-link-color" style="margin-top:0px;margin-bottom:0px;padding-top:0px;padding-bottom:8px"><strong>${org.cityName}</strong></h4>
              <!-- /wp:heading -->
  
              <!-- wp:columns {"style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"},"margin":{"top":"0","bottom":"0"},"blockGap":{"top":"0","left":"var:preset|spacing|20"}}}} -->
              <div class="wp-block-columns" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
                <!-- wp:column {"style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"}}}} -->
                <div class="wp-block-column" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
                  <!-- wp:buttons {"align":"full","layout":{"type":"flex"},"style":{"spacing":{"margin":{"top":"0","bottom":"0"}}}} -->
                  <div class="wp-block-buttons alignfull" style="margin-top:0;margin-bottom:0">
                    <!-- wp:button {"style":{"spacing":{"padding":{"left":"var:preset|spacing|20","right":"var:preset|spacing|20","top":"var:preset|spacing|20","bottom":"var:preset|spacing|20"}}},"className":"copy-button cwHittaBtn"} -->
                    <div class="wp-block-button copy-button cwHittaBtn"><a class="wp-block-button__link wp-element-button" style="padding-top:var(--wp--preset--spacing--20);padding-right:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)" rel="${org.emailGeneral}">Kopiera e-post</a></div>
                    <!-- /wp:button -->
                  </div>
                  <!-- /wp:buttons -->
                </div>
                <!-- /wp:column -->
  
                <!-- wp:column {"style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"}}}} -->
                <div class="wp-block-column" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
                  <!-- wp:buttons {"align":"full","layout":{"type":"flex"},"style":{"spacing":{"margin":{"top":"0","bottom":"0"}}}} -->
                  <div class="wp-block-buttons alignfull" style="margin-top:0;margin-bottom:0">
                    <!-- wp:button {"style":{"spacing":{"padding":{"left":"var:preset|spacing|20","right":"var:preset|spacing|20","top":"var:preset|spacing|20","bottom":"var:preset|spacing|20"}}},"className":"cwHittaBtn"} -->
                    <div class="wp-block-button cwHittaBtn"><a class="wp-block-button__link wp-element-button" href="${org.url}" style="padding-top:var(--wp--preset--spacing--20);padding-right:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)" target="_blank" rel="noreferrer noopener">Hemsida</a></div>
                    <!-- /wp:button -->
                  </div>
                  <!-- /wp:buttons -->
                </div>
                <!-- /wp:column -->
              </div>
              <!-- /wp:columns -->
  
              <!-- wp:html -->
              <div class="custom-alert" style="display: none;">E-post kopierad! </div>
              <!-- /wp:html -->
            </div>
            <!-- /wp:group -->
          </div>
          <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->
      `;
  });

  return cityBlocks;
}

// Function to copy emails
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".copy-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default action

      // Get the rel attribute of the <a> tag inside the button
      const textToCopy = this.querySelector("a").getAttribute("rel");

      // Use the Clipboard API to copy the text
      navigator.clipboard
        .writeText(textToCopy)
        .then(function () {
          // Optionally, provide feedback to the user
          showCustomAlert("E-post kopierad!");
        })
        .catch(function (error) {
          console.error("Error copying text: ", error);
        });
    });
  });

  function showCustomAlert(message) {
    const alertBox = document.querySelector(".custom-alert");
    alertBox.textContent = message;
    alertBox.style.display = "block";
    alertBox.style.opacity = 1;

    setTimeout(function () {
      alertBox.style.opacity = 0;
      setTimeout(function () {
        alertBox.style.display = "none";
      }, 500);
    }, 2000);
  }
});

const organization = [
  {
    cityName: "Alingsås",
    url: "http://alingsas.aktivaseniorer.com",
    emailGeneral: "info@alingsas.aktivaseniorer.com",
  },
  {
    cityName: "Arboga",
    url: "http://arboga.aktivaseniorer.com",
    emailGeneral: "eva.billert@telia.com",
  },
  {
    cityName: "Borås",
    url: "http://aktivaseniorer-boras.se",
    emailGeneral: "fas@aktivaseniorer-boras.se",
  },
  {
    cityName: "Enköping",
    url: "http://enkoping.aktivaseniorer.com",
    emailGeneral: "fas.enkoping@outlook.com",
  },
  {
    cityName: "Eskilstuna",
    url: "http://eskilstuna.aktivaseniorer.com",
    emailGeneral: "rbengtsson46@gmail.com",
  },
  {
    cityName: "Falköping",
    url: "http://falkoping.aktivaseniorer.com",
    emailGeneral: "toguhed@gmail.com",
  },
  {
    cityName: "Falun",
    url: "http://falun.aktivaseniorer.com",
    emailGeneral: "goran33689@gmail.com",
  },
  {
    cityName: "Gislaved",
    url: "http://gislaved.aktivaseniorer.com",
    emailGeneral: "fas-gislaved@minaaktiviteter.se",
  },
  {
    cityName: "Visby",
    url: "https://gotland.aktivaseniorer.com/",
    emailGeneral: "fas-gotland-visby@minaaktiviteter.se",
  },
  {
    cityName: "Grästorp",
    url: "http://grastorp.aktivaseniorer.com",
    emailGeneral: "grastorp.aktivaseniorer@outlook.com",
  },
  {
    cityName: "Gävle",
    url: "https://gavle.aktivaseniorer.com/",
    emailGeneral: "aktivaseniorergefle@outlook.com",
  },
  {
    cityName: "Halmstad",
    url: "https://halmstad.aktivaseniorer.com/",
    emailGeneral: "info@halmstad.aktivaseniorer.com",
  },
  {
    cityName: "Jönköping",
    url: "http://jonkoping.aktivaseniorer.com",
    emailGeneral: "gunnel.torstensson@yahoo.se",
  },
  {
    cityName: "Kalmar",
    url: "http://kalmar.aktivaseniorer.com",
    emailGeneral: "lars.pirkko.berggren@telia.com",
  },
  {
    cityName: "Karlskrona",
    url: "https://karlskrona.aktivaseniorer.com/",
    emailGeneral: "fas-karlskrona@minaaktiviteter.se",
  },
  {
    cityName: "Kramfors",
    url: "http://kramfors.aktivaseniorer.com",
    emailGeneral: "affarskonsult@bertilwiklund.se",
  },
  {
    cityName: "Kungsbacka",
    url: "http://kungsbacka.aktivaseniorer.com",
    emailGeneral: "kbaas@telia.com",
  },
  {
    cityName: "Köping",
    url: "http://koping.aktivaseniorer.com",
    emailGeneral: "fas-koping@minaaktiviteter.se",
  },
  {
    cityName: "Linköping",
    url: "https://faslinkoping.se",
    emailGeneral: "info@faslinkoping.se",
  },
  {
    cityName: "Luleå",
    url: "https://lulea.aktivaseniorer.com/",
    emailGeneral: "gudmund.andersson@gmail.com",
  },
  {
    cityName: "Lysekil",
    url: "http://lysekil.aktivaseniorer.com",
    emailGeneral: "fas-lysekil@minaaktiviteter.se",
  },
  {
    cityName: "Malmö",
    url: "http://malmo.aktivaseniorer.com",
    emailGeneral: "info@malmo.aktivaseniorer.com",
  },
  {
    cityName: "Mariestad",
    url: "http://aktivaseniorer.n.nu",
    emailGeneral: "stegdahl@gmail.com",
  },
  {
    cityName: "Mjölby",
    url: "http://mjolby.aktivaseniorer.com",
    emailGeneral: "bo.marknadskonsult@gmail.com",
  },
  {
    cityName: "Motala",
    url: "http://motala.aktivaseniorer.com",
    emailGeneral: "johansson.annbritt@gmail.com",
  },
  {
    cityName: "Nora",
    url: "http://nora.aktivaseniorer.com",
    emailGeneral: "hasse@familjensandberg.eu",
  },
  {
    cityName: "Nyköping",
    url: "http://asnykoping.blogspot.com",
    emailGeneral: "margaretha.e.bengtsson@telia.com",
  },
  {
    cityName: "Grebbestad",
    url: "http://ranrike.aktivaseniorer.com",
    emailGeneral: "info@ranrike.aktivaseniorer.com",
  },
  {
    cityName: "Skellefteå",
    url: "http://skelleftea.aktivaseniorer.com",
    emailGeneral: "solveig.fuhrman@telia.com",
  },
  {
    cityName: "Skövde",
    url: "https://skovde.aktivaseniorer.com",
    emailGeneral: "skovdeas@gmail.com",
  },
  {
    cityName: "Stockholm",
    url: "https://stockholm.aktivaseniorer.com",
    emailGeneral: "aktiva.seniorer@medborgarskolanstockholm.se",
  },
  {
    cityName: "Strängnäs",
    url: "https://strangnas.aktivaseniorer.com/",
    emailGeneral: "aktivastr@gmail.com",
  },
  {
    cityName: "Sundsvall",
    url: "http://aktivasundsvall.net",
    emailGeneral: "epost@aktivasundsvall.net",
  },
  {
    cityName: "Trollhättan",
    url: "http://aktivaseniorertrollhattan.com",
    emailGeneral: "medlemsservice@aktivaseniorertrollhattan.com",
  },
  {
    cityName: "Umeå",
    url: "http://umea.aktivaseniorer.com",
    emailGeneral: "info@aktivasenioreriumea.se",
  },
  {
    cityName: "Uppsala",
    url: "https://uppsala.aktivaseniorer.com/",
    emailGeneral: "uppsala@aktivaseniorer.com",
  },
  {
    cityName: "Vänersborg",
    url: "https://vanersborg.aktivaseniorer.com",
    emailGeneral: "asvanersborg@gmail.com",
  },
  {
    cityName: "Värnamo",
    url: "http://varnamo.aktivaseniorer.com",
    emailGeneral: "varnamo@aktivaseniorer.com",
  },
  {
    cityName: "Västerås",
    url: "https://vasteras.aktivaseniorer.com/",
    emailGeneral: "vasteras@aktivaseniorer.com",
  },
  {
    cityName: "Växjö",
    url: "http://vaxjo.aktivaseniorer.com",
    emailGeneral: "vaxjo@aktivaseniorer.com",
  },
  {
    cityName: "Ystad",
    url: "http://ystad.aktivaseniorer.com",
    emailGeneral: "lmirveus@gmail.com",
  },
  {
    cityName: "Örebro",
    url: "https://orebro.aktivaseniorer.com/",
    emailGeneral: "orebro@aktivaseniorer.com",
  },
  {
    cityName: "Örnsköldsvik",
    url: "http://ovik.aktivaseniorer.com",
    emailGeneral: "monica.naslund@telia.com",
  },
];
