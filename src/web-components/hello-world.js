import { LitElement, html } from 'lit-element'

class HelloWorld extends LitElement {
  render() {
    return html`
      <h1>Hello, World!</h1>
      <p>Message from hello-world component.</p>
    `
  }
}

customElements.define('hello-world', HelloWorld)