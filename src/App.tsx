import { Navbar, Hero } from './components/Header'
import { About, Features, Works, Tutorial, Contact, Footer } from './components/Sections'
function App() { return <><a className="skip-link" href="#main">跳至主要內容</a><Navbar/><main id="main"><Hero/><About/><Features/><Works/><Tutorial/><Contact/></main><Footer/></> }
export default App
