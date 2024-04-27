const NavBar = () => {
    const link = "https://www.nytimes.com/games/wordle/index.html"
    return (
        <nav className="navbar">
            <h1>Wordle</h1>
            <div className="links">
                <a href={link}target="_blank" rel="noreferrer">Original Wordle</a>
            </div>
        </nav>
    );
}
 
export default NavBar;