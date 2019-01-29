/* Modal for edit purpose, get values from datatable and populate the form */
function editModalEvent(eventID) {
    var row =$("#table-event-row-"+eventID+" td");
    var data = [];
    row.toArray().forEach(function(element) {
        data.push($(element).text());
    });

    $("#edit-event-name").val(data[0]);
    $("#edit-event-description").val(data[1]);
    $("#edit-event-image").val(data[2]);
    $("#edit-event-date").val(data[3]);
    $("#edit-event-price").val(data[4]);

    $('#editEvent-function').attr("onclick","editEvent("+eventID+")");
}
function editModalGoodie(goodieID) {
    var row =$("#table-goodie-row-"+goodieID+" td");
    var data = [];
    row.toArray().forEach(function(element) {
        data.push($(element).text());
    });
    console.log(data);

    $("#edit-goodie-name").val(data[0]);
    $("#edit-goodie-description").val(data[2]);
    $("#edit-goodie-image").val(data[3]);
    $("#edit-goodie-stock").val(data[4]);
    $("#edit-goodie-price").val(data[1]);

    $('#editGoodie-function').attr("onclick","editGoodie("+goodieID+")");
}

function editModalSuggestion(suggestionID) {
    var row =$("#table-suggestion-row-"+suggestionID+" td");
    var data = [];
    row.toArray().forEach(function(element) {
        data.push($(element).text());
    });
    $("#edit-suggestion-name").val(data[0]);
    $("#edit-suggestion-description").val(data[1]);

    $('#editSuggestion-function').attr("onclick","editSuggestion("+suggestionID+")");
}

function editModalComment(commentID) {
    var row =$("#table-comment-row-"+commentID+" td");
    var data = [];
    row.toArray().forEach(function(element) {
        data.push($(element).text());
    });
    $("#edit-comment-content").val(data[0]);

    $('#editComment-function').attr("onclick","editComment("+parseInt(commentID.charAt(0))+","+parseInt(commentID.charAt(1))+")");
}

function acceptSuggestion(suggestionID) {
    var row =$("#table-suggestion-row-"+suggestionID+" td");
    var data = [];
    row.toArray().forEach(function(element) {
        data.push($(element).text());
    });

    $("#edit-event-name").val(data[0]);
    $("#edit-event-description").val(data[1]);
    $('#editEvent-function').attr("onclick","editEvent("+suggestionID+")");
}
/* Send UPDATE to database */
function editComment(id_User, id_Picture) {
    var formData = serializeForm("#edit-comment");
    formData.id_User = id_User;
    formData.id_Picture = id_Picture;
    formData._token = CSRF_TOKEN;

    $('#editComment').modal('toggle');
    sendPostAjax('/editComment', JSON.stringify(formData), null,'JSON', 'POST');
}

function editEvent(eventID) {
    var formData = serializeForm("#edit-event");
    formData.id_approbation = 2;
    var verification = [
        ['name','Pas de caractères spéciaux.','^[_A-z0-9]*((-|\\s)*[_A-z0-9])*$'],
        ['description','required',''],
        ['date','required',''],
        ['image','Url invalide','https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'],
        ['price',' Le prix doit être un nombre.','[+-]?([0-9]*[.])?[0-9]+']
    ];

    if(!fieldsVerification('#edit-event', verification)) {
        $('#editEvent').modal('toggle');
        apiAJAXSend('/events/'+eventID, formData, function() {
            location.reload();
        },'PUT');
    }
}
function editGoodie(goodieID) {
    var formData = serializeForm("#edit-goodie");

    var verification = [
        ['name','Pas de caractères spéciaux.','^[_A-z0-9]*((-|\\s)*[_A-z0-9])*$'],
        ['description','required',''],
        ['image','Url invalide','https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'],
        ['price','Le prix doit être un nombre.','[+-]?([0-9]*[.])?[0-9]+'],
        ['stock','Le stock doit être un nombre.','[+-]?([0-9]*[.])?[0-9]+']
    ];

    if(!fieldsVerification('#edit-goodie', verification)) {
        $('#editGoodie').modal('toggle');
        apiAJAXSend('/goodies/'+goodieID, formData, function() {
            location.reload();
        },'PUT');
    }
}
function editSuggestion(suggestionID) {
    var formData = serializeForm("#edit-suggestion");
    formData.id_approbation = 1;
    var verification = [
        ['name','Pas de caractères spéciaux.','^[_A-z0-9]*((-|\\s)*[_A-z0-9])*$'],
        ['description','required','']
    ];

    if(!fieldsVerification('#edit-suggestion', verification)) {
        $('#editSuggestion').modal('toggle');
        apiAJAXSend('/events/'+suggestionID, formData, function() {
            location.reload();
        },'PUT');
    }
}