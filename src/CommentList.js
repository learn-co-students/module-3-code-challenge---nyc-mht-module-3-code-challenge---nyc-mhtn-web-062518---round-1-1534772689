class CommentList {
  constructor(commentArray){
    this.comments = this.createComments(commentArray)
  }

  createComments(array){
    array.forEach(el => new Comment(el))
  }

  addComment(text){
    const newComment = new Comment(text)
    this.comments.push(newComment)
  }

  getLis(){
    this.comments.forEach(el => el.render)
  }

  render(){
    return `<ul>${this.getLis()}</ul>`
  }

}
