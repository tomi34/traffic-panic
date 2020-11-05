namespace SpriteKind {
    export const Cursor = SpriteKind.create()
    export const Road = SpriteKind.create()
    export const Fixture = SpriteKind.create()
    export const Car = SpriteKind.create()
    export const Bridge = SpriteKind.create()
}
function checkNextTile (mySprite: Sprite) {
    if (mySprite.vy < 0) {
        if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile1)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile4)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile6)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile7)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile10)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile12)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile13)) {
            crash(mySprite)
        }
    } else if (mySprite.vy > 0) {
        if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile1)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile4)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile8)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile9)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile10)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile12)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile13)) {
            crash(mySprite)
        }
    } else if (mySprite.vx > 0) {
        if (mySprite.tileKindAt(TileDirection.Right, myTiles.tile1)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Right, myTiles.tile3)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Right, myTiles.tile8)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Right, myTiles.tile7)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Right, myTiles.tile10)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Right, myTiles.tile13)) {
            crash(mySprite)
        }
    } else if (mySprite.vx < 0) {
        if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile1)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile3)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile9)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile6)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile10)) {
            crash(mySprite)
        } else if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile13)) {
            crash(mySprite)
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursory += -1
    if (cursory < 1) {
        cursory = 1
    }
    updateCursor()
    showList()
})
function updateCursor () {
    tiles.placeOnTile(cursor, tiles.getTileLocation(cursorx, cursory))
    tiles.placeOnTile(cursor2, tiles.getTileLocation(cursorx, cursory))
    i = cursorx + cursory * 20
    if (occupiedList[i] == true) {
        cursor.setImage(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 . . . . . . . . . . . . 9 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 9 . . . . . . . . . . . . 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `)
        cursor2.setFlag(SpriteFlag.Invisible, true)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cursorx, cursory), myTiles.tile1)) {
        cursor.setImage(img`
            c c c c c c c c c c c c c c c c 
            c c . . . . . . . . . . . . c c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c . . . . . . . . . . . . . . c 
            c c . . . . . . . . . . . . c c 
            c c c c c c c c c c c c c c c c 
            `)
        cursor2.setImage(tile_list[4])
        cursor2.setFlag(SpriteFlag.Invisible, false)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(cursorx, cursory), myTiles.tile13)) {
        cursor.setImage(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 . . . . . . . . . . . . 9 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 . . . . . . . . . . . . . . 9 
            9 9 . . . . . . . . . . . . 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `)
        cursor2.setFlag(SpriteFlag.Invisible, true)
    } else {
        cursor.setImage(img`
            a a a a a a a a a a a a a a a a 
            a a . . . . . . . . . . . . a a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a a . . . . . . . . . . . . a a 
            a a a a a a a a a a a a a a a a 
            `)
        cursor2.setFlag(SpriteFlag.Invisible, true)
    }
}
function rotateCar (car: Sprite) {
    if (car.vx > 0) {
        side = 0
    } else if (car.vx < 0) {
        side = 1
    } else if (car.vy > 0) {
        side = 2
    } else {
        side = 3
    }
    carimages = carlist[sprites.readDataNumber(car, "type")]
    car.setImage(carimages[side])
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    goFast()
})
function getNextInList () {
    currentImage = tile_list.pop()
    populateList()
    return currentImage
}
scene.onOverlapTile(SpriteKind.Car, myTiles.tile12, function (sprite, location) {
    if (sprite.vx < 0) {
        sprite.vx = 0 - speed / 2
    } else if (sprite.vx > 0) {
        sprite.vx = speed / 2
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor.image.equals(img`
        c c c c c c c c c c c c c c c c 
        c c . . . . . . . . . . . . c c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c . . . . . . . . . . . . . . c 
        c c . . . . . . . . . . . . c c 
        c c c c c c c c c c c c c c c c 
        `)) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        layTile(cursorx, cursory)
        info.changeScoreBy(-5)
    } else if (cursor.image.equals(img`
        a a a a a a a a a a a a a a a a 
        a a . . . . . . . . . . . . a a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a . . . . . . . . . . . . . . a 
        a a . . . . . . . . . . . . a a 
        a a a a a a a a a a a a a a a a 
        `)) {
        bridge_list = sprites.allOfKind(SpriteKind.Bridge)
        for (let bridge of bridge_list) {
            if (sprites.readDataNumber(bridge, "cx") == cursorx && sprites.readDataNumber(bridge, "cy") == cursory) {
                bridge.destroy()
            }
        }
        cursor.startEffect(effects.ashes)
        tmpx = cursorx
        tmpy = cursory
        music.playTone(262, music.beat(BeatFraction.Quarter))
        info.changeScoreBy(-25)
        pause(750)
        effects.clearParticles(cursor)
        layTile(tmpx, tmpy)
    }
})
scene.onHitWall(SpriteKind.Car, function (sprite, location) {
    crash(sprite)
})
function showList () {
    for (let index = 0; index <= 4; index++) {
        index2 = 4 - index
        tmpSprite = displayList[index]
        tmpSprite.setImage(tile_list[index])
        tiles.placeOnTile(tmpSprite, tiles.getTileLocation(0, index))
        tmpSprite.setPosition(9, 17 * index2 + 8)
    }
}
function startGame () {
    level = 0
    info.setScore(500)
    startLevel()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorx += -1
    if (cursorx < 2) {
        cursorx = 2
    }
    updateCursor()
    showList()
})
function populateList () {
    while (tile_list.length < 5) {
        if (status == 3) {
            tile_list.unshift(img`
                8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
                8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
                8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
                8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
                6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
                6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
                6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
                6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
                8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
                8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
                8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
                8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
                6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
                6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
                6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
                6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
                `)
            status = 4
        } else {
            if (level > 1 && randint(0, 20) == 7) {
                tile_list.unshift(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    e e e e e e e e e e e e e e e e 
                    e e e e e e 6 9 9 6 e e e e e e 
                    e e e e e 6 b 8 8 b 6 e e e e e 
                    e e e e e 9 8 8 8 8 9 e e e e e 
                    e e e e e 9 8 8 8 8 9 e e e e e 
                    e e e e e 6 b 8 8 b 6 e e e e e 
                    e e e e e e 6 9 9 6 e e e e e e 
                    e e e e e e e e e e e e e e e e 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else {
                index3 = randint(0, option_list.length - 1)
                tile_list.unshift(option_list[index3])
            }
        }
    }
}
function layTile (lx: number, ly: number) {
    currentImage = getNextInList()
    if (currentImage.equals(img`
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        `)) {
        tiles.setTileAt(tiles.getTileLocation(lx, ly), myTiles.tile3)
    } else if (currentImage.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        tiles.setTileAt(tiles.getTileLocation(lx, ly), myTiles.tile4)
    } else if (currentImage.equals(img`
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        `)) {
        tiles.setTileAt(tiles.getTileLocation(lx, ly), myTiles.tile5)
        bridge3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Bridge)
        tiles.placeOnTile(bridge3, tiles.getTileLocation(lx, ly))
        bridge3.z = 9
        sprites.setDataNumber(bridge3, "cx", lx)
        sprites.setDataNumber(bridge3, "cy", ly)
    } else if (currentImage.equals(img`
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        e e e e e e e e e e e e . . . . 
        e e e e e e e e e e e e . . . . 
        e e e e e e e e e e e e . . . . 
        e e e e e e e e e e e e . . . . 
        e e e e e e e e e e e . . . . . 
        e e e e e e e e e e e . . . . . 
        e e e e e e e e e e . . . . . . 
        e e e e e e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        tiles.setTileAt(tiles.getTileLocation(lx, ly), myTiles.tile6)
    } else if (currentImage.equals(img`
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e e . . . 
        . . . . e e e e e e e e e e e e 
        . . . . e e e e e e e e e e e e 
        . . . . e e e e e e e e e e e e 
        . . . . e e e e e e e e e e e e 
        . . . . . e e e e e e e e e e e 
        . . . . . e e e e e e e e e e e 
        . . . . . . e e e e e e e e e e 
        . . . . . . . . e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        tiles.setTileAt(tiles.getTileLocation(lx, ly), myTiles.tile7)
    } else if (currentImage.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        e e e e e e e e . . . . . . . . 
        e e e e e e e e e e . . . . . . 
        e e e e e e e e e e e . . . . . 
        e e e e e e e e e e e . . . . . 
        e e e e e e e e e e e e . . . . 
        e e e e e e e e e e e e . . . . 
        e e e e e e e e e e e e . . . . 
        e e e e e e e e e e e e . . . . 
        . . . e e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        `)) {
        tiles.setTileAt(tiles.getTileLocation(lx, ly), myTiles.tile9)
    } else if (currentImage.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e e e e e e e e 
        . . . . . . e e e e e e e e e e 
        . . . . . e e e e e e e e e e e 
        . . . . . e e e e e e e e e e e 
        . . . . e e e e e e e e e e e e 
        . . . . e e e e e e e e e e e e 
        . . . . e e e e e e e e e e e e 
        . . . . e e e e e e e e e e e e 
        . . . . e e e e e e e e e e e e 
        . . . . e e e e e e e e e e . . 
        . . . . e e e e e e e e e . . . 
        . . . . e e e e e e e e e . . . 
        `)) {
        tiles.setTileAt(tiles.getTileLocation(lx, ly), myTiles.tile8)
    } else if (currentImage.equals(img`
        8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
        8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
        8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
        8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
        6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
        6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
        6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
        6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
        8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
        8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
        8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
        8 8 8 8 6 6 6 6 8 8 8 8 6 6 6 6 
        6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
        6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
        6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
        6 6 6 6 8 8 8 8 6 6 6 6 8 8 8 8 
        `)) {
        tiles.setTileAt(tiles.getTileLocation(lx, ly), myTiles.tile11)
        i = lx + ly * 20
        occupiedList[i] = true
    } else if (currentImage.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        e e e e e e e e e e e e e e e e 
        e e e e e e 6 9 9 6 e e e e e e 
        e e e e e 6 b 8 8 b 6 e e e e e 
        e e e e e 9 8 8 8 8 9 e e e e e 
        e e e e e 9 8 8 8 8 9 e e e e e 
        e e e e e 6 b 8 8 b 6 e e e e e 
        e e e e e e 6 9 9 6 e e e e e e 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        tiles.setTileAt(tiles.getTileLocation(lx, ly), myTiles.tile12)
    }
    showList()
}
function winLevel () {
    goSlow()
    car_list = sprites.allOfKind(SpriteKind.Car)
    for (let thiscar2 of car_list) {
        thiscar2.destroy()
    }
    levelscore = calculateScore()
    bonus = (level + 1) * 100
    music.powerUp.playUntilDone()
    if (level < 9) {
        game.splash("Level " + convertToText(level + 1) + " complete", "" + convertToText(levelscore) + " scored + " + convertToText(bonus) + " bonus")
        info.changeScoreBy(levelscore)
        info.changeScoreBy(bonus)
        level += 1
        startLevel()
    } else {
        info.changeScoreBy(levelscore)
        game.splash("Congratulations!", "You have completed the game")
        game.splash("Final score" + convertToText(info.score()))
        startGame()
    }
}
function makeCar () {
    if (game.runtime() > carDelay) {
        mySprite = sprites.create(img`
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
            `, SpriteKind.Car)
        if (level > 1) {
            sprites.setDataNumber(mySprite, "type", randint(0, 3))
        } else {
            sprites.setDataNumber(mySprite, "type", randint(0, 2))
        }
        tiles.placeOnRandomTile(mySprite, myTiles.tile10)
        mySprite.setVelocity(speed, 0)
        mySprite.setFlag(SpriteFlag.StayInScreen, false)
        rotateCar(mySprite)
        carDelay = game.runtime() + 48000 / speed
    }
}
scene.onOverlapTile(SpriteKind.Car, myTiles.tile5, function (sprite, location) {
    if (sprite.vy == 0) {
        sprite.z = 10
    } else if (sprite.vx == 0) {
        sprite.z = 1
    }
})
function updateOccupiedList () {
    sprite_list = sprites.allOfKind(SpriteKind.Car)
    for (let checkCar of sprite_list) {
        myx2 = Math.floor(checkCar.x / 16)
        myy2 = Math.floor(checkCar.y / 16)
        i = myx2 + myy2 * 20
        occupiedList[i] = true
    }
}
function crash (mySprite: Sprite) {
    ended = true
    for (let thiscar2 of car_list) {
        thiscar2.destroy()
    }
    music.wawawawaa.play()
    scene.cameraShake(4, 1000)
    timer.after(500, function () {
        game.splash("Game over.", "You scored " + convertToText(info.score()))
        startGame()
    })
}
function goSlow () {
    speed = slowspeed
    changeSpeed()
    for (let sprite of car_list) {
        effects.clearParticles(sprite)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorx += 1
    if (cursorx > xmax) {
        cursorx = xmax
    }
    updateCursor()
    showList()
})
function initCars () {
    list = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 7 8 8 8 8 8 8 8 7 . . . . 
        . . 7 7 8 8 8 8 8 8 8 7 7 . . . 
        . b 7 7 9 9 9 9 9 9 9 7 7 b . . 
        . b 7 9 7 7 3 9 7 7 3 9 7 b 3 . 
        . b 9 7 7 3 7 9 7 3 7 7 9 b b . 
        . b b 7 3 7 7 9 3 7 7 7 b b 3 . 
        . b 9 9 9 9 9 9 9 9 9 9 9 9 b . 
        . b 9 1 1 9 9 9 9 9 9 1 1 9 b . 
        . b 1 6 6 1 9 9 9 9 1 6 6 1 b . 
        . . . 1 1 . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . 7 8 8 8 8 8 8 8 7 . . . 
        . . . 7 7 8 8 8 8 8 8 8 7 7 . . 
        . . b 7 7 9 9 9 9 9 9 9 7 7 b . 
        . 7 b 7 9 7 7 3 9 7 7 3 9 7 b . 
        . b b 9 7 7 3 7 9 7 3 7 7 9 b . 
        . 7 b b 7 3 7 7 9 3 7 7 7 b b . 
        . b 9 9 9 9 9 9 9 9 9 9 9 9 b . 
        . b 9 1 1 9 9 9 9 9 9 1 1 9 b . 
        . b 1 6 6 1 9 9 9 9 1 6 6 1 b . 
        . . . 1 1 . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 7 7 3 7 7 3 b . . . . 
        . . . . b 7 3 7 7 3 7 b . . . . 
        . . . . b 3 7 7 3 7 7 b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 3 9 9 9 9 3 9 . . . . 
        . . . . 1 1 3 3 3 3 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 8 8 8 8 8 8 b . . . . 
        . . . . b 7 7 3 7 7 3 b . . . . 
        . . . . b 7 3 7 7 3 7 b . . . . 
        . . . . b 3 7 7 3 7 7 b . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . a 9 9 9 9 9 9 a . . . . 
        . . . . 7 7 5 5 5 5 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `]
    list2 = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 7 8 8 8 8 8 8 8 7 . . . . 
        . . 7 7 8 8 8 8 8 8 8 7 7 . . . 
        . d 7 7 f f f f f f f 7 7 d . . 
        . d 7 f 7 7 3 f 7 7 3 f 7 d 3 . 
        . d f 7 7 3 7 f 7 3 7 7 f d d . 
        . d d 7 3 7 7 f 3 7 7 7 d d 3 . 
        . f f f f f f f f f f f f f f . 
        . f f 1 1 f f f f f f 1 1 f f . 
        . f 1 6 6 1 f f f f 1 6 6 1 f . 
        . . . 1 1 . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . 7 8 8 8 8 8 8 8 7 . . . 
        . . . 7 7 8 8 8 8 8 8 8 7 7 . . 
        . . d 7 7 f f f f f f f 7 7 d . 
        . 3 d 7 f 7 7 3 f 7 7 3 f 7 d . 
        . d d f 7 7 3 7 f 7 3 7 7 f d . 
        . 3 d d 7 3 7 7 f 3 7 7 7 d d . 
        . f f f f f f f f f f f f f f . 
        . f f 1 1 f f f f f f 1 1 f f . 
        . f 1 6 6 1 f f f f 1 6 6 1 f . 
        . . . 1 1 . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 7 7 3 7 7 3 d . . . . 
        . . . . d 7 3 7 7 3 7 d . . . . 
        . . . . d 3 7 7 3 7 7 d . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f 3 f f f f 3 f . . . . 
        . . . . 1 1 3 3 3 3 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 8 8 8 8 8 8 d . . . . 
        . . . . d 7 7 3 7 7 3 d . . . . 
        . . . . d 7 3 7 7 3 7 d . . . . 
        . . . . d 3 7 7 3 7 7 d . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . a f f f f f f a . . . . 
        . . . . 7 7 5 5 5 5 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `]
    list3 = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 7 8 8 8 8 8 8 8 7 . . . . 
        . . 7 7 8 8 8 8 8 8 8 7 7 . . . 
        . 8 7 7 8 8 8 8 8 8 8 7 7 8 . . 
        . 8 7 8 7 7 3 8 7 7 3 8 7 8 3 . 
        . 8 8 7 7 3 7 8 7 3 7 7 8 8 8 . 
        . 8 8 7 3 7 7 8 3 7 7 7 8 8 3 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 1 1 8 8 8 8 8 8 1 1 8 8 . 
        . 8 1 6 6 1 8 8 8 8 1 6 6 1 8 . 
        . . . 1 1 . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . 7 8 8 8 8 8 8 8 7 . . . 
        . . . 7 7 8 8 8 8 8 8 8 7 7 . . 
        . . 8 7 7 8 8 8 8 8 8 8 7 7 8 . 
        . 3 8 7 8 7 7 3 8 7 7 3 8 7 8 . 
        . 8 8 8 7 7 3 7 8 7 3 7 7 8 8 . 
        . 3 8 8 7 3 7 7 8 3 7 7 7 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 1 1 8 8 8 8 8 8 1 1 8 8 . 
        . 8 1 6 6 1 8 8 8 8 1 6 6 1 8 . 
        . . . 1 1 . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 7 7 3 7 7 3 8 . . . . 
        . . . . 8 7 3 7 7 3 7 8 . . . . 
        . . . . 8 3 7 7 3 7 7 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 3 8 8 8 8 3 8 . . . . 
        . . . . 1 1 8 8 8 8 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 7 7 3 7 7 3 8 . . . . 
        . . . . 8 7 3 7 7 3 7 8 . . . . 
        . . . . 8 3 7 7 3 7 7 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . a 8 8 8 8 8 8 a . . . . 
        . . . . 7 7 5 5 5 5 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `]
    list4 = [img`
        . . . . . . . . . . . . . . . . 
        . d d d d d d d d d d . . . . . 
        . d d d d d d d d d d . . . . . 
        . d d d d d d d d d d . . . . . 
        . d d d d d d d d d d d d d . . 
        . f f f f f f f f f f d d d . . 
        . f d f f f 9 9 c c f d d d d . 
        . f 8 8 8 f 9 9 c c f 7 3 f f . 
        . f f f f f d d 5 5 f 3 7 7 f . 
        . f f f f f d d 5 5 f f f f f . 
        . f f 1 1 f f f f f f 1 1 f f . 
        . f 1 6 6 1 f f f f 1 6 6 1 f . 
        . . . 1 1 . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . d d d d d d d d d d . 
        . . . . . d d d d d d d d d d . 
        . . . . . d d d d d d d d d d . 
        . . d d d d d d d d d d d d d . 
        . . d d d f f f f f f f f f f . 
        . d d d d f 9 9 c c f d f f f . 
        . f 7 3 7 f 9 9 c c f 3 3 3 f . 
        . f 3 7 7 f d d 5 5 f f f f f . 
        . f f f f f d d 5 5 f f f f f . 
        . f f 1 1 f f f f f f 1 1 f f . 
        . f 1 6 6 1 f f f f 1 6 6 1 f . 
        . . . 1 1 . . . . . . 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        . . . f f f f f f f f f f . . . 
        . . . f d d d d d d d d f . . . 
        . . . f d d d d d d d d f . . . 
        . . . f f 7 7 3 7 7 3 f f . . . 
        . . . f f 7 3 7 7 3 7 f f . . . 
        . . . f f 3 7 7 3 7 7 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f 3 2 2 2 2 3 f . . . . 
        . . . . 1 f f f f f f 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . f f f f f f f f . . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d d d d d d d d . . . 
        . . . f f f f f f f f f f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . . . . . . . . . . . . . . . 
        `]
    carlist = [list, list2, list3, list4]
}
function changeSpeed () {
    car_list = sprites.allOfKind(SpriteKind.Car)
    for (let sprite of car_list) {
        if (sprite.vx > 0) {
            sprite.vx = speed
        } else if (sprite.vx < 0) {
            sprite.vx = 0 - speed
        }
        if (sprite.vy > 0) {
            sprite.vy = speed
        } else if (sprite.vy < 0) {
            sprite.vy = 0 - speed
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursory += 1
    if (cursory > ymax) {
        cursory = ymax
    }
    updateCursor()
    showList()
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    goSlow()
})
function turnCorners () {
    car_list = sprites.allOfKind(SpriteKind.Car)
    ended = false
    for (let sprite of car_list) {
        if (!(ended)) {
            if (sprite.tileKindAt(TileDirection.Center, myTiles.tile8)) {
                if (sprite.vx < 0 && Math.round(sprite.x % 16) <= 8) {
                    sprite.setVelocity(0, speed)
                    rotateCar(sprite)
                    checkNextTile(sprite)
                } else if (sprite.vy < 0 && Math.round(sprite.y % 16) <= 8) {
                    sprite.setVelocity(speed, 0)
                    rotateCar(sprite)
                    checkNextTile(sprite)
                }
            } else if (sprite.tileKindAt(TileDirection.Center, myTiles.tile9)) {
                if (sprite.vx > 0 && Math.round(sprite.x % 16) >= 8) {
                    sprite.setVelocity(0, speed)
                    rotateCar(sprite)
                    checkNextTile(sprite)
                } else if (sprite.vy < 0 && Math.round(sprite.y % 16) <= 8) {
                    sprite.setVelocity(0 - speed, 0)
                    rotateCar(sprite)
                    checkNextTile(sprite)
                }
            } else if (sprite.tileKindAt(TileDirection.Center, myTiles.tile7)) {
                if (sprite.vx < 0 && Math.round(sprite.x % 16) <= 8) {
                    sprite.setVelocity(0, 0 - speed)
                    rotateCar(sprite)
                    checkNextTile(sprite)
                } else if (sprite.vy > 0 && Math.round(sprite.y % 16) >= 8) {
                    sprite.setVelocity(speed, 0)
                    rotateCar(sprite)
                    checkNextTile(sprite)
                }
            } else if (sprite.tileKindAt(TileDirection.Center, myTiles.tile6)) {
                if (sprite.vx > 0 && Math.round(sprite.x % 16) >= 8) {
                    sprite.setVelocity(0, 0 - speed)
                    rotateCar(sprite)
                    checkNextTile(sprite)
                } else if (sprite.vy > 0 && Math.round(sprite.y % 16) >= 8) {
                    sprite.setVelocity(0 - speed, 0)
                    rotateCar(sprite)
                    checkNextTile(sprite)
                }
            } else if (sprite.tileKindAt(TileDirection.Center, myTiles.tile11)) {
                ended = true
                winLevel()
            } else {
                checkNextTile(sprite)
            }
        }
    }
}
function goFast () {
    speed = fastspeed
    changeSpeed()
    for (let sprite of car_list) {
        sprite.startEffect(effects.trail)
    }
}
function startLevel () {
    status = 0
    carDelay = 0
    trafficLight.setImage(img`
        8 8 8 8 8 8 8 8 8 8 
        8 1 1 1 1 1 1 1 1 8 
        8 1 1 9 9 9 9 1 1 8 
        8 1 9 b b b 9 9 1 8 
        8 1 9 b 8 b 9 9 1 8 
        8 1 9 b b b 9 9 1 8 
        8 1 9 9 9 9 9 9 1 8 
        8 1 1 9 9 9 9 1 1 8 
        8 1 1 1 1 1 1 1 1 8 
        8 1 1 1 1 1 1 1 1 8 
        8 1 1 6 6 6 6 1 1 8 
        8 1 6 6 6 6 6 6 1 8 
        8 1 6 6 6 6 6 6 1 8 
        8 1 6 6 6 6 6 6 1 8 
        8 1 6 6 6 6 6 6 1 8 
        8 1 1 6 6 6 6 1 1 8 
        8 1 1 1 1 1 1 1 1 8 
        8 1 1 1 1 1 1 1 1 8 
        8 1 1 6 6 6 6 1 1 8 
        8 1 6 6 6 6 6 6 1 8 
        8 1 6 6 6 6 6 6 1 8 
        8 1 6 6 6 6 6 6 1 8 
        8 1 6 6 6 6 6 6 1 8 
        8 1 1 6 6 6 6 1 1 8 
        8 1 1 1 1 1 1 1 1 8 
        8 8 8 8 8 8 8 8 8 8 
        `)
    bridge_list = sprites.allOfKind(SpriteKind.Bridge)
    for (let bridge2 of bridge_list) {
        bridge2.destroy()
    }
    tiles.setTilemap(tilemap`level`)
    tile_list = []
    populateList()
    showList()
    if (level == 0 && newgame == true) {
        game.splash("Traffic Panic!", "Keep building the road")
        game.splash("Lay the chequer flag tile", "to finish the road")
        game.splash("Each tile costs 5 points", "Re-laying a tile costs 25")
        game.splash("Long road = more points", "Good luck!")
        newgame = false
    } else if (level == 1) {
        game.splash("Save our woodland!", "Trees can't be felled")
    } else if (level == 2) {
        game.splash("Red speed limit circles", "slow the traffic down")
    }
    occupiedList = []
    cursorx = 2
    cursory = 1
    xmax = 11
    ymax = 8
    fastspeed = 35
    slowspeed = speed_list[level]
    speed = slowspeed
    firstCar = firstCar_list[level]
    minTime = 16 / slowspeed * minBlocks_list[level]
    startTime = game.runtime()
    randomx = randint(2, 8)
    randomy = randint(1, 5)
    tiles.setTileAt(tiles.getTileLocation(randomx, randomy), myTiles.tile10)
    cursorx = randomx + 1
    cursory = randomy
    updateCursor()
    if (level > 0) {
        for (let index = 0; index < 3; index++) {
            randomy = cursory
            while (randomy == cursory) {
                randomx = randint(2, 11)
                randomy = randint(1, 8)
            }
            tiles.setTileAt(tiles.getTileLocation(randomx, randomy), myTiles.tile13)
        }
    }
}
function calculateScore () {
    levelscore = 0
    for (let myx = 0; myx <= 20; myx++) {
        for (let myy = 0; myy <= 20; myy++) {
            i = myx + myy * 20
            if (occupiedList[i] == true) {
                levelscore += 10
            }
        }
    }
    return levelscore
}
function updateStatus () {
    elapsed = Math.round((game.runtime() - startTime) / 1000)
    if (elapsed > firstCar - 3 && status == 0) {
        status = 1
        trafficLight.setImage(img`
            8 8 8 8 8 8 8 8 8 8 
            8 1 1 1 1 1 1 1 1 8 
            8 1 1 9 9 9 9 1 1 8 
            8 1 9 9 b b 9 9 1 8 
            8 1 9 b 8 b b 9 1 8 
            8 1 9 b b b b 9 1 8 
            8 1 9 9 b b 9 9 1 8 
            8 1 1 9 9 9 9 1 1 8 
            8 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 8 
            8 1 1 a a a a 1 1 8 
            8 1 a a 5 5 a a 1 8 
            8 1 a 5 8 5 5 a 1 8 
            8 1 a 5 5 5 5 a 1 8 
            8 1 a a 5 5 a a 1 8 
            8 1 1 a a a a 1 1 8 
            8 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 8 
            8 1 1 6 6 6 6 1 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 1 6 6 6 6 1 1 8 
            8 1 1 1 1 1 1 1 1 8 
            8 8 8 8 8 8 8 8 8 8 
            `)
    } else if (elapsed > firstCar && status == 1) {
        status = 2
        trafficLight.setImage(img`
            8 8 8 8 8 8 8 8 8 8 
            8 1 1 1 1 1 1 1 1 8 
            8 1 1 6 6 6 6 1 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 1 6 6 6 6 1 1 8 
            8 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 8 
            8 1 1 6 6 6 6 1 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 6 6 6 6 6 6 1 8 
            8 1 1 6 6 6 6 1 1 8 
            8 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 8 
            8 1 1 4 4 4 4 1 1 8 
            8 1 4 4 c c 4 4 1 8 
            8 1 4 c 8 c c 4 1 8 
            8 1 4 c c c c 4 1 8 
            8 1 4 4 c c 4 4 1 8 
            8 1 1 4 4 4 4 1 1 8 
            8 1 1 1 1 1 1 1 1 8 
            8 8 8 8 8 8 8 8 8 8 
            `)
    } else if (elapsed > firstCar + minTime && status == 2) {
        status = 3
    }
}
let elapsed = 0
let randomy = 0
let randomx = 0
let startTime = 0
let minTime = 0
let firstCar = 0
let fastspeed = 0
let ymax = 0
let list4: Image[] = []
let list3: Image[] = []
let list2: Image[] = []
let list: Image[] = []
let xmax = 0
let slowspeed = 0
let ended = false
let myy2 = 0
let myx2 = 0
let sprite_list: Sprite[] = []
let mySprite: Sprite = null
let carDelay = 0
let bonus = 0
let levelscore = 0
let car_list: Sprite[] = []
let bridge3: Sprite = null
let index3 = 0
let status = 0
let level = 0
let tmpSprite: Sprite = null
let index2 = 0
let tmpy = 0
let tmpx = 0
let bridge_list: Sprite[] = []
let speed = 0
let currentImage: Image = null
let carlist: Image[][] = []
let carimages: Image[] = []
let side = 0
let tile_list: Image[] = []
let occupiedList: boolean[] = []
let i = 0
let cursorx = 0
let cursory = 0
let minBlocks_list: number[] = []
let firstCar_list: number[] = []
let speed_list: number[] = []
let displayList: Sprite[] = []
let tmp: Sprite = null
let trafficLight: Sprite = null
let option_list: Image[] = []
let cursor2: Sprite = null
let cursor: Sprite = null
let newgame = false
newgame = true
cursor = sprites.create(img`
    c c c c c c c c c c c c c c c c 
    c c . . . . . . . . . . . . c c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c c . . . . . . . . . . . . c c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Cursor)
cursor2 = sprites.create(img`
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
    `, SpriteKind.Cursor)
cursor.z = 150
cursor2.z = 149
scene.cameraFollowSprite(cursor)
option_list = [
img`
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    `,
img`
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    e e e e e e e e e e e e . . . . 
    e e e e e e e e e e e e . . . . 
    e e e e e e e e e e e e . . . . 
    e e e e e e e e e e e e . . . . 
    e e e e e e e e e e e . . . . . 
    e e e e e e e e e e e . . . . . 
    e e e e e e e e e e . . . . . . 
    e e e e e e e e . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e e . . . 
    . . . . e e e e e e e e e e e e 
    . . . . e e e e e e e e e e e e 
    . . . . e e e e e e e e e e e e 
    . . . . e e e e e e e e e e e e 
    . . . . . e e e e e e e e e e e 
    . . . . . e e e e e e e e e e e 
    . . . . . . e e e e e e e e e e 
    . . . . . . . . e e e e e e e e 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e e e e e e e e . . . . . . . . 
    e e e e e e e e e e . . . . . . 
    e e e e e e e e e e e . . . . . 
    e e e e e e e e e e e . . . . . 
    e e e e e e e e e e e e . . . . 
    e e e e e e e e e e e e . . . . 
    e e e e e e e e e e e e . . . . 
    e e e e e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e e e e e e e . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . e e e e e e e e 
    . . . . . . e e e e e e e e e e 
    . . . . . e e e e e e e e e e e 
    . . . . . e e e e e e e e e e e 
    . . . . e e e e e e e e e e e e 
    . . . . e e e e e e e e e e e e 
    . . . . e e e e e e e e e e e e 
    . . . . e e e e e e e e e e e e 
    . . . . e e e e e e e e e e e e 
    . . . . e e e e e e e e e e . . 
    . . . . e e e e e e e e e . . . 
    . . . . e e e e e e e e e . . . 
    `
]
let listBackground = sprites.create(img`
    cccccccccccccccccc
    cc77777777777777cc
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    c7777777777777777c
    cc77777777777777cc
    cccccccccccccccccc
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    eeeeeeeeeeeeeeeeee
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    eeeeeeeeeeeeeeeeee
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    eeeeeeeeeeeeeeeeee
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    e7777777777777777e
    eeeeeeeeeeeeeeeeee
    `, SpriteKind.Fixture)
listBackground.setFlag(SpriteFlag.RelativeToCamera, true)
listBackground.setPosition(9, 43)
listBackground.z = 199
trafficLight = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 
    8 1 1 1 1 1 1 1 1 8 
    8 1 1 9 9 9 9 1 1 8 
    8 1 9 9 b b 9 9 1 8 
    8 1 9 b 8 b b 9 1 8 
    8 1 9 b b b b 9 1 8 
    8 1 9 9 b b 9 9 1 8 
    8 1 1 9 9 9 9 1 1 8 
    8 1 1 1 1 1 1 1 1 8 
    8 1 1 1 1 1 1 1 1 8 
    8 1 1 6 6 6 6 1 1 8 
    8 1 6 6 6 6 6 6 1 8 
    8 1 6 6 6 6 6 6 1 8 
    8 1 6 6 6 6 6 6 1 8 
    8 1 6 6 6 6 6 6 1 8 
    8 1 1 6 6 6 6 1 1 8 
    8 1 1 1 1 1 1 1 1 8 
    8 1 1 1 1 1 1 1 1 8 
    8 1 1 6 6 6 6 1 1 8 
    8 1 6 6 6 6 6 6 1 8 
    8 1 6 6 6 6 6 6 1 8 
    8 1 6 6 6 6 6 6 1 8 
    8 1 6 6 6 6 6 6 1 8 
    8 1 1 6 6 6 6 1 1 8 
    8 1 1 1 1 1 1 1 1 8 
    8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Player)
trafficLight.setFlag(SpriteFlag.RelativeToCamera, true)
trafficLight.setPosition(9, 105)
trafficLight.z = 199
for (let index = 0; index < 5; index++) {
    tmp = sprites.create(img`
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
        `, SpriteKind.Road)
    tmp.setFlag(SpriteFlag.RelativeToCamera, true)
    displayList.push(tmp)
    tmp.z = 200
}
initCars()
speed_list = [
5,
5,
7,
7,
9,
9,
15,
15,
20,
20
]
firstCar_list = [
30,
30,
30,
30,
30,
25,
25,
20,
20,
15
]
minBlocks_list = [
10,
12,
14,
16,
18,
20,
22,
24,
26,
28
]
startGame()
game.onUpdateInterval(1000, function () {
    if (status >= 2) {
        makeCar()
    }
})
game.onUpdateInterval(500, function () {
    updateOccupiedList()
    updateCursor()
    updateStatus()
})
game.onUpdateInterval(100, function () {
    turnCorners()
})
