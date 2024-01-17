import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  spacing: 4,
  // palette: {
  //   mode: "dark",
  //   primary: {
  //     main: "#402B3A",
  //   },
  //   secondary: {
  //     main: "#FF9BD2",
  //   },
  // },
});
