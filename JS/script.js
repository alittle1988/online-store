const kitchen = [];
const cutlerySet = [];
const cutlery = [];
const measuring = [];
const spatulas = [];
const cookingSpoons = [];
const whisks = [];
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
    // cutlery sets
    const blackGoldCutlery = itemFactory('Black and Gold Cutlery', 9.99, 'kitchen', 'Black and gold eating utensil.', './Resources/Images/Kitchen/cutlery/sets/black-gold-cutlery-set.jpeg' );
    const blackCutlery = itemFactory('Black Cutlery Set', 12,99, 'Kitchen', 'All Black cutlery Set', '/Resources/Images/Kitchen/black-cutlery-set.jpeg');
    const blueSilverCutlery = itemFactory('Blue and Silver Cutlery', 12.99, 'Kitchen', 'Black and Silver Cutlery set.', './Resources/Images/Kitchen/sets/blue-silver-cutlery-set.jpeg');
    const graySilverCutlery = itemFactory('Gray and Silver Cutlery set', 12.99, 'Kitchen', 'Gray and Silver Cutlery set', './Resourses/Images/Kitchen/sets/gray-silver-cutlery-set.jpeg');
    const whiteGoldCutlery = itemFactory('White and Gold Cutlery Set', 12.99, 'Kitchen', 'White and Gold Cutlery Set', './Resources/Images/Kitchen/sets/white-gold-cutlery-set.jpeg');
    cutlerySet.push(blackCutlery, blueSilverCutlery, graySilverCutlery, whiteGoldCutlery,blackGoldCutlery);
    // individual Cutlery
    const fork = itemFactory('Fork', 1.99, 'Kitchen', 'Silver Fork', './Resourses/Images/Kitchen/cutlery/individual/silver-fork.jpeg');
    const spoon =itemFactory('Spoon', 1.99, 'Kitchen', 'Silver Spoon', './Resourses/Images/Kitchen/individual/silver-spoon.jpeg');
    const knife = itemFactory('Knife', 1.99, 'Kitchen', 'Silver Knife', './Resourses/Images/Kitchen/individual/silver-knife.jpeg');
    cutlery.push(fork, spoon, knife)
// cooking utenicls
    // messuring
    const measuringCup25 = itemFactory(`1/4 Measuring Cup`, 3.99, 'Kitchen', `1/4 Stainless Steal Measuring Cup`, './Resourses/Images/Kitchen/cooking-utenicls/measuring/_25-measuring-cup.jpeg');
    const measuringCup1 = itemFactory('1 Cup Measuring Cup', 3.99, 'Kitchen', '1 Cup stainless Steel Measuring Cup', './Resourses/Images/Kitchen/cooking-utenicls/measuring/1cup-measuring-cup.jpeg');
    const measuringCup33 = itemFactory(`1/3 Cup Measuring Cup`, 3.99, 'Kitchen', `1/3 Cup Stainless Steal Measuring Cup`, './Resourses/Images/Kitchen/cooking-utencils/measuring/_33-measuring-cup.jpeg');
    const measuringSpoon25 = itemFactory(`1/4 tbs Measuring Spoon`, 2.99, 'Kitchen', `1/4 tbs Stainless Steal measuring spoon`, './Resourses/Images/Kitchen/cooking-utencils/measuring/_25teaspoon-measuring-spoon.jpeg');
    const tableSpoon = itemFactory(' 1 Tbls Measuring Spoon', 2.99, 'Kitchen', '1 Table Spoon Stainless Steal Measuring Spoon', ',/Resourses/Images/Kitchen/cooking-utencils/measuring/tablespoon.jpeg');
    const teaSpoon = itemFactory('1 tsp Measuring Spoon', 2.99, 'Kitchen', ' 1 Teaspoon Stainless Steal Measuring Spoon', './Resourses/Images/Kitchen/cooking-utencils/measuring/teaspoon.jpeg');
    measuring.push(measuringCup25, measuringCup1, measuringCup33, measuringSpoon25, tableSpoon, teaSpoon)
    //spatulas
    const blackSpatula = itemFactory('Black Spatula', 1.99, 'Kitchen', 'All black spatula', './Resourses/Images/Kitchen/cooking-utencils/spatulas/black-spatula.jpeg');
    const blueSpatula = itemFactory('Blue Spatula', 1.99, 'Kitchen', 'All blue spatula', './Resourses/Images/Kitchen/cooking-utencils/spatula/blue-spatula.jpeg');
    const greenSpatula = itemFactory('Green Spatula', 1.99, 'Kitchen', 'All green spatula', './Resourses/Images/Kitchen/cooking-utencils/spatula/green-spatula.jpeg');
    const silverBlueSpatula = itemFactory('Silver and Blue Spatula', 1.99, 'Kitchen', 'Silver spatula with blue handle', './Resourses/Images/Kitchen/cooking-utencils/spatula/silver-blue-spatula.jpeg');
    const woodBlackSpatula = itemFactory('Black and Wood Spatula', 1.99, 'Kitchen', 'Black spatula with a wood handle', './Resourses/Images/Kitchen/cooking-utencils/spatula/wood-black-spatula.jpeg');
    spatulas.push(blackSpatula, blueSpatula, greenSpatula, silverBlueSpatula, woodBlackSpatula)
    // cooking spoons
    const blackSpoon = itemFactory('Black Cooking Spoon', 1.99, 'Kitchen', 'All black cooking spoon', './Resourses/Images/Kitchen/cooking-utencils/spoons/black-spoon.jpeg');
    const blueWhiteSpoon = itemFactory('Blue and White Cooking Spoon', 1.99, 'Kitchen', 'Blue and White cooking spoon', './Resourses/Images/Kitchen/cooking-utencils/spoons/blue-white-spoon.jpeg');
    const silverSpoon = itemFactory('Silver Cooking Spoon', 1.99, 'Kitchen', 'Sliver cooking spoon with black handle', './Resourses/Images/Kitchen/cooking-utencils/spoons/sivler-spoon.jpeg');
    const holeSpoon = itemFactory('Sliver Cooking Spoon with holes', 1.99, 'Kitchen', 'All sliver cooking spoon with holes', './Resourses/Images/Kitchen/cooking-utencils/spoons/spoon-with-holes.jpeg');
    const woodSpoon = itemFactory('Wooden Cooking Spoon', 1.99, 'Kitchen', 'Wooden cooking spoon', './Resourses/Images/Kitchen/cooking-utencils/spoons/wooden-spoon.jpeg');
    cookingSpoons.push(blackSpoon, blueWhiteSpoon, silverSpoon, holeSpoon, woodSpoon)
    //whisks
    const blackWhisk = itemFactory('Black Whisk', 1.99, 'Kitchen', 'All black whisk', './Resourses/Images/Kitchen/cooking-utencils/whisks/black-whisk.jpeg');
    const rainbowWhisk = itemFactory('Rainbow Whisk', 1.99, 'Kitchen', 'Rainbow whisk with silver handle', './Resourses/Images/Kitchen/cooking-utencils/whisks/rainbow-whisk.jpeg');
    const redWhisk = itemFactory('Red Whisk', 1.99, 'Kitchen', 'Silver whisk with red handle', './Resourses/Images/Kitchen/cooking-utencils/whisks/red-whisk.jpeg');
    const silverWhisk = itemFactory('Silver Whisk', 1.99, 'Kitchen', 'All silver whisk', './Resourses/Images/Kitchen/cooking-utencils/whisks/silver-whisk.jpeg');
    const whiteGoldWhisk = itemFactory('White and Gold Whisk', 1.99, 'Kitchen', 'Gold whisk with white handle', './Resourses/Images/Kitchen/cooking-utencils/whisks/white-gold-whisk.jpeg');
    whisks.push(blackWhisk, rainbowWhisk, redWhisk, silverWhisk, whiteGoldWhisk);




kitchen.push(cutlery, cutlerySet, measuring, spatulas, cookingSpoons,whisks)

//adding living room
const couch = itemFactory('Couch', 399.99, 'Living Room', 'Gray Sectional Couch', './Resources/Images/Livingroom/grayCouch.jpeg' );


// adding bedroom
const blackBedFrame = itemFactory('Black Bedframe', 99.99, 'bedroom', 'Black bedframe with headboard', './Resources/Images/Bedroom/bedframes/BlackBedFrame.jpeg' );


// assigning deal location and info
const dealCards = document.querySelectorAll('.deals');
const kitchenMain = document.querySelectorAll('.kitchen')



//adding deal to deals
deals.push(blackGoldCutlery)
deals.push(couch)
deals.push(blackBedFrame)

const setCardFunc = function(Array) {

    for(let i = 0; i < Array.length; i++) {
        const card = Array[i].children
        let Img = card[0]
        Img.src = deals[i]._imgSrc
        Img.alt = deals[i]._description
        let cardBody = card[1].children
        cardBody[0].textContent = deals[i]._name
        cardBody[1].textContent = `Price: ${deals[i]._price}`
        cardBody[2].textContent = `Description: ${deals[i]._description}`
        console.log(kitchen)
        
}
}

setCardFunc(dealCards)
    


