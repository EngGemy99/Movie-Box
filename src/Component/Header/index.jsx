import './style.css'
const Header = () => {
    return (
        <header className="position-relative">
            <div className="information position-absolute">
                <p>Movie
                    <span>
                        Box
                    </span>
                </p>
                <h2 className="mb-4">Trending
                    <span> Movies,</span>

                    <br />
                    TVs Shows, & More.
                </h2>

                <button type="button" className="btn btn-danger btn-lg"> Get Start</button>
            </div>

        </header>
    );
}

export default Header;