package pompom.ui;

import pine.*;
import pine.html.*;

using Nuke;

class Card extends ImmutableComponent {
  @prop final styles:ClassName = null;
  @prop final children:Array<HtmlChild>;

  public function render(context:Context):Component {
    return new Html<'div'>({
      className: Css.atoms({
        display: 'flex',
        padding: 2.rem(),
        borderRadius: 2.rem(),
        backgroundColor: theme(pompom.box.bgColor),
        color: theme(pompom.box.color)
      }).with(styles),
      children: children
    });
  }
}
