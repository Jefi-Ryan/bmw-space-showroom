import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'aframe';
import 'aframe-particle-system-component'; // Import any A-Frame components you need
import './registerComponents/HoverVisible'

class App extends React.Component {

  render() {
    return (
      <a-scene reflection="directionalLight:a-light#dirlight;" shadow="type: pcfsoft">
        {/*Scene is used to place all entities*/}

        <a-assets>
          {/* Here, all assets can be placed */}
          <img id="sky" src="milky-way.jpg"/>
          <img id="poster1" src="poster1.jpeg"/>
          <img id="poster2" src="poster2.jpeg"/>
          <img id="poster3" src="poster3.jpg"/>
          <img id="poster4" src="poster4.jpeg"/>
          <img id="poster5" src="poster5.jpeg"/>
          <img id="poster6" src="poster6.jpeg"/>
          <img id="poster7" src="poster7.jpeg"/>
          <img id="poster8" src="poster8.jpg"/>
          <img id="poster9" src="poster9.jpeg"/>
          <img id="poster10" src="poster10.jpeg"/>
          <img id="poster11" src="poster11.jpeg"/>
          <img id="poster12" src="poster12.jpeg"/>
          <img id="poster13" src="poster13.jpeg"/>
          <img id="poster14" src="poster14.jpg"/>
          <img id="poster15" src="poster15.jpeg"/>
          <img id="poster16" src="poster16.jpg"/>
          <img id="poster17" src="poster17.jpeg"/>
          <img id="poster18" src="poster18.jpg"/>
          <a-asset-item id="scifi-showroom" src="scifi-showroom/towerShowroomFinalised.glb"></a-asset-item>
          <a-asset-item id="emblem" src="bmw_emblem/scene.gltf"></a-asset-item>
          <a-asset-item id="bmw_m3_e30" src="bmw_m3_e30_sport_evolution/scene.gltf"></a-asset-item>
          <a-asset-item id="bmw_m3_e46" src="bmw_m3_e46/scene.gltf"></a-asset-item>
          <a-asset-item id="bmw_m3_e92" src="bmw_m3_e92_stance/scene.gltf"></a-asset-item>
          <a-asset-item id="bmw_m4_csl" src="bmw_m4_csl_2023/scene.gltf"></a-asset-item>
          <a-asset-item id="bmw_m4_f82" src="bmw_m4_f82/scene.gltf"></a-asset-item>
          <a-asset-item id="bmw_m4_gt3" src="bmw_m4_gt3/scene.gltf"></a-asset-item>
          <video id="ad" autoPlay loop="true"  src="bmw_ad.mp4"> </video>
          <video id="i5" autoPlay loop="true" src="i5.mp4"></video>
          <video id="csl" autoPlay loop="true" src="csl.mp4"></video>
          <video id="gt3" autoPlay loop="true" src="gt3.mp4"></video>
          <video id="m3" autoPlay loop="true" src="m3.mp4"></video>
          <video id="i7" autoPlay loop="true" src="i7.mp4"></video>
        </a-assets>

        {/* The camera determines what the user sees. */}
        {/* Cursor is used to point an entity*/}
        <a-camera> <a-cursor></a-cursor> </a-camera> 
        
        <a-sky src ="#sky"> </a-sky>
        {/* This is the bmw emblem which will we visible when looked from outside */}
        <a-entity gltf-model="#emblem" position = "60 -8 -42" rotation = "68 180 0" scale="10 10 10"></a-entity> 

        {/* This is the showroom */}
        <a-entity gltf-model="#scifi-showroom">
        
        {/* This is first section of the building */}

        {/* This is the BMW M3 E30 car and its specs, video, positinal sound*/}
          <a-entity gltf-model="#bmw_m3_e30" position = "-38 1.4 -7" rotation = "0 30 0" scale="3 3 3" show-on-hover = "target: #m3_e30_text"></a-entity>
          <a-text id="m3_e30_text" color="white" align="left" value="Model: BMW M3 E30\n
                                          Engine type: Inline 4\n
                                          Fuel type: Petrol\n
                                          Power: 197 bhp at 6750 rpm\n
                                          Top speed: 235 km/h
                                          " position = "-34 1.5 -7" scale = "1.5 1.5 1.5" rotation = "0 -30 0" visible="false"></a-text>
          <a-video src="#i7" width="8" height="4" position="-36 5 -11" rotation = "0 30 0"></a-video>
          <a-sound src="src: url(i7.m4a)" autoplay="true" volume = "0.05" position="-36 2 -11" rotation = "0 30 0" loop = "true"></a-sound>

          {/* This is the BMW M4 ESL car and its specs, video, positinal sound*/}
          <a-entity gltf-model="#bmw_m4_csl" position = "-43.75 0.5 0.5" scale="1.5 1.5 1.5" rotation = "0 90 0" show-on-hover = "target: #m4_csl_text"></a-entity>
          <a-text id="m4_csl_text" color="white" align="left" value="Model: BMW M4 CSL\n
                                          Engine type: Inline 6\n
                                          Fuel type: Petrol\n
                                          Power: 454 bhp at 6250 rpm\n
                                          Top speed: 235 km/h
                                          " position = "-43.75 2 -1.5" rotation = "0 70 0" scale = "1.5 1.5 1.5" visible="false"></a-text>

          <a-video src="#csl" width="8" height="4" position="-43.75 5 0.5" rotation = "0 90 0"></a-video>
          <a-sound src="src: url(csl.mp3)" autoplay="true" volume = "0.05" position="-43.75 2 0.5" rotation = "0 90 0" loop = "true"></a-sound>

          {/* This is the BMW M3 E92 car and its specs, video, positinal sound*/}
          <a-entity gltf-model="#bmw_m3_e92" position = "-38 0 7" rotation = "0 -220 0" scale="1.5 1.5 1.5" show-on-hover = "target: #m3_e92_text"></a-entity>
          <a-text id="m3_e92_text" color="white" value="Model: BMW M3 E92\n
                                          Engine type: 4.0-liter V8\n
                                          Fuel type: Petrol\n
                                          Power: 414 bhp at 8300 rpm\n
                                          Top speed: 250 km/h\n" position = "-32 2 9" rotation = "0 140 0" scale = "1.5 1.5 1.5" visible="false"></a-text>

          <a-video src="#m3" width="8" height="4" position="-36 5 13" rotation = "0 -220 0"></a-video>
          <a-sound src="src: url(m3.m4a)" autoplay="true" volume = "0.05" position="-36 2 13" rotation = "0 -220 0" loop = "true"></a-sound>

          {/* This is second section of the building */}
          {/* This is the BMW M4 F82 car and its specs, video, positinal sound*/}
          <a-entity gltf-model="#bmw_m4_f82" position = "40 0 -10" rotation = "0 -45 0" scale="1.5 1.5 1.5" show-on-hover = "target: #m4_f82_text"></a-entity>
          <a-text id="m4_f82_text" color='white' value="Model: BMW M4 F82\n
                                          Engine type: Inline 6\n
                                          Fuel type: Petrol\n
                                          Power: 425 bhp at 5500\n
                                          Top speed: 250 km/h" position = "36 2 -13" rotation = "0 -30 0" scale = "1.5 1.5 1.5" visible="false"></a-text>
          <a-video src="#i5" width="8" height="4" position="35 5 -14"></a-video>
          <a-sound src="src: url(i5.mp3)" autoplay="true" volume = "0.1" position="35 1 -14" loop = "true"></a-sound>
          
          {/* This is the BMW M3 E46 car and its specs*/}                                
          <a-entity gltf-model="#bmw_m3_e46" position = "35 1 0" scale = "1.2 1.2 1.2" show-on-hover="target: #m3_e46_text"></a-entity>
          <a-text id = "m3_e46_text" color="white" value="Model: BMW M3 E46\n
                                            Engine type: Inline 6\n
                                            Fuel type: Petrol\n
                                            Power: 333 bhp at 7900 rpm\n
                                            Top speed: 250 km/h" position = "35 2 2" rotation = "0 -80 0" scale = "1.5 1.5 1.5" visible="false"></a-text>
          
          {/* This is the BMW M4 GT3 car and its specs, video, positinal sound*/}
          <a-entity gltf-model="#bmw_m4_gt3" position = "40 0 10" rotation = "0 -140 0" scale="1.5 1.5 1.5" show-on-hover="target: #m4_gt3_text"></a-entity>
          <a-text id = "m4_gt3_text" color="white" value="Model: BMW M4 GT3\n
                                            Engine type: Inline 6\n
                                            Fuel type: Petrol\n
                                            Power: 500 bhp\n
                                            Top speed: 290 km/h
                                            " position = "38 2 12" rotation = "0 -120 0" scale = "1.5 1.5 1.5" visible="false"></a-text>
          <a-video src="#gt3" width="8" height="4" position="35 5 14" rotation = "0 -140 0"></a-video>
          <a-sound src="src: url(gt3.mp3)" autoplay="true" volume = "0.1" position="35 1 14" loop = "true"></a-sound>
          
          {/* This is the videosphere and its positional audio*/}
          <a-videosphere src="#ad" scale = "0.005 0.005 0.005" position = "43 2 0"></a-videosphere>
          <a-sound src="src: url(sphere_audio.mp3)" autoplay="true" volume = "0.1" position="43 2 0" loop = "true"></a-sound>

        

          {/* Bridge */}
          <a-image src="#poster1" position = "-14 5 2" rotation = "30 180 0" scale = "3 3 3"></a-image>
          <a-image src="#poster2" position = "-10 5 2" rotation = "30 180 0" scale = "3 3 3"></a-image>
          <a-image src="#poster3" position = "-6 5 2" rotation = "30 180 0" scale = "3 3 3"></a-image>
          <a-image src="#poster4" position = "-2 5 2" rotation = "30 180 0" scale = "3 3 3"></a-image>
          <a-image src="#poster5" position = "2 5 2" rotation = "30 180 0" scale = "3 3 3"></a-image>
          <a-image src="#poster6" position = "6 5 2" rotation = "30 180 0" scale = "3 3 3"></a-image>
          <a-image src="#poster7" position = "10 5 2" rotation = "30 180 0" scale = "3 3 3"></a-image>
          <a-image src="#poster8" position = "14 5 2" rotation = "30 180 0" scale = "3 3 3"></a-image>
          <a-image src="#poster9" position = "18 5 2" rotation = "30 180 0" scale = "3 3 3"></a-image>

          <a-image src="#poster10" position = "-14 5 -3" rotation = "30 360 0" scale = "3 3 3"></a-image>
          <a-image src="#poster11" position = "-10 5 -2" rotation = "30 360 0" scale = "3 3 3"></a-image>
          <a-image src="#poster12" position = "-6 5 -2" rotation = "30 360 0" scale = "3 3 3"></a-image>
          <a-image src="#poster13" position = "-2 5 -2" rotation = "30 360 0" scale = "3 3 3"></a-image>
          <a-image src="#poster14" position = "2 5 -2" rotation = "30 360 0" scale = "3 3 3"></a-image>
          <a-image src="#poster15" position = "6 5 -2" rotation = "30 360 0" scale = "3 3 3"></a-image>
          <a-image src="#poster16" position = "10 5 -2" rotation = "30 360 0" scale = "3 3 3"></a-image>
          <a-image src="#poster17" position = "14 5 -2" rotation = "30 360 0" scale = "3 3 3"></a-image>
          <a-image src="#poster18" position = "18 5 -2" rotation = "30 360 0" scale = "3 3 3"></a-image>

        </a-entity>
        
        
      
      </a-scene>
    );
  }
}

export default App;
