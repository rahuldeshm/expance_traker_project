function error(){
    var li = document.createElement("p");
    li.textContent="Error: Please Fill All the field"
    div.appendChild(li)
    setTimeout(() => {
        div.removeChild(li)
    }, 3000);
}
function submitform(event){
    event.preventDefault();
    if(email.value==''||nname.value==""||phone==""){
        error()
    }else{
        var myObj = {
            "Email":email.value,
            "nname": nname.value,
            "tforcall": tforcall.value,
            "phone": phone.value
        }
        // localStorage.setItem(email.value,JSON.stringify(myObj));
        axios.post("https://crudcrud.com/api/1f49f0664b6d48d681bed3a74f227180/appointdata",myObj)
            .then((response)=>{
                console.log(response)
            })
            .catch((err)=>{
                console.log(err)
            })
        var ebtn= document.createElement("button");
        ebtn.className="ebtn";
        ebtn.innerText="edit"

        var dbtn = document.createElement("button")
        dbtn.className="dbtn";
        dbtn.innerText="delete"

        var ul = document.createElement("div");
        var items = document.getElementById("items")
        var bd = items.parentElement
        ul.innerHTML = "Email : " + email.value +"<br>"+"Name: "+nname.value+"<br>"+"Time for call: "+ tforcall.value +"<br>"+"Phone : "+ phone.value+"<br>"
        ul.appendChild(ebtn);
        ul.appendChild(dbtn);
        ul.className="items"
        bd.appendChild(ul);
        email.value=""
        nname.value=""
        tforcall.value=""
        phone.value=""
        dbtn.onclick=() =>{
            localStorage.removeItem(myObj.Email)
            bd.removeChild(ul)
        }
        //adding functionality to editbutton
        ebtn.onclick=() =>{
            email.value=myObj.Email
            nname.value=myObj.nname
            tforcall.value=myObj.tforcall
            phone.value=myObj.phone
            // document.getElementById("amount").value=myObj.Expanceamount;
            // document.getElementById("discription").value=myObj.Expancediscription;
            // document.getElementById("categery").value=myObj.Categary;
            // localStorage.removeItem(myObj.Expanceamount)
            bd.removeChild(ul)
        }
    }
    
}

var div = document.getElementById("err")
var form = document.getElementById("my-form");
var btn = document.getElementById("button")
var email = document.getElementById('memail')
var nname = document.getElementById('name')
var tforcall = document.getElementById('tforcall')
var phone = document.getElementById('phone')
// console.log(btn)
btn.addEventListener("click",submitform)


//COLLECTING DATA FROM LOCALSTORAGE//

window.onload = function(){
    for (var i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        var valu = JSON.parse(localStorage.getItem(key));
        // console.log("Key:", key, "Value:", valu);
        // console.log(valu[Email])
        var ebtn= document.createElement("button");
        ebtn.className="ebtn";
        ebtn.innerText="edit"

        var dbtn = document.createElement("button")
        dbtn.className="dbtn";
        dbtn.innerText="delete"

        var ul = document.createElement("div");
        var items = document.getElementById("items")
        var bd = items.parentElement

        ul.innerHTML = "Email : " + valu.Email +"<br>"+"Name: "+valu.nname+"<br>"+"Time for call: "+ valu.tforcall +"<br>"+"Phone : "+ valu.phone+"<br>"
        ul.appendChild(ebtn);
        ul.appendChild(dbtn);
        ul.className="items"
        bd.appendChild(ul);
        dbtn.onclick=() =>{
            localStorage.removeItem(valu.Email)
            bd.removeChild(ul)
        }
        //adding functionality to editbutton
        ebtn.onclick=() =>{
            email.value=valu.Email
            nname.value=valu.nname
            tforcall.value=valu.tforcall
            phone.value=valu.phone
            // document.getElementById("amount").value=myObj.Expanceamount;
            // document.getElementById("discription").value=myObj.Expancediscription;
            // document.getElementById("categery").value=myObj.Categary;
            // localStorage.removeItem(myObj.Expanceamount)
            bd.removeChild(ul)
        }
      }
}
