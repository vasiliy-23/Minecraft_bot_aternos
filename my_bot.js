//const mineflayer= require('mineflayer')
//const movement = require("mineflayer-movement")
//const vec3 = require('vec3')
//const { pathfinder, Movements, goals} = require('mineflayer-pathfinder')
//const GoalBlock = goals.GoalBlock
//const GoalNearXZ = goals.GoalNearXZ
//const Movements = require('mineflayer-pathfinder').Movements
//const { GoalNear } = require('mineflayer-pathfinder').goals
//const bot = mineflayer.createBot({ username: 'Player' })
//var blockFinderPlugin = require('mineflayer-blockfinder')(mineflayer);
//const collectBlock = require('mineflayer-collectblock').plugin

const mineflayer = require('mineflayer')
const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear } = require('mineflayer-pathfinder').goals

const bot = mineflayer.createBot({
    host: 'localhost', //vasya18jyv8.aternos.me
    port: '53691', //64810
    version: '1.19.4',
    username: 'bot',
    auth: 'offline'
})

bot.loadPlugin(pathfinder)


bot.on('spawn', async function move() {

    bot.pathfinder.setGoal(new GoalNear(-754, 168, -2126, 1))
    await bot.waitForTicks(50)
    bot.pathfinder.setGoal(new GoalNear(-754, 168, -2141, 1))
    setTimeout(move, 5000)
})


bot.on('chat', async (username, message) => {
    if (username === bot.username) return
    switch (message) {case 'loaded':
        await bot.waitForChunksToLoad()
        bot.chat('Я готов!')
        break

        case 'пора работать сука':
            bot.chat('Погнали нахуй)')
            move()
        break
    }
})





