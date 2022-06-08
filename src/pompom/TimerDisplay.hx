package pompom;

import pine.*;
import pine.html.*;

using Nuke;

class TimerDisplay extends ObserverComponent {
  @track var timer:TimerState;

  public function render(context:Context) {
    return Html.div({},
      Html.div({
        className: Css.atoms({
          display: 'flex',
          alignItems: 'center',
          marginBottom: 1.rem(),
        })
      }, 
        Html.h3({
          className: Css.atoms({
            flex: 1,
            color: rgb(85, 85, 85),
            margin: 0,
            width: 100.pct(),
            padding: [ 0, 1.rem() ],
            borderRadius: 2.rem(),
            lineHeight: 2.rem(),
            textAlign: 'center'
          }).with(switch timer.mode {
            case _ if (timer.paused): Css.atoms({ backgroundColor: rgb(159, 159, 159) });
            case Working: Css.atoms({ backgroundColor: rgb(183, 181, 85) });
            case Break: Css.atoms({ backgroundColor: rgb(139, 126, 204) });
          })
        }, switch timer.mode {
          case Working: 'Working';
          case Break: 'Break';
        }),
        Html.span({
          className: Css.atoms({
            flex: 2,
            display: 'flex',
            justifyContent: 'flex-end'
          })
        }, switch timer.paused {
          case false: '';
          case true: 'Paused';
        })
      ),
      Html.h1({
        className: Css.atoms({
          margin: [ 1.rem(), 0 ],
          fontSize: 5.rem(),
          width: 100.pct(),
          textAlign: 'center'
        }).with(switch timer.mode {
          case _ if (timer.paused): Css.atoms({ color: rgb(159, 159, 159) });
          case Working: Css.atoms({ color: rgb(183, 181, 85) });
          case Break: Css.atoms({ color: rgb(139, 126, 204) });
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
