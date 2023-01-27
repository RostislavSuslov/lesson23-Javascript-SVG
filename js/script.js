let floorCell = document.querySelector('#floor');
let flatsCell = document.querySelector('#flats');
const floors = document.querySelectorAll('.floor');

console.log(floorCell);
console.log(flatsCell);
console.log(floors);


floors.forEach( item => {
    console.log(item);
 
    item.addEventListener('mouseover', ()=> {
        
        
        let dataFloor = item.getAttribute('data-floor')
        let dataFlats = item.getAttribute('data-flats')
        console.log(`Номер этажа: ` + dataFloor + `    ` + `Квартир в продаже: ` + dataFlats);

        floorCell.innerText = dataFloor;
        flatsCell.innerText = dataFlats;
    })
})



