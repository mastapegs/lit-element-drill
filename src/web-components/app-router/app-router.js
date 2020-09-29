import { LitElement, html } from 'lit-element'

class AppRouter extends LitElement {

  constructor() {
    super()
    this.setupRouter()
  }

  setupRouter() {
    window.addEventListener('popstate', (e) => {
      console.log(e)
    })
  }

  render() {
    return html`
      <div>
        <p>Router in progress.</p>
      </div>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    `
  }

}

customElements.define('app-router', AppRouter)