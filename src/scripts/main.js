journalFetch().then(entries => {
    // What should happen when we finally have the array?
for (const journal of entries) {
    const converted = makeJournalHTML(journal)
    factoryJournal(converted);
}
})

const dateInput = document.querySelector(".dateInput")
const conceptsInput = document.querySelector(".conceptsInput")
const entryInput = document.querySelector(".entryInput")
const moodInput = document.querySelector(".moodInput")

const buttonLocation = document.querySelector(".button")

buttonLocation.addEventListener("click", function() {
    newPost = createJSON(dateInput.value, conceptsInput.value, entryInput.value, moodInput.value);
    console.log(newPost);
    
    fetch("http://localhost:3000/entries", { 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
    })
})


const createJSON = (date, concepts, entry, mood) => {
    return {
        dateOfEntry: date,
        conceptsCovered: concepts,
        journalEntry: entry,
        moodForTheDay: mood
      }
      
}


