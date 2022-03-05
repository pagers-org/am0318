import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AwardContents from '../components/AwardContents';
import SelectStamp from '../components/SelectStamp';
import { Template } from '../components/Template';
import award_mint from '../assets/images/award_mint.svg';
import award_blue from '../assets/images/award_blue.svg';
import award_yellow from '../assets/images/award_yellow.svg';
import award_orange from '../assets/images/award_orange.svg';

const Decorate = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const TEMPLATE_IMAGE = [award_mint, award_blue, award_yellow, award_orange];
  const COLORS = ['#FF5F0F', '#FFF27B', '#82E8CF', '#79BBE5'];
  const [awardParams, setAwardParams] = useState({
    title: '',
    description: '',
    templateId: '0',
    stickerId: '0',
  });

  const changeItems = (index, name) => {
    setAwardParams({ ...awardParams, [name]: index.toString() });
  };

  const handleInput = e => {
    setAwardParams({ ...awardParams, [e.target.name]: e.target.value });
  };

  const handleNextButton = () => {
    if (currentPage === 2) {
      navigate('/Complete');
    }
    setCurrentPage(prev => prev + 1);
  };

  const renderComponents = currentPage => {
    switch (currentPage) {
      case 0:
        return (
          <Template
            colors={COLORS}
            colorClicked={COLORS[Number(awardParams.templateId)]}
            changeItems={changeItems}
            selectedAwardImg={TEMPLATE_IMAGE[Number(awardParams.templateId)]}
            handleNextButton={() => handleNextButton()}
          />
        );
      case 1:
        return <AwardContents handleInput={handleInput} handleNextButton={handleNextButton} />;
      case 2:
        return (
          <SelectStamp
            selectedStamp={Number(awardParams.stickerId)}
            changeItems={changeItems}
            handleClick={() => handleNextButton()}
          />
        );
      default:
        break;
    }
  };

  return <div>{renderComponents(currentPage)}</div>;
};
export default Decorate;
