import { render, html } from 'lit-html'
import './drill-app'

render(html`
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font: 16px/1.5 Arial, Helvetica, sans-serif;
    }
  </style>
  <drill-app></drill-app>
`, document.body)