import React from 'react';

class GetMovie extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
 
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }
 
    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        const data = new URLSearchParams();
        data.append('address.city', 'McKenziehaven');
        //data.append('email', 'Shanna@melissa.tv');

        fetch('https://jsonplaceholder.typicode.com/users?'+data, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            /*,
            body: data*/
        })
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true,
            });
        });
           /* .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));*/
        /*    
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                });
            });*/
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );
 
        return (
            <div className="App">   
                <h3>Fetch data from an api in react</h3>
                <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"User_Name: "}
                                    </strong>
                                    {item.username},
                                </div>
                                <div>
                                    Full_Name: {item.name},
                                </div>
                                <div>
                                    User_Email: {item.email}
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
      
export default GetMovie;