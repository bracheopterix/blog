import styles from './styles.module.scss'

type TetrisField = Number[][];
type Cell = 0 | 1;

type AllCoords = -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9; // can be also a check when moving an active figure
type Coordinate = [AllCoords, AllCoords];
type Figure = Coordinate[];



// when Active touches unactive - it changes field's figure
// field figure - is all filled cells in the gameField

function TetrisGame() {

    const fieldsMaxX = 10;
    const fieldsMaxY = 10;

    function toCoord(x: number, y: number): Coordinate {
        // making sure that the tuple is in the coordinates field
        // max values supported
        if (x < 0 || x > fieldsMaxX || y < -4 || y > fieldsMaxY) {
            throw new Error('Invalide coordinates');
        }
        return [x as AllCoords, y as AllCoords];
    }

    const middleX: AllCoords = Math.floor(fieldsMaxX / 2);
    console.log(middleX)


    const zero: Figure = [[0, 0], [0, 0], [0, 0], [0, 0]];

    const Bar: Figure = [[middleX, -1], [middleX, -2], [middleX, -3], [middleX, -4]];

    const leftL: Figure = [toCoord(middleX - 1, -1), [middleX, -1], [middleX, -2], [middleX, -3]];
    const rightL: Figure = [toCoord(middleX + 1, -1), [middleX, -1], [middleX, -2], [middleX, -3]];

    // MAKE

    const T: Figure = [[0, 0], [0, 0], [0, 0], [0, 0]];
    const leftZ = [[0, 0], [0, 0], [0, 0], [0, 0]];
    const rightZ = [[0, 0], [0, 0], [0, 0], [0, 0]];


    // Visualization
    const TestField:TetrisField = [
        [0, 0, 0, 0,],
        [0, 0, 0, 0,],
        [0, 0, 0, 0,],
        [0, 0, 0, 0,],

    ]
    const figurePool: Figure[] = [Bar, leftL, rightL, T];


    //function rotation!!!
    // prerotation when created



    const gameField: TetrisField = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];



    return (

        <div className={styles.mainContainer}>
            <h2>This game is still under development</h2>
        </div>


    )
}
export default TetrisGame

