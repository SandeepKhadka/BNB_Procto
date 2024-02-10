import React, { useState } from 'react';
import styled from 'styled-components';

const AppointmentContainer = styled.div`
  position: relative; 
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  background: #4D72D0;
  border-radius: 8px; 
  width: 60%;
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  width: 45%;
`;

const ScheduleContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
  color: #ffffff;
  margin-left: 10px;
`;

const ScheduleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const ScheduleTitle = styled.h2`
  margin-bottom: 15px;
`;

const ScheduleText = styled.p`
  font-weight: bold;
`;

const Form = styled.form`
  background-color: #ffffff;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 50px;
  outline: none;
`;

const Select = styled.select`
  width: calc(100% - 20px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const TextArea = styled.textarea`
  width: calc(100% - 20px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4D72D0;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #345899;
  }
`;

const InlineFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Appointment = ({ onClose }) => {
    const [showAppointment, setShowAppointment] = useState(true);

    return (
        <>
            {showAppointment && (
                <AppointmentContainer>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                    <FormContainer>
                        <Form>
                            <InlineFormGroup>
                                <FormGroup style={{}}>
                                    <Label htmlFor="firstName">First Name:</Label>
                                    <Input type="text" id="firstName" name="firstName" />
                                </FormGroup>
                                <FormGroup style={{}}>
                                    <Label htmlFor="lastName">Last Name:</Label>
                                    <Input type="text" id="lastName" name="lastName" />
                                </FormGroup>
                            </InlineFormGroup>
                            <InlineFormGroup>
                                <FormGroup style={{}}>
                                    <Label htmlFor="email">Email:</Label>
                                    <Input type="email" id="email" name="email" />
                                </FormGroup>
                                <FormGroup style={{}}>
                                    <Label htmlFor="phone">Phone:</Label>
                                    <Input type="tel" id="phone" name="phone" />
                                </FormGroup>
                            </InlineFormGroup>
                            <FormGroup>
                                <Label htmlFor="services">Services:</Label>
                                <Select id="services" name="services">
                                    <option value="service1">Service 1</option>
                                    <option value="service2">Service 2</option>
                                    <option value="service3">Service 3</option>
                                </Select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="bookingDate">Booking Date:</Label>
                                <Input type="date" id="bookingDate" name="bookingDate" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="message">Your Message:</Label>
                                <TextArea id="message" name="message" rows="4"></TextArea>
                            </FormGroup>
                            <Button type="submit">Book Now</Button>
                        </Form>
                    </FormContainer>
                    <ScheduleContainer>
                        {/* Clinic opening hour schedule */}
                        <ScheduleTitle>Clinic Opening Hours</ScheduleTitle>
                        <ScheduleRow>
                            <ScheduleText>Sunday:</ScheduleText>
                            <ScheduleText>4:30 AM - 5:30 PM</ScheduleText>
                        </ScheduleRow>
                        <hr />
                        <ScheduleRow>
                            <ScheduleText>Monday:</ScheduleText>
                            <ScheduleText>4:30 AM - 5:30 PM</ScheduleText>
                        </ScheduleRow>
                        <hr />
                        <ScheduleRow>
                            <ScheduleText>Tuesday:</ScheduleText>
                            <ScheduleText>4:30 AM - 5:30 PM</ScheduleText>
                        </ScheduleRow>
                        <hr />
                        <ScheduleRow>
                            <ScheduleText>Wednesday:</ScheduleText>
                            <ScheduleText>4:30 AM - 5:30 PM</ScheduleText>
                        </ScheduleRow>
                        <hr />
                        <ScheduleRow>
                            <ScheduleText>Thursday:</ScheduleText>
                            <ScheduleText>4:30 AM - 5:30 PM</ScheduleText>
                        </ScheduleRow>
                        <hr />
                        <ScheduleRow>
                            <ScheduleText>Friday:</ScheduleText>
                            <ScheduleText>4:30 AM - 5:30 PM</ScheduleText>
                        </ScheduleRow>
                        <hr />
                        <ScheduleRow>
                            <ScheduleText>Saturday:</ScheduleText>
                            <ScheduleText style={{ color: 'red', fontWeight: '400' }}>Closed</ScheduleText>
                        </ScheduleRow>
                        <hr />
                    </ScheduleContainer>
                </AppointmentContainer>
            )}
        </>
    );
}

export default Appointment;
