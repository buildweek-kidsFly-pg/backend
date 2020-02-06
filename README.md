KidsFly

Introduction
KidsFly API

Error Codes
200s - success 400s - check the data you are sending 500s - server error

KidsFly

Parents

Auth

POST localhost:5050/api/auth/p-register
localhost:5050/api/auth/p-register
Register as a parent to use the KidsFly service

BODY raw
{
"email": "will@test.com",
"password": "pass",
"first_name": "parent",
"last_name": "test",
"phone": "123-456-7890",
"address": "1212 Main st, Homestead, FL 33030",
"p_home_airport": "MIA"
}

Example Request
localhost:5050/api/auth/p-register
curl --location --request POST 'localhost:5050/api/auth/p-register' \
--data-raw '{
"email": "will@test.com",
"password": "pass",
"first_name": "parent",
"last_name": "test",
"phone": "123-456-7890",
"address": "1212 Main st, Homestead, FL 33030",
"p_home_airport": "MIA"
}'
POST localhost:5050/api/auth/p-login
localhost:5050/api/auth/p-login
Login as a parent to view or create trips and flights. Returns a token.

BODY raw
{
"email": "will@test.com",
"password": "pass"
}

Example Request
localhost:5050/api/auth/p-login
curl --location --request POST 'localhost:5050/api/auth/p-login' \
--data-raw '{
"email": "parent@test.com",
"password": "pass"
}'
Example Response
200 － OK
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYXJlbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA4NjAzMTQsImV4cCI6MTU4MDg4OTExNH0.sEqxzV8XfTSle3k6sirxx0Ia3vfIq-aU1G5uzo4tYR8"
}
Trips/Flights

GET localhost:5050/api/users/parent/myFlights
localhost:5050/api/users/parent/myFlights
Show all flights associated with user by ID

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ3aWxsQHRlc3QuY29tIiwiaWF0IjoxNTgwOTY1ODE1LCJleHAiOjE1ODA5OTQ2MTV9.BzprTvl2owkkjDRIgeh3RddDRs4BaKFOJrwXEkhvc5Y

Example Request
localhost:5050/api/users/parent/myFlights
curl --location --request GET 'localhost:5050/api/users/parent/myFlights' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYXJlbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA4NjA2MzYsImV4cCI6MTU4MDg4OTQzNn0.7g0eTAVHC1j90Mxen4Gx2AfcdvluyL9OMds9rqBKi5s'
Example Response
200 － OK
[
{
"id": 1,
"flight_info_assistant_id": null,
"flight_info_parent_id": 1,
"flight_info_trips_id": 1,
"dep_airport": "JFK",
"arr_airport": "MIA",
"airline": "Spaceball Air",
"dep_flight_num": 1234,
"arr_flight_num": 1212,
GET localhost:5050/api/users/parent/myTrips
localhost:5050/api/users/parent/myTrips
Show all trips associated with this user. Returns an array of objects.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYXJlbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA4NjA2MzYsImV4cCI6MTU4MDg4OTQzNn0.7g0eTAVHC1j90Mxen4Gx2AfcdvluyL9OMds9rqBKi5s

Example Request
curl --location --request GET 'localhost:5050/api/users/parent/myFlights' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYXJlbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA4NjA2MzYsImV4cCI6MTU4MDg4OTQzNn0.7g0eTAVHC1j90Mxen4Gx2AfcdvluyL9OMds9rqBKi5s'
Example Response
200 － OK
[
{
"id": 1,
"flight_info_assistant_id": null,
"flight_info_parent_id": 1,
"flight_info_trips_id": 1,
"dep_airport": "JFK",
"arr_airport": "MIA",
"airline": "Spaceball Air",
"dep_flight_num": 1234,
"arr_flight_num": 1212,
POST localhost:5050/api/users/parent/myTrips
localhost:5050/api/users/parent/myTrips
Add new trip

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5MjQ4NDIsImV4cCI6MTU4MDk1MzY0Mn0.UCmRirOiM2MgoWLPARdlafSR9xzUxDiyO5jOlo5-y44
Content-Typeapplication/json
BODY raw
{
"trips_parent_id": 1,
"trip_name": "New trip.",
"kids_traveling": 4,
"checked_bags": 7,
"carryon_bags": 6,
"carseats": 0,
"strollers": 0,
"notes": "Make it stop!!!"
}

Example Request
localhost:5050/api/users/parent/myTrips
curl --location --request POST 'localhost:5050/api/users/parent/myTrips' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5MjQ4NDIsImV4cCI6MTU4MDk1MzY0Mn0.UCmRirOiM2MgoWLPARdlafSR9xzUxDiyO5jOlo5-y44' \
--header 'Content-Type: application/json' \
--data-raw '{
"trips_parent_id": 1,
"trip_name": "New trip.",
"kids_traveling": 4,
"checked_bags": 7,
"carryon_bags": 6,
"carseats": 0,
"strollers": 0,
"notes": "Make it stop!!!"
}'
POST localhost:5050/api/users/parent/myFlights
localhost:5050/api/users/parent/myFlights
Add new flight to a trip

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5MjQ4NDIsImV4cCI6MTU4MDk1MzY0Mn0.UCmRirOiM2MgoWLPARdlafSR9xzUxDiyO5jOlo5-y44
Content-Typeapplication/json
BODY raw
{
"flight_info_assistant_id_dep": null,
"flight_info_assistant_id_arr": null,
"flight_info_parent_id": 1,
"flight_info_trips_id": 1,
"dep_airport": "MIA",
"arr_airport": "JFK",
"airline": "Spaceball Air",
"dep_flight_num": "5345",
"arr_flight_num": "5345",
"dep_time": "06:55",
"arr_time": "14:40",
"help_req_at_dep": true,
"help_req_at_arr": false,
"asst_sched_dep_airport": true,
"asst_sched_arr_airport": false,
"arrived_dep_airport": false,
"arrived_arr_airport": false,
"en_route_dep_airport": true,
"en_route_arr_airport": false
}

Example Request
localhost:5050/api/users/parent/myFlights
curl --location --request POST 'localhost:5050/api/users/parent/myFlights' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5MjQ4NDIsImV4cCI6MTU4MDk1MzY0Mn0.UCmRirOiM2MgoWLPARdlafSR9xzUxDiyO5jOlo5-y44' \
--header 'Content-Type: application/json' \
--data-raw '{
"flight_info_assistant_id_dep": null,
"flight_info_assistant_id_arr": null,
"flight_info_parent_id": 1,
"flight_info_trips_id": 1,
"dep_airport": "MIA",
"arr_airport": "JFK",
"airline": "Spaceball Air",
"dep_flight_num": "5345",
"arr_flight_num": "5345",
"dep_time": "06:55",
"arr_time": "14:40",
"help_req_at_dep": true,
"help_req_at_arr": false,
"asst_sched_dep_airport": true,
"asst_sched_arr_airport": false,
"arrived_dep_airport": false,
"arrived_arr_airport": false,
"en_route_dep_airport": true,
"en_route_arr_airport": false
}'
DEL localhost:5050/api/users/parent/myFlights/:id
localhost:5050/api/users/parent/myFlights/6
Delete a flight by ID

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsb25lc3RhckB0ZXN0LmNvbSIsImlhdCI6MTU4MDk1ODc0NiwiZXhwIjoxNTgwOTg3NTQ2fQ.JLsh4Zbuokcnncb_0TkOcW7Qp6AUGu2wqs6b_G5jCZk
Content-Typeapplication/json

Example Request
localhost:5050/api/users/parent/myFlights/:id
curl --location --request DELETE 'localhost:5050/api/users/parent/myFlights/6' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsb25lc3RhckB0ZXN0LmNvbSIsImlhdCI6MTU4MDk1ODc0NiwiZXhwIjoxNTgwOTg3NTQ2fQ.JLsh4Zbuokcnncb_0TkOcW7Qp6AUGu2wqs6b_G5jCZk' \
--header 'Content-Type: application/json'
DEL localhost:5050/api/users/parent/myTrips/:id
localhost:5050/api/users/parent/myTrips/10
Delete a Trip and all associated flights

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsb25lc3RhckB0ZXN0LmNvbSIsImlhdCI6MTU4MDk1ODc0NiwiZXhwIjoxNTgwOTg3NTQ2fQ.JLsh4Zbuokcnncb_0TkOcW7Qp6AUGu2wqs6b_G5jCZk
Content-Typeapplication/json

Example Request
localhost:5050/api/users/parent/myTrips/:id
curl --location --request DELETE 'localhost:5050/api/users/parent/myTrips/10' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsb25lc3RhckB0ZXN0LmNvbSIsImlhdCI6MTU4MDk1ODc0NiwiZXhwIjoxNTgwOTg3NTQ2fQ.JLsh4Zbuokcnncb_0TkOcW7Qp6AUGu2wqs6b_G5jCZk' \
--header 'Content-Type: application/json'
Assistants

Auth

POST localhost:5050/api/auth/a-register
localhost:5050/api/auth/a-register
Register as a KidsFly assistant

BODY raw
{
"email": "assistant@test.com",
"password": "pass",
"first_name": "assistant",
"last_name": "test",
"phone": "123-456-7890",
"a_home_airport": "MIA"
}

Example Request
localhost:5050/api/auth/a-register
curl --location --request POST 'localhost:5050/api/auth/a-register' \
--data-raw '{
"email": "assistant@test.com",
"password": "pass",
"first_name": "assistant",
"last_name": "test",
"phone": "123-456-7890",
"a_home_airport": "MIA"
}'
POST localhost:5050/api/auth/a-login
localhost:5050/api/auth/a-login
Login as a KidsFly assistant to view available trips/ flights and to help with a trip/flight

BODY raw
{
"email": "assistant@test.com",
"password": "pass"
}

Example Request
localhost:5050/api/auth/a-login
curl --location --request POST 'localhost:5050/api/auth/a-login' \
--data-raw '{
"email": "assistant@test.com",
"password": "pass"
}'
Example Response
200 － OK
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA4NjAwOTcsImV4cCI6MTU4MDg4ODg5N30.9Ji7Ny0vXl6ohKrxr21FrZM86ZoYNOCSMvYr13j97Uo"
}
Trips/Flights

GET localhost:5050/api/users/assistant/availableFlights
localhost:5050/api/users/assistant/availableFlights
Assistants can check all existing flights that are not already assigned to an assisant.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJuZXdhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5NjkxMzUsImV4cCI6MTU4MDk5NzkzNX0.4FysccnuiqEUbtNwyXScnkiN4_ZdNmUa1yw4CBnox6o

Example Request
localhost:5050/api/users/parent/myFlights
curl --location --request GET 'localhost:5050/api/users/parent/myFlights' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYXJlbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA4NjA2MzYsImV4cCI6MTU4MDg4OTQzNn0.7g0eTAVHC1j90Mxen4Gx2AfcdvluyL9OMds9rqBKi5s'
Example Response
200 － OK
[
{
"id": 1,
"flight_info_assistant_id": null,
"flight_info_parent_id": 1,
"flight_info_trips_id": 1,
"dep_airport": "JFK",
"arr_airport": "MIA",
"airline": "Spaceball Air",
"dep_flight_num": 1234,
"arr_flight_num": 1212,
GET localhost:5050/api/users/assistant/myFlights
localhost:5050/api/users/assistant/myFlights
Assistants use this link to find all flights they have signed up to help with. Returns and array of objects.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5MjQ4NDIsImV4cCI6MTU4MDk1MzY0Mn0.UCmRirOiM2MgoWLPARdlafSR9xzUxDiyO5jOlo5-y44

Example Request
localhost:5050/api/users/parent/myFlights
curl --location --request GET 'localhost:5050/api/users/parent/myFlights' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYXJlbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA4NjA2MzYsImV4cCI6MTU4MDg4OTQzNn0.7g0eTAVHC1j90Mxen4Gx2AfcdvluyL9OMds9rqBKi5s'
Example Response
200 － OK
[
{
"id": 1,
"flight_info_assistant_id": null,
"flight_info_parent_id": 1,
"flight_info_trips_id": 1,
"dep_airport": "JFK",
"arr_airport": "MIA",
"airline": "Spaceball Air",
"dep_flight_num": 1234,
"arr_flight_num": 1212,
GET localhost:5050/api/users/assistant/
localhost:5050/api/users/assistant/
This is the link for the assistant info.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5MjQ4NDIsImV4cCI6MTU4MDk1MzY0Mn0.UCmRirOiM2MgoWLPARdlafSR9xzUxDiyO5jOlo5-y44

Example Request
localhost:5050/api/users/parent/myFlights
curl --location --request GET 'localhost:5050/api/users/parent/myFlights' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYXJlbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA4NjA2MzYsImV4cCI6MTU4MDg4OTQzNn0.7g0eTAVHC1j90Mxen4Gx2AfcdvluyL9OMds9rqBKi5s'
Example Response
200 － OK
[
{
"id": 1,
"flight_info_assistant_id": null,
"flight_info_parent_id": 1,
"flight_info_trips_id": 1,
"dep_airport": "JFK",
"arr_airport": "MIA",
"airline": "Spaceball Air",
"dep_flight_num": 1234,
"arr_flight_num": 1212,
PUT localhost:5050/api/users/assistant/helpWithFlight/2
localhost:5050/api/users/assistant/helpWithFlight/2
Use this link to edit a flight by flight id and add an assistant id to the flight by changing null to the assistant's id.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5MjQ4NDIsImV4cCI6MTU4MDk1MzY0Mn0.UCmRirOiM2MgoWLPARdlafSR9xzUxDiyO5jOlo5-y44
BODY raw
{
"flight_info_assistant_id_dep": null,
"flight_info_assistant_id_arr": null,
"asst_sched_dep_airport": 1,
"asst_sched_arr_airport": 1
}

Example Request
localhost:5050/api/users/assistant/helpWithFlight/2
curl --location --request PUT 'localhost:5050/api/users/assistant/helpWithFlight/2' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5MjQ4NDIsImV4cCI6MTU4MDk1MzY0Mn0.UCmRirOiM2MgoWLPARdlafSR9xzUxDiyO5jOlo5-y44' \
--data-raw ' {
"flight_info_assistant_id_dep": null,
"flight_info_assistant_id_arr": null,
"asst_sched_dep_airport": 1,
"asst_sched_arr_airport": 1
}
'
PUT localhost:5050/api/users/assistant/
localhost:5050/api/users/assistant/
Update personal info

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJuZXdhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5NjkxMzUsImV4cCI6MTU4MDk5NzkzNX0.4FysccnuiqEUbtNwyXScnkiN4_ZdNmUa1yw4CBnox6o
BODY raw
{
"a_home_airport": "ORL",
"available": 1
}

Example Request
localhost:5050/api/users/parent/myFlights
curl --location --request GET 'localhost:5050/api/users/parent/myFlights' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYXJlbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA4NjA2MzYsImV4cCI6MTU4MDg4OTQzNn0.7g0eTAVHC1j90Mxen4Gx2AfcdvluyL9OMds9rqBKi5s'
Example Response
200 － OK
[
{
"id": 1,
"flight_info_assistant_id": null,
"flight_info_parent_id": 1,
"flight_info_trips_id": 1,
"dep_airport": "JFK",
"arr_airport": "MIA",
"airline": "Spaceball Air",
"dep_flight_num": 1234,
"arr_flight_num": 1212,
PUT localhost:5050/api/users/assistant/availableFlights/:id
localhost:5050/api/users/assistant/helpWithFlight/1
Use this route to select an available flight to assist with.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJuZXdhc3Npc3RhbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA5NjkxMzUsImV4cCI6MTU4MDk5NzkzNX0.4FysccnuiqEUbtNwyXScnkiN4_ZdNmUa1yw4CBnox6o
BODY raw
{
"flight_info_assistant_id_dep": 1,
"flight_info_assistant_id_arr": 2,
"help_req_at_dep": 1,
"help_req_at_arr": 1,
"asst_sched_dep_airport": 1,
"asst_sched_arr_airport": 1
}

Example Request
localhost:5050/api/users/parent/myFlights
curl --location --request GET 'localhost:5050/api/users/parent/myFlights' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwYXJlbnRAdGVzdC5jb20iLCJpYXQiOjE1ODA4NjA2MzYsImV4cCI6MTU4MDg4OTQzNn0.7g0eTAVHC1j90Mxen4Gx2AfcdvluyL9OMds9rqBKi5s'
Example Response
200 － OK
[
{
"id": 1,
"flight_info_assistant_id": null,
"flight_info_parent_id": 1,
"flight_info_trips_id": 1,
"dep_airport": "JFK",
"arr_airport": "MIA",
"airline": "Spaceball Air",
"dep_flight_num": 1234,
"arr_flight_num": 1212,
Introduction
Introduction
Error Codes
KidsFly
