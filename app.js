new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = this.monsterHealth = 100;
        }
    }
});