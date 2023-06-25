const mineflayer = require('mineflayer')
const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear } = require('mineflayer-pathfinder').goals

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot Is Ready')
});

app.listen(3000, () => {
  console.log('server started');
});

const bot = mineflayer.createBot({
    host: 'localhost', // vasya18jyv8.aternos.me
    port: '50316', //64810 
    version: '1.19.4',
    username: 'bot',
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