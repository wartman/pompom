package pompom;

import js.Browser;
import pine.*;
import pine.html.*;

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
    return Html.div({},
      new TimerDisplay({ timer: state }),
      new Isolate({
        wrap: context -> Html.div({},
          Html.div({}, switch state.paused {
            case true:
              Html.button({
                onclick: e -> {
                  e.preventDefault();
                  state.start();
                }
              }, 'Start');
            default:
              Html.button({
                onclick: e -> {
                  e.preventDefault();
                  state.pause();
                }
              }, 'Pause');
          }),
          Html.div({},
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
