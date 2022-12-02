const App = () => (
    <div>
        <Tweet
            username="Ol'Musky"
            name="Elongated Stench"
            body="My business ventures are bigly successes" />
        <Tweet
            username="EdisonBattry"
            name="Elongated Stench"
            body="I M SO SMORT" />
         <Tweet
            username="EmeraldInheritance"
            name="Elongated Stench"
            body="Just a Small loan of a quarter billion dollars" />
    </div>
)

ReactDOM.render(<App />,
    document.getElementById("root"))