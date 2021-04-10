import React from 'react';
import PropTypes from 'prop-types';

import { Partial, PartialValue } from '../../../components/Partial';
import { partialDataShape, valueOrNone } from '../../../utils/Partials';
import InformationsWrapper from '../../../components/InformationsWrapper';

const propTypes = {
  data: PropTypes.shape(partialDataShape).isRequired,
};

const AlertPolicies = props => {
  const { data } = props;

  if (!data) return null;

  return (
    <Partial data={data}>
      <InformationsWrapper>
        <PartialValue
          label="Name"
          valuePath="display_name"
          renderValue={valueOrNone}
        />

        <PartialValue
          label="Monitored Resource"
          valuePath="monitored_resource"
          renderValue={valueOrNone}
        />

        <PartialValue
          label="HTTP Check"
          valuePath="http_check"
          renderValue={valueOrNone}
        />

        <PartialValue
          label="Period"
          valuePath="period"
          renderValue={valueOrNone}
        />

        <PartialValue
          label="Timeout"
          valuePath="timeout"
          renderValue={valueOrNone}
        />
      </InformationsWrapper>
    </Partial>
  );
};

AlertPolicies.propTypes = propTypes;

export default AlertPolicies;