function addNewWEField() {
   // console.log("Add new field");
   let newNode=document.createElement('textarea')
   newNode.classList.add('form-control')
   newNode.classList.add('weField')
   newNode.classList.add('mt-2')
   newNode.setAttribute('rows',3)  // rows are the attributes
    newNode.setAttribute('placeholder' ,'Enter here');
   let weOb=document.getElementById("we");  //Add new node in we but before weaddbutton
   let weAddButtonOb=document.getElementById("weAddButton"); //because we need to add our new node before this weAddButton.

   
   weOb.insertBefore(newNode ,weAddButtonOb);
}

function addNewAQField() {
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder', 'Enter here');
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode ,aqAddButtonOb);
}

// It will take values from our form and set values to our template

function generateCV() {
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    
    //direct
    document.getElementById('nameT2').innerHTML=nameField;

// conatct
    document.getElementById('contactT').innerHTML=document.getElementById(
    "contactField"
    ).value;

    document.getElementById('addressT').innerHTML=document.getElementById(
    "addressField"
    ).value;

    document.getElementById('instaT').innerHTML=document.getElementById(
    "instaField"
    ).value; 
    
    document.getElementById('linkedT').innerHTML=document.getElementById(
    "linkedField"
    ).value;

    //objective

    document.getElementById('objectiveT').innerHTML=document.getElementById(
        "objectiveField"
        ).value;

    // we  loops lagenge yaha
    let wes = document.getElementsByClassName("weField");
    let str = " ";

    for(let e of wes)  //scoped variable  (loop ke andar use hoga)
    {
        str=str+`<li> ${e.value} </li>`;  //saare we as alias aa gaye and add to weT.
    }

    document.getElementById("weT").innerHTML = str;

    // academic qualification

    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";

    for(let e of aqs)
    {
        str1+=`<li> ${e.value} </li>`;  //saare we as alias aa gaye and add to weT.
    }

    document.getElementById("aqT").innerHTML = str1;

    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'


} //cv form hide and cv template show

//printing CV
function printCV() {
    window.print();  //jo window pe hai print ho jaayega
}
