function validateForm() {
    var x = document.forms["myForm"]["user_mail"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
}
$( "form" ).submit(function( event ) {
  if ( $( "input:first" ).val() === "correct" ) {
    $( "span" ).text( "Validated..." ).show();
    return;
  }
