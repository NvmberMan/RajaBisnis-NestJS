import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SideBar from "../layout/Sidebar";
import './Style/Shop.css'
import Cards from "../layout/Cards";


export default function Shop() {
  return (
    <>
      <Box component="main" sx={{ display: "flex", flexGrow: 6}}>
        <SideBar />
        <Box sx={{ marginTop: 10 }}>
        <Cards/>
        </Box>
      </Box>
    </>
  );
}
