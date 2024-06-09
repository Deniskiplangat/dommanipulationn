const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener('change',()=>{
    const file = fileInput.files[0]
    if(file){
        const reader = new FileReader()
        reader.addEventListener('load',()=>{
            output.innerText = reader.result
        })
        console.log(reader)
        reader.readAsDataURL(file);
    }
})