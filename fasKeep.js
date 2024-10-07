<div class="custom-alert" style="display: none;">E-post kopierad!</div>
<script>
document.addEventListener('DOMContentLoaded', function () {
 // alla föreningar array

const organizations = [
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
    cityName: "Mjölby (vilande)",
    url: "",
    emailGeneral: "",
  },
  {
    cityName: "Motala (vilande)",
    url: "",
    emailGeneral: "",
  },
  {
    cityName: "Nora",
    url: "http://nora.aktivaseniorer.com",
    emailGeneral: "hasse@familjensandberg.eu",
  },
  {
    cityName: "Nyköping",
    url: "https://ny-nykoping.aktivaseniorer.com/",
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
  }
];

   // Function to generate city blocks for organizations
 function generateCityBlocks(organizations) {
  let aToLBlocks = '<h2 style="margin-bottom: 20px;">A - L</h2>';  // Add A - L heading with margin for space
  let mToOBlocks = '<h2 style="margin-bottom: 20px;">M - Ö</h2>';  // Add M - Ö heading with margin for space

  // Sort the organizations alphabetically by cityName
  organizations.sort((a, b) => a.cityName.localeCompare(b.cityName));

  // Function to check if cityName starts with A-L or M-Ö
  function isAToL(cityName) {
    const firstChar = cityName[0].toUpperCase();
    return firstChar >= 'A' && firstChar <= 'L';
  }

  organizations.forEach(org => {
     // Conditionally create buttons based on whether the values are empty
  const emailButton = org.emailGeneral
  ? `<div class="wp-block-button copy-button cwHittaBtn">
       <a class="wp-block-button__link wp-element-button" 
          style="padding-top:var(--wp--preset--spacing--20);padding-right:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)" 
          rel="${org.emailGeneral}">
          Kopiera e-post
       </a>
     </div>`
  : ''; // Empty string if no email

const homepageButton = org.url
  ? `<div class="wp-block-button cwHittaBtn">
       <a class="wp-block-button__link wp-element-button" 
          href="${org.url}" 
          style="padding-top:var(--wp--preset--spacing--20);padding-right:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)" 
          target="_blank" 
          rel="noreferrer noopener">
          Hemsida
       </a>
     </div>`
  : ''; // Empty string if no URL

const cityBlock = `
  <div class="wp-block-columns alignwide list-wrapper-main" style="padding-top:0;padding-bottom:0">
    <div class="wp-block-column" style="flex-basis:100%">
      <div class="wp-block-group has-ast-global-color-0-background-color has-background" style="margin-top:0px;margin-bottom:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"></div>
      <div class="wp-block-group has-ast-global-color-0-background-color has-background" style="margin-top:0px;margin-bottom:20px;padding-top:8px;padding-right:12px;padding-bottom:8px;padding-left:12px">
        <h4 class="wp-block-heading has-ast-global-color-4-color has-text-color has-link-color" style="margin-top:0px;margin-bottom:0px;padding-top:0px;padding-bottom:8px"><strong>${org.cityName}</strong></h4>
        <div class="wp-block-columns" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
          <div class="wp-block-column" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">
            <!-- Buttons container with dynamically added buttons -->
            <div class="wp-block-buttons alignfull" style="margin-top:0;margin-bottom:0; display: flex; flex-wrap: wrap; justify-content: flex-start; gap: 10px;">
              ${emailButton}
              ${homepageButton}
            </div>
            <!-- End of buttons container -->
          </div>
          <div class="custom-alert" style="display: none;">E-post kopierad!</div>
        </div>
      </div>
    </div>
  </div>
`;

if (isAToL(org.cityName)) {
    aToLBlocks += cityBlock;
  } else {
    mToOBlocks += cityBlock;
  }
  });

  return { aToLBlocks, mToOBlocks };
}

// Generate city blocks
const { aToLBlocks, mToOBlocks } = generateCityBlocks(organizations);

// Inject into the separate elements
const aToLElement = document.getElementsByClassName('a-to-l')[0];
const mToOElement = document.getElementsByClassName('m-to-o')[0];

if (aToLElement) {
  aToLElement.innerHTML = aToLBlocks;
}

if (mToOElement) {
  mToOElement.innerHTML = mToOBlocks;
}


  var buttons = document.querySelectorAll('.copy-button');

        buttons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent the default action

                // Get the rel attribute of the <a> tag inside the button
                const link = this.querySelector('a');
                const textToCopy = link ? link.getAttribute('rel') : null;

                // Ensure there is a rel attribute to copy
                if (textToCopy) {
                    // Use the Clipboard API to copy the text
                    navigator.clipboard.writeText(textToCopy).then(function() {
                        // Show the custom alert relative to the clicked button
                        const customAlert = button.closest('.wp-block-group').querySelector('.custom-alert');
                        showCustomAlert(customAlert, 'E-post kopierad!');
                    }).catch(function(error) {
                        console.error('Error copying text: ', error);
                    });
                } else {
                    console.error('No email found in rel attribute');
                }
            });
        });

        function showCustomAlert(alertBox, message) {
            if (alertBox) {
                alertBox.textContent = message;
                alertBox.style.display = 'block';
                alertBox.style.opacity = 1;

                setTimeout(function () {
                    alertBox.style.opacity = 0;
                    setTimeout(function () {
                        alertBox.style.display = 'none';
                    }, 500);
                }, 2000);
            }
        }
 });
</script>