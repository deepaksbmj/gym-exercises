import { Box, Typography, Stack } from "@mui/material";

const ExerciseVideos = ({ name, exerciseVideos }) => {
  return (
    <Box sx={{ marginTop: { lg: "50px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch some{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "50px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} width="300px" height="200px"/>
            <Typography variant="h5" color="#000">
              {item.video.title}
            </Typography>
            <Typography variant="h6" color="#000">
              {item.video.channelName}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
