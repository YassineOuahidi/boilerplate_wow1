let clientId;

ga(function(tracker) {
  clientId = tracker.get('clientId');
});

$('#form').submit(function (e) {
    $('#ga').val(clientId);
    if($('#MERGE0').val()==''){
        e.preventDefault();
        alert('Inserisci una email')
    }
})

