




// function myFunction(){
//   const textData = document.getElementById('123')
// const ul = document.querySelector('ul')
//   const button = document.createElement('button')
// button.textContent = 'delete'
 
// const neww = document.createElement('li')
// neww.textContent = 'this is my new text'

// const newdiv = document.createElement('div')
// newdiv.classList.add('newdiv'); 
// newdiv.appendChild(neww)
// newdiv.appendChild(button)
// const newdata = ul.appendChild(newdiv)
// console.log(newdata)
// }


const input = document.querySelector('input')
const list = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click',()=>{
  const myData = input.value
  input.value = ''

  const newdiv = document.createElement('div')
  newdiv.classList.add('newdiv'); 

  const listInput = document.createElement('li')
  

  const textdata = document.createElement('span')
  textdata.textContent = myData;

  const delButton = document.createElement('button')
  delButton.textContent = 'delete';
  
  listInput.appendChild(textdata)
  newdiv.appendChild(listInput)
  newdiv.appendChild(delButton)

  list.appendChild(newdiv)

  delButton.addEventListener('click',()=>{
    list.removeChild(newdiv)
  })

  input.focus()


})


 
 
 

 


