package pompom;

import js.Browser;
import pine.*;
import pine.html.*;

using Nuke;

class App extends ImmutableComponent {
  @prop final state:TimerState = new TimerState({ mode: Working });

  override function init(context:InitContext) {
    Effect.from(context).add(() -> {
      var title = Browser.document.head.querySelector('title');
      var suffix = state.paused ? ' (Paused)' : '';
      switch state.mode {
        case Working: title.innerHTML = 'PomPom | Working$suffix';
        case Break: title.innerHTML = 'PomPom | On Break$suffix';
      }
    });
  }

  public function render(context:Context) {
    return Html.div({
      className: Css.atoms({
        margin: [ 2.rem(), 'auto' ],
        maxWidth: 300.px(),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: rgb(85, 85, 85),
        color: rgb(159, 159, 159),
        padding: 2.rem(),
        borderRadius: 2.rem(),
      })
    },
      new TimerDisplay({ timer: state }),
      new Isolate({
        wrap: context -> Html.div({
          className: Css.atoms({
            display: 'flex',
            gap: 1.rem()
          })
        },
          Html.div({}, switch state.paused {
            case true:
              // todo: Break these out into components
              Html.button({
                className: Css.atoms({
                  color: rgb(85, 85, 85),
                  padding: 1.rem(),
                  borderRadius: 4.rem(),
                  fontWeight: 'bold'
                }).with(switch state.mode {
                  case Working: Css.atoms({ backgroundColor: rgb(183, 181, 85) });
                  case Break: Css.atoms({ backgroundColor: rgb(139, 126, 204) });
                }),
                onclick: e -> {
                  e.preventDefault();
                  state.start();
                }
              }, 'Start');
            default:
              Html.button({
                className: Css.atoms({
                  color: rgb(85, 85, 85),
                  backgroundColor: rgb(159, 159, 159),
                  padding: 1.rem(),
                  borderRadius: 2.rem(),
                  fontWeight: 'bold'
                }),
                onclick: e -> {
                  e.preventDefault();
                  state.pause();
                }
              }, 'Pause');
          }),
          Html.div({
            className: Css.atoms({
              display: 'flex',
              gap: 1.rem()
            })
          },
            Html.button({
              onclick: e -> {
                e.preventDefault();
                state.takeBreak();
              }
            }, 'Take Break'),
            Html.button({
              onclick: e -> {
                e.preventDefault();
                state.startWork();
              }
            }, 'Start Work')
          )
        )
      })
    );
  }
}
