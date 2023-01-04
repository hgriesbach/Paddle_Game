namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    otherSprite.vx = -1 * otherSprite.vx
    pause(200)
    otherSprite.setFlag(SpriteFlag.Ghost, false)
})
sprites.onCreated(SpriteKind.Ball, function (sprite) {
    sprite.setImage(img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        `)
    if (Math.percentChance(50)) {
        sprite.vx = -75
    } else {
        sprite.vx = 75
    }
    sprite.vy = randint(-75, 75)
})
let player1 = sprites.create(img`
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player1, 0, 100)
player1.x = 0
player1.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
let player2 = sprites.create(img`
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    `, SpriteKind.Player)
controller.player2.moveSprite(player2, 0, 100)
player2.x = scene.screenWidth()
player2.setFlag(SpriteFlag.StayInScreen, true)
info.player2.setScore(0)
let currentBall = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Ball)
game.onUpdate(function () {
    if (currentBall.y <= 0) {
        currentBall.y = 0
        currentBall.vy = -1 * currentBall.vy
    } else if (currentBall.y >= scene.screenHeight()) {
        currentBall.y = scene.screenHeight()
        currentBall.vy = -1 * currentBall.vy
    }
    if (currentBall.x < 0) {
        currentBall.destroy()
        currentBall = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Ball)
        info.player2.changeScoreBy(1)
    } else if (currentBall.x > scene.screenWidth()) {
        currentBall.destroy()
        currentBall = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Ball)
        info.player1.changeScoreBy(1)
    }
})
