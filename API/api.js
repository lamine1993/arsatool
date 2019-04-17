const BASE_URL="http://10.150.229.139:9000/api"

export  function getculture(){
  return fetch('http://10.150.229.139:9000/api/cultures')
  .then((response) => console.log(response))
  
  .catch((error) => {
    console.log(error);
  });
}

export function registration() {

  /*return fetch('http://10.150.229.139:9000/api/register',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body:{
      "activated": true,
      "authorities":"ROLE_AGRI",
      "createdBy":null,
      "createdDate":null,
      "email":"sarrlmng@gmail.com", //form
      "firstname":null, //form
      "langKey":null,
      "lastModifiedBy":null,
      "lastModifiedDate":null,
      "lastName":"sarrl", //form
      "login":"sarrl", //form
      "password":"sarr" //form

    }
  })
  .then((response) => console.log("envoi reussi"+response))
  
  .catch((error) => {
    console.log("envoi non "+error);
  });
  */
}

export function getImageFromApi(imagePath){
  return 'http://10.150.216.126:8080/api/imagesRessource/'+imagePath
}


export function login() {
  return fetch('http://10.150.229.139:9000/api/register',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body:{
      "activated": true,
      "authorities":"ROLE_AGRI",
      "createdBy":null,
      "createdDate":null,
      "email":"sarr@gmail.com", //form
      "firstname":null, //form
      "langKey":null,
      "lastModifiedBy":null,
      "lastModifiedDate":null,
      "lastName":"sarr", //form
      "login":"sarr", //form
      "password":"sarr", //form

    }
  })
  .then((response) => console.log(response))
  
  .catch((error) => {
    console.log(error);
  });
}



export function getImageAttaques(id){
   return fetch('http://10.42.0.1:8080/api/imageAttaques/'+id)
   .catch((error) => {
   })
   .then((res) => res.json() )
}

export function getZones2(){ 
    var that = this; 
    var zones = []; 
    fetch('api/environment/zone/1') 
    .then(res => res.json()) 
    .then((json) => { 
        Promise.all(
          json.map(
          element => fetch('api/zone/point/' + element.zoneID) 
          .then(res => res.json()) 
          ) 
        ).then(datas => { 
          json.forEach((element, i) => { 
            zones[element.zoneID] = element 
            zones[element.zoneID].points = datas[i] 
          }) 
          console.log(zones); 
          zones.forEach(function(response){ 
             that.makeZone(response.name,response.zoneID,response.points); 
          }) 
        }) 
    }); 
}


export function getAttaques(){ 

  fetch('http://10.150.216.126:8080/api/listattaquecomplet/1/FEUILLES') 
  .then((res) => res.json())
  .then(json=>console.log("json "+json));
}

 //images={} 
     /* Promise.all(
        json.map(
        element => fetch('http://10.150.216.126:8080/api/imageAttaques/'+element.id) 
        .then(res => res.json()).then(resPar=>console.log(resPar)) 
        ) 
      ).then(datas => { 
        console.log("datas "+ datas); 
        json.forEach((element, i) => { 
          console.log("element"+ element)
          //attaques[element.zoneID] = element 
          //attaques[element.zoneID].points = datas[i] 
        }) 
       // zones.forEach(function(response){ 
        //   that.makeZone(response.name,response.zoneID,response.points); 
        //}) 
      })*/