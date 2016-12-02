import React from 'react';

import { translate as $t } from '../../helpers';

import ButtonSelect from '../ui/button-select';

const TypeSelect = props => {
    let getThisType = () => props.operation.type;
    let idToDescriptor = type => [$t(`client.${type}`)];

    return (
        <ButtonSelect
          key={ `operation-type-select-operation-${props.operation.id}` }
          optionsArray={ props.types }
          selectedId={ getThisType }
          idToDescriptor={ idToDescriptor }
          onSelectId={ props.onSelectId }
        />
    );
};

TypeSelect.propTypes = {
    // Operation for which we want to change the type.
    operation: React.PropTypes.object.isRequired,

    // The array of all possible types.
    types: React.PropTypes.array.isRequired,

    // A function to call whenever the type has been changed.
    onSelectId: React.PropTypes.func.isRequired
};

export default TypeSelect;