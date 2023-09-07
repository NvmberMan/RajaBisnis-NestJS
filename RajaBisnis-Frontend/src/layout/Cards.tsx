import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { Navigate ,useNavigate} from "react-router-dom";

export default function Cards() {
  const {id} = useParams()
  let navigate = useNavigate()

  const handleClick = (event: { currentTarget: { id: any; }; }) => {
    const idpages = (event.currentTarget.id);
    navigate(`/Details/${idpages}`, { replace: true });
  }

  return (
    <>
        <Box sx={{width: "85vw", display : "flex", flexWrap: "wrap-reverse", gap: "20px"}}>
      
          <Card sx={{ width: 275 , boxShadow:10}} id="1">
            <CardContent>
              <Typography
                variant="h5"
                sx={{ display: "flex", justifyContent: "center" }}
                color="text.primary"
                gutterBottom
              >
                <strong>Ayam gepress</strong>
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image="/src/assets/money.jpg"
                alt="Paella dish"
              />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Type: Food
              </Typography>
              <Typography variant="body2">Sebuah resto makanan</Typography>
            </CardContent>
            <CardActions
              id = "1"
              sx={{ justifyContent: "center", textDecoration: "none" }}
              onClick={handleClick}
              
            >
              <Button color="secondary">Detail</Button>
            </CardActions>
          </Card>
          
        </Box>
    </>
  );
}
