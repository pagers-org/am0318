import styled from '@emotion/styled';

export const StyledThumbnail = styled.div`
  width: 69.76px;
  height: 70px;
  border-radius: 4px;
  margin-right: 12px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  ${({ mediaType }) =>
    mediaType &&
    `
      margin: 0;
      margin-right: 12px;
      flex: none;
      order: 0;
      flex-grow: 0;`}
`;
