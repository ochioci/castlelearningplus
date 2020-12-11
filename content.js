function createOverlay () {
  // answers = document.getElementsByClassName("notEliminated")
  // question = document.getElementsByClassName('rounded')[0].children[3].children[1].children[0]


  showButton = document.createElement('button')
  showButton.style.position = 'absolute'
  showButton.style.fontSize = "0.8vw"
  showButton.style.backgroundColor = '#DAA84A'
  showButton.style.bottom = '0'
  showButton.style.display = 'none'
  showButton.style.right = '0'
  // showButton.style.width = '20%'
  // showButton.style.height = '20%'
  showButton.style.borderRadius = "1vh"
  showButton.style.padding = "0.25vw"
  showButton.style.zIndex = '100000'
  showButton.style.border = '3px solid black'
  showButton.id = 'showButton'
  showButton.innerText = "Show"
  showButton.addEventListener("click", show)
  document.body.appendChild(showButton)


  temp = document.createElement('center')
  temp.style.position = 'absolute'
  temp.style.fontSize = "1vw"
  temp.style.backgroundColor = '#DAA84A'
  temp.style.bottom = '0'
  temp.style.right = '0'
  temp.style.width = '20%'
  temp.style.height = '20%'
  temp.style.borderRadius = "1vh"
  temp.style.padding = "1vw"
  temp.style.zIndex = '1000000'
  temp.style.border = '3px solid black'
  temp.id = 'ocicontainer'

  let div1 = document.createElement('div')
  div1.innerText = "Use primary search first, if it does not find a suitable answer use secondary search instead."

  temp.appendChild(div1)
  let tempButton = document.createElement('button')
  tempButton.innerText = 'Primary Search for Answers'
  tempButton.addEventListener("click", search)
  tempButton.id = 'ocibutton'
  tempButton.style.margin = '1vh'
  temp.appendChild(tempButton)

  let tempButton2 = document.createElement('button')
  tempButton2.innerText = 'Secondary Search for Answers'
  tempButton2.addEventListener("click", specificSearch)
  tempButton2.style.display = "block"
  tempButton2.style.margin = '1vh'
  tempButton2.id = 'ocibutton2'
  temp.appendChild(tempButton2)

  let tempButton3 = document.createElement('button')
  tempButton3.innerText = 'Hide'
  tempButton3.addEventListener("click", hide)
  tempButton3.style.margin = '1vh'
  tempButton3.id = 'ocibutton3'
  temp.appendChild(tempButton3)

  // let tempButton4 = document.createElement('button')
  // tempButton4.innerText = 'Help'
  // tempButton4.style.margin = '1vh'
  // tempButton4.id = 'ocibutton4'
  // temp.appendChild(tempButton4)


  document.body.appendChild(temp)
  console.log('created')
}

function hide () {
  temp.style.display = "none"
  showButton.style.display = "block"
}

function show () {
  temp.style.display = "block"
  showButton.style.display = "none"
}

function search () {
  try {
    window.open('https://google.com/search?q=' + document.getElementsByClassName('rounded')[0].children[3].children[1].children[0].innerText)
  }
  catch {
    //
  }
}

function specificSearch () {
  try {
    let answers = document.getElementsByClassName("notEliminated")
    let url = 'https://google.com/search?q='
    url += document.getElementsByClassName('rounded')[0].children[3].children[1].children[0].innerText
    for (let i = 0; i < answers.length; i++) {
      url += " " + answers[i].children[1].innerText + " "
    }
    window.open(url)
  }
  catch {

  }
}

try {
  setTimeout(createOverlay,1000)
}
catch {

}


// function update () {
//   ocicontainer.innerText = question.innerText
// }
