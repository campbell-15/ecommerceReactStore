import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
    0.5: "0.5/5",
    1: "1.0/5",
    1.5: "1.5/5",
    2: "2.0/5",
    2.5: "2.5/5",
    3: "3.0/5",
    3.5: "3.5/5",
    4: "4.0/5",
    4.5: "4.5/5",
    5: "5.0/5",
};

export default function TextRating({ value }) {

    return (
        <Box
        sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
        }}
        >
        <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            sx={{
                "& .MuiRating-iconFilled": {
                    color: "#105E46", // Set star color to #105E46
                },
            }}
        />
        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        </Box>
    );
}
