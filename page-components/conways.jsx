import styles from '../styles/banner.module.scss';
import { useEffect, useRef, useState } from 'react';
import {randomInteger} from '../lib/random';

function Cells ({x,y}) {
    const CELL_SIZE = 2;

    return (
        <div className={styles.cell} style={{  
            position: 'absolute',     
            left: `${CELL_SIZE * x}vmin`,
            top: `${CELL_SIZE * y}vmin`,
            width: `${CELL_SIZE}vmin`,
            height: `${CELL_SIZE}vmin`,
        }} data-x={x} data-y={y} />
    );
}

export default function Conways() {
    
    const CELL_SIZE = 2;
    const boardRef = useRef();
    const [vmin, setVmin] = useState(0);
    const [board, setBoard] = useState([]);
    const [cells, setCells] = useState([]);


    const [start, setStart] = useState(false);
    
    useEffect(() => {
        const {hCells, vCells} = calculateSize();
        let {cells, board} = randomDots(buildBoard(hCells, vCells), hCells, vCells);
        setCells(cells);
        setBoard(board);
        setStart(true);
    },[]);

    useEffect(() => {
        if (start) {
            setTimeout(nextCycle, 200);
        }
    }, [cells, board, start]);

    const calculateSize = () => {
        //Calculate the vMin
        let vMin = ((window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth)/100;
        setVmin(vMin);
        
        //Calculate the number of boxes on the board
        let boardHeight = boardRef.current.offsetHeight;
        let boardWidth = boardRef.current.offsetWidth;

        return {
            hCells: Math.floor(boardWidth / (CELL_SIZE*vMin)),
            vCells: Math.floor(boardHeight / (CELL_SIZE*vMin))
        };
    }

    const buildBoard = (hCells, vCells) => {
        let board = [];
        for (let i=0; i < vCells; i++) {
            board[i] = [];
            for (let j=0; j<hCells; j++) {
                board[i][j] = false;
            }
        }
        return board;
    }

    const randomDots = (board, h,v) => {
        let totalNumber = Math.ceil(h*v*0.1);
        let cells = [];
        let i=0;
        while (i < totalNumber) {
            i++;
            let y = randomInteger(0, v-1);
            let x = randomInteger(0, h-1);
            if (!board[y][x]) {
                board[y][x] = true;
                cells.push({x:x,y:y});
            }
        }
        return {cells, board};
    }

    const nextCycle = () => {
        let cells = [];
        for (let j=0; j<board.length; j++) {
            for (let i=0; i<board[j].length; i++) {
                let count = countLiveCells(j,i);
                if (board[j][i]) { 
                    if (count < 2) {
                        board[j][i] = false;
                    } else if (count === 2 || count === 3) {
                        cells.push({x:i, y:j});
                        board[j][i] = true;
                    } else if (count > 3) {
                        board[j][i] = false;
                    }
                } else {
                    if (count === 3) { //become alive
                        board[j][i] = true;
                        cells.push({x:i, y:j});
                    }
                }
            }
        }
        setCells(cells);
        setBoard(board);
    }

    const countLiveCells = (j,i) => {
        let liveCount = 0;

        if (j > 0 && j < board.length-1) { // all the rows between
            if (i > 0 && i < board[0].length-1) { // all the columns between
                liveCount += board[j-1][i-1] ? 1 : 0;
                liveCount += board[j-1][i] ? 1 : 0;
                liveCount += board[j-1][i+1] ? 1 : 0;
                liveCount += board[j][i-1] ? 1 : 0;
                liveCount += board[j][i+1] ? 1 : 0;
                liveCount += board[j+1][i-1] ? 1 : 0;
                liveCount += board[j+1][i] ? 1 : 0;
                liveCount += board[j+1][i+1] ? 1 : 0;
            } else if (i == 0) {
                liveCount += board[j-1][i] ? 1 : 0;
                liveCount += board[j-1][i+1] ? 1 : 0;
                liveCount += board[j][i+1] ? 1 : 0;
                liveCount += board[j+1][i] ? 1 : 0;
                liveCount += board[j+1][i+1] ? 1 : 0;
            } else if (i == board[0].length-1) {
                liveCount += board[j-1][i-1] ? 1 : 0;
                liveCount += board[j-1][i] ? 1 : 0;
                liveCount += board[j][i-1] ? 1 : 0;
                liveCount += board[j+1][i-1] ? 1 : 0;
                liveCount += board[j+1][i] ? 1 : 0;
            }
        } else if (j ==0 ) { //first row
            if (i > 0 && i < board[0].length-1) { //any column
                liveCount += board[j][i-1] ? 1 : 0;
                liveCount += board[j][i+1] ? 1 : 0;
                liveCount += board[j+1][i-1] ? 1 : 0;
                liveCount += board[j+1][i] ? 1 : 0;
                liveCount += board[j+1][i+1] ? 1 : 0;
            } else if (i==0) { //first cell 0,0
                liveCount += board[j][i+1] ? 1 : 0;
                liveCount += board[j+1][i] ? 1 : 0;
                liveCount += board[j+1][i+1] ? 1 : 0;
            } else if (i == board[0].length-1) { //last row 0,n
                liveCount += board[j][i-1] ? 1 : 0;
                liveCount += board[j+1][i-1] ? 1 : 0;
                liveCount += board[j+1][i] ? 1 : 0;
            }
        } else if (j == board.length-1) {
            if (i===0) { //first column
                liveCount += board[j-1][i] ? 1 : 0;
                liveCount += board[j-1][i+1] ? 1 : 0;
                liveCount += board[j][i+1] ? 1 : 0;
            } else if (i === board[0].length-1) { //last column
                liveCount += board[j-1][i-1] ? 1 : 0;
                liveCount += board[j-1][i] ? 1 : 0;
                liveCount += board[j][i-1] ? 1 : 0;
            } else {//rest any column
                liveCount += board[j-1][i-1] ? 1 : 0;
                liveCount += board[j-1][i] ? 1 : 0;
                liveCount += board[j-1][i+1] ? 1 : 0;
                liveCount += board[j][i-1] ? 1 : 0;
                liveCount += board[j][i+1] ? 1 : 0;
            }
        }

        return liveCount;
    }

  	return (
        <div ref={boardRef} id={styles.board} style={{backgroundSize: `${CELL_SIZE}vmin ${CELL_SIZE}vmin`}}>
            {cells.map(cell => {
                return (<Cells key={`x${cell.x}y${cell.y}`} x={cell.x} y={cell.y}  />);
            })}
        </div>
  	);
}