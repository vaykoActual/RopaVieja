# RopaVieja

- [RopaVieja](#ropavieja)
  - [Overview](#overview)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries and Dependencies](#libraries-and-dependencies)
    - [Client (Front End)](#client-front-end)
      - [Wireframes](#wireframes)
      - [Component Tree](#component-tree)
      - [Component Hierarchy](#component-hierarchy)
      - [Component Breakdown](#component-breakdown)
      - [Time Estimates](#time-estimates)
    - [Server (Back End)](#server-back-end)
      - [ERD Model](#erd-model)
  - [Post-MVP](#post-mvp)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**RopaVieja** is a React on Rails stack built as a student project at General Assembly that will allow users to buy and sell vintage clothing.

<br>

## MVP

The **RopaVieja** MVP is to complete full CRUD capability. The user will be able to create an account and view, buy, Add and delete products.

<br>

### Goals

- _Create a user profile to store products_
- _Full CRUD workflow for product component_
- _Create seed data to setup API with_
- _Execute full-stack application development_

  <br>

### Libraries and Dependencies

|   Library    | Description                                                                                                 |
| :----------: | :---------------------------------------------------------------------------------------------------------- |
|    React     | _powers the application functionality/environment_                                                          |
| React Router | _allows application to be navigable without having to refresh the page_                                     |
|     Ruby     | _dynamic, open source programming language that focuses on simplifying code and making it more productive._ |
|    Rails     | _server-side web application framework_                                                                     |
|  Bootstrap   | _a component library that allows for easy styling using pre-built components_                               |

<br>

### Client (Front End)

#### Wireframes

- Desktop View

![Screen Shot 2021-03-11 at 2 53 41 PM](https://user-images.githubusercontent.com/76179998/110846360-b092da80-8279-11eb-88e1-c825bbf9ea0b.png)


- Mobile View (In Progress)

[Mobile Prototype](url)

#### Component Tree
[Front End](https://whimsical.com/project-PsNzYwZMPpC29gQ2GiALds)
![Screen Shot 2021-03-05 at 2 17 20 PM](https://user-images.githubusercontent.com/76179998/110163273-d7569a00-7dbd-11eb-9b61-b6f9cb5aa798.png)


#### Component Hierarchy

```structure

src
|__ App.js/
|__ Main/
       |__Main.jsx
       |__Main.css
|__ components/
    |__Header/
       |__Header.jsx
       |__Header.css
    |__ Nav/
       |__Nav.jsx
       |__Header.css
    |__ SignIn/
       |__SignIn.jsx
       |__SignIn.css
    |__ SignUp/
       |__SignUp.jsx
       |__SignUp.css
    |__Products/
       |__ AddProducts/
          |__ AddProducts.jsx
          |__ AddProducts.css
       |__ ShowProducts/
          |__ ShowProducts.jsx
          |__ ShowProducts.css
       |__ Products/
          |__ Products.jsx
          |__ Products.css
       |__ UpdateProducts/
          |__ UpdateProducts.jsx
          |__ UpdateProducts.jsx
       |__ DeleteProducts/
          |__ DeleteProducts.jsx
          |__ DeleteProducts.css
    |__Users/
       |__ CreateUser/
          |__ CreateUser.jsx
          |__ CreateUser.css
       |__ ShowUser/
          |__ ShowUser.jsx
          |__ ShowUser.css
       |__ UpdateUser/
          |__ UpdateUser.jsx
          |__ UpdateUser.jsx
       |__ DeleteUser/
          |__ DeleteUser.jsx
          |__ DeleteUser.css

|__ services/
    |__api-helper.js
    |__users.js
    |__category.js


```

#### Component Breakdown

|   Component    |    Type    | state | props | Description                                                                                                           |
| :------------: | :--------: | :---: | :---: | :-------------------------------------------------------------------------------------------------------------------- |
|     Header     | functional |   n   |   n   | _The header will contain the navigation and logo._                                                                    |
|      Nav       | functional |   y   |   n   | _The navigation will provide a link to each of the pages and have icons that link to info about me and my portfolio._ |
|      Main      | functional |   y   |   y   | _The Main will render the site using cards in flexbox and house the methods to be passed as props._                   |
| SignIn/SignUp | functional |   n   |   y   | _The user will be able to SignUp for and SignIn into their account._                                                 |
|    Products     | functional |   n   |   y   | _The tiles will render the Products info via props._                                                                   |
|      User      | functional |   n   |   y   | _The user will be able to create their account and access a profile._                                                 |
|    Category    | functional |   n   |   y   | _The comments will render with the Products._                                                                          |

#### Time Estimates

| Task                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Sign Up/SignIn Form          |    L     |     2 hrs      |    TBD hrs    |     TBD     |
| Create Front-End CRUD Actions   |    H     |     20 hrs     |    TBD hrs    |     TBD     |
| Create Back-End CRUD Actions    |    H     |     12 hrs     |    TBD hrs    |     TBD     |
| Create seed data                |    M     |     6 hrs      |    TBD hrs    |     TBD     |
| Add Front-End CSS (boilerplate) |    L     |     6 hrs      |    TBD hrs    |     TBD     |
| Add Front-End CSS (advanced)    |    H     |     16 hrs     |    TBD hrs    |     TBD     |
| **Post-MVP**                    |    M     |     24 hrs     |    TBD hrs    |     TBD     |
| QA & Test application           |    M     |     6 hrs      |    TBD hrs    |     TBD     |
| Deployment                      |    H     |     4 hrs      |    TBD hrs    |     TBD     |
| TOTAL                           |          |     96 hrs     |    TBD hrs    |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD click me](https://lucid.app/lucidchart/invitations/accept/f377c684-6023-4171-b29c-b75a2b5f54e4)

![Screen Shot 2021-03-05 at 4 01 13 PM](https://user-images.githubusercontent.com/76179998/110173071-1e4b8c00-7dcc-11eb-81cf-0c722ba04f34.png)




<br>

---

## Post-MVP

- _Implement full CRUD on the User and Category components_
- _Add user profiles for seller accounts_
- _Advanced Styling_
- _Build out favorites/likes functionality_

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
