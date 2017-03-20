import React from "react"

export const MultiSelect = (props) => {
    return (
        <div className="input">
            <select id="" multiple name={props.name}>
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
            </select>
        </div>
    );
}