import React, { Component } from "react";

class ArrayOfObjects extends Component {
    constructor(props){
        super(props);
        this.state = {
            CountriesInfo: [
                {name:'India',Capital:"NewDelhi"},
                {name:'England',Capital:"London"},
                {name:'Japan',Capital:"Tokyo"},
                {name:'China',Capital:"Beijing"},
            ]
        }
    }

    render () {
        const {CountriesInfo}=this.state;
        return (
            <div>
                <table border='1'>
                    <tr>
                        <th>Country Name</th>
                        <th>Capital</th>
                    </tr>
                    {CountriesInfo.length>0&&CountriesInfo.map((Country)=>{
                        return <tr key={Country.name}>
                            <td>{Country.name}</td>
                            <td>{Country.Capital}</td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}

export default ArrayOfObjects
