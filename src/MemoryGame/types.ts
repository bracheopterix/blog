/// TYPES ///
export type CardType = {
    name: string,
    src: string,
    index?: number,
    open?: boolean,
    won?: boolean
};
export type Style = CardType[];

export type CheckGameFunction = (card: CardType) => void;


