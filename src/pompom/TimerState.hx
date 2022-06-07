package pompom;

import haxe.Timer;
import pine.*;

enum TimerMode {
  Paused;
  Working;
  Break;
}

class TimerState implements Record {
  @track public var mode:TimerMode = Paused;
  @track public var secondsElapsed:Int = 0;
  var prevMode:TimerMode = null;
  var timer:Timer = null;

  public function start() {
    if (mode != Paused) return;

    mode = prevMode != null ? prevMode : Working;
    prevMode = null;
    if (timer != null) timer.stop();
    timer = createTimer();
  }

  public function reset() {
    secondsElapsed = 0;
    mode = Working;
    prevMode = null;
    if (timer != null) timer.stop();
    timer = createTimer();
  }

  public function pause() {
    if (mode == Paused) return;

    prevMode = mode;
    mode = Paused;
    timer.stop();
    timer = null;
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