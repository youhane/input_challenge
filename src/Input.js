import { InputDefault } from "./Default.styles"
import { Error } from "./Error.styles"

const Input = () => (
    <div>
        <InputDefault>
            <label>
                Label
                <input type={"text"} placeholder="Placeholder" />
            </label>
        </InputDefault>
        <Error>
            <label>
                Label
                <input type={"text"} placeholder="Placeholder" />
            </label>
        </Error>
    </div >
)

export default Input;