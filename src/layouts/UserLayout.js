import React, { Fragment } from 'react';
import { Redirect, Switch, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import styles from './UserLayout.less';
import { getRoutes } from '../utils/utils';
import Wave from '../components/Wave/wave.component';
import comJs from '../assets/js/common';

const copyright = (
  <Fragment>
    {comJs.copyright}
  </Fragment>
);

class UserLayout extends React.PureComponent {
  state = {
    speed: 1,
    color: 'rgba(0, 254, 156, 0.2)',
    height: 50,
    scale: 4,
  }
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = comJs.projectTit;
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - ${comJs.projectTit}`;
    }
    return title;
  }


  render() {
    const { routerData, match } = this.props;

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <Wave
            {...this.state}
            className={styles.wave}

          />
       {/*   <Particles
            //params={{
            //  particles: {
            //    "number": {
            //      "value":60,
            //      "density": {
            //        "enable": true,
            //        "value_area": 800,
            //      },
            //    },
            //    "color": {
            //      "value": "#ffffff",
            //    },
            //    "shape": {
            //      "type": "edge",  // circle edge triangle polygon star
            //      "stroke": {
            //        "width": 0,
            //        "color": "#000000",
            //      },
            //      "polygon": {
            //        "nb_sides": 5,
            //      },
            //      "move":{
            //         "speed": 0.5,
            //      },
            //      "image": {
            //        "src": "img/github.svg",
            //        "width": 100,
            //        "height": 100,
            //      },
            //    },
            //    "opacity": {
            //      "value": 1,
            //      "random": true,
            //      "anim": {
            //        "enable": true,
            //        "speed": 0.8,
            //        "opacity_min": 0,
            //        "sync": false,
            //      },
            //    },
            //    "size": {
            //      "value":3,
            //      "random": true,
            //      "anim": {
            //        "enable": false,
            //        "speed": 3,
            //        "size_min": 0.3,
            //        "sync": false,
            //      },
            //    },
            //    "line_linked": {
            //      "enable": false,
            //      "distance": 150,
            //      "color": "#ffffff",
            //      "opacity": 0.4,
            //      "width": 1,
            //    },
            //    "move": {
            //      "enable": true,
            //      "speed":3,
            //      "direction": "none",
            //      "random": true,
            //      "straight": false,
            //      "out_mode": "out",
            //      "bounce": false,
            //      "attract": {
            //        "enable": false,
            //        "rotateX": 600,
            //        "rotateY": 600,
            //      },
            //    },
            //  },
            //  "interactivity": {
            //    "detect_on": "canvas",
            //    "events": {
            //      "onhover": {
            //        "enable": true,
            //        "mode": "bubble",
            //      },
            //      "onclick": {
            //        "enable": true,
            //        "mode": "repulse",
            //      },
            //      "resize": true,
            //    },
            //    "modes": {
            //      "grab": {
            //        "distance": 400,
            //        "line_linked": {
            //          "opacity": 1,
            //        },
            //      },
            //      "bubble": {
            //        "distance": 250,
            //        "size": 0,
            //        "duration": 2,
            //        "opacity": 0,
            //        "speed": 3,
            //      },
            //      "repulse": {
            //        "distance": 400,
            //        "duration": 0.4,
            //      },
            //      "push": {
            //        "particles_nb": 4,
            //      },
            //      "remove": {
            //        "particles_nb": 2,
            //      },
            //    },
            //  },
            //  "retina_detect": true,
            //}}
            className={styles.bgvideo}
          />*/}
          {/* <div className={styles.top}> */}
          {/* <div className={styles.header}> */}
          {/* <Link to="/"> */}
          {/* /!*<img alt="logo" className={styles.logo} src={logo} />*!/ */}
          {/* <span className={styles.title}>可视化演示</span> */}
          {/*  </Link> */}
          {/* </div> */}
          {/* <div className={styles.desc}></div> */}
          {/* </div> */}
          <Switch>
            {getRoutes(match.path, routerData).map(item => (
              <Route
                key={item.key}
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            ))}
            <Redirect exact from="/user" to="/user/login" />
          </Switch>

          <div style={{position:"absolute",display:"block",zIndex:"9999",bottom:"5px",color:"#fff",textAlign:"center",width:"100%"}}>
            <GlobalFooter copyright={copyright} />
          </div>

        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
