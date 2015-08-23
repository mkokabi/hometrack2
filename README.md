# hometrack

Published on :
http://housetrack.herokuapp.com

Example:
http://housetrack.herokuapp.com/rest/properties?filters={"workflow":"completed"}

http://housetrack.herokuapp.com/rest/properties?filters={"workflow":"pending"}

http://housetrack.herokuapp.com/rest/properties?filters={"readyState":"init"}

http://housetrack.herokuapp.com/rest/properties?filters={"readyState":"init", "workflow": "completed"}

Headers: 
Accept-version : 1 (default)

Validation:
Assuming valid enums for readyState as "init", "complete",
for type as "htv", "avm"
and for workflow as "pending", "completed", "cancelled"
([schemas/payload.js](https://github.com/mkokabi/hometrack2/blob/master/schemas/payload.js))
