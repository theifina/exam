"use strict";

// const obj = {
//     name: 'Lia',
//     age:20,
//     city: "Moscow",
//     hobby: {
//         hobby1: "Books",
//         hobby2: "Travel",
//         hobby3: "Art"
//     }
// };
//
// for (let key in obj){
//      if ( typeof obj[key] !=='object') {
//         console.log(`${key} - ${obj[key]}`)
//     } else {
//         for (let newKey in obj[key]){
//             console.log(`${newKey} - ${obj[key][newKey]}`)
//         }
//     }
// }

//
// let arrOfSomeElse = [['banana', 2, 3, false, 5], [6, 7, 8], ['56', 10]];
//
// let sum = 0;
//
// const task = () => {
//     for (let i = 0; i < arrOfSomeElse.length; i++){
//         console.log(`Текущий элемент главного массива [${arrOfSomeElse[i]}]`)
//             const arr = arrOfSomeElse[i];
//          for(let j = 0; j < arr.length; j++){
//           console.log(`Текущий элемент вложенного массива  ${arr[j]}`)
//              sum = sum + arr[j]
//         }
//     }
//     return sum
// }
// console.log(task())


// const arr =[14,12,31,55,71,23,4,11,];
//
// const arr2 = arr.map((elem) =>{
//     return elem +20
// });
// console.log(arr2);


function Desktop(model, size, ram, ssd, hdd, videocard, color, release, price) {
    this.desktopModel = model;
    this.desktopSize = size;
    this.desktopRam = ram;
    this.desktopSsd = ssd;
    this.desktopHdd = hdd;
    this.desktopVideocard = videocard;
    this.desktopColor = color;
    let desktopRelease = release;
    this.desktopPrice = price;
    this.getPrice2010 = function () {
        if (desktopRelease > 2010) {
            console.log(this.desktopPrice)
        } else {
            console.log('Эта модель ниже 2010 года!')
        }
    }
}

const mac = new Desktop('air', '2980px', '', 'new', 'no', 'old', 'purple', '2021', '100000');
const toshiba = new Desktop('1273', '1980px', '', 'new', 'old', 'old', 'grey', '2008', '1000');
const macbook = new Desktop('pro', '1980px', '', 'new', 'new', 'new', 'rosegold', '2020', '1500');

mac.getPrice2010()


