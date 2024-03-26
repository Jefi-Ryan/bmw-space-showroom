# bmw-space-showroom

Team Name - Tech Titans
Team Members - Jefi Ryan D, Nicholas Branson Francis
Theme - BMW Car Showroom in Space

This react App makes use of A-Frame Framework that allows us to view contents in a 3D Fashion. The theme used here is a BMW Car Showroom in the Space. 

For the showroom, a 3D showroom model has been downloaded as a ready-to-use model from the SketchFab Repository. Once it was downloaded, a 3D Model editor such as Blender was used to remove unnecessary entities from the model, such as blocks/cubes obstructing the way, etc. After this, the modified model was exported from Blender as a GLTF File.

Next, a react App is created , where script files like 'aframe' is included in the 'index.html' file of the app. This is done so as to avail a-frame related features.
If we want to display any 3D object in react app using a-frame, we need to initially create a parent container using the <a-scene> tag. Under this tag, we can use child elements like <a-entity> (Used to create any 3d entity like ground, sky, 3d model, etc). 

The 3D model used basically consists of two round areas interconnected with a bridge. One of the areas has a centre hole, where a video sphere was added using the <a-videosphere> tag. This sphere would show a BMW ad for one of their upcoming cars. Similarly, multiple rectangular video frames have been created on the top section of both areas, as well as along the bridge pathway.

Just like the 3D showroom model, various BMW vahicles have been downloaded and loaded into the app too, such as M3, M4, etc. They are placed in the showroom in desired areas by using the 'position' attribute of the <a-entity> tag. When we navigate close to the vehicles, the specifications of the car will pop up. 

The audios of the video can be heard when we navigate close to the respective screens or the video sphere.

For the sky, a 'milky way galaxy night sky' jpg image has been used in the <a-sky> tag using the 'src' attribute to specify the path of the image.

Finally, The BMW logo has also been added on the exterior part of the showroom.
