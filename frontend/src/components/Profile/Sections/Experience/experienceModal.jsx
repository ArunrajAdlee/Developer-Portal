import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Icon, IconButton, Modal } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
//import { editProfileExperience } from '../../.././store/actions/index';

const ExperienceModal = (props) => {
  const { open, handleClose } = props;
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="experience-modal"
        aria-describedby="Modal to allow user to add or edit an experience"
      >
        <div className="centered-div experience-modal">
          <h1>HI</h1>
        </div>
      </Modal>
    </>
  );
};

export default ExperienceModal;
