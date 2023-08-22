scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -0.5)
    pause(200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -0.5)
    pause(200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -0.5)
    pause(200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -0.5)
    pause(200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -0.5)
    pause(200)
})
mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (!(mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A))) {
        sprites.destroy(otherSprite, effects.disintegrate, 100)
        mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    pizza.bumpSprite(sprite, otherSprite)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -0.5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -0.5)
    pause(200)
})
function bouncing_ball () {
    ball = sprites.create(img`
        ............................
        ........fffffffffff.........
        ......ffbbbbbbbbbbbff.......
        .....fbbbbbbbbbbbbbbbf......
        ....fbbbbbbbbbbbbbbbbbf.....
        ...fbbbbbbbbbbbbbbbfbbbf....
        ..fbbbbbbbbbbbbbbbbfbbbbf...
        .fbbbbbbbbfbbbbbbbffbbbbbf..
        .fffffbbbfbbbbbbbbbfbbbbbf..
        fbbbbffdffbbbbbbbbffbbbbbbf.
        fbbbbbbfbbbbbbbbbfbdbbbbbbf.
        fbbbbbbbbbbbbbbbbfbbbbbbbbf.
        fbbbbbbbbbbbbbbbbbfbbbbbbbf.
        fbbbbbbbbbbbbbbbbffbbbbbbbf.
        fbbbbbbbbbbbbbbbbfdbbbbbbbf.
        fbbbbbbbbbbbbbbbbfbbbbbbbbf.
        fbbbbfbbbbbbbbbbffbbbbbbbbf.
        fbbbbffbbbbbbbbbfbbbbbbbbbf.
        fbbbbbffbbbbbbbbfbbbbbbbbbf.
        fbbbbbbfbbbbbbbbfbbbbbbbbbf.
        .fbbbbbfbbbbbbbbfbbbbbbbbf..
        .fbbbbbbfbbbbbbfbbbbbbbbbf..
        ..fbbbbbfbbbbbbfbbbbbbbbf...
        ...fbbbbbfbbbbbfbbbbbbbf....
        ....fbbbbfbbbbbfbbbbbbf.....
        .....fbbbdbbbbbbbbbbbf......
        ......ffbbfbbbbbbbbff.......
        ........fffffffffff.........
        `, SpriteKind.Enemy)
    ball.vx = 40
    ball.vy = 60
    ball.setBounceOnWall(true)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -0.5)
    pause(200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -0.5)
    pause(200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A)) {
        scene.cameraShake(4, 500)
        pizza.bumpSprite(sprite, otherSprite)
        mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    }
    if (mp.isButtonPressed(mp.getPlayerBySprite(otherSprite), mp.MultiplayerButton.A)) {
        scene.cameraShake(4, 500)
        pizza.bumpSprite(otherSprite, sprite)
        mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, -1)
    }
})
mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})
let projectile: Sprite = null
let ball: Sprite = null
let characters: Image[] = []
characters = [
assets.image`Raphael`,
assets.image`Leonardo`,
assets.image`Michelangelo`,
assets.image`Donatello`
]
tiles.setCurrentTilemap(tilemap`level1`)
pizza.setPlayersWith(characters, 1)
game.splash("Press (A) when everyone is", "ready to start the game")
bouncing_ball()
music.play(music.createSong(assets.song`countdown`), music.PlaybackMode.UntilDone)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(assets.image`pizza`, randint(-100, 100), randint(-100, 100))
})
