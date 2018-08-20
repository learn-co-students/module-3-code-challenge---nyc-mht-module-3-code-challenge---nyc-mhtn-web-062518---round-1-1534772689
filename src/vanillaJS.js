document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById("comment-form")
  const filterForm = document.getElementById("filter-form")
  const textBox = document.getElementById("add-comments-input")
  const commentArray = []
  const commentList = document.getElementById("comments-list")
  const filterText = document.getElementById("filter-comments-input")

  commentForm.addEventListener('submit', event => addComment(event))
  filterText.addEventListener('keyup', event => filterComments(event))

//calls necessary nested functions to append new comment to comments section
  function addComment(e){
    e.preventDefault()
    const commentText = textBox.value
    textBox.value = ''
    commentArray.push(commentText)
    renderComments(commentArray)
  }


//iterates along comment array and calls function to create and append lis
  function renderComments(array){
    commentList.innerHTML = ''
    array.forEach( el => createAndAppendLi(el))
  }


//creates and appends lis based on passed-in array
  function createAndAppendLi(text){
    let li = document.createElement("li")
    li.innerHTML = `<li>${text}</li>`
    commentList.appendChild(li)
  }


  function filterComments(e){
    e.preventDefault()
    const searchTerm = filterText.value
    filterCommentsArray(searchTerm)
  }

  function filterCommentsArray(term){
    const filteredComments = commentArray.filter(word => word.includes(term))
    renderComments(filteredComments)
  }

})
