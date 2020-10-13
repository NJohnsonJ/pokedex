import {createMuiTheme} from "@material-ui/core";

const PokedexTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#E60808"
    },
    secondary: {
      main: "#E9EF10"
    },
  },
  shape: {
    borderRadius: 5
  }
})

export default PokedexTheme;
