# How to run and deploy your amplify project on your AWS Account

* After you git clone this repository, run **amplify configure** in root directory.
  * region: Select the best region you want
  * username: Use default
  * The console would open a webpage to prompt you to create a User for this application. 
    Stick with default configuration for creating the user.
  * Download the accessKeyId, SecretAccessKeyId for future references and copy them to console prompts
  * Profile Name: Any name, suggested name --> dev.
  * Till now **amplify configure** done, could check using **amplify status** and you would see there are currently no resources attached.
  
* Type **amplify add api** in root directory (The addition of AWS DynamoDB to store user features, store features, and comments)
  * Select GraphQL
  * Provide API Name: Any name
  * Authorization type for the API --> Amazon Cognito User Pool
  * Security Configuration --> Default Configuration
  * How do you want to sign in? --> Email
  * Do you want to configure advanced settings for the GraphQL API? --> No
  * Do you have an annotated GraphQL schema? --> No
  * Do you want a guided schema creation --> No
  * Provide a custom type name --> MyType
  * Copy contents in *public/proposedschema.graphql* to *⁨amplify⁩/⁨backend⁩/api⁩/yuema/schema.graphql*
  
*⁩ Type **amplify add storage** in root directory (The AWS S3 Storage for Multimedia files, for example, Avatar image):
  * Select Service --> Content
  * Provide a friendly name : Type any name
  * Bucket Name: Default
  * Who should have access: Auth users only. (Maybe Auth and Guests?)
  * Functions for authenticated users: All functionalities
  * Do you want to have a Lambda Trigger for your bucket --> No

* Type **amplify add hosting** in root directory (Add the hosting container for main webpage):
  * Environmental setup --> DEV
  * Hosting bucket name --> default
  * index doc for the html --> index.html
  * error doc for the html --> index.html
  
* Type **amplify status** and you should see *Storage,Auth,Api,Hosting*. In total there should be 4 resources.
* Type **amplify push** to push all the resources on cloud:
  * Select yes for all 
  
* Run **npm start** and you should see the website working
 
 
