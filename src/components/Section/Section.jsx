import React from 'react';
import { PropTypes } from 'prop-types';
// import { TitleName } from './Section.styled';
const Section = ({ title, children }) => (
  <>
    <p>{title}</p>
    {children}
  </>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
