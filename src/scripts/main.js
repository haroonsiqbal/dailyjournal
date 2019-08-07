import journalFetch from "./data.js"
import factoryJournal from "./entriesDOM.js"
import makeJournalHTML from "./entryComponent.js"

journalFetch().then(entries => {
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
    const newPost = createJSON(dateInput.value, conceptsInput.value, entryInput.value, moodInput.value);
    console.log(newPost);
    
    fetch("http://localhost:3000/entries", { 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
    })

    journalFetch().then(entries => {
        containerJournal.innerHTML = "" 
        for (const journal of entries) {
            const converted = makeJournalHTML(journal)
            factoryJournal(converted);
        }
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

const containerJournal = document.querySelector(".entryLog");

const frustratedButton = document.querySelector("#frustratedButton")
frustratedButton.addEventListener("click", event => {
    const mood = event.target.value
    console.log(mood)
    journalFetch().then(entries => {
        const filtered = entries.filter(entry => entry.moodForTheDay === mood)
        console.log(filtered);
    containerJournal.innerHTML = ""   
    for (const journal of filtered) {
        const converted = makeJournalHTML(journal)
        factoryJournal(converted);
        }
    })
    
    
})

const happyButton = document.querySelector("#happyButton")
happyButton.addEventListener("click", event => {
    const mood = event.target.value
    console.log(mood)
    journalFetch().then(entries => {
        const filtered = entries.filter(entry => entry.moodForTheDay === mood)
        console.log(filtered);
        containerJournal.innerHTML = ""   
        for (const journal of filtered) {
            const converted = makeJournalHTML(journal)
            factoryJournal(converted);
            }
        })
})

const excitedButton = document.querySelector("#excitedButton")
excitedButton.addEventListener("click", event => {
    const mood = event.target.value
    console.log(mood)
    journalFetch().then(entries => {
        const filtered = entries.filter(entry => entry.moodForTheDay === mood)
        console.log(filtered);
        containerJournal.innerHTML = ""   
    for (const journal of filtered) {
        const converted = makeJournalHTML(journal)
        factoryJournal(converted);
        }
        })
})

const anxiousButton = document.querySelector("#anxiousButton")
anxiousButton.addEventListener("click", event => {
    const mood = event.target.value
    console.log(mood)
    journalFetch().then(entries => {
        const filtered = entries.filter(entry => entry.moodForTheDay === mood)
        console.log(filtered);
        containerJournal.innerHTML = ""   
        for (const journal of filtered) {
            const converted = makeJournalHTML(journal)
            factoryJournal(converted);
            }    
    })
})

const seeAllButton = document.querySelector("#seeAllButton")
seeAllButton.addEventListener("click", () => {
    journalFetch().then(entries => {
        containerJournal.innerHTML = "" 
        for (const journal of entries) {
            const converted = makeJournalHTML(journal)
            factoryJournal(converted);
        }
        })
})

containerJournal.addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteButton")) {
        const deleteID = event.target.id.split("--")[1]
        deleteRecipe(deleteID)
       
            }                                                                        
    journalFetch().then(entries => {
        containerJournal.innerHTML = "" 
        for (const journal of entries) {
            const converted = makeJournalHTML(journal)
            factoryJournal(converted);
        }
        })

})

const deleteRecipe = (deleteID) => {
    return fetch(`http://localhost:3000/entries/${deleteID}`,
    {
        "method": "DELETE"
    }
    ) 
    .then(response => response.json())
}