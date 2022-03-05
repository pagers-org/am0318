import React, { useState } from 'react';
import { Template } from '../components/Template';
import award_mint from '../assets/images/award_mint.svg';
import award_blue from '../assets/images/award_blue.svg';
import award_yellow from '../assets/images/award_yellow.svg';
import award_orange from '../assets/images/award_orange.svg';
import Loading from '../components/Loading';

const awardsImage = [award_orange, award_yellow, award_mint, award_blue];

export const Decorate = () => {

  const [templateSelectDone, setTemplateSelectDone] = useState(false);
  const [selectedAwardImg, setSelectedAwardImg] = useState(award_orange);
  return (
    <>

      <Loading />

    </>
  );
};
export default Decorate;
