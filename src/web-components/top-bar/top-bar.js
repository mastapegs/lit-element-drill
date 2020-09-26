import { LitElement, html, css } from 'lit-element'
import cssTemplate from './topBarCssTemplate'

class TopBar extends LitElement {

  static get styles() {
    return css`${cssTemplate}`
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