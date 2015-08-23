hometrack
=========

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

**API Doc:**
Api document is available at [/api-docs](http://housetrack.herokuapp.com/api-docs) and [api-docs/properties](http://housetrack.herokuapp.com/api-docs/properties). 
Currently, thr swagger-ui is not included so the [online-swagger-ui](http://petstore.swagger.io/) can be used to demonstrate our Api-doc. The api-doc url should be set as http://housetrack.herokuapp.com/api-docs, then Explore button should be clicked.
The following screenshots shows the API documents and the test.

*Entering the api-docs uri in Swagger Ui and clicking on Explore*
![step 1](https://github.com/mkokabi/hometrack2/blob/master/images/Capture-HouseTrack-Api-Swagger-001.PNG)
*The only resource (properties) and supported method will be displayed  *
![step 2](https://github.com/mkokabi/hometrack2/blob/master/images/Capture-HouseTrack-Api-Swagger-002.PNG)
*Clicking on /properties will show the parameters and allow trying it. Entering the filters and body*
![step 3](https://github.com/mkokabi/hometrack2/blob/master/images/Capture-HouseTrack-Api-Swagger-003.PNG)
*Clicking on 'Try it out!' will send the request and display the response.*
![step 4](https://github.com/mkokabi/hometrack2/blob/master/images/Capture-HouseTrack-Api-Swagger-004.PNG)
