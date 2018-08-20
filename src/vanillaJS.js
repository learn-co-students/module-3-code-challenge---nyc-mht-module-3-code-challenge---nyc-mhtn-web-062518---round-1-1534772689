document.addEventListener('DOMContentLoaded', function() {

  //element for whole comment form
  const commentInput = document.getElementById("add-comments-input")

  //comment form text area element
  const buttonFormInput = document.getElementById("comment-form")

  const submitButton = document.getElementById("button-button")

  //newly created div inside <ul>
  const commentDiv = document.getElementById("comments-here")

  //array of submited input values
  let valueArray = []

  //adds an event listener on button, when submited the saveInputVal function runs with a passed in event
  submitButton.addEventListener("click", e => saveInputVal(e) )


    //runs on submit for event listener above
    function saveInputVal(e) {

      e.preventDefault()
      //saves the value of whatever is typed into form
      const inputValue = commentInput.value

      //pushes value into an array
      valueArray.push(inputValue)
      console.log(valueArray)
      //creates a new div
      const newDiv = document.createElement("div")

      //adds the new innerHTML containing comment
      newDiv.innerHTML += `
        <li>${inputValue}</li>
      `
      //adds that newDiv with new HTML to div inside UL
      commentDiv.appendChild(newDiv)

  }

  // //checking to make sure values save
  // console.log("valueArray is: ", valueArray)


  // find filter form
  const filterForm = document.getElementById("filter-comments-input")

  // add event listener on every key input to form, passes in event
  filterForm.addEventListener("keyup", e => findFilter(e) )



//commented out below code.. ran out of time :-(


//tried to build filter function that would match value of e.target.value to my array of saved notes, then change newDiv.innerHTML to the values that matched








  // function findFilter(e){
  //
  //   //saves the filter val to a var
  //   let filterVal = e.target.value


    // filter over valueArray to find any element that matches the value from filterForm
  //   const foundValue = valueArray.filter( element => {
  //     return element.includes(filterval)
  //
  //   });
  //
  //   console.log(foundValue)
  //
  //   if (valueArray.includes(e.target.value)){
  //
  //
  //
  //
  // }




//filter stuff:



})
