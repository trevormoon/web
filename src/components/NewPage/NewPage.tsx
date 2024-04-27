import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './NewPage.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:16 */
export const NewPage: FC<Props> = memo(function NewPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.navbarLogoLeft}>
        <div className={classes.navbarContainer}>
          <div className={classes.navbarContent}>
            <div className={classes.navbarBrand}>
              <div className={classes.logo}></div>
            </div>
            <div className={classes.navbarMenu}>
              <div className={classes.navbarLink}>
                <div className={classes.about}>About</div>
              </div>
              <div className={classes.navbarLink2}>
                <div className={classes.features}>Features</div>
              </div>
              <div className={classes.navbarLink3}>
                <div className={classes.pricing}>Pricing</div>
              </div>
              <button className={classes.navbarButton}>
                <div className={classes.gETSTARTED}>GET STARTED</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.heroHeadingLeft}>
        <div className={classes.container}>
          <div className={classes.column}>
            <div className={classes.content}>
              <div className={classes.H1TitleCopyGoesHereBeAwesome}>현재 페이지는 개발중에 있습니다</div>
              <div className={classes.PLoremIpsumDolorSitAmetConsect}>
                <div className={classes.textBlock}>본 페이지는 정보 제공을 위해 개설된 페이지 입니다.</div>
                <div className={classes.textBlock2}>여러분들의 피드백은 저희에게 큰 힘이 됩니다.</div>
                <div className={classes.textBlock3}>
                  <p></p>
                </div>
              </div>
            </div>
            <div className={classes.actions}>
              <button className={classes.button}>
                <div className={classes.unnamed}>서비스 이용하러 가기</div>
              </button>
            </div>
          </div>
          <div className={classes.column2}>
            <div className={classes.imageWrapper}>
              <div className={classes.image}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
