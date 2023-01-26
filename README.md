# Bayt Internship Assignments (1 & 2)
## [Live Server](https://internship-assignments.onrender.com)

---
## Description:

- The first assignment is an application for a company that sells products online, we need to show products and be able to filter them by category and sort them by title, price.

- The second assignment is for a signup form to create account for different types of customers. There should be validation based on customer type and we need to handle errors when occured.


---
## How I the application works:
- The application is using MongoDB for database and Redux-Toolkit and React for front end, I combined the two assignment in one application so they can be easily tested.
### Products Page
- We are storing two collections (Products, Cateogries) in the database, each product has one category.
- Once the user open the application it will open products page, this will trigger a fetch request to the server to get all products stored.
- If we want to filter by category or sort we send a request to the same endpoint api/v1/products with query parameters of our filter and sort.
- We have a store with all our redux reducers, and there is one for products state, it contains (loading, error, products, totalCount, page, limit, sort, filter).

#### This sequence diagram demonstrates how products page works.
![products-sequence-diagram](https://user-images.githubusercontent.com/100903950/214950976-5619b7d8-51cd-433c-bfad-e1cdce477baa.PNG)

### Signup Page
- We are storing one collection (Users) in the database.
- When the user clicks signup button, it will open signup page.
- There are three types of customers we can choose from which are (individual, business, professional).
- Each customer type has different extra fields with different validation. I use yup for form validation.
- The signup request is a POST request to the endpoint /api/v1/users.
- We have a store with all our redux reducers, and there is one for products state, it contains (loading, error, user, customerType).

#### This sequence diagram demonstrates how signup page works.
![signup-sequence-diagram](https://user-images.githubusercontent.com/100903950/214950991-e7b140b2-f8b9-4488-a87e-18f54238ca6d.PNG)

---

## Database UML Diagrams
- ### <ins>Products Diagram</ins>
![products-database](https://user-images.githubusercontent.com/100903950/214964007-f0179c3a-9a0c-4656-aee2-373c316a06e8.PNG)

- ### <ins>Users Diagram</ins>
![users-database](https://user-images.githubusercontent.com/100903950/214964048-52a66dd9-289b-404a-96a0-551b5f5bd010.PNG)

---
##  How to install the project on the local machine

1. Clone the repository by typing in terminal  ```git clone <the link here>```.
2. Now you need to run the command `npm run init` to install all the dependencies for both client and server.
3. Create `.env` in the root folder, add MongoDB url variable like this `MONGO_URI={database url}`.
4. To populate the database with fake data, run this command `npm run build-db`
5. To run the application, first run `npm run dev` to run the server, then run `cd client && npm start` to run the client server.
6. You can test the server endpoints by installing **REST Client** Extension in VS Code, then open files in **src/requests**, you cant test by clicking send request
over each request.

##  Technologies that I used

-  ReactJs
-  Redux Toolkit
-  Nodejs
-  Express
-  MongoDB with Mongoose ORM
-  ReactStrap
-  Yup

## Created By:
- [Yazeed El-Haj Salem](https://github.com/ysalem-dev-89)
