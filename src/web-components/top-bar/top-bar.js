import { LitElement, html, css } from 'lit-element'

class TopBar extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      header {
        background: #2196f3;
        height: 70px;
        box-shadow: 0px 0px 10px 5px hsla(0, 0%, 0%, .5);
        display: flex;
        align-items: center;
        color: white;
      }
      [role="img"] {
        margin: 0 10px;
        font-size: 1.5em;
      }
      .title {
        font-weight: bold;
        font-size: 1.5em;
        text-shadow: 2px 2px 2px hsla(0, 0%, 0%, 0.5);
      }
    `
  }
  
  render() {
    return html`
      <header>
        <span role='img' aria-label="Meridian">🌐</span>
        <span class="title">LitElement Web Components</span>
      </header>
    `
  }
  
}

customElements.define('top-bar', TopBar)