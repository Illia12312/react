import { userData } from "./userData.js";
const cartHolder = document.querySelector('.cardHolder');
function adder(name, age, gender, balance){
    let card = document.createElement('div');
    card.classList.add('userCard');
    card.setAttribute('data-age', age);
    // card.setAttribute('data-id', index);
    card.setAttribute('data-name', name);
    let imgHolder = document.createElement('div');
    imgHolder.classList.add('imgHolder');
    let img = document.createElement('img');
    img.classList.add('cardImg');

    let infoHolder = document.createElement('div');
    infoHolder.classList.add('infoHolder');
    let userName = document.createElement('div');
    userName.classList.add('userName');
    let userAge = document.createElement('div');
    userAge.classList.add('userAge');
    let userGender = document.createElement('div');
    userGender.classList.add('userGender');
    let userBalance = document.createElement('div');
    userBalance.classList.add('userBalance');

    img.setAttribute('src', 'img/png-transparent-computer-icons-anonymous-anonymity-anonymous-face-monochrome-head.png');
    userName.innerHTML = `name: ${name}`;
    userAge.innerHTML = `age: ${age}`;
    userGender.innerHTML = `gender: ${gender}`;
    userBalance.innerHTML = `balance: ${balance}`;

    infoHolder.append(userName, userAge, userGender, userBalance);
    imgHolder.append(img);
    card.append(imgHolder, infoHolder);
    cartHolder.append(card);
}

function createModal(name, age, gender, balance, company, email, phone, address){
    popup.style.display = 'block';
    let card = document.createElement('div');
    card.classList.add('modal');
    let imgHolder = document.createElement('div');
    imgHolder.classList.add('imgHolderModal');
    let img = document.createElement('img');
    img.classList.add('cardImg');

    let infoHolder = document.createElement('div');
    infoHolder.classList.add('infoHolder');
    let userName = document.createElement('div');
    userName.classList.add('userName');
    let userAge = document.createElement('div');
    userAge.classList.add('userAge');
    let userGender = document.createElement('div');
    userGender.classList.add('userGender');
    let userCompany = document.createElement('div');
    userCompany.classList.add('userCompany');
    let userEmail = document.createElement('div');
    userEmail.classList.add('userEmail');
    let userPhone = document.createElement('div');
    userPhone.classList.add('userPhone');
    let userAddress = document.createElement('div');
    userAddress.classList.add('userAddress');
    let userBalance = document.createElement('div');
    userBalance.classList.add('userBalance');

    img.setAttribute('src', 'img/png-transparent-computer-icons-anonymous-anonymity-anonymous-face-monochrome-head.png');
    userName.innerHTML = `name: ${name}`;
    userAge.innerHTML = `age: ${age}`;
    userGender.innerHTML = `gender: ${gender}`;
    userBalance.innerHTML = `balance: ${balance}`;
    userCompany.innerHTML = `company: ${company}`;
    userEmail.innerHTML = `email: ${email}`;
    userPhone.innerHTML = `phone: ${phone}`;
    userAddress.innerHTML = `address: ${address}`;

    infoHolder.append(userName, userAge, userGender, userBalance, userCompany, userEmail, userPhone, userAddress);
    imgHolder.append(img);
    card.append(imgHolder, infoHolder);
    popupContent.append(card);
}

for(let i of userData){
    adder(i.name, i.age, i.gender, i.balance);
}

//modal
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popupContent');
const popupBody = document.querySelector('.popupBody');
popup.addEventListener('click', function(e){
    if(e.target == popupBody){
        popup.style.display = 'none';
        popupContent.innerHTML = '';
    };
});
document.body.addEventListener('wheel', function(e){
    popup.style.display = 'none';
    // popupContent.innerHTML = '';
});
for(let i=0; i<userData.length; i++){
    let ourCards = document.querySelectorAll('.userCard');
    ourCards[i].addEventListener('click', function(e){
        createModal(userData[i].name, userData[i].age, userData[i].gender, userData[i].balance,
             userData[i].company, userData[i].email, userData[i].phone, userData[i].address);
    })
}

//finder
const inputFinder = document.querySelector('.headerInput');
inputFinder.addEventListener('input', function(e){
    let ourCards = document.querySelectorAll('.userCard');
    for(let i=0; i<ourCards.length; i++){
        let name = ourCards[i].getAttribute('data-name');
        let nameToLowerCase = name.toLowerCase();
        let inputValueToLowerCase = inputFinder.value.toLowerCase();
        if(nameToLowerCase.includes(inputValueToLowerCase)){
            ourCards[i].style.display = 'block'
        }else{
            ourCards[i].style.display = 'none'
        }
    }
});

//sorting
function insert(elem, refEleme){
    return refEleme.parentNode.insertBefore(elem, refEleme.nextSibling);
};
select.addEventListener('change', function(){
    if(this.value == 'ascending'){  
        for(let i = 0;  i<cartHolder.children.length; i++){
            for (let j = i; j < cartHolder.children.length; j++) {
                if (cartHolder.children[i].getAttribute('data-age') > cartHolder.children[j].getAttribute('data-age')) {
                    let node = cartHolder.replaceChild(cartHolder.children[j], cartHolder.children[i]);
                    insert(node, cartHolder.children[i]);
                }
            }
        }
    }
    else if(this.value == 'descending'){
        for(let i = 0;  i<cartHolder.children.length; i++){
            for (let j = i; j < cartHolder.children.length; j++) {
                if (cartHolder.children[i].getAttribute('data-age') < cartHolder.children[j].getAttribute('data-age')) {
                    let node = cartHolder.replaceChild(cartHolder.children[j], cartHolder.children[i]);
                    insert(node, cartHolder.children[i]);
                }
            }
        }
    }
    else if(this.value == 'All'){
        cartHolder.innerHTML = '';
        for(let i of userData){
            adder(i.name, i.age, i.gender, i.balance);
        }
    }
    for(let i=0; i<userData.length; i++){
        let ourCards = document.querySelectorAll('.userCard');
        ourCards[i].addEventListener('click', function(e){
            createModal(userData[i].name, userData[i].age, userData[i].gender, userData[i].balance,
                 userData[i].company, userData[i].email, userData[i].phone, userData[i].address);
        })
    }
})