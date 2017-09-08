const TennisGame = require('./tennispoint.js');


//ไฟล์test
test ('Echo "Love - Love" when game start',()=>{
          //Arrange
          let app = new TennisGame()
          //Act
          app.reset()
          let result = app.echo()
          //Assert
          expect(result).toBe('Love - Love')
})




test('Echo "Fifteen - Love" when playerA gets firt score',()=>{
        //Arrange
        let app = new TennisGame()
        //Act
        app.reset()
        app.playerAgetScore()
        let result = app.echo()
        //Assert
        expect(result).toBe('Fifteen - Love')
})



test('Echo "Thirty - Fifteen" when playerA gets two score and playerB gets firt score',()=>{
        //Arrange
        let app = new TennisGame()
        //Act
        app.reset()
        app.playerAgetScore()
        app.playerAgetScore()
        app.playerBgetScore()
        let result = app.echo()
        //Assert
        expect(result).toBe('Thirty - Fifteen')
})



test('Echo "Thirty - Thirty" when playerA and playerB gets two score',()=>{
      //Arrange
      let app = new TennisGame()
      //Act
      app.reset()
      app.playerAgetScore()
      app.playerAgetScore()
      app.playerBgetScore()
      app.playerBgetScore()

      let result = app.echo()
      //Assert
      expect(result).toBe('Thirty - Thirty')
})




test('Echo "The winner is player A"when playerA gets last score after game point',()=>{
let app = new TennisGame()

//Act
app.reset()
app.playerAgetScore()
app.playerAgetScore()
app.playerAgetScore()
app.playerAgetScore()


let result = app.echo()
expect(result).toBe('The winner is player A')






})







test('Echo "The winner is player B"when playerB gets last score after game point',()=>{
let app = new TennisGame()

//Act
app.reset()
app.playerBgetScore()
app.playerBgetScore()
app.playerBgetScore()
app.playerBgetScore()


let result = app.echo()
expect(result).toBe('The winner is player B')






})


test('Echo "deuce" when playerA and playerB points are always the same',()=>{
  let app = new TennisGame()
  app.reset()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()

  let result = app.echo()
  expect(result).toBe('deuce')


})


test('Echo "Advantage playerA" when playerA gets score after deuce',()=>{
  let app = new TennisGame()
  app.reset()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerAgetScore()

  let result = app.echo()
  expect(result).toBe('Advantage playerA')

})


test('Echo "Advantage playerB" when playerB gets score after deuce',()=>{
  let app = new TennisGame()
  app.reset()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()

  let result = app.echo()
  expect(result).toBe('Advantage playerB')

})

test('Echo "The winner is player B" when playerB gets score after advantage',()=>{
  let app = new TennisGame()
  app.reset()

  app.playerAgetScore()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()




  let result = app.echo()
  expect(result).toBe('The winner is player B')

})
