/*

   Author:   
   Date:     

   Filename: report.js



   Functions List:

   initPage()
      Initializes the contents of the Web page

   testLength()
      Tests a field for its length

   testPattern()
      Tests a field for its pattern

   validateForm
      Validates a Web form

   calcRow
      Calculates the costs within one row of the travel report

   calcTotal
      Calculates the total cost of the travel

   upDate
      Updates the total travel cost
*/
window.onload = function ()
{
    initPage();
};

function initPage()
{
    var theForm = document.getElementsByClassName("expenseEntry");
    var dataFields = [];

    for(var i = 0; i < theForm.length; i++)
    {
        dataFields[i] = theForm[i];
        dataFields[i].addEventListener("blur", update);
    }

    document.forms[0].onsubmit = validateForm;
}

function testLength(field)
{
    if(field.value.length === 0)
    {
        field.style.backgroundColor = "yellow";
        return false;
    }
    else
    {
        field.style.backgroundColor = "white";
        return true;
    }
}

function testPattern(field, regX)
{
    if(!regX.test(field.value))
    {
        field.style.backgroundColor = "yellow";
        field.style.color = "red";
        return false;
    }
    else
    {
        field.style.backgroundColor = "white";
        field.style.color = "black";
        return true;
    }
}

function validateForm()
{
    var isValid = true;

    if (testLength(document.forms[0].lname) === false)
        isValid = false;
    if (testLength(document.forms[0].fname) === false)
        isValid = false;
    if (testLength(document.forms[0].address) ===false)
        isValid = false;
    if (testLength(document.forms[0].summary) ===false)
        isValid = false;
    if(testPattern(document.forms[0].account, /^ACT[0-9]{6}$/) === false)
        isValid = false;
    if(testPattern(document.forms[0].department, /^DEPT[0-9]{3}$/) === false)
        isValid = false;
    if(testPattern(document.forms[0].project, /^PROJ[0-9]{5}$/) === false)
        isValid = false;
    if(testPattern(document.forms[0].ssn, /^[0-9]{3}-[0-9]{2}-[0-9]{4}$|[0-9]{9}$/) === false)
        isValid = false;
    if (isValid === false)
        alert("please fill out required fields with proper format");
    return isValid;
}

function calcRow(row)
{
    var travel = parseFloat(document.forms[0].elements["travel" + row].value);
    var lodge = parseFloat(document.forms[0].elements["lodge" + row].value);
    var meal = parseFloat(document.forms[0].elements["meal" + row].value);

    return(travel+ lodge + meal)
}

function calcTotal()
{
    var totalExp = 0;
    for (var i = 1; i <= 4; i++)
    {
        totalExp += calcRow(i);
    }

    return totalExp;
}

function update()
{
    var numRegExp = /^\d*(\.\d{0,2})?$/;
    if (numRegExp.test(this.value))
    {
        this.value = parseFloat(this.value).toFixed(2)

        for(var i = 1; i <=4; i++)
        {
            document.forms[0].elements["sub" +i].value = calcRow(i).toFixed(2);
        }

        document.forms[0].elements["total"].value = calcTotal().toFixed(2);
    }
    else
    {
        alert("invalid currency");
        this.value = 0.00;
        this.focus();
    }

}