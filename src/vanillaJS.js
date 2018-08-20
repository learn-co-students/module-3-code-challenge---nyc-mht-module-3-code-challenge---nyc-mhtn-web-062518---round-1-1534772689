document.addEventListener('DOMContentLoaded', function() {


  //constants for selecting HTML elements
  const commentForm = document.getElementById("comment-form")
  const commentInput = document.getElementById("add-comments-input")
  const commentsList = document.getElementById("comments-list")
  const filterCommentsInput = document.getElementById("filter-comments-input")

  //variables for keeping track of the posted comments and their IDs
  let postedComments = []
  let commentCounter = 0

  //event listeners for creating a new comment, searching the comments, and deleting comments
  commentForm.addEventListener("submit", (event) => postComment(event))
  filterCommentsInput.addEventListener("keyup", (event) => filterComments(event))
  commentsList.addEventListener("click", (event) => deleteComment(event))


  //this function creates a new comment, appends it to the DOM, creates a new object for that comment with an ID, pushes it onto the postedComments array above, and then increments the counter
  function postComment(event) {
    event.preventDefault()
    let newComment = document.createElement("li")
    newComment.id = `comment-${commentCounter}`
    newComment.innerHTML = `${commentInput.value} <button class="delete-comment">x</button>`
    commentsList.appendChild(newComment)
    postedComments.push({id: commentCounter, commentHTML: newComment})
    commentInput.value = ""
    commentCounter++
  }


  //This function filters the comments based on the search input. Every time this function is called, it clears the innerHTML of the commentsList div. If the search input is empty, it displays all comments. If it is not empty, it iterates through the postedComments and selects only those whose innerText includes the string in the search bar. It then appends each comment to the commentsList.
  function filterComments(event) {
    event.preventDefault()
    commentsList.innerHTML = ""
    if (filterCommentsInput.value === "") {
      postedComments.forEach(comment => commentsList.appendChild(comment.commentHTML))
    } else {
      let filteredComments = postedComments.filter( comment => comment.commentHTML.innerText.includes(filterCommentsInput.value) )
      filteredComments.forEach(comment => commentsList.appendChild(comment.commentHTML))
    }
  }

  //This function is called with an event listener on the commentsList. The delete buttons for each comment all have a class of "delete comment". If the event target has the "delete comment" class, this function removes the parent element(which is the list item) from the DOM. Before removal, it captures the ID of the parent element, which corresponds to an ID of a list element in the postedComments array, and it removes that element from the postedComments array.
  function deleteComment(event) {
    event.preventDefault()
    if (event.target.className.includes("delete-comment")) {
      let commentToDelete = event.target.parentElement
      let commentId = parseInt(commentToDelete.id[commentToDelete.id.length - 1])
      commentToDelete.remove()
      postedComments = postedComments.filter(comment => comment.id != commentId)
      console.log(postedComments);
    }
  }

})
