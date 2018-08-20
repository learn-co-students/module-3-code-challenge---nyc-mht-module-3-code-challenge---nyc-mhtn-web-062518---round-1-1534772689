document.addEventListener('DOMContentLoaded', function() {
  // step 1: Add event listener to comment form
  //  - When a users clicks the 'Create comment' button,
  //  - comments should be added to a comment list.
  //  - The new comment should appear as an <li>new comment text here</li> element wrapped in an unordered list.
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', e => {
    e.preventDefault()
    const commentInputValue = document.getElementById('add-comments-input').value
    const commentsDisplayUl = document.getElementById('comments-list')
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
  const filterForm = document.getElementById('filter-form')
  const searchInput = document.getElementById('filter-comments-input')

  searchInput.addEventListener('keyup', e => {
    e.preventDefault()

    //add the h2 after your comments
    const searchTerm = document.getElementById('filter-comments-input').value
    const liArray = [...document.getElementsByTagName('li')]
    let h2Text = document.querySelector('h2')
    const addTextSpan = document.createElement('span')
    addTextSpan.innerText = ` comments containing: `

    addTextSpan.style.color = "red"

    if (searchTerm.length === 0) {
      h2Text.innerText = "Your comments:"
    }

    if (searchTerm.length === 1) {
      if(h2Text.innerText === "Your comments:"){
        h2Text.appendChild(addTextSpan)
      }
    }

    const searchTermSpan = document.createElement('span')
    h2Text.appendChild(searchTermSpan)
    searchTermSpan.innerText += searchTerm.slice(-1)
    searchTermSpan.style.color = "red"

    //add li inside the div
    if (searchTerm === "") {
      h2Text = "Your comments: "
      liArray.map(li => {
         return li.style.display = "list-item"
      })
    }

    const noneShowArray = liArray.filter((li)=> {
      return !li.innerText.includes(searchTerm)
    })
    noneShowArray.map((li)=> {
      return li.style.display = "none"
    })
  })

  // Later: Each comment should have a delete button/link.
})
