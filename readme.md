### config file in config folder -> env variables

NODE_ENV=development
PORT=5000
MONGO_URI= enter yout mongo url path

FILE_UPLOAD_PATH=./public/uploads
MAX_FILE_UPLOAD=1000000

JWT_SECRET= your secret
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30

SMTP_HOST= your mail provider
SMTP_PORT=your mail port
SMTP_EMAIL=
SMTP_PASSWORD=
FROM_EMAIL=
FROM_NAME=

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->

## Endpoints

- [Bootcamps](#bootcamps)
  1. [Get all Bootcamps](#1-get-all-bootcamps)
  1. [Get Single Bootcamp](#2-get-single-bootcamp)
  1. [Create New Bootcamp](#3-create-new-bootcamp)
  1. [Update Single Bootcamp](#4-update-single-bootcamp)
  1. [Delete Bootcamp](#5-delete-bootcamp)
  1. [Upload Photo](#6-upload-photo)
- [Courses](#courses)
  1. [Get All Courses](#1-get-all-courses)
  1. [Get Courses For Bootcamp](#2-get-courses-for-bootcamp)
  1. [Get single Course](#3-get-single-course)
  1. [Create Bootcamp Course](#4-create-bootcamp-course)
  1. [Update a Course](#5-update-a-course)
  1. [Delete a Course](#6-delete-a-course)
- [Authentication](#authentication)
  1. [Register User](#1-register-user)
  1. [Login User](#2-login-user)
  1. [Get logged in User via Token](#3-get-logged-in-user-via-token)
  1. [Forgot Password](#4-forgot-password)
  1. [Reset Password](#5-reset-password)
  1. [Update User Details](#6-update-user-details)
  1. [Update Password](#7-update-password)
  1. [Logout user](#8-logout-user)
- [Users](#users)
  1. [Get All Users](#1-get-all-users)
  1. [Get Single User](#2-get-single-user)
  1. [Create User](#3-create-user)
  1. [Update User](#4-update-user)
  1. [Delete User](#5-delete-user)
- [Reviews](#reviews)
  1. [Get All Reviews](#1-get-all-reviews)
  1. [Get Reviews For Bootcamp](#2-get-reviews-for-bootcamp)
  1. [Get Single Review](#3-get-single-review)
  1. [Add Review For Bootcamp](#4-add-review-for-bootcamp)
  1. [Update Review](#5-update-review)
  1. [Delete Review](#6-delete-review)

---

## Bootcamps

Bootcamps CRUB functionality

### 1. Get all Bootcamps

Fetch all bootcamps from database. Includes pagination ,filtering etc.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps
```

### 2. Get Single Bootcamp

Get single bootcamp by id.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/1
```

### 3. Create New Bootcamp

Add new bootcamp to database.Must be authenticated and must be admin or publisher .

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "name": "sample test22",
		"description": "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
		"website": "https://devworks.com",
		"phone": "(111) 111-1111",
		"email": "enroll@devworks.com",
		"address": "233 Bay State Rd Boston MA 02215",
		"careers": ["Web Development", "UI/UX", "Business"],
		"housing": true,
		"jobAssistance": true,
		"jobGuarantee": false,
		"acceptGi": true
}
```

### 4. Update Single Bootcamp

update single bootcamp in database.

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/bootcamps/6362595ab71358d4d6aefc6a
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
		"housing": false

}
```

### 5. Delete Bootcamp

delete bootcamp from database.

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: {{URL}}/api/v1/bootcamps/637dbb0228222d4a245e0357
```

### 6. Upload Photo

Route to upload a bootcamp photo

**_Endpoint:_**

```bash
Method: PUT
Type: FORMDATA
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/photo
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

| Key  | Value | Description |
| ---- | ----- | ----------- |
| file |       |             |

## Courses

Create, read , update and delete the courses.

### 1. Get All Courses

Get all courses

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/courses
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Query params:_**

| Key   | Value | Description |
| ----- | ----- | ----------- |
| page  | 3     |             |
| limit | 3     |             |

### 2. Get Courses For Bootcamp

Get the specific courses of a bootcamp by bootcamp id.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/5d713a66ec8f2b88b8f830b8/courses
```

### 3. Get single Course

Get a single course by ID .

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff7891
```

### 4. Create Bootcamp Course

Create a course for specific bootcamp

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a037b292f5f8ceff787/courses
```

**_Body:_**

```js
{
    "title": "Random Sample",
    "description": "This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue",
    "weeks": 8,
    "tuition": 8000,
    "minimumSkill": "beginner",
    "scholarshipsAvailable": false,
    "__v": 0
}
```

### 5. Update a Course

Update a course by Id in database.

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "tuition": 9990,
    "minimumSkill": "intermediate"
}
```

### 6. Delete a Course

Delete a course from database by Id

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "tuition": 9990,
    "minimumSkill": "intermediate"
}
```

## Authentication

Routes for user authentication including register, login , reset password ,etc

### 1. Register User

Add user to database with encrypted password

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "name":"Gopi",
    "email":"gopi@gmail.com",
    "role":"publisher",
    "password":"chandu"
}
```

### 2. Login User

Login user using username and password

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "email":"kevin@gmail.com",
    "password":"123456"
}
```

### 3. Get logged in User via Token

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/auth/me
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

### 4. Forgot Password

Generate password token and send email.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotpassword
```

**_Body:_**

```js
{
    "email" : "kevin@gmail.com"
}
```

### 5. Reset Password

Reset user password using token

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/resetpassword/288cf19c58ee48512defa3db14a373c1f9883161
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "password": "chandu"
}
```

### 6. Update User Details

Update logged in user and email

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatedetails
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "email":"kevin@gmail.com",
    "name": "Jon snow"
}
```

### 7. Update Password

Update logged in user password, send in the body currentPassword and newPassword

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "currentPassword":"chandu",
    "newPassword":"chandu1"
}
```

### 8. Logout user

clear token cookie

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/auth/logout
```

## Users

CRUD functionality for users only available to admins

### 1. Get All Users

Get all users (admin)

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/users
```

### 2. Get Single User

get single user by id (admin)

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/users/5c8a1d5b0190b214360dc040
```

### 3. Create User

Add user to database (admin)

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users/
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "name":"Cersei",
    "email":"cersei@gmail.com",
    "password":"jaime1"
}
```

### 4. Update User

update user in database (admin)

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/639612dee9fa0b53197b1a74
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "name":"cersei"
}
```

### 5. Delete User

delete user from database (admin)

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/users/639612dee9fa0b53197b1a74
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

## Reviews

Manage course reviews

### 1. Get All Reviews

Get all reviews from database and populate with bootcamp name and description

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/reviews
```

### 2. Get Reviews For Bootcamp

Fetch the reviews for a specific bootcamp

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```

### 3. Get Single Review

Fetch a review from database by id and populate Bootcamp name and description

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/api/v1/reviews/5d7a514b5d2c12c7449be027
```

### 4. Add Review For Bootcamp

Insert review for a specific bootcamp

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/6398198adf2e29ada6efb8b2/reviews
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "title":"hello",
    "text":"12345",
    "rating":3
}
```

### 5. Update Review

Update review in database

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/reviews/63981d7588ea816ee43d2f9e
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json | JSON Type   |

**_Body:_**

```js
{
    "title":"ha ha ha"
}
```

### 6. Delete Review

Remove review from database

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: {{URL}}/api/v1/reviews/63981d7588ea816ee43d2f9e
```

---

[Back to top](#devcamper-api-prod)

> Generated at 2022-12-14 19:23:47 by [docgen](https://github.com/thedevsaddam/docgen)

# Devcamp_api
