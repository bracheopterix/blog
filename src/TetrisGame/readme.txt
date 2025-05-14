
We are making like...10 on 20 field
Every n milliseconds a hash-set with the coordinate pair created started from the half:half of the visible area.

OR 
We are making a 10 arrays by 20 elements - so this is our field.


Result: 
We are making Rows on Rows:
-> full array is cleared, 
-> falling changing indexes.

const gameField = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];
=> every field has an indexation of filled/free
=> non-active figures are just a falling data
=> falling (active) one has a moving ability, so we need to have more active element
=> we have a set of special elements only they are changed on arrow clicks
=> and when it touches filled fields, it became static and the next one is created on top
=> so we have empty, filled (static), filled (active)
=> static only falls down if there is an empty field
=> active are movable with arrows

each second all the field is re-rendered and
all the fields changing indexes.