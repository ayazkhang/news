import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";

interface ArticleCardProps {
  article: {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: {
      name: string;
    };
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt, source } = article;

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={urlToImage || "https://via.placeholder.com/150"}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {source.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {new Date(publishedAt).toLocaleDateString()}
          </Typography>
        </Grid>

        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>

        <Box sx={{ mt: "auto" }}>
          <Button
            size="small"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 1 }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
