import { StyledThumbnail } from './Thumbnail.style';

/* eslint-disable */
const Thumbnail = ({ mediaType, bgSrc, alt, restProps }) => {
  return (
    <StyledThumbnail mediaType={mediaType}>
      <img src={bgSrc} alt={alt} {...restProps} />
    </StyledThumbnail>
  );
};

export default Thumbnail;
