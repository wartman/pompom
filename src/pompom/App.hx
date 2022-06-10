package pompom;

import js.Browser;
import pine.*;
import pine.html.*;
import pompom.ui.*;

using Nuke;

class App extends ImmutableComponent {
  @prop final state:TimerState = new TimerState({ mode: Working });

  override function init(context:InitContext) {
    Effect.on(context).add(() -> {
      var title = Browser.document.head.querySelector('title');
      var suffix = state.paused ? ' (Paused)' : '';
      switch state.mode {
        case Working: title.innerHTML = 'PomPom | Working$suffix';
        case Break: title.innerHTML = 'PomPom | On Break$suffix';
      }
    });
  }

  public function render(context:Context) {
    return new Html<'div'>({
      className: Css.atoms({
        margin: [ 2.rem(), 'auto' ],
        maxWidth: 300.px(),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme(pompom.color.dark),
        color: theme(pompom.color.light),
        padding: 2.rem(),
        borderRadius: 2.rem(),
      }),
      children: [
        new TimerDisplay({ timer: state }),
        new Isolate({
          wrap: context -> new Html<'div'>({
            className: Css.atoms({
              display: 'flex',
              gap: 1.rem()
            }),
            children: [
              new Html<'div'>({
                children: [
                  switch state.paused {
                    case true:
                      new Button({
                        styles: switch state.mode {
                          case Working: Theme.define({
                            pompom: { 
                              button: { 
                                bgColor: theme(pompom.color.working),
                                color: theme(pompom.color.dark)
                              } 
                            } 
                          });
                          case Break: Theme.define({
                            pompom: {
                              button: {
                                bgColor: theme(pompom.color.onBreak),
                                color: theme(pompom.color.dark)
                              }
                            }
                          });
                        },
                        onClick: e -> {
                          e.preventDefault();
                          state.start();
                        },
                        child: 'Start'
                      });
                    default:
                      new Button({
                        styles: Theme.define({
                          pompom: {
                            button: {
                              bgColor: theme(pompom.color.light),
                              color: theme(pompom.color.dark)
                            }
                          }
                        }),
                        onClick: e -> {
                          e.preventDefault();
                          state.pause();
                        },
                        child: 'Pause'
                      });
                  }
                ]
              }),
              new Html<'div'>({
                className: Css.atoms({
                  display: 'flex',
                  gap: 1.rem()
                }),
                children: [
                  new Button({
                    onClick: e -> {
                      e.preventDefault();
                      state.takeBreak();
                    },
                    child: 'Break'
                  }),
                  new Button({
                    onClick: e -> {
                      e.preventDefault();
                      state.startWork();
                    },
                    child: 'Work'
                  })
                ]
              })

            ]
          })
        })
      ]
    });
  }
}
