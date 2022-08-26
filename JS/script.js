const kitchenWare = [];
const livingArea = [];
const bathRoom = [];
const bedRoom = [];
const garage = [];

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


const fork = itemFactory('fork', 1.99, 'kitchen', 'Silver eating utensil', '/Resources/Images/Kitchen/fork.jpeg' );
const couch = itemFactory('Couch', 399.99, 'Living Room', 'Green Couch', '/Resourses/Images/Livingroom/GreenCouch.jpeg' )





