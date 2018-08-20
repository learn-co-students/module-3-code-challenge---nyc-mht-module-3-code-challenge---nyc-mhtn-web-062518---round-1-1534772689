class CommentList {
  constructor(commentArray){
    this.comments = this.createComments(commentArray)
  }

  createComments(array){
    array.forEach(el => new Comment(el))
  }

}
