let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")
let input = document.getElementById("word")

const updateWord = (element) => {
  usersWord = element.value

  console.log(usersWord)
}

const handleSubmit = () => {
  let newListItem = document.createElement('LI')
  newListItem.innerText = usersWord

  console.log(usersWord.length % 2)

  if (usersWord.length % 2 === 0) {
    evenList.appendChild(newListItem)
  }
  else {
    oddList.appendChild(newListItem)
  }

  usersWord = ""
  document.getElementById("even-odd-form").reset()
}


// Prevent the from from reseting on Enter, and instead trigger a click of the submit button
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
}) 