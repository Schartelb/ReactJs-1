const App = () => {
    <div>
        <Person
            name="Santa Claus"
            age="3400"
            hobbies={[{ id: 1, text: "woodcrafting" }, { id: 2, text: "painting" }, { id: 3, text: "Winter sports" }]}
        />
        <Person
            name="2023"
            age="-1"
            hobbies={[{ id: 1, text: "business" }, { id: 2, text: "advocacy" }, { id: 3, text: "havoc" }]}
        />
            <Person 
        name = "Saint Niklaus"
        age = "1600"
        hobbies = {[{id:1, text:"Sleigh Rides"},{id:2, text:"Animal Care"},{id:3, text:"Capitalism"}]}
        />
    </div>
}

ReactDOM.render(<App />,
    document.getElementById("root"))