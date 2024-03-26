# bmw-space-showroom

Team Name - Tech Titans
Team Members - Jefi Ryan D, Nicholas Branson Francis
Theme - BMW Car Showroom in Space

This react App makes use of A-Frame Framework that allows us to view contents in a 3D Fashion. The theme used here is a BMW Car Showroom in the Space. 

Pictures:
![Screenshot 2024-03-26 170610](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/0502536c-a1b0-412d-95f6-31cf42263bea)
![Screenshot 2024-03-26 170705](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/c8f3b51b-7650-4539-a074-c665277e88e9)
![Screenshot 2024-03-26 170735](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/52cd7c99-c40e-4166-8beb-4f55f3e18d4b)
![Screenshot 2024-03-26 170801](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/98a53b5b-9a0e-44d2-b34a-543cf3c2699a)
![Screenshot 2024-03-26 170830](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/7a98d3ee-2585-4d8d-bd33-2c411cc4f852)
![Screenshot 2024-03-26 170916](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/9a47417a-dd93-4828-89f5-305607a98e16)
![Screenshot 2024-03-26 170944](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/1f2e4006-09a6-4baf-8e8b-345a22031408)
![Screenshot 2024-03-26 171009](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/1403bcc5-94ce-4e02-8dc0-2c74041eb293)
![Screenshot 2024-03-26 171031](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/e620fe9c-34fc-4009-ab68-134da3a0922c)
![Screenshot 2024-03-26 171055](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/bc5ad4d1-0b18-46de-86e1-67935e70e25d)
![Screenshot 2024-03-26 171130](https://github.com/Jefi-Ryan/bmw-space-showroom/assets/114754832/7a967738-ecf9-4957-9e8e-4246f9da752f)


For the showroom, a 3D showroom model has been downloaded as a ready-to-use model from the SketchFab Repository. Once it was downloaded, a 3D Model editor such as Blender was used to remove unnecessary entities from the model, such as blocks/cubes obstructing the way, etc. After this, the modified model was exported from Blender as a GLTF File.

Next, a react App is created , where script files like 'aframe' is included in the 'index.html' file of the app. This is done so as to avail a-frame related features.
If we want to display any 3D object in react app using a-frame, we need to initially create a parent container using the <a-scene> tag. Under this tag, we can use child elements like <a-entity> (Used to create any 3d entity like ground, sky, 3d model, etc). 

The 3D model used basically consists of two round areas interconnected with a bridge. One of the areas has a centre hole, where a video sphere was added using the <a-videosphere> tag. This sphere would show a BMW ad for one of their upcoming cars. Similarly, multiple rectangular video frames have been created on the top section of both areas, as well as along the bridge pathway.

Just like the 3D showroom model, various BMW vahicles have been downloaded and loaded into the app too, such as M3, M4, etc. They are placed in the showroom in desired areas by using the 'position' attribute of the <a-entity> tag. When we navigate close to the vehicles, the specifications of the car will pop up. 

The audios of the video can be heard when we navigate close to the respective screens or the video sphere.

For the sky, a 'milky way galaxy night sky' jpg image has been used in the <a-sky> tag using the 'src' attribute to specify the path of the image.

Finally, The BMW logo has also been added on the exterior part of the showroom.
