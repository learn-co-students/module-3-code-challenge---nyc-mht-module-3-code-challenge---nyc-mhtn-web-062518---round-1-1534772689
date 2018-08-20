document.addEventListener('DOMContentLoaded', function() {
  // your code here!
  let commentInput = document.getElementById('add-comments-input')
  let btnSubmit = document.getElementById('comment-submit')
  let filterComments = document.getElementById('filter-comments-input')
  let commentsList = document.getElementById('comments-list')
  let list = document.getElementsByClassName('list')
  let commentDisplay = document.getElementById('comments-filter-term')

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    commentsList.innerHTML += `<li class='list'>${commentInput.value}</li>`
    commentInput.value = ''
  })


  filterComments.addEventListener('keyup', (e) =>{
    e.preventDefault()
    commentDisplay.innerText = `Comments containing ${filterComments.value}`
    //go through all comments in ul
    let myArray = [...commentsList.children]
    console.log(myArray)
    myArray.filter(comment => {
      //if innerText of comment matches input - display else hide
      if(comment.innerText.includes(filterComments.value)){
        comment.style.display = 'inline-block'
      } else {
        comment.style.display = 'none'
      }
    })
  })

})
