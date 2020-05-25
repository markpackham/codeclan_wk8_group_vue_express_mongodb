use country_facts;
db.dropDatabase();

db.facts.insertMany([
  {
    "fact": "France is the world's most visited country!"
  },
  {
    "fact": "The world's most densely populated island is Santa Cruz del Islote, off the coast of Colombia.  Despite being only the size of 2 football fields, over 500 people live there!"
  },
  {
    "fact": "Scotland is home to the world's shortest street.  It resides in a terrible little town called Wick"
  },
  {
    "fact": "Scotland's national animal is... a unicorn!"
  }
]);