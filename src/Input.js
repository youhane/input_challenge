import { InputDefault } from "./Default.styles"
import { DisabledInput } from "./Disabled.styles";
import { ErrorInput } from "./Error.styles"

const Input = () => (
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
            </label>
            <input type={"text"} placeholder="Placeholder" />
        </DisabledInput>
    </div>
)

export default Input;