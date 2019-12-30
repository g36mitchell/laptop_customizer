import React from 'react';
import slugify from 'slugify';
import { USCurrencyFormat } from './data/features_data.js';

class FeatureOptions extends React.Component {

    render() {

        const featureOptions = this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(this.props.feature)}
                        checked={item.name === this.props.selected.name}
                        onChange={e => this.props.updateFeature(this.props.feature, item)}
                    />
                    <label  
                        htmlFor={itemHash} 
                        className="feature__label">
                        {item.name} 
                        ({USCurrencyFormat.format(item.cost)})
                    </label>
                </div>
            )
        });

      return (
        <>
          {featureOptions}
        </>
      );
    }
}

export default FeatureOptions;