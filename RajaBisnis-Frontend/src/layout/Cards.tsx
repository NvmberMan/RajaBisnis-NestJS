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
import { useEffect, useState } from "react";
import { GetShop, Getimage } from "../Api";

export default function Cards() {
  const [shop, setShop] = useState<any[]>([]);

  useEffect(() => {
    let hit = GetShop();

    hit
      .then((data) => {
        console.log(data);
        setShop(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const {id} = useParams()
  let navigate = useNavigate()

  const handleClick = (event: { currentTarget: { id: any; }; }) => {
    const idpages = (event.currentTarget.id);
    navigate(`/Details/${idpages}`, { replace: true });
  }

  return (
    <>
        <Box sx={{width: "85vw", display : "flex", flexWrap: "wrap-reverse", gap: "20px"}}>

        {shop.map((post) => (<div key={post.id}>
                <Card sx={{ width: 275 , boxShadow:10}} id="1">
            <CardContent>
              <Typography
                variant="h5"
                sx={{ display: "flex", justifyContent: "center" }}
                color="text.primary"
                gutterBottom
              >
                <strong>{post.name}</strong>
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={`${Getimage(post.name)}`}
              />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Price: {post.price}
              </Typography>
              <Typography variant="body2">{post.description}</Typography>
            </CardContent>
            <CardActions
              id = "1"
              sx={{ justifyContent: "center", textDecoration: "none" }}
              onClick={handleClick}
              
            >
              <Button color="secondary">Detail</Button>
            </CardActions>
          </Card>
              </div>))}

          
          
        </Box>
    </>
  );
}
