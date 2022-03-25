import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link
            activeClass="active"
            to="Inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            delay={10}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="Nosotros"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            delay={10}
            >
              Nosotros
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="Clientes"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            delay={10}
            >
              Clientes
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="Contacto"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            delay={10}
            >
              Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;