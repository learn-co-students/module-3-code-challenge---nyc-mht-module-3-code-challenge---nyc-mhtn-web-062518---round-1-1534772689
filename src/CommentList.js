class CommentList{
  constructor(){
    this.commentsList = document.getElementById("comments-list")
    // commentArray.forEach((comment) => {comments.push(comment)})
  }

  addComment(comment){
    this.commentsList.innerHTML += `<li>${comment}</li>`

  }

  myComments(){
    return this.commentsList.querySelectorAll("li")
  }

  showComment(comment){
    return comment.style.display = "list-item"
  }

  hideComment(comment){
    return comment.style.display = "none"
  }
}
