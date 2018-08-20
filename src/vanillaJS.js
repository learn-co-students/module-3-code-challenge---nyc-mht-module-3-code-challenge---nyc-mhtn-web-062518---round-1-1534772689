
document.addEventListener('DOMContentLoaded', function() {
  // your code here!
  const addCommentForm = document.getElementById('comment-form')
  const addCommentInput = document.getElementById('add-comments-input')
  const commentsList = document.getElementById('comments-list')
  const filterForm = document.getElementById('filter-form')
  const filterInput = document.getElementById('filter-comments-input')


  addCommentForm.addEventListener('submit', function(e) {
    e.preventDefault()
    commentsList.innerHTML += `
      <li>
        ${addCommentInput.value}
        <button class="delete-button">Delete</button>
      </li>
    `
    addCommentInput.value = ""
  })

  filterInput.addEventListener('keyup', function(e) {
    const allComments = [...commentsList.children]
    const matchingComments = allComments.filter(comment => comment.innerText.slice(0, -8).includes(filterInput.value))
    /////////////////// I can't get 'comment' display as strings. If I have more time, I will figure it out.
    if (filterInput.value !== "") {
      matchingComments.forEach(comment => {
        commentsList.innerHTML = ""
        commentsList.innerHTML += `${comment}`
      })
    }
  })

  commentsList.addEventListener('click', function(e) {
    if (e.target.className === "delete-button") {
      e.target.parentElement.remove()
    }
  })

})
