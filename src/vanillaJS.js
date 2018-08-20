document.addEventListener('DOMContentLoaded', function() {

  const inputCommentForm = document.getElementById("add-comments-input")
  const filterCommentsForm = document.getElementById("filter-comments-input")
  const commentForm = document.getElementById("comment-form")
  const button = document.getElementsByClassName("X")
  const ul = document.getElementById("comments-list")

  inputCommentForm.addEventListener("change", event => {
    const input = event.target.value
    const li = document.createElement("li")
    li.innerHTML = `${input} <button class="X"> X </button>`
    submit(li)
    inputCommentForm.innerHTML = ""
  })

  ul.addEventListener("click", event => {
    if (event.target.value.className = "X") {
      event.target.parentElement.remove()
    }
  })

  const submit = li => {
  // console.log(li);
    commentForm.addEventListener("click", event => {
      event.preventDefault()
      if (event.target.type === "submit" && li.innerText != "") {
        ul.appendChild(li)
      }
    })
  }

  filterCommentsForm.addEventListener("keyup", event => {
    event.preventDefault()
    const lis = Array.from(ul.children)
    const input = event.target.value
    const selectedLis = lis.filter(li => li.innerText.includes(input))
    if (selectedLis.length > 0 && input != "") {
    ul.innerHTML= ""
      selectedLis.forEach(li => {
      console.log(li)
        ul.appendChild(li)
      })
    } else {
      ul.innerHTML= ""
      lis.forEach(li => {
        ul.appendChild(li)
      })
    }
  })

})
