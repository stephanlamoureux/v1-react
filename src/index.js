import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.css'
import './css/responsive.css'
import './css/light.css'
import './css/hamburgers.css'
import './css/anicollection.css'
import './assets/fontawesome-pro-5.7.2-web/css/fontawesome-initial.css'

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
)
