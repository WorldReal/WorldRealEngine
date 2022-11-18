import './style.css'

// import * as tsThis from './test'

// import {Template} from '../WorldRealEngine/WorldRealEngine'
// import * as WorldRealEngine from '../WorldRealEngine/WorldRealEngine'
import * as WorldRealEngine from 'WorldRealEngine'
import * as test from './test'
const aa = test.tsThis
console.log(aa)
const app = document.querySelector<HTMLDivElement>('#app')!
console.log(WorldRealEngine.Template.getPoint(0, 1))
app.innerHTML = `
  <h1>test</h1>
`