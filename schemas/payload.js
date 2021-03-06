﻿module.exports = {
    "$schema": "http://schema.hoemtrack.com/draft-04/payloadRequest",
    "id": "http://jsonschema.net",
    "type": "object",
    "properties": {
        "payload": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "address": {
                            "type": "object",
                            "properties": {
                                "buildingNumber": {
                                    "type": "string"
                                },
                                "lat": {
                                    "type": "number"
                                },
                                "lon": {
                                    "type": "number"
                                },
                                "postcode": {
                                    "type": "string"
                                },
                                "state": {
                                    "type": "string"
                                },
                                "street": {
                                    "type": "string"
                                },
                                "suburb": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "buildingNumber",
                                "lat",
                                "lon",
                                "postcode",
                                "state",
                                "street",
                                "suburb"
                            ]
                        },
                        "propertyTypeId": {
                            "type": "integer"
                        },
                        "readyState": {
                            "type": "string",
                            "enum" : ["init", "complete"]
                        },
                        "reference": {
                            "type": "string"
                        },
                        "shortId": {
                            "type": "string"
                        },
                        "status": {
                            "type": "integer"
                        },
                        "type": {
                            "type": "string",
                            "enum" : ["htv", "avm", ]
                        },
                        "workflow": {
                            "type": "string",
                            "enum" : ["pending", "completed", "cancelled"]
                        }
                    },
                    "required": [
                        "address",
                        "propertyTypeId",
                        "readyState",
                        "reference",
                        "shortId",
                        "status",
                        "type",
                        "workflow"
                    ]
                }                
            ],
        }
    },
    "required": [
        "payload"
    ]
};