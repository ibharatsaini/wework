const { createTheme } = require("@mui/material");

const theme = createTheme({
    breakpoints:{
        values:{
            xs:0,
            sm: 450,
            md: 900,
            xl: 1550
        }
    }
})

export default theme