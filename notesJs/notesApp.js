
function addingEventListeners(identities){
    let division = document.querySelector(`#${identities}`);
    division.addEventListener('mouseenter', function (e){
        division.style.backgroundColor = 'rgb(6, 109, 194)';
        division.style.color = 'black';
    } );
    division.addEventListener('mouseleave', function(e){
        division.style.backgroundColor = 'black';
        division.style.color = 'white';
    })
};
let addNote = document.getElementById('btn2');
addNote.addEventListener('click', function(e){
    let notes = localStorage.getItem('userInput');
    if(notes==null || notes==undefined){
        notes = []
    } 
    else{
        notes = JSON.parse(notes);
    }
    let textArea = document.getElementById('notes');
    notes.push(textArea.value);
    localStorage.setItem('userInput', JSON.stringify(notes))
    displayNotes();
})

function displayNotes(){
    let allNotes = localStorage.getItem('userInput'); 
    if(allNotes==null || allNotes==undefined){
        allNotes = []
    } 
    else{
        allNotes = JSON.parse(allNotes);
    }
    let div4children = document.getElementById('div4children');
    let html ="";
    allNotes.forEach(function(elem, index){
        html+= `
        <div class="notesClass" id="index${index+1}">${elem}</div>
        <button class="notesButtonClass" id="notesBtn${index}">Remove</button>
        `
        div4children.innerHTML=html;
    })
};

addingEventListeners('childrendiv1j');
displayNotes();
