import js.Browser;
import pine.html.dom.DomBootstrap;
import pompom.App;

function main() {
  var boot = new DomBootstrap(Browser.document.getElementById('root'));
  boot.mount(new App({}));
}
