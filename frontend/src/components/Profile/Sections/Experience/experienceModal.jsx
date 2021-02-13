import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Icon, IconButton, Modal } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { FormikTextField } from '../../../Util/formikTextField';
import { CircularProgress } from '@material-ui/core';
import { addProfileExperienceStart } from '../../../../store/actions';

const ExperienceModal = (props) => {
  const { open, handleClose } = props;
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    const params = { ...values };
    dispatch(addProfileExperienceStart(params));
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="experience-modal"
        aria-describedby="Modal to allow user to add or edit an experience"
      >
        <div className="centered-div experience-modal">
          <Typography variant="h4">Add Experience</Typography>
          <Formik
            initialValues={{
              position: '',
              company: '',
              location: '',
              startDate: '',
              endDate: '',
              isCurrent: true,
              description: '',
            }}
            // validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              handleSubmit(values, actions);
            }}
          >
            {() => (
              <Form>
                <FormikTextField
                  formikKey="position"
                  label="Position"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormikTextField
                  formikKey="company"
                  label="Company"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormikTextField
                  formikKey="location"
                  label="Location"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormikTextField
                  formikKey="startDate"
                  label="Start Date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormikTextField
                  formikKey="endDate"
                  label="End Date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormikTextField
                  formikKey="description"
                  label="Description"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <div className="btn">
                  <Button color="inherit" variant="outlined" type="submit">
                    Add
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default ExperienceModal;
