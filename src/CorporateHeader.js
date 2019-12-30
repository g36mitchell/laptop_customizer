import React from 'react';

class CorporateHeader extends React.Component {

    static defaultProps = {
        company: 'Test Default Company',
    };

    render() {
        return (
            <header>
                <h1>{this.props.company}</h1>
            </header>
        )
    }
}

export default CorporateHeader;