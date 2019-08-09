import journalFetch from "./data.js"
import factoryJournal from "./entriesDOM.js"
import makeJournalHTML from "./entryComponent.js"

//RENDER AN ENTRY

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

//SUBMIT NEW ENTRY

buttonLocation.addEventListener("click", function() {
    const hiddenEditId = document.querySelector("#editID")
    
    if (hiddenEditId.value != "") {
        const updatedObject = createJSON(dateInput.value, conceptsInput.value, entryInput.value, moodInput.value);
        editEntry(hiddenEditId.value, updatedObject)
        
    } else {

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

}
})


const createJSON = (date, concepts, entry, mood) => {
    return {
        dateOfEntry: date,
        conceptsCovered: concepts,
        journalEntry: entry,
        moodForTheDay: mood
      }
      
}

//FILTER AN ENTRY

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

//DELETE AN ENTRY

containerJournal.addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteButton")) {
        const deleteID = event.target.id.split("--")[1]
        deleteEntry(deleteID)
       
            }                                                                        
    journalFetch().then(entries => {
        containerJournal.innerHTML = "" 
        for (const journal of entries) {
            const converted = makeJournalHTML(journal)
            factoryJournal(converted);
        }
        })

})

const deleteEntry = (deleteID) => {
    return fetch(`http://localhost:3000/entries/${deleteID}`,
    {
        "method": "DELETE"
    }
    ) 
    .then(response => response.json())
}

//EDIT AN ENTRY

const updateFields = (editIDparam) => {

    // Get reference to input fields in the form
    const hiddenEditId = document.querySelector("#editID")
    const journalDateInput = document.querySelector("#journalDate")
    const journalConceptsInput = document.querySelector("#journalConcepts")
    const journalEntryInput = document.querySelector("#journalEntry")
    const journalMoodInput = document.querySelector("#moodInput")

    fetch(`http://localhost:3000/entries/${editIDparam}`)
        .then(response => response.json())
        .then(entries => {
            hiddenEditId.value = entries.id // Hidden value. User no see. 🙈
            journalDateInput.value = entries.dateOfEntry
            journalConceptsInput.value = entries.conceptsCovered
            journalEntryInput.value = entries.journalEntry
            //journalMoodInput.value = entries.moodForTheDay
        })
    }  

containerJournal.addEventListener("click", event => {
    if (event.target.id.startsWith("editButton")) {
        console.log(event.target.id)
        const entryToEdit = event.target.id.split("--")[1]
        console.log(entryToEdit);
        
        updateFields(entryToEdit)
    }
    })

// -will need to update event-listener on submit button to include conditional logic
// so th button knows whether this is a new entry (POST) or edited entry (PUT) 

const editEntry = (editID, updatedObject) => {
    // Logic for the PUT operation
    
    fetch(`http://localhost:3000/entries/${editID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedObject)
    })
    .then(res => res.json())
    .then(() => {
        const hiddenEditId = document.querySelector("#editID")
        hiddenEditId.value = "";
    })
}
