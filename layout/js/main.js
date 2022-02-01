let sess = sessionStorage.getItem("NameUser");
console.log(sessionStorage.getItem("NameUser"));
const sessionUser = document.getElementById("sessionUser");
const loginHeader = document.getElementById("login-header");
const navbar = document.getElementById("navbarDropdown");

if(sess){
    navbar.innerText = sess;
    loginHeader.style.display = "none";
}else{
    sessionUser.style.display="none";
    loginHeader.style.display = "block";
}





// function showAll(){
    
//     col.forEach((index) =>{
//         let all = sel.options[sel.selectedIndex].value;
//         if(all.value == "all"){
//             col[index].classList.remove("hide");  
//         }
//     })
// }



