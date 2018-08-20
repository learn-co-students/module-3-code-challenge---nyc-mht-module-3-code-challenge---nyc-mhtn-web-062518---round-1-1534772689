document.addEventListener('DOMContentLoaded', function() {
  // your code here!
  const commentForm = document.getElementById("comment-form")
  let commentInput = document.getElementById("add-comments-input")
  const filterForm = document.getElementById("filter-form")
  const filterCommentInput = document.getElementById("filter-comments-input")
  const yourComments = document.getElementById("comments-filter-term")
  const commentsList = document.getElementById("comments-list")
  const createCommentButton = document.getElementById("create-comment-button")




  createCommentButton.addEventListener("click", (e) => {
    e.preventDefault()
    let newComment = document.createElement("li")
    let commentText = commentInput.value
    // newComment.innerText = commentText
    newComment.innerHTML += '<li>' + commentText + ' <button onclick="Delete(this);">Delete</button> </li>'
    newComment.classList.add('comment')

    commentsList.appendChild(newComment)
    commentInput.value = ""

    function Delete(currentEl){
      currentEl.parentNode.remove(currentEl.parentNode);
    }

})

//filter

function filterComment() {
  // debugger
// Loop through all list items, and hide those who don't match the search query
for (i = 0; i < commentsList.length; i++) {
    var currentElem = commentsList[i];
    var currentElemChild = commentsList[i].children[0]
    if (currentElemChild.innerText.indexOf(filterCommentInput.value) > -1) {
        currentElem.style.display = "";
    } else {
        currentElem.style.display = "none";
    }
  }
}
document.getElementById("filter-comments-input").addEventListener('keyup', filterComment);

})
