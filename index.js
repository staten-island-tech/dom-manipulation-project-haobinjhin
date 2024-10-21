/* const DOMSelectors = {
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
    })); */





/* function backgroundAndText(background, text){
    background.style.backgroundColor = "red";
    text.textContent = "This is now a big red box";
    text.style.fontSize = "40px" ;
}
DOMSelectors.button.addEventListener("click", function(){
    backgroundAndText(DOMSelectors.box, DOMSelectors.text);
})
 
function changeLi(){
    let pointIndex = 1;
    DOMSelectors.points.forEach((point) => {
        point.addEventListener("click", function(){
            point.textContent = `Hello I am point ${pointIndex}`;
            pointIndex++;
        })
    })
}

changeLi() */


/* const simga = "sigma";
DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>I am so ${simga}</h1>`) */


 const DOMSelectors={
    create: document.getElementById("makebutton"),
    box: document.getElementById("beigebox"),
    inputword: document.querySelector("#input-word"),
    inputpic: document.querySelector("#input-pic"),
};

<<<<<<< Updated upstream
function makeandremove(){
    DOMSelectors.create.addEventListener("click", function(){
    let Word = DOMSelectors.inputword.value;

    let Pic = DOMSelectors.inputpic.value;

    pushcard(Word, Pic);
    
    clearinput();
=======
function removestuff(){
    const btns = document.querySelectorAll.remove;
    btns.forEach(btn => {
        DOMSelectors.btn.addEventListener("click", function(){
            this.parentElement.remove();
        })
    });

    /* DOMSelectors.btn.addEventListener("click", function(){
            btn.forEach(button => {
                button
            });
        DOMSelectors.querySelector("stuffcreated").remove() */

};  
>>>>>>> Stashed changes

    remove();
   
}); 
}

function pushcard(word, pic){
    DOMSelectors.box.insertAdjacentHTML("beforeend", 
        `<div class = "newDiv"> 
        <h1>${word}</h1>
        <img src="${pic}" alt="${word}" class = "image">
        <br>
        <button type="button" class = "removebtn">remove</button>
    </div>`)

}

function clearinput(){
    DOMSelectors.inputword.value = "";

    DOMSelectors.inputpic.value = "";
}

function remove(){
    const newdiv = DOMSelectors.box.lastElementChild;
    const removebutton = newdiv.querySelector(".removebtn");
    removebutton.addEventListener("click", function(){
        newdiv.remove()
    })
}

makeandremove()