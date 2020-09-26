import { LitElement, html } from 'lit-element';
import './web-components/hello-world'

class DrillApp extends LitElement {
  render() {
    return html`
      <hello-world></hello-world>
    `;
  }
}

customElements.define('drill-app', DrillApp)