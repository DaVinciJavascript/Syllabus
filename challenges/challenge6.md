You've just arrived at your hotel room and decide to check the thermostat's programmed schedule. Each schedule entry consists of a set target temperature and a time when the instruction will be executed (i.e., when the temperature change goes into effect).

Given the room's initial temperature, the rate of speed at which the heating/cooling unit raises or lowers the temperature (in Celsius degrees per hour), and the thermostat's schedule, can you determine the room's final temperature at a given time?

# Input Format

Stub code in the editor reads a string representing a JSON object and passes it to processData as; the JSON object has four properties: speed, inputs, endTime and initialTemperature. Each property is defined as follows:
- speed is number representing the rate at which the temperature will change (in Celsius degrees per hour).
- inputs is an array of objects; each object has two properties:
-- time is a string representing when the temperature change will start.
-- temperature is an integer representing the target temperature being set at the given time.
- endTime is a string denoting the time you must find the final temperature for.
- initialTemperature is a number representing the room's initial temperature.

# Constraints

- speed 
- temperature 
It is guaranteed that time and endTime are in the format YYYY-MM-DD HH:mm, where where YYYY is a -digit year, MM is a -digit month, DD is a -digit day, HH is a -digit hour (where ), and mm is a -digit minute representation (where ).
The  array is always ordered chronologically; the first item has the oldest date and the last item has the most recent date.

# Output Format

Using the console.log command, print the final temperature at the given endTime.

# Sample Input

{"speed":10,"inputs":[{"time":"2016-09-11 11:00","temperature":25},{"time":"2016-09-11 12:00","temperature":35}],"endTime":"2016-09-11 12:30","initialTemperature":15}

# Sample Output

30

# Explanation

The unit heats/cools degrees per hour and the room's initial temperature is degrees. The schedule is as follows:

2016-09-11 11:00: set the target temperature to 25.
2016-09-11 12:00: set the target temperature to 35.

{
  speed: 10,
  inputs: [
    { time: '2016-09-11 11:00', temperature: 25 },
    { time: '2016-09-11 12:00', temperature: 35 }
  ],
  endTime: '2016-09-11 12:30',
  initialTemperature: 15
}

At the given end time of , the temperature will be  degrees.