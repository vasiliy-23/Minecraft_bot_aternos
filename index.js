const mineflayer = require('mineflayer')
const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear } = require('mineflayer-pathfinder').goals


const bot = mineflayer.createBot({
    host: 'vasya18jyv8.aternos.me', //localhost
    port: '64810', //64810 
    version: '1.19.4',
    username: 'ALEXLOL',
    auth: 'offline'
})

bot.loadPlugin(pathfinder)

//async function move() {
    //bot.pathfinder.setGoal(new GoalNear(-754, 168, -2126, 1))
    //await bot.waitForTicks(50)
    //bot.pathfinder.setGoal(new GoalNear(-754, 168, -2141, 1))
    //setTimeout(move, 5000)
//}
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

        //case 'пора работать нахуй':
            //bot.chat('Погнали нахуй)')
            //move()
        //break
    }
})
