import * as React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Box } from "@mui/material";

import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFetch } from "use-http";
import "./card.css";

import { useLocalStorage } from "react-use-storage";

const MediaCard = ({ img, nom, description }) => {
  const [isconnect, setisconnect, removeisconnect] = useLocalStorage(
    "isconnect",
    false
  );

  const { get, post, response, loading, error } = useFetch(
    "http://localhost:7000"
  );

  const [value, setValue] = React.useState(0);

  const [annonce, setAnnonces] = useState([]);
  useEffect(async () => {
    const annonce = await get("/api/annonce");
    setAnnonces(annonce);
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex" }} mt={7} ml={20}>
        <Row xs={1} md={2} className="g-2">
          <Col className="ka">
            <Card className="ha" width="500" height="500">
              <Card.Body>
                <Card.Title>{nom}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text></Card.Text>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    {
                      isconnect
                        ? (window.location = "/information")
                        : (window.location = "/login");
                    }
                  }}
                >
                  Plus D'Information
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Box>
    </div>
  );
};

export default MediaCard;
