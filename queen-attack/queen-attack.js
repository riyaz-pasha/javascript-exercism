//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
    board = [...Array(8)].map(() => Array(8).fill("_"));

    constructor(queenPosition = {}) {
        if (this.hasEqualPosition(queenPosition.black, queenPosition.white)) throw Error('Queens cannot share the same space');
        this.white = queenPosition.white || [0, 3]
        this.black = queenPosition.black || [7, 3]
        this.updateQueenPosition("W", this.white)
        this.updateQueenPosition("B", this.black)
    }

    updateQueenPosition(queen, position) {
        this.board = this.board.map(eachRow => eachRow.map(column => column.replace(queen, "_")))
        this.board[position[0]][position[1]] = queen
    }

    toString() {
        return this.board.map(eachRow => [...eachRow].join(" ")).join("\n") + "\n"
    }

    canAttack() {
        return this.white[0] === this.black[0]
            || this.white[1] === this.black[1]
            || (Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1]))
    }

    hasEqualPosition = (white, black) => (white !== undefined && black !== undefined)
        && white[0] === black[0]
        && white[1] === black[1]
}
