import React from 'react';
import './FeatureForm.css';
import FeatureOptions from './FeatureOptions.js';

class FeatureForm extends React.Component {

    static defaultProps = {
      features: {},
      selected: {},
    }
    
    render() {
      
        const customizableFeatures = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
           
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <FeatureOptions
                      feature={feature}
                      options={this.props.features[feature]}
                      selected={this.props.selected[feature]}
                      updateFeature={this.props.updateFeature} />
              </fieldset>
            )
          });

        return (
          <form className="main__form">
              <h2>Customize your laptop</h2>
              {customizableFeatures}
          </form>
        );
    }

}

export default FeatureForm;