    Skillwise

    // TS MAKE IT ALL TS!    
    
    // OK make function of a random take from the pool, ad it to the game start 
    // OK then make a manual choosing how many cards do you want (only x2), maybe make it like volume choosing?
    // STUPID make an option to use every tile from every pool together
    
    // OK make it automatic - to choose from styles and to shoose a style 
    // OK when you need only to add an array of a new possible pool
    
    // STUPID Find an expression for a perfect game (you saw - you won);
    // STUPID make SUPER sign over the WIN sign (just like it but turned other way and even more over-over)
    // STUPID and LUCKY (LUCKER?) when it is perfect game, like (step count*2 = game.length)
    // STUPID once open => steps = n\2  and once won = n   ???

    -------------------------------------------
    Logis scheme:

    [style,setStyle] = useState:string

    const cardStyles {
        key:'style1',
        value:[{},{}]
    }

    function <<game start>>
    pool = []
    pool = cardStyle[style]
    pool = chose ammoun
    game = f(pool)

    -------------------------------------------

    CHANGE SELECT TO BE IN STYLE WITH EVERYTHING ELSE!


    Designwise
    
    // OK maybe, it is a good idea to have styles in the obj to just make pool = obj.key 
    // OK so no need to add to switch every time, just add that short-cut in check-style
    // OK anyway, keys in obj are already in strings AND we have stylePool (but it is an array->
    // OK so rewrite auto-generation of dropdown style selection to be able to eat that)

    // NAH also, make two icons near the game name to show what style is on
    // OK and change table background and all colours. And Font Styles!!!
    // OK make them like in obj? or to chose from?


    // also, make tic-tac-toe
    // also, make chimp-race


    /// MAYBE JUST MAKE ANOTHER CSS MODULE FOR DESIGN CHOISES AND CHANGE THE PATH AND SAVE ALL NAMES ???!!!
    /// YEAH! make one for the main styles 
    /// and backgrounds and all in the multipe others with same names. And just replace imports.
    /// OK, BUT IT WAS JUST A VARIABLE CHANGE, ONLY ONE CSS MODULE