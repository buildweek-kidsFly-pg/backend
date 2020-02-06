# Back-End by William Chambers

## Landing Page - https://kidsfly-lambda.herokuapp.com/

# Endpoints

## GETS - for user type PARENTS

### GET MY info

> /api/users/parent/:id
>
> Returns an object
>
> Example:
>
> ```json
> {
>   "id": 1,
>   "email": "example@test.com",
>   "password": "example",
>   "first_name": "example",
>   "last_name": "example",
>   "address": "example",
>   "phone": "123-456-7890",
>   "p_home_airport": "MIA"
> }
> ```

### GET all FLIGHTS for logged in user - requires Authorization Header token from login

> /api/user/parent/myflights
>
> Returns an array of objects
>
> Example:
>
> ```json
> [
>   {
>     "id": 1,
>     "flight_info_assistant_id": null,
>     "flight_info_parent_id": 1,
>     "flight_info_trips_id": 1,
>     "dep_airport": "JFK",
>     "arr_airport": "MIA",
>     "airline": "Spaceball Air",
>     "dep_flight_num": 1234,
>     "arr_flight_num": 1212,
>     "dep_time": "10:30",
>     "arr_time": "13:21",
>     "help_req_at_dep": 1,
>     "help_req_at_arr": 0,
>     "asst_sched_dep_airport": 1,
>     "asst_sched_arr_airport": 0,
>     "arrived_dep_airport": 0,
>     "arrived_arr_airport": 0,
>     "en_route_dep_airport": 1,
>     "en_route_arr_airport": 0
>   }
> ]
> ```

### GET all TRIPS for logged in user - requires Authorization Header token from login

> /api/users/parent/mytrips
>
> Returns an array of objects
>
> Example:
>
> ```json
> [
>   {
>     "trips_parent_id": 1,
>     "trip_name": "example trip",
>     "kids_traveling": 4,
>     "checked_bags": 7,
>     "carryon_bags": 6,
>     "carseats": 0,
>     "strollers": 0,
>     "notes": "example"
>   }
> ]
> ```

---

## POSTS

### Register new Parent

> /api/auth/p-register
>
> Requirements: email, password, first_name, last_name, address, phone, p_home_airport
> ID's: are auto-increment (create on their own)
>
> Example of required data:
>
> ```json
> {
>   "email": "example",
>   "password": "example",
>   "first_name": "example",
>   "last_name": "example",
>   "address": "example",
>   "phone": "123-456-7890",
>   "p_home_airport": "MIA"
> }
> ```

### Login as Parent

> /api/auth/p-login
>
> Requirements: valid email, password
>
> Example or login data:
>
> ```json
> {
>   "email": "email",
>   "password": "password"
> }
> ```

### Create new Trip

> /api/user/parent/mytrips
>
> Requires: trips_parent_id (parent's user id as integer), trip_name (string), kids_traveling (integer),checked_bags (integer), carryon_bags (integer), carseats (boolean), strollers (boolean), notes (string)
>
> - ID is auto-increment
>
> Example of required data:
>
> ```json
> {
>   "trips_parent_id": 1,
>   "trip_name": "example trip",
>   "kids_traveling": 4,
>   "checked_bags": 7,
>   "carryon_bags": 6,
>   "carseats": 0,
>   "strollers": 0,
>   "notes": "example"
> }
> ```

### Create new Flight

> /api/user/parent/myflights
>
> Requires: flight_info_parent_id (parent's user id as integer), flight_info_trips_id (assosciated trip id as integer), dep_airport (string), arr_airport (string), airline (string), dep_flight_num (string), arr_flight_num (string), dep_time (time), arr_time (time)
>
> ID = auto-increment
>
> Example of required info:
>
> ```json
> {
>   "flight_info_parent_id": 1,
>   "flight_info_trips_id": 1,
>   "dep_airport": "JFK",
>   "arr_airport": "MIA",
>   "airline": "Spaceball Air",
>   "dep_flight_num": 1234,
>   "arr_flight_num": 1212,
>   "dep_time": "10:30",
>   "arr_time": "13:21"
> }
> ```

---

## PUTS / UPDATES

### Update Trip by ID

> /api/user/parent/mytrips/:id
>
> Fields: airport, airline, flightNumber, departureTime, carryOnBags (integer), checkedBags (integer), children (integer), arrived (boolean), en_route (boolean)
>
> Only requires field needing update.
>
> Example of data that could be changed:
>
> ```json
> {
>   "airport": "UPDATE",
>   "airline": "UPDATE",
>   "flightNumber": "UPDATE",
>   "departureTime": "UPDATE",
>   "carryOnBags": 5,
>   "checkedBags": 7,
>   "children": 5,
>   "arrived": 1,
>   "en_route": 1
> }
> ```

### Update Flight by ID

> /api/user/parent/myflights/:id
>
> Fields: flight_info_parent_id (parent's user id as integer), flight_info_trips_id (assosciated trip id as integer), dep_airport (string), arr_airport (string), airline (string), dep_flight_num (string), arr_flight_num (string), dep_time (time), arr_time (time)
>
> Only requires field needing update.
>
> Example of data that could be changed:
>
> ```json
> {
>   "flight_info_parent_id": 1,
>   "flight_info_trips_id": 1,
>   "dep_airport": "JFK",
>   "arr_airport": "MIA",
>   "airline": "Spaceball Air",
>   "dep_flight_num": 1234,
>   "arr_flight_num": 1212,
>   "dep_time": "10:30",
>   "arr_time": "13:21"
> }
> ```

---

## DELETES

### Delete Trip by ID

> /api/user/parent/myflights/:id

### Delete a Trip by ID

> /api/user/parent/mytrips/:id

### Delete MY account

> /api/user/parent/:id

---

---

## GETS - for user type Assistant

### GET MY info

> /api/users/assistant/:id
>
> Returns an object
>
> Example:
>
> ```json
> {
>   "id": 1,
>   "email": "example@test.com",
>   "password": "example",
>   "first_name": "example",
>   "last_name": "example",
>   "phone": "123-456-7890",
>   "a_home_airport": "MIA"
> }
> ```

### GET all FLIGHTS associated with assistant - requires Authorization Header token from login

> /api/user/assistant/myflights
>
> Returns an array of objects
>
> Example:
>
> ```json
> [
>   {
>     "id": 1,
>     "flight_info_assistant_id": null,
>     "flight_info_parent_id": 1,
>     "flight_info_trips_id": 1,
>     "dep_airport": "JFK",
>     "arr_airport": "MIA",
>     "airline": "Spaceball Air",
>     "dep_flight_num": 1234,
>     "arr_flight_num": 1212,
>     "dep_time": "10:30",
>     "arr_time": "13:21",
>     "help_req_at_dep": 1,
>     "help_req_at_arr": 0,
>     "asst_sched_dep_airport": 1,
>     "asst_sched_arr_airport": 0,
>     "arrived_dep_airport": 0,
>     "arrived_arr_airport": 0,
>     "en_route_dep_airport": 1,
>     "en_route_arr_airport": 0
>   }
> ]
> ```

### GET all FLIGHTS needing assistance - requires Authorization Header token from login

> /api/user/assistant/availableFlights
>
> Returns an array of objects
>
> Example:
>
> ```json
> [
>   {
>     "id": 1,
>     "flight_info_assistant_id": null,
>     "flight_info_parent_id": 1,
>     "flight_info_trips_id": 1,
>     "dep_airport": "JFK",
>     "arr_airport": "MIA",
>     "airline": "Spaceball Air",
>     "dep_flight_num": 1234,
>     "arr_flight_num": 1212,
>     "dep_time": "10:30",
>     "arr_time": "13:21",
>     "help_req_at_dep": 1,
>     "help_req_at_arr": 0,
>     "asst_sched_dep_airport": 1,
>     "asst_sched_arr_airport": 0,
>     "arrived_dep_airport": 0,
>     "arrived_arr_airport": 0,
>     "en_route_dep_airport": 1,
>     "en_route_arr_airport": 0
>   }
> ]
> ```

---

## POSTS

### Register new Assistant

> /api/auth/a-register
>
> Requirements: email, password, first_name, last_name, address, phone, p_home_airport
> ID's: are auto-increment (create on their own)
>
> Example of required data:
>
> ```json
> {
>   "email": "example",
>   "password": "example",
>   "first_name": "example",
>   "last_name": "example",
>   "phone": "123-456-7890",
>   "a_home_airport": "MIA"
> }
> ```

### Login as Assistant

> /api/auth/a-login
>
> Requirements: valid email, password
>
> Example or login data:
>
> ```json
> {
>   "email": "email",
>   "password": "password"
> }
> ```

---

## PUTS / UPDATES

### Update Flight by ID

> /api/user/assistant/helpWithFlight/:id
>
> Fields: flight_info_assistant_id_dep (assistant's user id as integer), flight_info_assistant_id_dep (assistant's user id as integer), asst_sched_dep_airport (integer), asst_sched_arr_airport (integer)
>
> Only requires field(s) needing update.
>
> Example of data that could be changed:
>
> ```json
> {
>   "flight_info_assistant_id_dep": 1,
>   "flight_info_assistant_id_arr": null,
>   "asst_sched_dep_airport": 1,
>   "asst_sched_arr_airport": 0
> }
> ```

### Register new Assistant

> /api/assistant/
>
> Fields: email, password, first_name, last_name, phone, a_home_airport
>
> Only requires field(s) needing update.
>
> Example of data that could be changed:
>
> ```json
> {
>   "email": "example",
>   "password": "example",
>   "first_name": "example",
>   "last_name": "example",
>   "phone": "123-456-7890",
>   "a_home_airport": "MIA"
> }
> ```

---

## DELETES

### Delete MY account

> /api/user/assistant/:id

---
