import Nav from "./Nav"

function Header(props) {
    return <header className="App-header">
        <h1>Alec Hunter</h1>
        <Nav {...props}/>
    </header>
}

export default Header;