# Bookify

A bookkeeping web application that allows users to scan expenses and input incomes to thoroughly analyze flows of the budget.

## Features
- Landing page

<img src="https://github.com/08jhs05/Bookify/blob/main/docs/presentation/signin.png">
  
- Browsing the app 

!["Browsing the app"](https://github.com/08jhs05/Bookify/blob/main/docs/bookify_browser.gif "Web application browser")

- Demo presentation video (click picture below for video of demo)

[![demo](https://github.com/08jhs05/Bookify/blob/main/docs/thumbnail.png)](https://www.youtube.com/watch?v=DpS8RdKg_Po)

## Dependencies

#### Front-end
- Material-UI
- Axios
- React
- React-dom
- React-dropdown-select
- React-router-dom
- React-scripts
- React-webcam
- Web-vitals
- React-material-ui-carousel
- React-alice-carousel
- Chart.js
- React-Chartjs-2

#### Back-end
- cors
- debug
- dotenv
- express
- http-errors
- mongoose
- morgan
- nodemon

## Wireframe
!["dashboard"](https://github.com/08jhs05/DonDonDon/blob/feature/sidebar/docs/dashboard-wireframe.png)

## Setup
1. Fork this repository then clone your forked repository
2. Browse to client directory and install dependencies using the command `npm install`
3. Browse to backend directory and install dependencies using the command `npm install`
4. Run `npm run dbreset` to reset the database.
5. Create .env file based on .env.example
6. Log into the app using `email: admin@admin.com password: admin` to browse the app.

## Running the Server
1. From the backend directory, start the server with the command `npm run server`
2. From the client directory, start the website with the command `npm start`
