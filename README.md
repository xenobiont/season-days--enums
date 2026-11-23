# season-days--enums

Objective: we need to create a dropdown that allows user to select a season.
Backend stores the season as a numeric enum (0, 1, 2, 3).
An option for each season must display a season name and a number of days to user.

1

- Create a numeric enum for seasons
- Create a configuration object seasonsConfig that will be used to set additional info to show to the user for each enum member
- This must include a text label for each season and a number of days

Number of days in seasons:
spring - 92,
summer - 93,
autumn - 90,
winter - 89

Use the configureation object to log into console per each season:

- text label
- number of days
- a dropdown option value;

2 Advanced (mapped types)
When writing configuration object, we want to ensure that we set the number of days for each season.
Create a generic EnumObject type, that can be used to type-check our seasonsConfig to make sure it provides correct configuration for each member of original Season enum.

3 Advanced
Create an 'option' HTML element for each season
Create a functional form with dropdown text that will allow to select the season and will send the API POST request
