import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const languages = [
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", title: "JavaScript" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", title: "Java" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", title: "C++" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", title: "C" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", title: "React.js" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg", title: "AngularJS" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", title: "Python" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg", title: "Go" }
  ];

  const navigate=useNavigate();

  const handleLoginpage=()=>{

    navigate("/login")

  }
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
        py: 6,
      }}
    >
      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1976d2, #42a5f5)",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Cloud Editor
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
            Write, compile, and deploy — all from the cloud, no installation required.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "white",
              color: "#1976d2",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
            onClick={handleLoginpage}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Languages */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Supported Languages
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", mb: 4 }}
        >
          Build and run your code in multiple languages directly from the browser.
        </Typography>
        <Grid container spacing={3}>
          {languages.map((lang, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 2,
                  p: 2,
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  image={lang.img}
                  alt={lang.title}
                  sx={{
                    width: "100%",
                    maxHeight: 80,
                    objectFit: "contain",
                    mb: 1,
                  }}
                />
                <Typography variant="body2" fontWeight="bold">
                  {lang.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 4,
          mt: 8,
          textAlign: "center",
          borderTop: "1px solid #ddd",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Cloud Editor — Demo content
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
