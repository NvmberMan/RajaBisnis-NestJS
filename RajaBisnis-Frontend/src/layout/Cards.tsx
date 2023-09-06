import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

export default function Cards() {
  return (
    <>
        <Box sx={{width: "90vw", display : "flex", flexWrap: "wrap", gap: "20px"}}>
      
          <Card sx={{ width: 275 }}>
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
              sx={{ justifyContent: "center", textDecoration: "none" }}
            >
              <Button color="secondary">Detail</Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 275 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ display: "flex", justifyContent: "center" }}
                color="text.primary"
                gutterBottom
              >
                <strong>Fashion</strong>
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image="/src/assets/money.jpg"
                alt="Paella dish"
              />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Type: Fashion
              </Typography>
              <Typography variant="body2">Sebuah Toko Design</Typography>
            </CardContent>
            <CardActions
              sx={{ justifyContent: "center", textDecoration: "none" }}
            >
              <Button color="secondary">Detail</Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 275 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ display: "flex", justifyContent: "center" }}
                color="text.primary"
                gutterBottom
              >
                <strong>Minuman</strong>
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image="/src/assets/money.jpg"
                alt="Paella dish"
              />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Type: Drink
              </Typography>
              <Typography variant="body2">Sebuah Toko Minuman</Typography>
            </CardContent>
            <CardActions
              sx={{ justifyContent: "center", textDecoration: "none" }}
            >
              <Button color="secondary">Detail</Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 275 }}>
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
              sx={{ justifyContent: "center", textDecoration: "none" }}
            >
              <Button color="secondary">Detail</Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 275 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ display: "flex", justifyContent: "center" }}
                color="text.primary"
                gutterBottom
              >
                <strong>Fashion</strong>
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image="/src/assets/money.jpg"
                alt="Paella dish"
              />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Type: Fashion
              </Typography>
              <Typography variant="body2">Sebuah Toko Design</Typography>
            </CardContent>
            <CardActions
              sx={{ justifyContent: "center", textDecoration: "none" }}
            >
              <Button color="secondary">Detail</Button>
            </CardActions>
          </Card>
          <Card sx={{width: 275 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ display: "flex", justifyContent: "center" }}
                color="text.primary"
                gutterBottom
              >
                <strong>Minuman</strong>
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image="/src/assets/money.jpg"
                alt="Paella dish"
              />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Type: Drink
              </Typography>
              <Typography variant="body2">Sebuah Toko Minuman</Typography>
            </CardContent>
            <CardActions
              sx={{ justifyContent: "center", textDecoration: "none" }}
            >
              <Button color="secondary">Detail</Button>
            </CardActions>
          </Card>
        </Box>
    </>
  );
}
