package pompom;

import pine.*;
import pine.html.*;

using Nuke;

class TimerDisplay extends ObserverComponent {
  @track var timer:TimerState;

  public function render(context:Context) {
    var suffix = timer.paused ? ' (Paused)' : '';
    return Html.div({},
      Html.h3({
        className: Css.atoms({
          color: '#535353',
          marginTop: 0,
          marginBottom: 1.rem(),
          textAlign: 'center',
          width: 100.pct()
        })
      }, switch timer.mode {
        case Working: 'Work' + suffix;
        case Break: 'Break' + suffix;
      }),
      Html.h1({
        className: Css.atoms({
          margin: [ 1.rem(), 0 ],
          fontSize: 5.rem(),
          borderRadius: 4.rem(),
          color: '#fff',
          padding: 2.rem(),
          width: 100.pct(),
          textAlign: 'center'
        }).with(switch timer.mode {
          case _ if (timer.paused): Css.atoms({ backgroundColor: rgb(196, 196, 196) });
          case Working: Css.atoms({ backgroundColor: rgb(183, 181, 85) });
          case Break: Css.atoms({ backgroundColor: rgb(154, 141, 215) });
        })
      }, format(Date.fromTime(timer.secondsElapsed * 1000)))
    );
  }

  function format(date:Date) {
    var time = switch timer.mode {
      case Working: timer.workLength;
      case Break: timer.breakLength;
    }
    var minutes = (date.getSeconds() >= 1 ? time - 1 : time) - date.getMinutes() + '';
    var seconds = date.getSeconds() == 0 ? '0' : 60 - date.getSeconds() + '';
    if (minutes.length == 1) minutes = '0$minutes';
    if (seconds.length == 1) seconds = '0$seconds';
    return '$minutes:$seconds';
  }
}
