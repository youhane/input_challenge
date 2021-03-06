import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputDefault } from "./Default.styles"
import { DisabledInput } from "./Disabled.styles";
import { ErrorInput } from "./Error.styles"
import { IconInput } from "./IconInput.styles";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { InputSize } from "./Size.styles";

library.add(faPhone, faUserLock)

const Input = ({ helperText, iconStart, iconEnd, size, fullWidth, row }) => (
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
        <IconInput iconStart>
            <label>
                Label
                <div>
                    <span>
                        <FontAwesomeIcon icon={iconStart} flip="horizontal" size="lg" />
                        <input type={"text"} placeholder="Placeholder" />
                    </span>
                </div>
            </label>
        </IconInput>
        <IconInput >
            <label>
                Label
                <div>
                    <span>
                        <input type={"text"} placeholder="Placeholder" />
                        <FontAwesomeIcon icon={iconEnd} flip="horizontal" size="lg" />
                    </span>
                </div>
            </label>
        </IconInput>
        <InputDefault>
            <label>
                Label
                <input type={"text"} placeholder="Placeholder" value="Text" />
            </label>
        </InputDefault>
        <InputSize size={size}>
            <label>
                Label
                <br></br>
                <input type={"text"} placeholder="Placeholder" />
            </label>
        </InputSize>
        <InputDefault fullWidth>
            <label>
                Label
                <br></br>
                <input type={"text"} placeholder="Placeholder" />
            </label>
        </InputDefault>
        <InputDefault>
            <label>
                Label
                <br></br>
                <textarea rows={row} placeholder="Placeholder" />
            </label>
        </InputDefault>
    </div>
)

export default Input;