document.addEventListener('DOMContentLoaded', function() {
  // your code here!

  // store all comments in array
  const commentListArr = []


  // comment should appear as an li
  // under ul #comments-list

  // add event listener to form on submit (or click on create comment button // - make sure to prevent default
  // take input from form, make new <li> element, change inner text of <li> to input
  // append li to ul

  const createForm = document.getElementById('comment-form')
  createForm.addEventListener('submit', e => {
    e.preventDefault()
    const createInput = document.getElementById('add-comments-input')
    const commentList = document.getElementById('comments-list')

    // create new li, set class name, and set inner text to input
    const commentItem = document.createElement('li')
    commentItem.className = 'comments-list-item'
    commentItem.innerText = createInput.value

    // add delete button to li
    // no time to implement delete button
    // const deleteButton = document.createElement('button')
    // deleteButton.innerText = 'Delete'
    // commentItem.appendChild(deleteButton)

    // append li to ul and push comment to global array
    // and set default value to blank
    commentList.appendChild(commentItem)
    commentListArr.push(createInput.value)
    createInput.value = ""
  })

  // filter - search term using keyup,
  // if search is cleared, all comments should be displayed again
  // iterate through global comment array to display all comments
  const filterInput = document.getElementById('filter-comments-input')
  filterInput.addEventListener('keyup', e => {
    e.preventDefault()
    // get all items by className and convert to array with spread
    let originalComments = [...document.getElementsByClassName('comments-list-item')]
    let allComments = originalComments.slice()
    let inputValue = e.target.value
    let commentsFilterSpan = document.getElementById('comments-filter-term')

    commentsFilterSpan.innerText = `comments containing ${inputValue}`
    const commentList = document.getElementById('comments-list')
    let filteredComments = allComments.filter(c => c.innerText.toLowerCase().includes(inputValue.toLowerCase()))

    let itemizedComments = filteredComments.map(c => `<li class="comments-list-item">${c.innerText}</li>`).join("")
    commentList.innerHTML = itemizedComments

    // if input is cleared, clear span innertext and display all comments
    if (inputValue === "") {
      commentsFilterSpan.innerText = ""
      let originalItems = commentListArr.map(c => `<li class="comments-list-item">${c}</li>`).join("")
      // let originalItems = commentListArr.map(c => `<li class="comments-list-item">${c}<button>Delete</button></li>`).join("")
      commentList.innerHTML = originalItems
    }
  })

  // delete button event listener
  // add event listener to delete button
  // prevent default
  // find target using --> e.target = button
  // find parent li node --> e.target.parentNode = li
  // remove parent li node --> e.target.parentNode.remove()
})
