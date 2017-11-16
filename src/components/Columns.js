//React
import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
//Components
import Column from './Column';

const Columns = ({ columns, sortRows, sort }) => {
    const tableColumns = columns.map(({ accessor, label }) => {
        return <Column key={ accessor }
                       accessor={ accessor }
                       label={ label }
                       sort={ sort }
                       onClick={ sortRows } />;
    });
    return (
        <thead>
            <tr>
                { tableColumns }
            </tr>
        </thead>
    );
};

Columns.PropTypes = {
    columns: arrayOf(shape({
        accessor: string.isRequired,
        label: string.isRequired,
    })),
    onClick: func,
};

export default Columns