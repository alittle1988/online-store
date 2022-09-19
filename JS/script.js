const itemList = []
const kitchen = [];
const cutlery = [];
const livingArea = [];
const bathRoom = [];
const bedRoom = [];
const garage = [];
const deals= [];
const cartList = [];

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

//adding all items
itemList.push(blackGoldCutlery, fork, spoon, knife, measuringCup1, blackSpatula, silverSpoon, blackWhisk, couch, recliner, tv, blackBedFrame, grayDresser, grayNightStand);



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







setCardFunc(dealCards, deals)
setCardFunc(kitchenMain, kitchen)
setCardFunc(livingMain, livingArea)
setCardFunc(bedroomMain, bedRoom)
    

//show cart

const cart = document.querySelector('#cart')
const cartContainer = document.querySelector('.cart-container')
cart.addEventListener('click', function() {
    
    if(cartContainer.style.display === 'none'){
        cartContainer.style.display = 'block'
    } else {
        cartContainer.style.display = 'none'
    }
})

// close btn
const cartCloseBtn = document.querySelector('.closebtn')
cartCloseBtn.addEventListener('click', function() {
    cartContainer.style.display = 'none'
})


let totalAmount = document.querySelector('.total-amount')
// Add cart button


const addToCartList = document.querySelectorAll('.addToCart')
const itemContainer = document.querySelector('.item-container')
const numOfItems = document.querySelector('.items')



    for(let i = 0; i < addToCartList.length; i++){
        let add = addToCartList[i]
        add.addEventListener('click', function(e) {
            e.preventDefault()
            if(confirm('Add item to cart?')){
            for(let i = 0; i < itemList.length; i++){
                if(add.parentElement.firstElementChild.textContent === itemList[i]._name){
                    cartList.push(itemList[i]) 
                    itemContainer.innerHTML += addItemsToCart(itemList[i]);
                }
            }
        }

            totalAmount.textContent = cartTotal()
            numOfItems.textContent = `Items: ${cartList.length}`
            removeItems()
            
        })
    }








// adding items to cart
const addItemsToCart = (obj) => {
    let item = '';
    
        item += `<div class="cart-Item">
        <img src="${obj._imgSrc}" alt="${obj._description}">
        <div class="about">
          <div class="title">${obj._name}</div>
          <div class="subtitle">${obj._description}</div>
        </div>
        <label for="quantity" class="quantityLabel">Quantity:</label>
        <select name="quantity" id="quantity">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
        <div class="priceSec">
          <div class="item-price">${obj._price}</div>
          <div class="save"><u>Save for later</u></div>
          <div class="item-remove"><u>Remove</u></div>
        </div>
      </div>
      <hr>`
    
    return item
}


// calculating cart total
const cartTotal = () => {
    let itemPrices = document.querySelectorAll('.item-price')
    let total = 0
    for(let i = 0; i < itemPrices.length; i++){
        let itemPrice = itemPrices[i].textContent;
        total = total + Number(itemPrice)
        

    }
    
    return total.toFixed(2)

}


// removing all items from cart

const removeAllButton = document.querySelector('.remove');

removeAllButton.addEventListener('click', function() {
    if(confirm('Are you sure you want to clear all items from your cart?')){
        cartList.length = 0
        itemContainer.innerHTML = '';
        totalAmount.textContent = cartTotal()
        numOfItems.textContent = `Items: ${cartList.length}`
    }
    
    
})

// removing each item
const cartItems = document.querySelectorAll('.cart-Item')
const removeItems = () => {
const removeButtons = document.querySelectorAll('.item-remove');


for(let i = 0; i < removeButtons.length; i++){
   let removeBtn = removeButtons[i]
    removeBtn.addEventListener('click', function(e) {
        
        if(confirm('Are you sure you want to remove this item?')){
            cartList.splice(e, 1)
            itemContainer.innerHTML = ''
            for(let i = 0; i < cartList.length; i++){
                itemContainer.innerHTML += addItemsToCart(cartList[i])
                removeItems()
            }
            totalAmount.textContent = cartTotal()
            numOfItems.textContent = `Items: ${cartList.length}`
            cartTotal()
            

        }
        
        
    })
}
}


