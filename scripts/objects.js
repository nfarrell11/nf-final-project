//Object Class Constructors
class Die {
    constructor(sides) {
     this.sides = sides;
    }
    rollDie() {
        return Math.floor(Math.random()*this.sides);
    }
}
class Dice {
    constructor(sides, diceQty) {
        this.sides = sides;
        this.diceQty = diceQty;
    }
    rollDice() {
        let result = [];
        for (let diceThrown = 0; diceThrown < this.diceQty; diceThrown++) {
            result.push(Math.floor(Math.random()*this.sides) + 1);
        }
        return result;
    }
}
class Champion {
    constructor() {
        this.phrases = ["Nothing can come from nothing...",  //marginOfVictory -24
                        "",//na
                        "",//na
                        "",//na
                        "What is this, a psyop!?",//-20
                        "Something feels off with these dice...you switched them didn't you!",//-19
                        "Are you a special agent sent here to ruin my evening and possibly my entire life?",//-18 Phantom Thread (2018)
                        "Who are you? Where did you learn to roll dice like that?",//-17
                        "How is this happening!?",//-16
                        "Enough of this! Bring me my specialty clobbering dice!",//-15
                        "This can't be happening!",  //-14
                        "What the...",  //-13
                        "You're getting on my nerves!",  //-12
                        "You clinking, clanking, clattering collection of caliginous junk!", //-11 The Wizard of Oz (1939)
                        "I eat pieces of dirt like you for breakfast!", //-10 Happy Gilmore (1998)
                        "No more Mr. Nice Guy!", //-9
                        "It doesn't matter what your name is!",//-8
                        "You are now sailed into the north of my opinion, where you will hang like an icicle on a Dutchman's beard.",//-7 (Twelfth Night, Act 3, Scene 2)
                        "You think you're pretty tough, huh!?",//-6
                        "I should have finished you when I had the chance...", //-5
                        "I do desire that we may be better strangers.",//-4  (As You Like It, Act 3, Scene 2)
                        "*yawn*",//-3
                        "I'm going to teach you a lesson...",//-2
                        "You're taller than I expected...", //-1 Revenge of the Sith (2005)
                        "You'll pay for this!",//0
                        "Do you really think you have what it takes?!",//1
                        "I can't believe you've made it this far...",//2
                        "This will all be over soon...",//3
                        "Would thou wert clean enough to spit upon.",//4 (Timon of Athens, Act 4, Scene 3)
                        "Let's get this overwith, shall we?",//5
                        "This is going to be fun!",//6
                        "Away, you mouldy rogue, away!", //7 (Henry IV, Part 2, Act 2, Scene 4)
                        "When all this is over, just remember who's the boss around here...",//8
                        "Get out of my way!",//9
                        "Ha! I am unstoppable!",//10
                        "You are not worth another word, else I'd call you knave.",//11 (All's Well That Ends Well, Act 2, Scene 3)
                        "The sweet smell of success...",//12
                        "Too easy!",//13
                        "Yahoo!",//14
                        "Give up!",//16
                        "What did you expect? I'm one-of-a-kind...",//17
                        "You don't have a snowball's chance in hell of defeating ME! Give up!",//18
                        "That's the way, uh huh, uh huh, I like it!",//19
                        "Double Up!",//20
                        "",//na
                        "",//na
                        "",//na
                        "",//na
                        "Haha!!"]//24 
    }
    talkTrash(index) {
        dialogue.innerHTML = this.phrases[index + 24];
        console.log(index + 24)
    }
}