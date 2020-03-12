new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = this.monsterHealth = 100;
        },
        attack: function (event, special = false) {
            let damage;
            if (special) {
                damage = this.calculateDamage(6, 20);
                this.monsterHealth -= damage;
            } else {
                damage = this.calculateDamage(3, 10);
                this.monsterHealth -= damage;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage,
            });
            this.monsterAttacks();
            this.checkWin();
        },
        heal: function () {
            if (this.playerHealth <= 90) this.playerHealth += 10;
            else this.playerHealth = 100;
            // this.monsterAttacks();
            this.checkWin();
        },
        giveUp: function (min, max) {
            this.gameIsRunning = false;
        },
        monsterAttacks: function (min, max) {
            this.playerHealth -= this.calculateDamage(5, 12);
            this.turns.unshift({
                isPlayer: false,
                text: 'Player hits Monster for ' + damage,
            });
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
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