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

ontainerJournal = document.querySelector(".entryLog");

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

