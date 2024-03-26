import 'aframe';
import 'aframe-particle-system-component'; 

/* global AFRAME */
// This component is used to make an entity visible or hidden based on other entity
AFRAME.registerComponent('show-on-hover', {
    schema: {
      target: { type: 'selector' }
    },
  
    init: function () {
      var el = this.el;
      var target = this.data.target;

      el.addEventListener('mouseenter', function () {
        target.setAttribute('visible', 'true');
      }); // when mouse is touches the entity, target entity will become visible
  
      el.addEventListener('mouseleave', function () {
        target.setAttribute('visible', 'false'); // when mouse not touches the entity, target entity will become invisible
      });
    }
  });
  