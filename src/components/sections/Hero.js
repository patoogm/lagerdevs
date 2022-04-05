import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="450">
              Somos <span className="text-color-primary">Lager Devs</span>.
            </h1>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="150">
              Es tiempo de demostrarle al mundo de lo que sos capaz.
              <br/>
              Trabajemos juntos para lograr tus objetivos!
            </p>
            <div className="container-sm">
              <div className="reveal-from-bottom" data-reveal-delay="1000">
                <ButtonGroup>
                  <Button tag="a" color="secondary" wideMobile href="#about">
                    Quiero conocerlos
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="#">
                    Contactarme
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-ilustration">
            <Image
              src={require('../../assets/images/hero-ilustration.png')}
              alt="Hero Ilustration"
              width={500}
              height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;