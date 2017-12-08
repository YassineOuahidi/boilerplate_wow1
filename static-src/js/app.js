let clientId;

ga(function(tracker) {
  clientId = tracker.get('clientId');
});

$('#form').submit(function (e) {
    $('#ga').val(clientId);
})

