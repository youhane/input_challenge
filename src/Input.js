import { InputDefault } from "./Default.styles"
import { DisabledInput } from "./Disabled.styles";
import { ErrorInput } from "./Error.styles"

const Input = ({ helperText }) => (
    <div>
        <InputDefault>
            <label>
                Label
                <input type={"text"} placeholder="Placeholder" />
            </label>
        </InputDefault>
        <ErrorInput>
            <label>
                Label
                <input type={"text"} placeholder="Placeholder" />
            </label>
        </ErrorInput>
        <DisabledInput>
            <label>
                Label
                <input type={"text"} placeholder="Placeholder" />
            </label>
        </DisabledInput>
        <InputDefault>
            <label>
                Label
                <input type={"text"} placeholder="Placeholder" />
                <br></br>
                <span>{helperText}</span>
            </label>
        </InputDefault>
    </div>
)

export default Input;