var settings = {
  "url": "https://nepalcorona.info/api/v1/data/nepal",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
};

$.ajax(settings).done(function (response) {
  	var a=response.tested_positive;
    var b=response.recovered;
    var c= a-b;
    $('#active').append("<p>" + c+"</p>");
    $('#recovered').append("<p>" + b+"</p>");
    $('#deaths').append(" <p> "+response.deaths+"</p>");

    $('#positive').append("<p>"+response.tested_positive+"</p>");
    $('#negative').append("<p>"+response.tested_negative+"</p>");
    $('#total').append("<p>"+response.tested_total+"</p>");

    $('#isolation').append("<p>"+response.in_isolation+"</p>");
    $('#quarantined').append("<p>"+response.quarantined+"</p>");
   
});
