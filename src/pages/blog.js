import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import YouTube from 'react-youtube';
import EffectSlider from '../components/effectSlider';

 

export default class Blog extends React.Component {
        render() {
              const opts = {
                height: '1000',
                width: '500',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                  playsinline: 1
                }
              };

              const BasicSvg = () =>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0%" height="0%">
                    <filter id="luminanceToAlpha">
                        <feColorMatrix type="luminanceToAlpha" values=""/>
                    </filter>
                </svg>

              // const VideoFilter = {
              //       filter: 'brightness(200%)'
              // }
                
              return (

                <Layout>
                    <BasicSvg />
                        <YouTube 
                        className="VideoFilter"
                        videoId="vkEOOLlkMUQ"
                        opts={opts}
                        onReady={this._onReady}
                        />
                        <EffectSlider />
                </Layout>
              );
            }
            _onReady(event) {
              // access to player in all event handlers via event.target
              event.target.pauseVideo();
            }
          }


