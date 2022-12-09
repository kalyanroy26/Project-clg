const signupbtn = document.querySelector(".signupbtn");
const loginbtn = document.querySelector(".loginbtn");
const movebtn = document.querySelector(".movebtn");
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");

loginbtn.addEventListener("click",()=>{
    movebtn.classList.add("slidebtn");
    login.classList.add("loginform");
    signup.classList.remove("signupform");
    movebtn.innerHTML = "Login";
})

signupbtn.addEventListener("click",()=>{
    movebtn.classList.remove("slidebtn");
    signup.classList.add("signupform");
    login.classList.remove("loginform");
    movebtn.innerHTML = "Signup";

})
