const submitButton = document.querySelector("#submit-button");
const myForm= document.querySelector('#my-form'); 
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const items = document.querySelector('.items')
const body = document.querySelector('body')

submitButton.addEventListener('click',function (event) {
    event.preventDefault();
    console.log(event);
    console.log('clicked');

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
   

    if (nameValue === '' || emailValue === '') {
        alert('preche os campos sue merda');
        myForm.style.background= 'orange';
        body.style.background= 'blue';
    }else{
        console.log(`seu nome eh ${nameValue}? e seu email eh ${emailValue}? `);
        items.children[1].textContent = emailValue;
    }



})




// nameInput.addEventListener('change', function (even){
//     console.log(even.target.value);
// })