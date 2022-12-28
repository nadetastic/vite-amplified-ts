export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "storagecategory82a1c5d2": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "adminGroupRole": "string",
            "subsGroupRole": "string"
        }
    },
    "storage": {
        "storage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "analytics": {
        "storage": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}