# otobus-backend

<p align="center">
  <img src="https://user-images.githubusercontent.com/63140632/146645471-bf61f9cc-d96a-405b-be98-4d7ae10cac5a.png" alt="signup" width="500px">
</p>


This repository is the backend of a MEAN stack project called otôbus, a bus management system built for a college project.

<a href="https://github.com/nimishjn/otobus-frontend">
  Frontend Repository
</a>

## Tech Stack

- JavaScript
- NodeJs
- Express
- MongoDB

## Functionalities

- Signup
- Login
- List of buses
- Displaying the details of individual Buses
- Booking a Bus
- List of Bookings
- Delete a Booking
- User details
- Unique Book Id and Booking Id generator
- JWT Token generator
- JWT authentication for private routes
- Responds in error codes
- MongoDB connectivity

## .env
```
DB_CONNECTION=####
TOKEN_SECRET=####
TOKEN_EXPIRES_IN=####s
```

## Folder structure
```
root
├─ middleware
│  └─ authorize.js
├─ models
│  ├─ Booking.js
│  ├─ Bus.js
│  ├─ User.js
│  └─ dbInit.js
├─ package-lock.json
├─ package.json
├─ routes
│  ├─ bookBus.js
│  ├─ busDetails.js
│  ├─ deleteBooking.js
│  ├─ listBookings.js
│  ├─ listBuses.js
│  ├─ login.js
│  ├─ signup.js
│  └─ userDetails.js
├─ scripts
│  ├─ TokenGenerator.js
│  └─ idGenerator.js
├─ tools
│  └─ errorCodes.js
└─ app.js
```

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/nimishjn">
          <img alt="" src="https://avatars.githubusercontent.com/u/63140632" width="130px;">
        </a>
        <br>
        <a href="https://github.com/nimishjn">
          Nimish Jain
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/rushilsaini">
          <img alt="" src="https://avatars.githubusercontent.com/u/91027510" width="130px;">
        </a>
        <br>
        <a href="https://github.com/rushilsaini">
          Rushil Saini
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/agtarunika">
          <img alt="" src="https://avatars.githubusercontent.com/u/71783797" width="130px;">
        </a>
        <br>
        <a href="https://github.com/agtarunika">
          Tarunika Agarwal
        </a>
      </td>
    </tr>
  </tbody>
</table>
