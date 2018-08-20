document.addEventListener('DOMContentLoaded', function() {
  const filteredComment = document.getElementById("filter-comments-input")
  const filteredTerm = document.getElementById("comments-filter-term")
  const commentList = new CommentList()


  document.getElementById("comment-form").addEventListener("submit", (e) => {
    e.preventDefault()
    const comment = new Comment(document.getElementById("comment-form").querySelector("input").value)
    commentList.addComment(comment.render())
    document.getElementById("comment-form").querySelector("input").value = ""
  })


  filteredComment.addEventListener('keyup', (e) => {
    myLis = commentList.myComments()
    myLis.forEach((li) => {
      commentList.showComment(li)
    })

    filteredTerm.innerText = ""
    if(e.target.value != ""){
      filteredTerm.innerText = `comments containing: "` + `${e.target.value}` + `"`
    }

    myLis.forEach((li) => {
      if(!li.innerText.includes(e.target.value)){
        commentList.hideComment(li)
      }
    })
  })

  // comment.addEventListener('submit', (e) => {})
})
