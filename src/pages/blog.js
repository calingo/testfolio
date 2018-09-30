import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import YouTube from 'react-youtube';
 

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
           
              return (

                <Layout>
                    <YouTube
                    videoId="vkEOOLlkMUQ"
                    opts={opts}
                    onReady={this._onReady}
                    />
                </Layout>
              );
            }
            _onReady(event) {
              // access to player in all event handlers via event.target
              event.target.pauseVideo();
            }
          }


