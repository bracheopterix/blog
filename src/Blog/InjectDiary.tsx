// export type Datetype = { day: number, month: number, year: number };


type Code = {
    day:number,
    month:number,
    year:number,
    order:number,
}

type Record = {
    code: Code,
    note: string,
    title:string,
    text:string,
};

export type Diary = { [id: number]: Record };


export const diary: Diary = [

    {
        // code: [22,2,2025,1],
        code: { day: 22, month: 2, year: 2025, order: 1 },

        note: `Nice day for fishing, ain't it? Ha-ha!`,
        title: `Hello, have a nice day!`,
        text: `This is a testing site, made for playing around!`,
    },
    {
        // code: [22, 2, 2025, 2],
        code: { day: 22, month: 2, year: 2025, order: 2 },

        note: `What comes around - goes around, like a record - right round, round, round~`,
        title: `In terms of games`,
        text: `Today I finished both games. I look forward to add them to the site. 
            Even if the second one is a bit harsh. Here I am also testng text wrapping 
            so don't be scared if the text suddenly goes brrr...`,
    },
    {
        // code: [23, 2, 2025, 1],
        code: { day: 23, month: 2, year: 2025, order: 1 },

        note: `The wisdom of the pool-senpai today is absent: full pool, fool`,
        title: `In terms of time wasting`,
        text: `I want an mmo game where I can hoard items`,
    },
    {
        // code: [24, 2, 2025, 1],
        code: { day: 24, month: 2, year: 2025, order: 1 },

        note: `A pope comes towards another pope...wait, I messed up language settings again`,
        title: `Routes, routes...`,
        text: `It is quite relatable matter, lol. Do not forget /* to keep your relations deep.`,
    },
    {
        // code: [25, 2, 2025, 1],
        code: { day: 25, month: 2, year: 2025, order: 1 },

        note: `Did you know deer can jump higher than the average house? Yeah, you know where it goes.`,
        title: `Bit by bit, step by step`,
        text: `Changed little things, lighted up arrows in games, fixed there, cleaned here...
        Actually, all previous puns created today kek. I need to create another one - so hard.`,
    },

]

const newRecord: Record = {
    code: { day: 6, month: 3, year: 2025, order: 1 },
    note: `Did you know deer can jump higher than the average house? Yeah, you know where it goes.`,
    title: `Bit by bit, step by step`,
    text: `Changed little things, lighted up arrows in games, fixed there, cleaned here...
        Actually, all previous puns created today kek. I need to create another one - so hard.`,
}








