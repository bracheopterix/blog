// export type Datetype = { day: number, month: number, year: number };

export type DiaryRecord = {
    author?: string,
    date: number[],
    note: string,
    title: string,
    text: string,
};

export const diary: DiaryRecord[] = [
    {
        date: [22, 2, 2025],
        note: `Nice day for fishing, ain't it?`,
        title: `Hello, have a nice day!`,
        text: `This is a testing site, made for playing around!`,
    },
    {
        date: [22, 2, 2025],
        note: `What comes around - goes around, like a record`,
        title: `In terms of games`,
        text: `Today I finished both games. I look forward to add them to the site. 
            Even if the second one is a bit harsh. Here I am also testng text wrapping 
            so don't be scared if the text suddenly goes brrr...`,
    },
    {
        date: [23, 2, 2025],
        note: `The wisdom of the pool-wzard today is absent`,
        title: `In terms of time wasting`,
        text: `I want an mmo game where I can hoard items`,
    },
    {
        date: [24, 2, 2025],
        note: `A pope comes tpwards another pope...wait, I messed up langusge settings `,
        title: `Routes, routes...`,
        text: `It is quite relatable matter, lol. Do not forget /* to keep your relations deep.`,
    },
];



