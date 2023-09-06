import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SideBar from "../layout/Sidebar";
import "./Style/Dash.css";

export default function DashBoard() {
  return (
    <>
      <Box
        component="main"
        sx={{ display: "flex", flexGrow: 6, paddingLeft: 5 }}
      >
        <SideBar />
        <Box sx={{ marginTop: 10 }}>
          <Typography variant="h6" paragraph>
            Ini DashBoard
          </Typography>
        </Box>
      </Box>
    </>
  );
}
