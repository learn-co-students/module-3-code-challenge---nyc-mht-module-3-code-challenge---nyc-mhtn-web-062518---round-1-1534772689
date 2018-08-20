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

// my filter function can filter for input, but it doesn't work if I delete letters from the filter. I need to click on the input comment box to get them all to show up again

  filterCommentsForm.addEventListener("keyup", event => {
    const input = event.target.value
    return filterInputs(input)
  })

  const filterInputs = input => {
    let filteredLis = Array.from(ul.children).filter(li => li.innerText.includes(input))
    console.log(filteredLis)
    return displayFilteredLis(filteredLis)
  }

  const displayFilteredLis = filteredLis => {
    ul.innerHTML = ""
    filteredLis.forEach(li => {
      ul.appendChild(li)
    })
  }

})
