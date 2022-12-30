function validateForm() {
    var forms=[];
    forms[0]  = document.forms["myForm"]["fname"].value;
    forms[1]  = document.forms["myForm"]["lname"].value;
    forms[2]  = document.forms["myForm"]["email"].value;
    forms[3]  = document.forms["myForm"]["reason-for-contacting"].value;
    var count=0;
    for(i=0;i<forms.length;i++)
    {
      if (forms[i] == "")
       {
        return false;
      }
      else
      {
        count=count+1;
        if(count>=4)
        {
          alert("success");
          return true;
        }
      }
    }
  }