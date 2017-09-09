const TennisGame = require('./tennispoint.js');


//ไฟล์test
describe('echo()', function(){

it ('should return "Love - Love" when game start',()=>{
          //Arrange
          let app = new TennisGame()
          //Act
          app.reset()
          let result = app.echo()
          //Assert
          expect(result).toBe('Love - Love')
})




it('should return "Fifteen - Love" when playerA gets firt score',()=>{
        //Arrange
        let app = new TennisGame()
        //Act
        app.reset()
        app.playerAgetScore()
        let result = app.echo()
        //Assert
        expect(result).toBe('Fifteen - Love')
})

it('should return "Love - Fifteen" when playerB gets firt score',()=>{
  //Arrange

  let app = new TennisGame()
  //Act

  app.reset()
  app.playerBgetScore()
  let result = app.echo()
  //Assert

  expect(result).toBe('Love - Fifteen')
})

it('should return "Thirty - Fifteen" when playerA gets two score and playerB gets firt score',()=>{
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



it('should return "Thirty - Thirty" when playerA and playerB gets two score',()=>{
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




it('should return "The winner is player A"when playerA gets last score after game point',()=>{
//Arrange

let app = new TennisGame()

//Act
app.reset()
app.playerAgetScore()
app.playerAgetScore()
app.playerAgetScore()
app.playerAgetScore()

//Assert

let result = app.echo()
expect(result).toBe('The winner is player A')






})







it('should return "The winner is player B"when playerB gets last score after game point',()=>{
//Arrange
let app = new TennisGame()

//Act
app.reset()
app.playerBgetScore()
app.playerBgetScore()
app.playerBgetScore()
app.playerBgetScore()

//Assert
let result = app.echo()
expect(result).toBe('The winner is player B')






})


it('should return "deuce" when playerA and playerB points are always the same',()=>{
//Arrange
  let app = new TennisGame()
//Act
  app.reset()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
//Assert
  let result = app.echo()
  expect(result).toBe('deuce')


})


it('should return "Advantage playerA" when playerA gets score after deuce',()=>{
//Arrange
  let app = new TennisGame()
  //Act
  app.reset()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerAgetScore()
//Assert
  let result = app.echo()
  expect(result).toBe('Advantage playerA')

})


it('should return "Advantage playerB" when playerB gets score after deuce',()=>{
  //Arrange
  let app = new TennisGame()
  //Act
  app.reset()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
//Assert
  let result = app.echo()
  expect(result).toBe('Advantage playerB')

})

it('should return "The winner is player B" when playerB gets score after advantage',()=>{
//Arrange
  let app = new TennisGame()
//Act
  app.reset()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerAgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  app.playerBgetScore()
  //Assert
  let result = app.echo()
  expect(result).toBe('The winner is player B')

})

})
