/// Nah, range forever MAKE INPUT by YOUR OWN DIV LIKE   < NUMBER 
/// Nah, range forever GIVE HIM DEBOUNCE


/// OK CHANGE GAME BACK TO HAVING {value:1,open:true};

// with step-counter, we need a timer with milliseconds.
// won state is stopping timer
// and writes {steps,time} to the winning board
// it is sorted by both values. 
// you can choose to sort them with only one steps value like {table of 7steps games won} (7steps 3sec) (7steps 4sec)...

// OK Old timer doesn't count as it should. Idk why.
// -> set him up to the game start UseEffect, not game update UseEffect
// OK not it shows '1' every time we start. sad
// -> added correction '-1'


-----------------------------------------

// add info window with the legend about the game:

// Lore
// there is a laboratory in Japan that studies chimpanzees
// scientists there run to a conclusion that chimps are very talented in memory-game 
// It seems, their ability to remember numbers in order is connected 
// to their nature defence mechanisms against predators in wildlife
// and that we, as a species,had repurposed that sector of our brain 
// and exchanged said ability to be able to use language.
// This is a sample of the game that chimps play to get treats
// =>

// Distorted reflection
// For you it is strictly one way (1-10)
// You have some time to remember the cards before thei would be flipped
// More cards - more time, help yourself. 
// You are human, your win is just what you are expected from you. So it has no gratification
// Otherwise - you are worse than a chimps in the laboratory. Guess which counter is what.
// Red is bad. You are punished for taking more burden, for doing anythin wrong or sometimes anything at all

-----------------------------------------
// CHECK DESIGN ON CHROME! RANGE IS SRANGE! MINUS VALUES, LINE NOT UNDER THE O

// Later we would need a leaderboard with names, when we would be able to save it. 
// its pages are about the amount of tiles and are sort by time and winning.
// 7 tiles are better than 6 with every time. 6 tiles with 5s are better than 6 tiles with 8 seconds

-----------------------------------------



Привет! Скорее всего, у тебя проблема с автоматическим переносом строк или распределением пространства между карточками. Проверь следующие моменты:

    flex-wrap
    Если контейнеру недостаточно места, он переносит элементы на новую строку. Проверь, установлен ли flex-wrap: wrap; и какая ширина у .card.

    justify-content
    Возможно, карточки растягиваются или неправильно распределяются из-за justify-content. Попробуй:

justify-content: flex-start; /* или space-between / space-around */

Мин/макс ширина
Карточки могут иметь min-width, max-width или flex-basis, который не даёт им встать ровно по 5+4. Попробуй явно задать ширину, например:

    .card {
        width: calc(100% / 5); /* или что-то фиксированное */
    }

    Контейнеру не хватает места
    Если .card-holder имеет max-width или padding, это может ломать раскладку. Проверь его width.

    Границы и margin
    Иногда box-sizing: border-box; решает проблемы с расчётом размеров.

Если не разберёшься, можешь кинуть кусок кода, посмотрим вместе! 😊