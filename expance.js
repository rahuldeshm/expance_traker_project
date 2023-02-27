// console.log("rahul")
var form = document.getElementById("addForm");
var expancelist = document.getElementById("expances");
form.addEventListener("submit",addExpance);
function addExpance(e){
    e.preventDefault();
    // console.log("inside submit success");
    var newamount = document.getElementById("amount").value;
    var newdiscription = document.getElementById("discription").value;
    var newcategery= document.getElementById("categery").value;
    // console.log(newcategery)
    // console.log(newamount)
    // console.log(newdiscription)
    var li = document.createElement("li");
    const deletebtn = document.createElement("button");
    const editbtn = document.createElement("button");
    deletebtn.className="dbtn"
    deletebtn.innerHTML="Delete Expance";
    editbtn.className="ebtn"
    editbtn.innerHTML="Edit Expance";
    li.innerHTML = " Expance amount : "+newamount + "<br>" +" Discription : " +newdiscription + "<br>" + "Categary : " + newcategery+ "<br>";
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    expancelist.appendChild(li);

    //added element to document 
    //adding data to local storage
    let myObj = {
        "Expanceamount":newamount,
        "Expanceamount": newdiscription,
        "Categary":newcategery
    }
    let myObj_sreialized = JSON.stringify(myObj);
    console.log(myObj_sreialized)
    localStorage.setItem(newamount,myObj_sreialized)
    document.getElementById("amount").value="";
    document.getElementById("discription").value="";
    document.getElementById("categery").value="";
    //adding functionality to deletebutton
    deletebtn.onclick=() =>{
        localStorage.removeItem(myObj.Expanceamount)
        expancelist.removeChild(li)
    }
    //adding functionality to editbutton
    editbtn.onclick=() =>{
        localStorage.removeItem(myObj.Expanceamount)
        document.getElementById("amount").value=myObj.Expanceamount;
        document.getElementById("discription").value=myObj.Expanceamount;
        document.getElementById("categery").value=myObj.Categary;
        expancelist.removeChild(li)
    }
}
