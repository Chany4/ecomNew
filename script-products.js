function CreateItem(id,name,category,image,description,price,quantity){
    this.id = id;
    this.name = name;
    this.category = category;
    this.color = color;
    this.image = image;
    this.description= description;
    this.price = price;
    this.quantity = quantity;
}

// Leathr bags 
let item1 = new CreateItem("1",'Poison Ivy','leather','green','https://chany4.github.io/ecomWEB/images/leather/Christian%20Dior%20Micro%20Lady%20Dior%20Green%20Quilted%20Cannage%20Lambskin%20Cd%20Charm%20Mini%20Bag.jpeg','images/leather/Christian Dior Micro Lady Dior Green Quilted Cannage Lambskin Cd Charm Mini Bag','R 1 780.00');

let item2 = new CreateItem(2,'Butterflix','leather','blue','https://chany4.github.io/ecomWEB/images/leather/result%20(2).png','Blue leather bag with butterfly chain charms with sleek strap','R700');

let item3 = new CreateItem(3,'Abyss','leather','black','https://chany4.github.io/ecomWEB/images/leather/result%20(3).png','Black leather bag with white star center and sleek strap','R600');

let item4 = new CreateItem(4,'Swan','leather','pink','https://chany4.github.io/ecomWEB/images/leather/result%20(4).png','Pink leather bag with silver heart sharms and sleek strap','R1200');

let item5 = new CreateItem(5,'Pink Whisper','leather','pink','https://chany4.github.io/ecomWEB/images/leather/result%20(5).png','Pink leather bag with butterfly clasp and sleek strap','R800');

let item6 = new CreateItem(6,'Verdant Luxe','leather','green','https://chany4.github.io/ecomWEB/images/leather/result%20(6).png','Chunky Green leather bag with thick buckle','R1300');
// fix item 7

let item7 = new CreateItem(7,'Pearl Essence','leather','green','https://chany4.github.io/ecomWEB/images/leather/result%20(7).png','Beautiful white leather bag with thin strap','R1289');

//Crochet Bags

let item8 = new CreateItem(8,'','crochet','green','https://chany4.github.io/ecomWEB/images/crochets/Crochet%20Patterns%20For%20Your%20New%20Bags%20(34%20Pics)%20(2).png','Beautiful white knitted bag with thin strap','R1289');


let items = [item1,item2,item3,item4,item5,item6,item7,item8]

// let tab = document.querySelector('.table');

// function call (){
    //     for(i in items){
        //     console.log(items);
        //     return JSON.stringify(items)
// }
// }

// tab.innerHTML = call();

localStorage.setItem('items',JSON.stringify(items))   
// json allows the browser to read the objects
// autopopulating don't work in JavaScript


let main = document.querySelector('main');
items.forEach(item => {
    main.innerHTML += `
    <div>
    <img src="${item.image}">
    <p>${item.price}</p>
    <button id="viewMore">View More</button>
    <button class="purchase" value= '${item.id}'>Purchase</button>
    </div>
    `
});


const cart = [ ]

const purchbtns = document.querySelectorAll('.purchase')
// selects all the buttons 
//must declare after you hav created the buttons

function addToCart(id){
    console.log(id);
    //NB destructuring
    let [item] = items.filter(object => object.id === +id)[0]
    purchasedItems.push(item)
    localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems))
    // purchasedItems.pus(something)


}

purchbtns.forEach(button=>{
    // for each is self explanatory
    button.addEventListener('click', (event)=>{
        console.log(event.target.value);
        // targets the button that was clicked
        // value shows which button was clicked
        // alert('Hi')
        //to check if the button is being clicked
    })
})



//figure out how to delete duplicates