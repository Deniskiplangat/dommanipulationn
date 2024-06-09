async function loadJson(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const jsonData = await response.json();

    
   const dataw = jsonData.then(function(result) {
  console.log(result) // "Some User token"
})

    return dataw
}

const dataone =  loadJson()

console.log(dataone.id)
 
// console.log(loadJson.body)

// createEl = document.createElement('div')

// const innerhtml = createEl.innerHTML = 'i am a frontend developer'

// const parentEl = document.getElementById('parents')

// parentEl.appendChild(createEl)
// console.log(parentEl)



//   const buttonEl = document.getElementById('master')
// buttonEl.addEventListener('click', addFunction)


// function addFunction(){
//     buttonEl.classList.toggle('button')
//  }

