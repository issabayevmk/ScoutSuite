import React from 'react';
import PropTypes from 'prop-types';

import GenericObject from '../../../components/Partial/GenericObject';
import { partialDataShape } from '../../../utils/Partials';


const propTypes = {
  data: PropTypes.shape(partialDataShape).isRequired,
};

const ParameterGroups = props => {
  const { data } = props;

  if (!data) return null;

  return (
    <div>
      <h4>Attributes</h4>
      <GenericObject
        data={data.item}
      />
    </div>
  );
};

ParameterGroups.propTypes = propTypes;

export default ParameterGroups;