function TennisGame() {
  this.reset = () => {

  }

  this.echo = ()=>{

    return 'Love-Love'

  }

}















//ไฟล์test
test ('Echo "Love - Love" when game start',()=>{

  //Arrange
  let app = new TennisGame()



  //Act
  app.reset()
  let result = app.echo()


  //Assert
  expect(result).toBe('Love-Love')
})


//test('Echo "Fifteen - Love" when playerA gets firt score',()=>{

//Arrange

//let app = new TennisGame()
//app.playerAgetScore()

//Act
//let result = app.echo()

//Assert
//expect(result).toBe('Fifteen - Love')



//})
