# Backend-Agency-Client

## Technologies Used

- [Node](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [Mongodb](https://www.mongodb.com/)

## Development Process
### Install Dependencies
 * [Node 0.10.x](https://nodejs.org/en/download/)
```sh
sudo apt install nodejs
```
 
### Run locally
node server.js
```
### Local deployment
While node is running, visit the locally running server at *http://localhost:8080/*


### API Documentation


**Endpoint POST**

<http://localhost:8080/api/create-agency-client>

**JSON body**
{
   
        "agencyName": "dummy",
        "agencyAddress1": "abc",
        "agencyAddress2": "cde",
        "agencyState": "xyz",
        "agencyCity": "xyz",
        "agencyPhoneNumber": "123456789",
  
        "clientName": "fg",
        "clientEmail": "cde@gmail.com",
        "clientPhoneNumber": "12345",
        "clientTotalBill": 9
    
}

**Endpoint PUT**

<http://localhost:8080/api/updateClient/63d8c18564f38689245d047a>
**jwt token**
token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDhkNzg2NzlkMjQ5NmFkN2UxMzBlMiIsImlhdCI6MTY3NTE1NTMzNCwiZXhwIjoxNjc1NDE0NTM0fQ.pLeiMO2yUC2D5EPaur2GC03LJ8WnZhuujt1IU0LyaGs

**JSON body**
 {
        "clientName": "c",
        "clientEmail": "abc@gmail.com",
        "clientPhoneNumber": "12345",
        "clientTotalBill": 20
 }
 
 
 **Endpoint GET**
 
 **jwt token**
token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDhkNzg2NzlkMjQ5NmFkN2UxMzBlMiIsImlhdCI6MTY3NTE1NTMzNCwiZXhwIjoxNjc1NDE0NTM0fQ.pLeiMO2yUC2D5EPaur2GC03LJ8WnZhuujt1IU0LyaGs

 <http://localhost:8080/api/top-clients>
 
 
 
 
