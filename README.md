# Bookr Backend

Bookr allows you to view textbooks with crowd sourced reviews

## Getting Started

The API can be found at the following url:
```
https://bookr-buildweek-backend.herokuapp.com
```

### Prerequisites (for local use)

- run `yarn` in order to install all dependencies
- use the command `yarn server` to run a live server!

## Endpoints

| Method |     Endpoint         |              Requires                    |                                        Description                            |
|--------|----------------------|------------------------------------------|-------------------------------------------------------------------------------|
|  POST  | `/api/users/register/`     |         `name`, `password`      | Used for adding a new user to database.                                   |
|  POST  | `/api/users/login/`        |            `name`, `password`            | Used to log a user in. Returns a token and the user's name and id in its body.   |
|  GET   | `/api/users`         |              Successful Login                | Used to show all users in the database.                                   |
|  GET   | `/api/users/:id/`    |              Successful Login                | Used to show a specific user in the database.                             |
|  GET   | `/api/books`          |              Successful Login                | Used to show books in the database.                                        |
|  GET   | `/api/books/:id/`|              Successful Login                | Used to show a specific book in the database.                |
| GET | `/api/reviews/`         |              Successful Login         | Used to get existing reviews in the database.          |
|  POST  | `api/reviews/:id`       |            Successful Login, Data            | Used to add a new review   |
| DELETE | `api/books/:id/`      |              Successful Login                | Used to delete the selected book  |

---

### User Registration


Method used: **[POST]** `/api/users/register/`

On Success: Returns the Id of the new user.



Parameters:

|   Name    | Type | Required |                      Notes                       |
|-----------|------|----------|--------------------------------------------------|
| name  |string|    yes   |Must be unique.                                   |
| password  |string|    yes   |Can be up to 128 characters in length.            |


Example of what to use: 
```
{
name: "Austen",
    password: "Lambda",
 
}
```
---

### User Login


Method used: **[POST]** `/api/users/login/`

On Success: 
Returns a token to be used to authenticate the user.


Parameters:

|  Name  | Type | Required |
|--------|------|----------|
|name|string|    yes   |
|password|string|    yes   |

Example of what to use: 
```
{
    name: "Fred",
    password: "Barney"
}
```

---

### Get Users

Method used: **[GET]** `/api/users/`

On Success: Returns an array of users.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### Get Specific User

Method used: **[GET]** `/api/users/:id/`

On Success: Returns an array of users matching the current params.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

---

### Get List of all Books

Method used: **[GET]** `/api/books/`

On Success: Returns an array of all books in database.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

---

### Get a Specific book

Method used: **[GET]** `/api/books/:id`

On Success: Returns a specific book


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### Post A New Review

Method used: **[POST]** `/api/reviews/add/:bookId`

On Success: Adds a new review to the database.


Parameters:

|        Name      |   Type   | Required |                   Notes                     |
|---------------   |----------|----------|---------------------------------------------|
|   Authorization  |**Header**|    yes   | Acquired from a successful login.           |
|       user_id      |  string  |    yes   |The User's ID         |
|      book_id   |  string  |    yes   |The BookId of book being reviewed     |
|      rating    |  string  |    yes    |From 1 -5. Star rating for the book.|
|      review   |  string  |    yes   |The text of the review. Up to 255 characters |


---



### Delete Book

Method used: **[DELETE]** `//api/books/:id`

On Success: Deletes book from database.


Parameters:

|      Name     |   Type   | Required |                   Notes                     |
|---------------|----------|----------|---------------------------------------------|
| Authorization |**Header**|    yes   | Acquired from a successful login.           |

---

