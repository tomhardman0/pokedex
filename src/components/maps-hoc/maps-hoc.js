import React, { Component } from 'react';

import typeToColourStyles from '../../shared/type-to-colour';
import abilityIdToDesc from '../../../config/abilities-to-desc.json';
import idToImageMap from '../../../config/id-to-image';

export default (ComponentToWrap) => {
  return class MapsHoc extends Component {
    render() {
      return (
        <ComponentToWrap
          typeColourMap={typeToColourStyles}
          abilityIdToDesc={abilityIdToDesc}
          idToImageMap={idToImageMap}
          {...this.props}
        />
      )
    }
  }
}
