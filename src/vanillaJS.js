document.addEventListener('DOMContentLoaded', function() {

    let button = document.getElementsByClassName('btn btn-success buttons')
    let filterCommentsField = document.getElementById('filter-comments-input')
    let commentList = document.getElementById('comments-list')

    button = Array.from(button)
    button[0].addEventListener('click', function(e) {
      e.preventDefault()

      let commentInput = document.getElementById('add-comments-input')
      let other = document.getElementById('comment-form')

      // Create new list item and append to the UL
      newLi = document.createElement('li')
      newNode = document.createTextNode(commentInput.value)
      newLi.appendChild(newNode)
      commentList.appendChild(newLi)
    })

    filterCommentsField.addEventListener('keyup', function(e) {
      typedValues = e.target.value
      let filteredComment = showComments(typedValues)
    })

    function showComments(value){
      let commentList = document.getElementById('comments-list')
      commentsListToArray = Array.from(commentList.children)
      comments = commentsListToArray.map(comment => comment.innerText)
      filteredComments = comments.filter(comment => comment.includes(value))

      commentsListToArray.forEach(comment =>
        {if (comment.innerHTML.includes(value)){
          comment.style.display='block'
        }else{comment.style.display='none'}
      })

    }
})
