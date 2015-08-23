.﻿# hometrack

**Published on :**
http://housetrack.herokuapp.com

**Example:**
http://housetrack.herokuapp.com/properties?filters={"workflow":"completed"}

http://housetrack.herokuapp.com/properties?filters={"workflow":"pending"}

http://housetrack.herokuapp.com/properties?filters={"readyState":"init"}

http://housetrack.herokuapp.com/properties?filters={"readyState":"init", "workflow": "completed"}

**Headers:** 
Accept-version : 1 (default)

**Validation:**
Assuming valid enums for readyState as "init", "complete",
for type as "htv", "avm"
and for workflow as "pending", "completed", "cancelled"
([schemas/payload.js](https://github.com/mkokabi/hometrack2/blob/master/schemas/payload.js))

**API Doc**
Swagger Api document is available [here](http://housetrack.herokuapp.com/api-docs). 
As the online version of SwaggerUI didn't support the early version used here, I attached following screenshots of the API documents and the test.
*Entering the api-docs uri in Swagger Ui and clicking on Explore*
![step 1](https://github.com/mkokabi/hometrack2/blob/master/images/Capture-HouseTrack-Api-Swagger-001.PNG)
*The only resource properties will be displayed*
![step 2](https://github.com/mkokabi/hometrack2/blob/master/images/Capture-HouseTrack-Api-Swagger-002.PNG)
*Clicking on /properties, entering the filters and body*
![step 3](https://github.com/mkokabi/hometrack2/blob/master/images/Capture-HouseTrack-Api-Swagger-003.PNG)
Clicking on 'Try it out!' will send the request and display the response.
![step 4](https://github.com/mkokabi/hometrack2/blob/master/images/Capture-HouseTrack-Api-Swagger-004.PNG)