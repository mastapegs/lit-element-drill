import { LitElement, html } from 'lit-element';
import './web-components/top-bar'

class DrillApp extends LitElement {
  render() {
    return html`
      <top-bar></top-bar>
    `;
  }
}

customElements.define('drill-app', DrillApp)