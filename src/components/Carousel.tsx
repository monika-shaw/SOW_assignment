import GlobalConstants from '../constants/GlobalConstants';
import { Button, Box, Typography } from "@mui/material";
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid2';
import { CarouselProps } from '../interfaces/Services';

const Cards: React.FC<CarouselProps> = (props) => {
    const { items } = props;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const itemsPerView = isSmallScreen ? 1 : 3;
    const totalSlides = items.length;

    const nextSlide = () => {
        if (currentIndex < totalSlides - itemsPerView) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: "1200px",
                margin: "auto",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        transition: "transform 0.5s ease-in-out",
                        transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                        width: "100%",
                    }}
                >
                    {items.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: `0 0 ${100 / itemsPerView}%`,
                                padding: "24px",
                                textAlign: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    height: "500px",
                                    overflow: "hidden",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                    backgroundColor: "#f0f0f0",
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    }
                                }}
                            >
                                <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={`Slide ${index + 1}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        color: "white",
                                        padding: "8px",
                                    }}
                                >
                                    <Typography variant="subtitle1"
                                        sx={{
                                            textAlign: 'center',
                                            textTransform: 'uppercase',
                                            fontWeight: 400,
                                            fontSize: '28px'
                                        }}
                                    >{item.title}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    right: "0",
                    zIndex: 10,
                    display: "flex",
                    justifyContent: "space-between",
                    pointerEvents: "none",
                }}
            >
                <Button
                    sx={{
                        padding: 2,
                        position: "absolute",
                        left: "-40px",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        bgcolor: "#F6F6F6",
                        color: "black",
                        "&:hover": { bgcolor: "gray" },
                        pointerEvents: "auto",
                    }}
                    onClick={prevSlide}
                    variant="contained"
                    disabled={currentIndex === 0}
                >
                    <ArrowBackIosIcon />
                </Button>
                <Button
                    sx={{
                        padding: 2,
                        position: "absolute",
                        right: "-40px",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        bgcolor: "#F6F6F6",
                        color: "black",
                        "&:hover": { bgcolor: "gray" },
                        pointerEvents: "auto",
                    }}
                    onClick={nextSlide}
                    variant="contained"
                    disabled={currentIndex >= totalSlides - itemsPerView}
                >
                    <ArrowForwardIosIcon />
                </Button>
            </Box>
        </Box>

    );
};

const Carousel = () => {
    return (
        <Grid sx={{ marginBottom: '5rem' }}>
            <Typography
                sx={{
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    padding: '2rem 0rem',
                    color: '#887C68',
                    fontWeight: 400,
                    fontSize: '28px'
                }}>
                Our Services
            </Typography>
            <Cards items={GlobalConstants.CommunityImages} />
        </Grid>
    );
};

export default Carousel;
