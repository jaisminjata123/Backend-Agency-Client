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

