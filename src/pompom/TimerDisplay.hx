package pompom;

import pine.*;
import pine.html.*;
import pompom.ui.*;

using Nuke;

class TimerDisplay extends ObserverComponent {
  @track var timer:TimerState;

  public function render(context:Context) {
    return new Html<'div'>({
      children: [
        new Html<'div'>({
          className: Css.atoms({
            display: 'flex',
            alignItems: 'center',
            marginBottom: 1.rem(),
          }),
          children: [
            new Html<'h3'>({
              className: Css.atoms({
                flex: 1,
                color: theme(pompom.color.dark),
                margin: 0,
                width: 100.pct(),
                padding: [ 0, 1.rem() ],
                borderRadius: 2.rem(),
                lineHeight: 2.rem(),
                textAlign: 'center'
              }).with(switch timer.mode {
                case _ if (timer.paused): Css.atoms({ 
                  backgroundColor: theme(pompom.color.light),
                  color: theme(pompom.color.dark) 
                });
                case Working: Css.atoms({ backgroundColor: theme(pompom.color.working) });
                case Break: Css.atoms({ backgroundColor: theme(pompom.color.onBreak) });
              }),
              children: [
                switch timer.mode {
                  case Working: 'Working';
                  case Break: 'Break';
                }
              ]
            }),
            new Html<'span'>({
              className: Css.atoms({
                flex: 2,
                display: 'flex',
                justifyContent: 'flex-end'
              }),
              children: [
                switch timer.paused {
                  case false: '';
                  case true: 'Paused';
                }
              ]
            })
          ]
        }),
        new Html<'h1'>({
          className: Css.atoms({
            margin: [ 1.rem(), 0 ],
            fontSize: 5.rem(),
            width: 100.pct(),
            textAlign: 'center'
          }).with(switch timer.mode {
            case _ if (timer.paused): Css.atoms({ color: rgb(159, 159, 159) });
            case Working: Css.atoms({ color: theme(pompom.color.working) });
            case Break: Css.atoms({ color: theme(pompom.color.onBreak) });
          }),
          children: [
            format(Date.fromTime(timer.secondsElapsed * 1000))
          ]
        })
      ]
    });
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
