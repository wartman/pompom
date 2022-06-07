package pompom;

import js.Browser;
import pine.*;
import pine.html.*;

class App extends ImmutableComponent {
  @prop final state:TimerState = new TimerState({ mode: Paused });

  override function init(context:InitContext) {
    Effect.from(context).add(() -> {
      var title = Browser.document.head.querySelector('title');
      switch state.mode {
        case Paused: title.innerHTML = 'PomPom | Paused';
        case Working: title.innerHTML = 'PomPom | Working';
        case Break: title.innerHTML = 'PomPom | On Break';
      }
    });
  }

  public function render(context:Context) {
    return Html.div({},
      new TimerDisplay({ timer: state }),
      Html.div({},
        Html.button({
          onclick: e -> {
            e.preventDefault();
            state.start();
          }
        }, 'Start'),
        Html.button({
          onclick: e -> {
            e.preventDefault();
            state.pause();
          }
        }, 'Pause'),
        Html.button({
          onclick: e -> {
            e.preventDefault();
            state.reset();
          }
        }, 'Reset')
      )
    );
  }
}
