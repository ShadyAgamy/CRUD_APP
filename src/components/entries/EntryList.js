import React from "react";
import { Link } from "react-router-dom";
import { deleteEntry } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Container, Card } from "react-bootstrap";

const EntryList = () => {
  const entries = useSelector((state) => state.entries);

  const dispatch = useDispatch();

  const renderList = () => {
    return entries.map((entry) => {
      return (
        <Col md={3} className="mb-4 " key={entry.id}>
          <Card className="h-100 ">
            <Card.Body>
              <Card.Title>{entry.Category}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {entry.API}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {entry.Link}
              </Card.Subtitle>
              <Card.Text>{entry.Description}</Card.Text>
              <Link
                type="button"
                className="btn btn-info me-2 mb-2"
                to={`/entries/edit/${entry.id}`}
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn btn-danger  me-2 mb-2"
                onClick={() => dispatch(deleteEntry(entry.id))}
              >
                Delete
              </button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  const renderCreate = () => {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/entries/new">
          <button className="btn btn-warning">Create New</button>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <div className="mb-4 d-flex align-items-center justify-content-between">
        <h2 className=" h3">All Entries</h2>
        {renderCreate()}
      </div>

      <Container>
        <Row>{entries.length>1?renderList(): <p>Loading...</p>}</Row>
      </Container>
    </div>
  );
};

export default EntryList;
