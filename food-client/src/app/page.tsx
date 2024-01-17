import { Grid, Button, Typography } from "@mui/material";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      {/* <Grid container>
        <Grid item xs={12} md={6} className="typogrid">
          <Typography variant="h2">Welcome Mui Framework</Typography>
        </Grid>
        <Grid item xs={12} md={6} className="clickgrid">
          <Button variant="contained" color="primary">
            Click
          </Button>
          <Button variant="contained" color="secondary">
            Click
          </Button>
        </Grid>
      </Grid> */}
      <Header />
    </main>
  );
}
