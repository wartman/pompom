package pompom.ui;

import pine.*;
import pine.html.*;
import pine.html.HtmlEvents;

using Nuke;

class Button extends ImmutableComponent {
  @prop final styles:ClassName = null;
  @prop final onClick:EventListener;
  @prop final child:HtmlChild;

  public function render(context:Context) {
    return new Html<'button'>({
      className: Css.atoms({
        color: theme(pompom.button.color),
        backgroundColor: theme(pompom.button.bgColor),
        padding: 1.rem(),
        borderRadius: 4.rem(),
        fontWeight: 'bold'
      }).with(styles),
      onclick: onClick,
      children: [ child ]
    });
  }
}
