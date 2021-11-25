import { GlobalStyle } from "./GlobalStyle"
import Input from "./Input";

const App = () => (
  <div className="App">
    <h1>Inputs</h1>
    <Input helperText={"Some interesting text"} iconStart="phone" iconEnd="user-lock" />
    <GlobalStyle />
  </div>
)

export default App;