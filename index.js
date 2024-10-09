const DOMSelectors = {
    header: document.querySelector("h1"),
    items:document.querySelector("li"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form: document.querySelector(".form"),
    
};

DOMSelectors.button.addEventListener("click", function(event){
    console.log(event.target.parentElement);
    event.target.parentElement.style.backgroundColor = "red";
});

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(document.querySelector("input").value);
});

const item = document.querySelector("li");

const items = Array.form(item);

items.forEach((el) => (el.style.color = "red"));

const buttons = document.querySelectorAll("button")
buttons.forEach((btn)=>
    btn.addEventListener("click", function(event){;
        console.log(evnet.target.textContent)
    }));