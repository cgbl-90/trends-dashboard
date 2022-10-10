/* Function */
function updateSelection(event) {
  event.preventDefault();
  var textSource = source.options[source.selectedIndex].text;
  var textCountry = country.options[country.selectedIndex].text;
  console.log("textSource: ", textSource, "textCountry :", textCountry);
}

/* Listen */
var btnSelect = document.getElementById("btnSelect");
var source = document.getElementById("media-list");
var country = document.getElementById("countries-list");
btnSelect.addEventListener("click", updateSelection);
