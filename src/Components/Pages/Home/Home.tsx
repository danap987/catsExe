import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home center">
			<h1>WELCOME TO CATS WORLD</h1>

            <iframe src="https://giphy.com/embed/mlvseq9yvZhba" width="480" height="480" 
             allowFullScreen></iframe>
            {/* <p><a href="https://giphy.com/gifs/funny-cat-mlvseq9yvZhba">via GIPHY</a></p> */}
        </div>
    );
}

export default Home;
