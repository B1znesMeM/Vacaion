document.querySelector('#body');

// CheckRooms();

// const myPromis = new Promise(function(resolve, reject) {
//     console.log('Promise created');
//     setTimeout(() => {
//         const response = true;

//         if(response){

//             let massege = 'SUCCESS';
//             resolve(massege);

//         }
//         else {

//             let massege = 'Failed'
//             reject(massege);

//         }
//     }, 1000)
// });

//     myPromis.then(function(data) {

//         console.log('Then');
//         console.log(data);

//     }).catch(function(data){

//         console.log('Catch');
//         console.log(data);

//     })



CheckRooms()
.then(checkTickets)
.then(succes)
.catch(failed);

function CheckRooms(){
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Проверка номеров в отеле 📢");
            const availableRooms = true;
            console.log(availableRooms);
    
            if(availableRooms) {
                resolve("Номера есть! :)");
            }
            else {
                reject("Номеров нет. :(");
            }
        }, 1500)
    })
}

function checkTickets(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log(data);
            console.log("Проверяем авиабилеты... ✈");
            const availableTickets = true;

            if(availableTickets) {
                let massege = "Авиабилеты есть! :)";
                resolve(massege);
            }
            else {
                let massege = "Авиабилетов нету. :(";
                reject(massege);
            }
        },1000)
    });
}

function succes(data) {
    console.log("--- Then 2 ---");
    console.log(data);
    console.log("Едем в отпуск 📢:)")
}

function failed(data) {
    console.log("--- Catch ---");
    console.log(data);
    console.log("Отпуск отменяется 😢")
}