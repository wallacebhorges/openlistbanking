import React from 'react';
import axios from 'axios';


const ParticipantList = axios.create({
  baseURL: 'https://data.directory.openbankingbrasil.org.br/participants'
  
});

export default ParticipantList;
