/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

// const journalEntries = [
// {
//     dateOfEntry: "7/14/2019",
//     conceptsCovered: "Anonymous Functions",
//     journalEntry: "Today I learned that a function that is not named is called an anonymous function, which is also sometimes referred to as a lambda function.",
//     moodForTheDay: "Happy" 
// },

// {
//     dateOfEntry: "7/15/2019",
//     conceptsCovered: "Arrow Functions",
//     journalEntry: "Today I learned that you do not need parantheses around a parameter in an arrow function if there is only parameter in the function.",
//     moodForTheDay: "Excited" 
// },

// {
//     dateOfEntry: "7/16/2019",
//     conceptsCovered: "Clever Code",
//     journalEntry: "Today I learned that readable code is preferrable to clever code, even if it takes longer to write out and is less efficient.",
//     moodForTheDay: "Happy" 
// },

// {
//     dateOfEntry: "7/17/2019",
//     conceptsCovered: "Dry Coding",
//     journalEntry: "Today I learned about the acronym DRY (Don't Repeat Yourself), which means you should avoid repeating lines of codes.",
//     moodForTheDay: "Excited"
// },
// {
//     dateOfEntry: "7/18/2019",
//     conceptsCovered: "Factory Functions",
//     journalEntry: "Today I learned about factory functions, which are functions that start with the word create and are generally used to create something.",
//     moodForTheDay: "Happy"
// },
// {
//     dateOfEntry: "7/19/2019",
//     conceptsCovered: "Postman Commands",
//     journalEntry: "Today I learned about the four most common commands in Postman (a program for working with JSON server data): GET, POST, DELETE, and PUT.",
//     moodForTheDay: "Anxious"
// }

// ]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/



containerJournal = document.querySelector(".entryLog");

const renderJournalEntries = () => {

fetch("http://localhost:3000/entries") // Fetch from the API
    .then(data => data.json())  // Parse as JSON
    .then(entries => {
        // What should happen when we finally have the array?
for (const journal of entries) {
  let makeJournalEntryComponent = `
        <article class="entryStyle">
          <div class="divStyle">
            <h2>${journal.conceptsCovered}</h2>
          </div>
          <div class="divStyle">
            <hr>
            <h4>${journal.dateOfEntry}</h4>
          </div>
          <div class="divStyle">
            <p>${journal.journalEntry}</p>
          </div>
          <div class="divStyle">
            <h5>Current Mood: ${journal.moodForTheDay}</h5>
          </div>
        </article>
    `
    containerJournal.innerHTML += makeJournalEntryComponent;
  }
}
)}
// Invoke the render function
renderJournalEntries();