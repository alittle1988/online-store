const kitchen = [];
const cutlery = [];
const livingArea = [];
const bathRoom = [];
const bedRoom = [];
const garage = [];
const deals= [];

// creating item object
const itemFactory = (name, price, deparment, description, imgSrc) => {
    return {
        _name: name,
        _price: price,
        _deparment: deparment,
        _description: description,
        _imgSrc: imgSrc,
        get details() {
            return `Item:${this._name}
Price:${this._price} 
located in the ${this._deparment} department 
Description:${this._description}`
        },
        /**
         * @param {number} newPrice
         */
        set price(newPrice) {
            if(typeof newPrice === 'number') {
                return this._price = newPrice
            }
        }
        
    }

}

// adding kitchen
    const blackGoldCutlery = itemFactory('Black and Gold Cutlery', 9.99, 'kitchen', 'Black and gold eating utensil.', './Resources/Images/Kitchen/cutlery/sets/black-gold-cutlery-set.jpeg' );
    const fork = itemFactory('Fork', .99, 'Kitchen', 'Silver Fork', './Resources/Images/Kitchen/cutlery/individual/silver-fork.jpeg');
    const spoon =itemFactory('Spoon', .99, 'Kitchen', 'Silver Spoon', './Resources/Images/Kitchen/cutlery/individual/silver-spoon.jpeg');
    const knife = itemFactory('Knife', .99, 'Kitchen', 'Silver Knife', './Resources/Images/Kitchen/cutlery/individual/silver-knife.jpeg');
    const measuringCup1 = itemFactory('1 Cup Measuring Cup', 3.99, 'Kitchen', '1 Cup stainless Steel Measuring Cup', './Resources/Images/Kitchen/cooking-utencils/measuring/cup-measuring-cup.jpeg');
    const blackSpatula = itemFactory('Black Spatula', 1.99, 'Kitchen', 'All black spatula', './Resourses/Images/Kitchen/cooking-utencils/spatulas/black-spatula.jpeg');
    const silverSpoon = itemFactory('Silver Cooking Spoon', 1.99, 'Kitchen', 'Sliver cooking spoon with black handle', './Resourses/Images/Kitchen/cooking-utencils/spoons/sivler-spoon.jpeg');
    const blackWhisk = itemFactory('Black Whisk', 1.99, 'Kitchen', 'All black whisk', './Resources/Images/Kitchen/cooking-utencils/whisks/black-whisk.jpeg');
    kitchen.push(fork, measuringCup1, blackWhisk, spoon, knife, blackGoldCutlery, blackSpatula, silverSpoon)



//adding living room
const couch = itemFactory('Couch', 399.99, 'Living Room', 'Gray Sectional Couch', './Resources/Images/Livingroom/grayCouch.jpeg' );
const recliner = itemFactory('Recliner', 299.99, 'Living Room', 'Gray Recliner', './Resources/Images/Livingroom/recliner.jpeg');
const tv = itemFactory('TV', 199.99, 'Livingroom', 'Black 55inch flat screen TV with stand', './Resources/Images/Livingroom/tv.jpeg')
livingArea.push(couch, recliner, tv)


// adding bedroom
const blackBedFrame = itemFactory('Black Bedframe', 99.99, 'bedroom', 'Black bedframe with headboard', './Resources/Images/Bedroom/bedframes/BlackBedFrame.jpeg' );
const grayDresser = itemFactory('Gray Dresser', 149.99, 'bedroom', 'Gray 8 drawer dresser', './Resources/Images/Bedroom/dressers/gray-dresser.jpeg');
const grayNightStand = itemFactory('Gray Nightstand', 49.99, 'bedroom', 'Gray 3 drawer nightstand', './Resources/Images/Bedroom/dressers/gray-nightstand.jpeg');
bedRoom.push(blackBedFrame, grayDresser, grayNightStand)


// assigning deal location and info
const dealCards = document.querySelectorAll('.deals');
const kitchenMain = document.querySelectorAll('.kitchen')
const livingMain = document.querySelectorAll('.livingroom')
const bedroomMain = document.querySelectorAll('.bedroom')



//adding deal to deals
deals.push(blackGoldCutlery)
deals.push(couch)
deals.push(blackBedFrame)

const setCardFunc = function(array, array2) {

    for(let i = 0; i < 3; i++) {
        const card = array[i].children
        let img = card[0]
        img.src = array2[i]._imgSrc
        img.alt = array2[i]._description
        let cardBody = card[1].children
        cardBody[0].textContent = array2[i]._name
        cardBody[1].children[0].textContent = `Price: ${array2[i]._price}`
        cardBody[2].textContent = `Description: ${array2[i]._description}`
        
    }
}

const select = document.querySelector('#quantity')
let value = select.options[select.selectedIndex].value;
select.addEventListener('change', function() {
    calculate(value, )
})

const calculate = function(value, price) {
    return price * value
}



console.log(dealCards[0].children)
setCardFunc(dealCards, deals)
setCardFunc(kitchenMain, kitchen)
setCardFunc(livingMain, livingArea)
setCardFunc(bedroomMain, bedRoom)
    

//show cart

const cart = document.querySelector('#cart')

cart.addEventListener('click', function() {
    
    const cartContainer = document.querySelector('.cart-container')
    if(cartContainer.style.display === 'none'){
    cartContainer.style.display = 'block';
    } else if(cartContainer.style.display === 'block'){
        cartContainer.style.display = 'none'
    }
})


