/**
 * Created by akke on 5/4/17.
 */
new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            this.monsterHealth -= this.calculateDamage(3, 10);
            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWin();
        },
        specialAttack: function () {
            this.monsterHealth -= this.calculateDamage(20, 10);
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }
            this.monsterAttack();
        },
        giveUp: function () {

        },
        monsterAttack: function () {
            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWin();
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.playerHealth <= 0) {
                if (confirm('You lost. New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.monsterHealth <= 0) {
                if (confirm('You win. New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});