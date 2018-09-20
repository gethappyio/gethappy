import React, { Component } from "react";
import "./styles/totals-table.scss";

class TotalsTable extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const totals = this.props.data;
        return (
            <table className="totals-table">
                {Object.keys(totals).map((key) => 
                    <tr><th className="totals-table__label">{key}:</th><td>{totals[key]}</td></tr>
                )}
            </table>
            
        );
    }
}

export default TotalsTable;