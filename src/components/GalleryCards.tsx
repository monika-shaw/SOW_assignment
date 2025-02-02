import Grid from '@mui/material/Grid2';
import { Box, Container } from "@mui/material"
import GlobalConstants from '../constants/GlobalConstants';
import type React from "react"
import { Card, CardMedia, Typography, CardActionArea } from "@mui/material"
import { ImageCardProps } from '../interfaces/GalleryCards';

const GalleryCards: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ marginBottom: '10rem', marginTop: '5rem' }}>
            <Typography
                sx={{
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    padding: '3rem 0rem',
                    color: '#887C68',
                    fontWeight: 400,
                    fontSize: '28px',
                    fontFamily: '"Martel Sans", serif'
                }}>
                Communities we Manage
            </Typography>
            <Grid container spacing={6}>
                {GlobalConstants.CommunityImages.map((card, index) => (
                    <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }} key={index}>
                        <CardGrid {...card} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

const CardGrid: React.FC<ImageCardProps> = (props) => {
    const { image, title, description } = props;
    return (
        <Card
            sx={{
                boxShadow: "12px 17px 60px 0px #00000040",
                borderRadius: 0,
                display: "flex",
                flexDirection: "column",
                height: "100%"
            }}
        >
            <CardActionArea sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia component="img" height="200" image={image} alt={title} sx={{ borderRadius: 0 }} />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "calc(100% - 200px)",
                    }}
                >
                    <Box sx={{ padding: "16px", flexGrow: 1 }}>
                        <Typography variant="body2" color="text.secondary"
                            sx={{
                                textAlign: 'justify',
                                color: '#887C68',
                                fontWeight: 400,
                                fontSize: '1rem',
                                fontFamily: '"Open Sans", serif'
                            }}
                        >
                            {description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#F8F8F8",
                            padding: "16px",
                        }}
                    >
                        <Typography variant="h5" component="div"
                            sx={{
                                textAlign: 'justify',
                                color: '#887C68',
                                fontWeight: 400,
                                fontSize: '22px',
                                fontFamily: '"Open Sans", serif'
                            }}
                        >
                            {title}
                        </Typography>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default GalleryCards;