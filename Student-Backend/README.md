
# Student-Backend Api
# Endpoint is /student 

--------------------------------------------------------------

## Method Get

### Test
``` curl -X GET localhost:8000/student | jq ```

### Response
```
 "success": true,
    "data": [
        {
            "address": {
                "street": "mongogatan",
                "zipcode": 67676,
                "city": "växjö"
            },
            "_id": "5eb031c5b5066f39ccf4733f",
            "email": "Ragnar@hotmail.com",
            "name": "knut",
            "__v": 0
        }
```
#### Status 200 ok

--------------------------------------------------------------

## Method Get by ID

### Test
``` curl -X GET localhost:8000/student/5eb031c5b5066f39ccf4733f ```

### Response
```
 "success": true,
    "data": [
        {
            "address": {
                "street": "mongogatan",
                "zipcode": 67676,
                "city": "växjö"
            },
            "_id": "5eb031c5b5066f39ccf4733f",
            "email": "Ragnar@hotmail.com",
            "name": "knut",
            "__v": 0
        }
```
#### Status 200 ok

--------------------------------------------------------------

## Method Get by Query string

### Test
``` curl -i -X GET localhost:8000/student/?name=knut ```

### Response
```
 "success": true,
    "data": [
        {
            "address": {
                "street": "mongogatan",
                "zipcode": 67676,
                "city": "växjö"
            },
            "_id": "5eb031c5b5066f39ccf4733f",
            "email": "Ragnar@hotmail.com",
            "name": "knut",
            "__v": 0
        }
```
#### Status 200 ok

--------------------------------------------------------------

## Method POST

### Test
```
curl -i -X POST -H "Content-Type:application/json" localhost:8000/student -d 
'{
  "email": "coolboy@hotmail.com",
  "name": "kalle",
  "address":{ 
	"street": "coolstreet",
	"zipcode":"1337",
	"city": "Las Vegas"
	}
}'
```
### Response
```
 {
    "success": true,
    "id": "5eb128cc1970b541e8df98e9",
    "message": "created!"
    }
```
#### Status 201 Created

--------------------------------------------------------------

## Method PUT by Id

### Test
```
curl -i -X PUT -H "Content-Type:application/json" localhost:8000/student/5eb0322cb5066f39ccf47342  -d 
'{
  "email": "coolboy@hotmail.com",
  "name": "kalle",
  "address":{ 
	"street": "coolstreet",
	"zipcode":"1337",
	"city": "Vegas"
	}
}'
```
### Response
```
 { 
    "success":true,
    "id":"5eb0322cb5066f39ccf47342", 
    "message":"Student updated!"
    }
```
#### Status 200 Ok

--------------------------------------------------------------

## Method DELETE by Id

### Test

``` curl -i -X DELETE -H "Content-Type:application/json" localhost:8000/student/5eb0322cb5066f39ccf47342  ```

### Response
```
{"success":true,
"data":{
  "address":{
    "street":"coolstreet",
    "zipcode":1337,
    "city":"mongoVegas"},
  "_id":"5eb0322cb5066f39ccf47342",
  "email":"coolboy@hotmail.com",
  "name":"kalle",
  "__v":0}}

```
#### Status 200 Ok

--------------------------------------------------------------

