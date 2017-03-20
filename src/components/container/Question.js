import { MultiSelect } from "../presentational/MultiSelect";

export const Question = (props) => {
    return (
        <div>
            <label>{props.Description}</label>
            <MultiSelect />
        </div>
    );
}