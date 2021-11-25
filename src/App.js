import { GlobalStyle } from "./GlobalStyle"
import Input from "./Input";

const App = () => (
  <div className="App">
    <h1>Inputs</h1>
    <Input helperText={"Some interesting text"} iconStart="phone" iconEnd="user-lock" size="sm" fullWidth multiline row="4" />
    <GlobalStyle />
  </div>
)

export default App;