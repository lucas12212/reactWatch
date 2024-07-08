import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const FilterModal = ({ isOpen, onClose, brands, test }) => {
  const [brand, setBrand] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    console.log("Brands received in FilterModal: ", brands); // Debug: Verify brands data
  }, [brands]);

  const handleSave = () => {
    console.log("Save button clicked");
    test(brand, minPrice, maxPrice, rating);
    console.log({
      brand,
      minPrice,
      maxPrice,
      rating
    });
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Filter Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col xs={12}>
              <Form.Group controlId="formBrand">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  as="select"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option value="">Select a brand</option>
                  {brands.map((brand, index) => (
                    <option key={index} value={brand}>{brand}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group controlId="formMinPrice">
                <Form.Label>Minimum Price</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter minimum price" 
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)} 
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group controlId="formMaxPrice">
                <Form.Label>Maximum Price</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter maximum price" 
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)} 
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group controlId="formRating">
                <Form.Label>Average Rating</Form.Label>
                <Row>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Col key={star} xs={2}>
                      <Form.Check 
                        type="radio" 
                        name="rating" 
                        label={`${star} star`} 
                        value={star}
                        checked={rating === `${star}`}
                        onChange={(e) => setRating(e.target.value)} 
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;

