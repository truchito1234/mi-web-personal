var select = '';
for (i = 0; i <= 100; i++) {
    select += '<option val=' + i + '>' + i + '</option>';
}
$('#grupo-edad').html(select);