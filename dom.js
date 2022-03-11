let div = document.createElement('div')


//we are using innerHTML
div.innerHTML = "<p> Creating paragraph using Javascript DOM </p>";

div.id = "content"
div.className = "note"





let h2 = document.createElement('h2')

h2.textContent = "This is an header 2 created using Javascript DOM"

div.appendChild(h2)



document.body.appendChild(div)

let ul = document.createElement('ul')

ul.id = "menu"




function createItem(name) {
    let li = document.createElement('li')
    li.textContent = name
    return li;
}

ul.appendChild(createItem("Home"))
ul.appendChild(createItem("About Us"))
ul.appendChild(createItem("Products"))
ul.appendChild(createItem("Services"))
ul.appendChild(createItem("Contact Us"))




document.body.appendChild(ul)

//difference between using textContent,innerText,innerHTML
let ideaNote = document.getElementById('idea')


//console.log(ideaNote.textContent)
//console.log(ideaNote.innerText)

//this outputs the value pf the html content into the console
console.log(ideaNote.innerHTML)


//this set a new value for the HTML content

setTimeout(()=>{
    ideaNote.innerHTML = "<p>This is a new idea content</p>"
}, 5000)





console.log(ideaNote.innerHTML)



////Twitter @TosinOlugbenga