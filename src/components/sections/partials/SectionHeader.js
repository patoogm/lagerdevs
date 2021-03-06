import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const SectionHeader = ({
  className,
  data,
  children,
  tag,
  ...props
}) => {

  const classes = classNames(
    'section-header',
    className
  );

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph || data.paragraph2 || data.paragraph3) &&
        <div
          {...props}
          className={classes}
        >
          <div>
            {children}
            {data.title &&
              <Component className={
                classNames(
                  'mt-2',
                  data.paragraph ? 'mb-0' : 'mb-0'
                )}>{data.title}</Component>
            }
            {data.paragraph &&
              <p className="m-1">{data.paragraph}</p>
            }
            {data.paragraph2 &&
              <p className="m-1">{data.paragraph2}</p>
            }
            {data.paragraph3 &&
              <p className="m-1">{data.paragraph3}</p>
            }
          </div>
        </div>
      }
    </>
  );
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;