const List = (props) => {
    return(
        <div>
            <p>{props.a.join(",")}</p>
        </div>
    )
   };

export default function Todo () {
    // const a1=;
    return (
    <div className="App">
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List a={['Walk','Cook','Bake']}/>
        <h2>Tomorrow</h2>
        <List a={['Study','Code','Eat']}/>
    </div>
    );
   }