document.addEventListener('DOMContentLoaded', function() {
  const formContainer = document.getElementById('comment-form')
  const commentFieldInput = document.getElementById('add-comments-input')
  const commentsList = document.getElementById('comments-list')
  const filterForm = document.getElementById('filter-form')
  const filterCommentsInput = document.getElementById('filter-comments-input')
  // const allComments = []


  formContainer.addEventListener('click', event => {
    if (event.target.id === 'create-comment-button') {
      event.preventDefault()
      // console.log(event.target);
      let commentValue = commentFieldInput.value
      // console.log(commentValue);
      let singleComment = document.createElement('li')
      singleComment.className = 'list'
      singleComment.innerText = commentValue
      // let deleteButton = document.createElement('button')
      // singleComment.button = deleteButton
      // console.log(singleComment);
      // allComments.push(commentValue)
      // let newComment = allComments.map(currEl => {return `<li>${currEl}<button>Delete</button</li>`})
      // console.log(allComments);
      // commentsList.append(newComment)
      commentsList.append(singleComment)
      commentFieldInput.value = ''
    }
  })

  filterForm.addEventListener('keyup', event => {
    // console.log(event.key);
    filterComments()
  })

  function filterComments() {
    let filterInput = filterCommentsInput.value
    // console.log(commentsInput);
    document.querySelectorAll('.list').forEach(comment => {
      let text = comment.innerText
      if (text.match(filterInput)) {
        comment.style.display = 'block'
      } else {
        comment.style.display = 'none'
      }
    })
  }
  // not entirely sure why, but when I filter out comments, the bullet point disappears and doesn't return for all comments even when I clear the input field

  // function filterComments() {
  //   let filterInput = filterCommentsInput.value
  //   let matchingComment = allComments.filter(comment => {
  //     return comment.innerText.includes(filterInput)
  //   })
  // }

  // If I figured out how to add a delete button to each comment, what I would have then done is added an event listener over the comments list
  // commentsList.addEventListener('click', event => {
  //   if (event.target.id === 'delete-button') {
  //
  //   }
  // })







})
