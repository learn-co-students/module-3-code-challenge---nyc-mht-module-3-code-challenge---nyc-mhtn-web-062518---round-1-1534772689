document.addEventListener('DOMContentLoaded', function() {
  const commentsForm = document.getElementById("comment-form")
  commentsForm.addEventListener("submit", event => {
    event.preventDefault();
    const commentsInput = document.getElementById("add-comments-input")
    const addComment = comment => {
      const ul = document.getElementById("comments-list")
      ul.innerHTML += `
        <li>
        ${comment.value}
        <button class="delete-button" type="submit" name="action"> X </button>
        </li>
      `
    }
    addComment(commentsInput)
    commentsInput.value = ""
  })

  const filterInput = document.getElementById('filter-comments-input')
  // the filter functionality is case sensitive, which was a purposeful decision //
  filterInput.addEventListener("keyup", event => {
    const filterValue = event.target.value
    const comments = document.getElementById("comments-list")
    const commentsList = comments.getElementsByTagName("li")
    for (let item of commentsList) {
      if (item.textContent.includes(filterValue)) {
        item.style.display = ""
      } else {
        item.style.display = "none"
      }
    }
  })

  const deleteButtons = document.getElementsByClassName("delete-button")
  // started trying to build out delete button functionality, but saw I couldn't add an event listener to an html collection //

  // deleteButtons.addEventListener("click", event => {
  //   event.preventDefault()
  //   console.log(event)
  // })
})
