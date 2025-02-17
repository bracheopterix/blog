    Skillwise

    // TS MAKE IT ALL TS!    
    
    // OK make function of a random take from the pool, ad it to the game start 
    // OK then make a manual choosing how many cards do you want (only x2), maybe make it like volume choosing?
    // STUPID make an option to use every tile from every pool together
    
    // make it automatic - to choose from styles and to shoose a style 
    // when you need only to add an array of a new possible pool
    
    // Find an expression for a perfect game (you saw - you won);
    // make SUPER sign over the WIN sign (just like it but turned other way and even more over-over)
    // and LUCKY (LUCKER?) when it is perfect game, like (step count*2 = game.length)
    // once open => steps = n\2  and once won = n   ???



    [style,setStyle] = useState:string

    style1 = [{},{}]
    style2 = [{},{}]


    <<game start>>
    pool =[]
    pool = choose style (switch) 
    pool = chose ammount
    game = f[pool]


    if we have 
    const cardStyles {
        key:'style1',
        value:[{},{}]
    }
    ----
    <<game start>>
    pool = []
    pool = cardStyles.map()



    Designwise
    
    // maybe, it is a good idea to have styles in the obj to just make pool = obj.key 
    // so no need to add to switch every time, just add that short-cut in check-style
    // anyway, keys in obj are already in strings AND we have stylePool (but it is an array->
    // so rewrite auto-generation of dropdown style selection to be able to eat that)

    // also, make two icons near the game name to show what style is on
    // and change table background and all colours. And Font Styles!!!
    // make them like in obj? or to chose from?

    // also, make tic-tac-toe
    // also, make chimp-race


    /// MAYBE JUST MAKE ANOTHER CSS MODULE FOR DESIGN CHOISES AND CHANGE THE PATH AND SAVE ALL NAMES ???!!!
    YEAH! make one for the main styles 
    and backgrounds and all in the multipe others with same names. And just replace imports.