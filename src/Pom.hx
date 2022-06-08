import js.Browser;
import pine.html.dom.DomBootstrap;
import pompom.App;

using Nuke;

function main() {
  Css.global({
    'html': {
      margin: 0,
      padding: 0
    },
    'body': {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontSize: 13.px(),
      boxSizing: 'border-box',
      backgroundColor: rgb(34, 34, 34)
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit'
    },
    'button': {
      border: 'none',
      outline: 'none',
      display: 'block',
      background: 'transparent',
      padding: 0,
      margin: 0,
      color: 'inherit',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      '&:hover': {
        cursor: 'pointer',
      },
      '&:disabled': {
        cursor: 'default',
      }
    }
  });

  var boot = new DomBootstrap(Browser.document.getElementById('root'));
  boot.mount(new App({}));
}
