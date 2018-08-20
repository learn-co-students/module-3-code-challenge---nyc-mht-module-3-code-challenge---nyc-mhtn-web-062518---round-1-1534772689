document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("comment-form")
  const commentsList = document.getElementById("comments-list")
  const filteredComment = document.getElementById("filter-comments-input")
  const filteredTerm = document.getElementById("comments-filter-term")
  filteredTerm.innerText.align = "right"

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    commentsList.innerHTML += `<li>${e.target.parentNode.querySelector("input").value}</li>`
    e.target.parentNode.querySelector("input").value = ""
  })

  filteredComment.addEventListener('keyup', (e) => {
    let myLis = commentsList.querySelectorAll("li")
    myLis.forEach((li) => {
      li.style.display = "list-item"
    })
    filteredTerm.innerText = ""
    if(e.target.value != ""){
      filteredTerm.innerText = `comments containing: "` + `${e.target.value}` + `"`
    }

    myLis.forEach((li) => {
      if(!li.innerText.includes(e.target.value)){
        console.log(li.innerText)
        li.style.display = "none"
      }
    })
  })
})
