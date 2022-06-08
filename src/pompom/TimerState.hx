package pompom;

import haxe.Timer;
import pine.*;
import pine.State; // This is required for some weird reason.

enum TimerMode {
  Working;
  Break;
}

class TimerState implements Record {
  @track public var paused:Bool = true;
  @track public var mode:TimerMode = Working;
  @track public var secondsElapsed:Int = 0;
  var timer:Timer = null;

  public function start() {
    if (!paused) return;
    paused = false;
    if (timer != null) timer.stop();
    timer = createTimer();
  }

  public function pause() {
    if (paused) return;
    paused = true;
    timer.stop();
    timer = null;
  }

  public function startWork() {
    secondsElapsed = 0;
    mode = Working;
    if (timer != null) timer.stop();
    timer = createTimer();
  }

  public function takeBreak() {
    secondsElapsed = 0;
    mode = Break;
    if (timer != null) timer.stop();
    timer = createTimer();
  }

  function createTimer() {
    var timer = new Timer(1000);
    timer.run = run;
    return timer;
  }

  function run() {
    secondsElapsed += 1;
    switch mode {
      case Working if (secondsElapsed == 1500): // 25 minutes
        mode = Break;
        secondsElapsed = 0;
      case Break if (secondsElapsed == 300): // 5 minutes
        mode = Working;
        secondsElapsed = 0;
      default:
    }
  }
}