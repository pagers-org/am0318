import styled from '@emotion/styled';

const StyledSpinner = styled.div`
  /*
 * SPDX-FileCopyrightText: 2014 Luke Haas
 *
 * SPDX-License-Identifier: MIT
 */

  /*!
 *  License
 *  ------------------------------------------------------------------------------
 *  This code is licensed under the MIT License.
 *  The license is available at:
 *  https://github.com/lukehaas/css-loaders/blob/bbd6d6776d89b546b6cc2e3b0675bb9b9ed1fcd6/LICENSE
 *  Copyright (c) 2014 Luke Haas
 */
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.55em solid rgba(28, 135, 223, 0.2);
  border-right: 0.55em solid rgba(28, 135, 223, 0.2);
  border-bottom: 0.55em solid rgba(28, 135, 223, 0.2);
  border-left: 0.55em solid #16b4f3;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  border-radius: 50%;
  width: 5em;
  height: 5em;

  &::after {
    border-radius: 50%;
    width: 5em;
    height: 5em;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;
