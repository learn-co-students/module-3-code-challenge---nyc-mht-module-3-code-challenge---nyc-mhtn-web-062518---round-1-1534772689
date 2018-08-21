document.addEventListener('DOMContentLoaded', function() {
  // step 1: Add event listener to comment form
  //  - When a users clicks the 'Create comment' button,
  //  - comments should be added to a comment list.
  //  - The new comment should appear as an <li>new comment text here</li> element wrapped in an unordered list.
  const commentForm = document.getElementById('comment-form')
  const commentsDisplayUl = document.getElementById('comments-list')
  let comments = []
  commentForm.addEventListener('submit', e => {
    e.preventDefault()
    const commentInputValue = document.getElementById('add-comments-input').value
    comments.push(commentInputValue)
    const commentDisplayLi = document.createElement('li')
    commentDisplayLi.innerText = commentInputValue
    commentsDisplayUl.appendChild(commentDisplayLi)
    document.getElementById('add-comments-input').value = ""
  })

  // step 2: Add keyup event listener to filter comments form
  //  - If a user provides a search term into the 'Filter comments' input field,
  //  - the comments list should automatically display only comments containing the filtering term.
  //    (Hint: You could use a "keyup" event bound to the comments filtering input field).
  //  - If the user clears the filtering input all comments should be displayed again.
  const filterCommentsField = document.getElementById('filter-comments-input')
  const h2 = document.querySelector('h2')
  filterCommentsField.addEventListener('keyup', e => {
    let filteredComments = comments.filter(comment => {
      return comment.includes(filterCommentsField.value)
    })
    commentsDisplayUl.innerHTML = ''
    filteredComments.forEach(comment => {
      const commentDisplayLi = document.createElement('li')
      commentDisplayLi.innerText = comment
      commentsDisplayUl.appendChild(commentDisplayLi)
    })
    let redWords = `comments containing "${e.target.value}"`

    if (e.target.value) {
      h2.innerHTML = `<h2>Your comments: <span style="color:red">${redWords}</span></h2>`
    } else {
      h2.innerText = `Your comments:`
    }
  })

  // Later: Each comment should have a delete button/link.
  commentsDisplayUl.addEventListener('click', e => {
    e.target.remove()
  })
})
