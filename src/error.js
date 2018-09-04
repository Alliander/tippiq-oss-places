/**
 * Error Page.
 * @module Error
 */

import React, { PropTypes } from 'react';

/**
 * Error page.
 * @function Error
 * @returns {string} Markup of the error page.
 */
const Error = ({ message }) =>
  <div>
    <span>Er is iets fout gegaan. </span>
    <span>{message}</span>
  </div>;

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
