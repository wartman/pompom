package pompom;

import pine.*;
import pine.html.*;

class TimerDisplay extends ObserverComponent {
  @track var timer:TimerState;

  public function render(context:Context) {
    var suffix = timer.paused ? ' (Paused)' : '';
    return Html.div({},
      Html.h3({}, switch timer.mode {
        case Working: 'Work' + suffix;
        case Break: 'Break' + suffix;
      }),
      Html.h1({}, format(Date.fromTime(timer.secondsElapsed * 1000)))
    );
  }

  function format(date:Date) {
    var minutes = date.getMinutes() + '';
    var seconds = date.getSeconds() + '';
    if (minutes.length == 1) minutes = '0$minutes';
    if (seconds.length == 1) seconds = '0$seconds';
    return '$minutes:$seconds';
  }
}
