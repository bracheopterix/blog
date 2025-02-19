/// TYPES ///
export type CardType = {
    number:number,
    open:boolean,
    won?:boolean|undefined;
    lost?:boolean|undefined;
}

export type CheckGameFunction = (card: CardType) => void;


