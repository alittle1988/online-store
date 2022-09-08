const kitchen = [];
const cutlery = [];
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


const blackGoldCutlery = itemFactory('Black and Gold Cutlery', 10.99, 'kitchen', 'Black and gold eating utensil.', './Resources/Images/Kitchen/cutlery/black-gold-cutlery-set.jpeg' );
const couch = itemFactory('Couch', 399.99, 'Living Room', 'Gray Sectional Couch', './Resources/Images/Livingroom/grayCouch.jpeg' );
const blackBedFrame = itemFactory('Black Bedframe', 99.99, 'bedroom', 'Black bedframe with headboard', './Resources/Images/Bedroom/bedframes/BlackBedFrame.jpeg' );
const blackCutlery = itemFactory('Black Cutlery Set', 12,99, 'Kitchen', 'All Black cutlery Set', '/Resources/Images/Kitchen/black-cutlery-set.jpeg');
const blueSilverCutlery = itemFactory('Blue and Silver Cutlery', 12.99, 'Kitchen', 'Black and Silver Cutlery set.', './Resources/Images/Kitchen/blue-silver-cutlery-set.jpeg');
const graySilverCutlery = itemFactory('Gray and Silver Cutlery set', 12.99, 'Kitchen', 'Gray and Silver Cutlery set', './Resourses/Images/Kitchen/gray-silver-cutlery-set.jpeg');
const whiteGoldCutlery = itemFactory('White and Gold Cutlery Set', 12.99, 'Kitchen', 'White and Gold Cutlery Set', './Resources/Images/Kitchen/white-gold-cutlery-set.jpeg')
deals.push(blackGoldCutlery)
deals.push(couch)
deals.push(blackBedFrame)
cutlery.push(blackCutlery, blueSilverCutlery, graySilverCutlery, whiteGoldCutlery,blackGoldCutlery)
kitchen.push(cutlery)



// assigning deal location and info
const dealCards = document.querySelectorAll('.deals');

const setCardFunc = function(Array) {

    for(let i = 0; i < Array.length; i++) {
        const card = Array[i].children
        let dealImg = card[0]
        dealImg.src = deals[i]._imgSrc
        dealImg.alt = deals[i]._description
        let cardBody = card[1].children
        cardBody[0].textContent = deals[i]._name
        cardBody[1].textContent = `Price: ${deals[i]._price}`
        cardBody[2].textContent = `Description: ${deals[i]._description}`
        console.log(kitchen)
        
}
}

setCardFunc(dealCards)
    


