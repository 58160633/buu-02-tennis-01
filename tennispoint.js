function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerAScore = 0
    this.playerBScore = 0

    this.reset = () => {
        this.playerAScore = 0
        this.playerBScore = 0
    }

    this.echo = () => {

      if((this.playerAScore > 3 && this.playerBScore != 3) || (this.playerAScore == 5 && this.playerBScore == 3)){
        return "The winner is player A"
      }else if((this.playerBScore > 3 && this.playerAScore != 3) || (this.playerBScore == 5 && this.playerAScore == 3)){
        return "The winner is player B"

      }else if (this.playerAScore == 3 && this.playerBScore == 3) {
        return "deuce"

      }else if(this.playerAScore > 3 && this.playerBScore == 3){
        return "Advantage playerA"

      }else if (this.playerBScore > 3 && this.playerAScore == 3) {
        return "Advantage playerB"

      }else{
          return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`
      }



    }

    this.playerAgetScore = () => {
      if(this.playerBScore > 3) this.playerBScore--
      else this.playerAScore++
    }

    this.playerBgetScore = () => {
      if(this.playerAScore > 3) this.playerAScore--
      else this.playerBScore++
    }

}

module.exports = TennisGame
