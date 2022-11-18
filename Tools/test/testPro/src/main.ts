import './style.css'

// import * as tsThis from './test'

// import {Template} from '../WorldRealEngine/WorldRealEngine'
// import * as WorldRealEngine from '../WorldRealEngine/WorldRealEngine.js'

import {Template} from "WorldRealEngine";
import * as test from './test'
const aa = test.tsThis
console.log(aa)
const app = document.querySelector<HTMLDivElement>('#app')!
console.log(Template.getPoint(0, 1))
app.innerHTML = `
  <h1>0</h1>
`