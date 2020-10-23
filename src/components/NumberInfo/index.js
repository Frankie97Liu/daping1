import React from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

const NumberInfo = ({ theme, title, subTitle, total, subTotal, status, suffix, gap, ...rest }) => (
  <div
    className={classNames(styles.numberInfo, {
      [styles[`numberInfo${theme}`]]: theme,
    })}
    {...rest}
  >
    {title && <div className={`${styles.numberInfoTitle} titleColor`}>{title}</div>}
    {subTitle && <div className={`${styles.numberInfoSubTitle} fontColor`}>{subTitle}</div>}
    <div className={`${styles.numberInfoValue} titleColor`} style={gap ? { marginTop: gap } : null}>
      <span>
        {total}
        {suffix && <em className={styles.suffix}>{suffix}</em>}
      </span>
      {(status || subTotal) && (
        <span className={`${styles.subTotal} fontColor`}>
          {subTotal}
          {status && <Icon type={`caret-${status}`} />}
        </span>
      )}
    </div>
  </div>
);

export default NumberInfo;
