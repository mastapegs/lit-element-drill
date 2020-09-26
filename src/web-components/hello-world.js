import { LitElement, html, css } from 'lit-element'

class HelloWorld extends LitElement {

  static get styles() {
    return css`
      .container {
        background-color: black;
        color: white;
      }
    `
  }

  render() {
    return html`
      <div class="container">
        <h1>Hello, World!</h1>
        <p>Message from hello-world component.</p>
      </div>
    `
  }

}

customElements.define('hello-world', HelloWorld)