// Code Snippet

function EmailValidation(enteredEmail)

{

var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

if(enteredEmail.value.match(enteredEmail))

{

alert('Yeah! a valid email!');

document.form1.text1.focus();

return true;

}

Else

{

alert('Sorry! an invalid email!');

document.form1.text1.focus();

return false;

}

}
