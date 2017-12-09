let clientId;
let registrationId;

ga(function(tracker) {
    clientId = tracker.get('clientId');
});

registrationId = Cookies.get('_rid');

/*  Subscription form values    */

let uValue = "776c09c36150b0e9b541ff145";
let idValue = "1b379339ba";
let actionValue = "https://cloud.us17.list-manage.com/subscribe/post";

let subscriptionForm = `
 <form class="col-md-5" id="form" action="${actionValue}" method="POST">
    <input type="hidden" name="u" value="${uValue}">
    <input type="hidden" name="id" value="${idValue}">
    <input id="ga" type="hidden" name="MERGE3" id="MERGE3"  value="${clientId}">
    <div class="form-group">
      <label for="MERGE0">Email Address <span class="req asterisk">*</span></label>
      <input class="form-control" type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">
    </div>
    <div class="form-group">
      <input class="form-control btn btn-primary" type="submit" class="formEmailButton" name="submit" value="Subscribe to list">
    </div>
  </form>
`;

/*  end form values */


if(registrationId == undefined){
    $('#form_container').append(subscriptionForm);
}else{
    $('#form_container').empty();
    $('#form_container').append('Ti sei già registrato');
}

$('#form').submit(function (e) {
    if($('#MERGE0').val() == ''){
        e.preventDefault();
        alert('Inserisci una email valida')
    }else{
        $('#ga').val(clientId);
        let userId = md5($('#MERGE0').val());
        Cookies.set('_rid', userId);
        ga('set', 'userId', userId);
    }
})

