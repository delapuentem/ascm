//  Subir imagen

const file = document.querySelector('#upload-file-1')
file.addEventListener('change', function(event){
        const content = document.querySelector('#upload-file-area-1')
        const filename = file.files[0].name
        const extension = filename.split('.').pop()

        let filenamehtml = filename

        for(i=0; i<filename.length; i++) {
            content.querySelector('.text').innerHTML = `${filenamehtml.substring(0, 50).split('.')[0]}.${extension}`
        }
        content.querySelector('.image-svg').src = '../img/success-svgrepo-com.svg'
        content.querySelector('.image-svg').style.filter = 'none'

    })


// Textareas char count

let textArea1 = document.querySelector("#descripcion_textarea");
let characterCounter1 = document.querySelector("#char_count_descripcion");
const maxNumOfChars1 = 750;
const countCharacters1 = () => {
    let maxNnumOfEnteredChars1 = textArea1.value.length;
    let counter = 0 + maxNnumOfEnteredChars1;
    characterCounter1.textContent = counter + `/${maxNumOfChars1}`;
};
textArea1.addEventListener("input", countCharacters1);
let textArea2 = document.querySelector("#descripcion_acceso_textarea");
let characterCounter2 = document.querySelector("#char_count_descripcion_acceso");
const maxNumOfChars2 = 200;
const countCharacters2 = () => {
    let maxNnumOfEnteredChars2 = textArea2.value.length;
    let counter = 0 + maxNnumOfEnteredChars2;
    characterCounter2.textContent = counter + `/${maxNumOfChars2}`;
};
textArea2.addEventListener("input", countCharacters2);


// Dropdowns


const selectDropdown = function(id, inputName, optionsArray, dataParams){

    const selectdropdown = formulario.querySelector(`#${id}`)
    const selectoptions = selectdropdown.querySelector('.select-options')
    
    selectdropdown.addEventListener('click', function(){
        if (selectoptions.style.display === 'block'){
            selectoptions.style.display = 'none'
        }
        else {
            selectoptions.style.display = 'block'
        }
    })
    
    document.addEventListener('click', function(event){
        if(!event.target.closest(`#${id}`)){
            selectoptions.style.display = 'none'
        }
    },
    false
    )
    
    const selectedoption = selectdropdown.querySelector('.selected')
    
    const input = document.createElement('input')
    input.setAttribute('type', 'hidden')
    input.setAttribute('name', inputName)
    selectedoption.appendChild(input)
    
    optionsArray.forEach(function(item){
        selectoptions.innerHTML += `<div class="option" data-value="${item[dataParams.name]}">${item[dataParams.name]}</div>`
    
        const options = selectdropdown.querySelectorAll('.option')
    
            options.forEach(function(option){
                option.addEventListener('click', function(item){
                    const text = item.target.textContent
                    const value = item.target.getAttribute('data-value')
                    selectedoption.querySelector('.value').innerHTML = text
                    selectedoption.querySelector(`input[name="${inputName}"]`).setAttribute('value', value)
        })
    })
    })
    }

fetch('http://localhost:3000/api/municipios')
    .then(response => response.json())
    .then(data => {
        selectDropdown('dropdown1', 'municipio', data, {'name': 'municipio'})
    });

const estados = [
    {'name': 'EXISTE'},    
    {'name': 'NO EXISTE'},
]
selectDropdown('dropdown2', 'estado', estados, {'name': 'name'})    