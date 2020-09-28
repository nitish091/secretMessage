function fun(theChosenOne){
    theChosenOne.innerHTML = "<h1>Bugger Off!!</h1>"
}
let theChosenOne = document.querySelector('.container');
console.log(theChosenOne.innerHTML);
theChosenOne.addEventListener('click', fun(theChosenOne));
theChosenOne.addEventListener('mouseover', fun(theChosenOne));