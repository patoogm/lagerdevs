import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Nuestros Servicios',
    paragraph: 'Nos caracterizamos por brindar el mejor servicio a nuestros clientes. Ofrecemos soluciones web ágiles y con los mejores estandares de calidad. Tu proyecto es lo más importante para nosotros.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id="Servicios"
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                <h3 className="mt-0 text-color-primary">
                  Desarrollo Web
                  </h3>
                <p className="m-0">
                  Trabajamos para que tu proyecto tenga la perfomance más alta, de fácil gestión y autoadministrable; como así también el diseño tanto para PC
                  como para dispositivos móviles (Diseño Resposive).   
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/DW.png')}
                  alt="Features split 01"
                  width={1150}
                  height={1150} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">

                <h3 className="mt-0 text-color-primary">
                  Diseño Gráfico
                  </h3>
                <p className="m-0">
                  La personalización de tu proyecto te ayudará a crecer, con Lager Devs es posible. Contamos con profesionales para que el 
                  diseño de tu página sea como siempre lo quisiste.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/DG.png')}
                  alt="Features split 02"
                  width={1147}
                  height={1147} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                <h3 className="mt-0 text-color-primary">
                  Community Manager
                  </h3>
                <p className="m-0">
                  Las redes sociales son una parte importante para cualquier empresa. Por eso contamos con el mejor servicio para que la tuya se destaque del resto.
                  Brindamos asesoramiento personalizado para cada uno de nuestros clientes en materia de Community Manager.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/CM.png')}
                  alt="Features split 03"
                  width={1200}
                  height={800} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;