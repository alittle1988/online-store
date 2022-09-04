const kitchenWare = [];
const livingArea = [];
const bathRoom = [];
const bedRoom = [];
const garage = [];
const deals= [];

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


const blackGoldCutlery = itemFactory('Black and Gold Cutlery', 1.99, 'kitchen', 'Black and gold eating utensil.', './Resources/Images/Kitchen/cutlery/black-gold-cutlery-set.jpeg' );
const couch = itemFactory('Couch', 399.99, 'Living Room', 'Gray Sectional Couch', './Resources/Images/Livingroom/grayCouch.jpeg' )
const blackBedFrame = itemFactory('Black Bedframe', 99.99, 'bedroom', 'Black bedframe with headboard', './Resources/Images/Bedroom/bedframes/BlackBedFrame.jpeg' )
deals.push(blackGoldCutlery)
deals.push(couch)
deals.push(blackBedFrame)




// assigning deal location and info
const dealCards = document.querySelectorAll('.deal-card');


for(let i = 0; i < dealCards.length; i++) {
    const card = dealCards[i].children
    let dealImg = card[0]
    dealImg.src = deals[i]._imgSrc
    dealImg.alt = deals[i]._description
    let cardBody = card[1].children
    cardBody[0].textContent = deals[i]._name
    cardBody[1].textContent = deals[i]._price
    cardBody[2].textContent = deals[i]._description
    
    
}
    


