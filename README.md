# Student-U1

## Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar.

Min webbläsare signalerar till serven som hostar webbplatsen. Browsern kommunicerar sedan att servern ska skicka över alla filer och allt innehåll som finns på webbplatsen, till exempel bilder, video och texter. Detta görs genom HTTP-request.

Använder  http://www.smp.se/kultur-noje/

Webläsaren hämtar path /kultur-noje från servern och visar.
Den använder metoden get och post för att hämta allt innehåll på sidan.
Jag får massa olika 200 response koder och en 204.
Mycket av det som postas är body om reklam





## Beskriv HTTP-protokollets vanligaste metoder och vad de gör.

GET: Klienten ber servern att hämta innehåll, till exempel en HTML-sida eller en bild. Detta är det vanligaste HTTP-kommandot.

POST: Klienten ber servern att lagra viss information, till exempel i samband med uppladdning av fil eller då ett formulär skickas.

PUT: Skapar en modifierad version av din request, som byter ut orginalet med den nya.

DELETE: Klienten säger åt servern att ta bort en fil.

PATCH: Fungerar som put men du kan bara ändra orginal innehållet, inte lägga till saker som förstör orginal modellen.


## "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas.

Den består av schema 'http' sen authority 'localhost:3000', '/users' är path och efter ? är query där man söker efter något specifikt.

## På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.

Genom query parameter

``` curl -i -X GET localhost:8000/student/?name=knut ```

Genom path parameter

``` curl -X GET localhost:8000/student/5eb031c5b5066f39ccf4733f ```

Genom body
```
curl -X POST localhost:8000/student 
     -H 'Authorization: Bearer <ACCESS_TOKEN>" '
     -H 'Content-Type: application/json" '
     -d '{
       "message": "Review completed!",
       "item": {
         "type": "file",
         "id": 426436
       }
     }'
```