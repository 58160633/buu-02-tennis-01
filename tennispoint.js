function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerAScore = 0

    this.reset = () => {
        this.playerAScore = 0
    }

    this.echo = () => {
       return `${scoreString[this.playerAScore]} - Love`
    }

    this.playerAgetScore = () => {
        this.playerAScore++
    }
}

module.exports = TennisGame
