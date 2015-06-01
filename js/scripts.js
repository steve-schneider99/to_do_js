$(document).ready(function() {
  $("form#new-cities").submit(function(event) {
    event.preventDefault()
    var inputCity = $("input#new-city").val();
    var inputCountry = $("input#new-country").val();
    var inputTime = $("input#new-time").val();

    var newCity = {city: inputCity, country: inputCountry, visitTime: inputTime, details: []
    };
  $(".new-attribute").each(function() {
    var inputLandmark = $(this).find("input#landmarks").val();
    var inputNotes = $(this).find("input#notes").val();

    var newAttribute = {landmark: inputLandmark, notes: inputNotes};
    newCity.details.push(newAttribute);
    $("h2#show-list").show();
    console.log(newAttribute)
  });

  $("ul#city-list").append("<li><span class='city'>" + newCity.city + " " + newCity.country + " " + newCity.visitTime + "</span></li>" );

  $(".city").last().click(function() {
    $("#show-city").show();
    $("show-city h2").text(newCity.city + " " + newCity.country + " " + newCity.visitTime);
    $(".city_name").text(newCity.city);
    $(".country").text(newCity.country);
    $(".visitTime").text(newCity.visitTime);

    $("ul#attributes").text("");
    newCity.details.forEach(function(attribute) {
      $("ul#attributes").append("<li>Notes: " + attribute.notes + "</li> <li>Landmark: " + attribute.landmark + "</li>");
    });
  });
  $("input.new-city").val("");
  $("input.new-country").val("");
  $("input.new-time").val("");
  $("input.landmarks").val("");
  $("input.notes").val("");
  });
});

$(document).ready(function()  {
  $("#add-stuff").click(function() {
    $("#new-attributes").append('<div class="new-attribute">' + '<div class="form-group">' + '<label for="landmarks">Landmark</label>' + '<input type="text" class="form-control" id="landmarks">' + '</div>'+ '<div class="form-group">' + '<label for="notes">Notes</label>' + '<input type="text" class="form-control" id="notes">' + '</div>');
  });
});
