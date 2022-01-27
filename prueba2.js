let values =  {
    1: {
        carrier: "CCH",
        service: "DEX",
    },
    17: {
        carrier: "CHP",
        service: "express",
    }
}
// JSON
let json = { 
            data: {
                BUIN: {
                    limit: 1,
                    over_carrier_service_id: 17,
                    under_carrier_service_id: 17
                },
                LAJA: {
                    limit: 1,
                    over_carrier_service_id: 1,
                    under_carrier_service_id: 1
                },
                LEBU: {
                    limit: 1,
                    over_carrier_service_id: 1,
                    under_carrier_service_id: 1
                },
                LOTA: {
                    limit: 1,
                    over_carrier_service_id: 17,
                    under_carrier_service_id: 17
                }
            }
        }


console.log(0, values[1])
//         // console.log(1, json)
//         // console.log(2, json)
//         for(prop in json){

//             //  console.log(prop);
//             console.log(0,json[prop]);
//             // console.log(1,json[prop].BUIN);
        
//         // }

//         }
//         const returnedTarget = Object.assign(json.data, json.limit);
//         console.log(3, returnedTarget)

// for(let elemento of Object.keys(returnedTarget)){
//     console.log(1, elemento)
// }

//  for(propiedad in json){
    // console.log(888,Object.values(json));

    //tratar de agregar la propiedad de over y under y eliminar las otras ...

     for (prop in json) {
        console.log(1,json[prop])
        let data = json[prop]

       let prueba= 
console.log(44, prueba);
console.log(222, data);
        
        for (over in values) {
            console.log(2,values)
            let overJson = values;
            
            console.log(8,overJson);

    
    //         let n;
    //          let overvalues= values[n];
    //  console.log( 4,"bueno"+ values[n]);
            
      if (overJson==17) {
      console.log(10,overvalues);
        
    }else{
       console.log("esta malo")
    }
}}