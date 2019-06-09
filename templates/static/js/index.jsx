import ReactDOM from 'react-dom'
import routes from './routes'
import '../../public/sass/base.sass'

// render React content to div
ReactDOM.render(routes, document.getElementById('content'))

if (module.hot) {
 module.hot.accept()
}