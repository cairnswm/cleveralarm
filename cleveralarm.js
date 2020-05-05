class cleveralarm {
    constructor(interval, callback) {
        let defaults = {
            interval: 60,
            onStart: function() { },
            onStop: function() { },
            onRestart: function() { },
            onEnd: function() { }
        }
                
        if (typeof interval === "object") {
            this.settings = Object.assign(defaults, interval);
            this.settings.interval = this.settings.interval * 1000;
        } else {
            this.settings = defaults;
            this.settings.interval = (interval * 1000); 
            if (callback) {
                this.settings.onEnd = callback;
            }
        }
        return this;
    }

    start() {
        this.timerInterval = setTimeout(() => {
            this.end(); 
        }, this.settings.interval);
        this.settings.onStart();
        return this;
    }

    restart() {
        console.log("Restart");
        clearInterval(this.timerInterval);
        this.timerInterval = setTimeout(() => {
            this.end(); 
        }, this.settings.interval);
        this.settings.onRestart();
    }

    stop() {
        console.log("Stopped");
        clearInterval(this.timerInterval);
        this.settings.onStop();
    }

    end() {
        clearInterval(this.timerInterval);
        this.settings.onEnd(this);
    }
}
