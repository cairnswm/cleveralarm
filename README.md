# cleveralarm
Simple Alarm count down that triggers when time is complete. Can be restarted or stopped at any time.

Note: clever alarm uses the standard Javascript timeout function which is known to not be accurate. This is for situations where "about 10 seconds" is good enough.

# Requirements

I had a requirement to create a simple alarm system. After a certain amount of time an even needed to happen. In certain cases the timer may be stopped and restarted from the beginning.

As I was creating an onEnd handler I decided to add handlers for all actions

# Usage

## Include
```
<script src="./cleveralarm.js"></script>
```
## Create and Start

### Normal Form

The normal form allows event handlers for Start, Stop, Restart, End events. Note that start and restart are independant, if the same function should be execute call it in each event handler.

```
var alarm = new cleveralarm(
    {
        interval: 10,
        onStart: function() { $("#timer").html("<b>Start</b>")},
        onRestart: function() { $("#timer").html("<b>Restart</b>")},
        onStop: function() { $("#timer").html("<b>Stop</b>")},
        onEnd: function() { $("#timer").html("<b>End</b>")} 
    });
alarm.start();
```        

Start can also be chained to the end of the creation statement for immediate start.

onEnd will be called once the timer runs out.

### Simple Form

Simple form allows the sending on an interval (in seconds) and a single callback function that will be called when the interval expires.

```
var alarm = new cleveralarm(10,function(timer) { $("#timer").html("<b>Done</b>")});
alarm.start();
```

or

```
new cleveralarm(10,function(timer) { $("#timer").html("<b>Done</b>")}).start();
```

the simple form is included for simple one off type events. 

## Methods

Clever alarm has the following methods

### Start
```
alarm.Start()
```

Starts the alarm. If the alarm has already been started an start is called again, different possible outcomes could occur accoring to the javascript interpreter. Rather use Restart() after the initial start

Calls the onStart event handler if provided.

### Restart()
```
alarm.Restart()
```

Restarts the alarm. The restart start the timer with the original interval.

Calls the onRestart event handler if provided.

### Stop()
```
alarm.Stop()
```

Stops the alarm count down. This is not a Pause event. This is a complete stop event. Restart can be called to start the count down with the initial interval again.

Calls the onStop event handler if provided.