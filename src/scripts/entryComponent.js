const makeJournalHTML = (journal) => {
    return `
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
    <div>
    <button class="button2" id="deleteButton--${journal.id}">DELETE</button>\
    </div>
  </article>
`
}

export default makeJournalHTML