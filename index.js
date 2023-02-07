#!/usr/bin/env node
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
import inquirer from 'inquirer'
import gradient from 'gradient-string';
import figlet from 'figlet';

let playerName;
async function askName() {
    const answers = await inquirer.prompt({
        name:'player_name',
        type:'input',
        message:'what is your name?',
        default(){
            return 'Player';
        },
    });
    playerName = answers.player_name;
}

await askName()

function winner() {
    console.clear()
    const msg = `Hello, ${playerName}`;
    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data))
    });
}

await winner()