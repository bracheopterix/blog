/// MAKE INPUT by YOUR OWN DIV LIKE   < NUMBER 
/// GIVE HIM DEBOUNCE


/// CHANGE GAME BACK TO HAVING {value:1,open:true};

// with step-counter, we need a timer with milliseconds.
// won state is stopping timer
// and writes {steps,time} to the winning board
// it is sorted by both values. 
// you can choose to sort them with only one steps value like {table of 7steps games won} (7steps 3sec) (7steps 4sec)...





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