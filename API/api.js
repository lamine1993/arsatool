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