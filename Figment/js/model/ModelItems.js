
import * as LoadingConstants from '../redux/LoadingStateConstants';

var POSITION_OFFSET = .05 // 5 cm

var ModelItems = [
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_emoji_happy.png"),
    "obj": require("../res/emoji_smile/emoji_smile.vrx"),
    "materials": null,
    "animation":null,
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.497823, 0], // this is bottom-most vertex as reported by renderer
    "position" : [0, .497823 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/emoji_smile/emoji_smile_specular.png'),require('../res/emoji_smile/emoji_smile_diffuse.png'), require('../res/emoji_smile/emoji_smile_normal.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_emoji_sad.png"),
    "obj": require("../res/emoji_sad/emoji_sad.vrx"),
    "materials": null,
    "animation":null,
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.494890, 0],
    "position" : [0, .494890 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/emoji_sad/emoji_sad_specular.png'), require('../res/emoji_sad/emoji_sad_diffuse.png'), require('../res/emoji_sad/emoji_sad_normal.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_emoji_wow.png"),
    "obj": require("../res/emoji_wow/emoji_wow.vrx"),
    "materials": null,
    "animation":null,
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.494890, 0],
    "position" : [0, .494890 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/emoji_wow/emoji_wow_specular.png'), require('../res/emoji_wow/emoji_wow_diffuse.png'), require('../res/emoji_wow/emoji_wow_normal.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_emoji_angry.png"),
    "obj": require("../res/emoji_angry/emoji_angry.vrx"),
    "materials": null,
    "animation":null,
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.494890, 0],
    "position" : [0, .494890 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/emoji_angry/emoji_angry_specular.png'), require('../res/emoji_angry/emoji_angry_diffuse.png'), require('../res/emoji_angry/emoji_angry_normal.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_emoji_kiss.png"),
    "obj": require("../res/emoji_kiss/emoji_kiss.vrx"),
    "materials": null,
    "animation":null,
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.494890, 0],
    "position" : [0, .494890 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/emoji_kiss/emoji_kiss_specular.png'), require('../res/emoji_kiss/emoji_kiss_diffuse.png'), require('../res/emoji_kiss/emoji_kiss_normal.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_emoji_heart.png"),
    "obj": require("../res/emoji_heart/emoji_heart.vrx"),
    "materials": null,
    "animation":null,
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.451719, 0],
    "position" : [0, .451719 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/emoji_heart/emoji_heart_specular.png'), require('../res/emoji_heart/emoji_heart.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_emoji_thumbsup.png"),
    "obj": require("../res/emoji_thumbsup/emoji_thumbsup.vrx"),
    "materials": null,
    "animation":null,
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.506186, 0],
    "position" : [0, 0.506186 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/emoji_thumbsup/emoji_thumbsup_specular.png'), require('../res/emoji_thumbsup/emoji_thumbsup_diffuse.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_emoji_poop.png"),
    "obj": require("../res/emoji_poop/emoji_poop.vrx"),
    "materials": null,
    "animation":null,
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.353032, 0],
    "position" : [0, .353032 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/emoji_poop/emoji_poop_specular.png'), require('../res/emoji_poop/emoji_poop_diffuse.png'), require('../res/emoji_poop/emoji_poop_normal.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_emoji_star.png"),
    "obj": require("../res/emoji_star/object_star.vrx"),
    "materials": null,
    "animation":null,
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.353032, 0],
    "position" : [0, .353032 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/emoji_star/object_star_specular.png'), require('../res/emoji_star/object_star_diffuse.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_pug.png"),
    "obj": require("../res/object_pug_animated/pug_animated.vrx"),
    "materials": null,
    "animation":{name:"Take 001", delay:0, loop:true, run:true},
    "scale": [.3, .3, .3],
    "scalePivot" : [0, 0, 0], // pug seems to already be centered at the bottom of model.
    "position" : [0, 0, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/object_pug_animated/pug_body_specular.png'), require('../res/object_pug_animated/pug_body_diffuse.png'), require('../res/object_pug_animated/pug_body_normal.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_object_cake.png"),
    "obj": require("../res/object_bday_cake/object_bday_cake.vrx"),
    "materials": null,
    "animation":{name:"Take 001", delay:0, loop:true, run:true},
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.135234, 0],
    "position" : [0, .135234, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/object_bday_cake/object_cake_specular.png'), require('../res/object_bday_cake/object_cake_diffuse.png'), require('../res/object_bday_cake/object_cake_normal.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_object_flowers.png"),
    "obj": require("../res/object_flowers/object_flowers.vrx"),
    "materials": null,
    "animation":{name:"Take 001", delay:0, loop:true, run:true},
    "scale": [.6, .6, .6],
    "scalePivot" : [0, -0.290760, 0],
    "position" : [0, .290760, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/object_flowers/object_flowers_specular.png'), require('../res/object_flowers/object_flowers_diffuse.png'), require('../res/object_flowers/object_flowers_normal.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_object_cube.png"),
    "obj": require("../res/object_cube/object_cube.vrx"),
    "materials": null,
    "animation":{name:"Take 001", delay:0, loop:true, run:true},
    "scale": [.3, .3, .3],
    "scalePivot" : [0, -0.290760, 0],
    "position" : [0, .5 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/object_cube/cube_diffuse.png'), require('../res/object_cube/cube_specular.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_object_sphere.png"),
    "obj": require("../res/object_sphere/object_sphere.vrx"),
    "materials": null,
    "animation":{name:"Take 001", delay:0, loop:true, run:true},
    "scale": [.15, .15, .15],
    "scalePivot" : [0, -0.5, 0],
    "position" : [0, 1 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/object_sphere/sphere_diffuse.png'), require('../res/object_sphere/sphere_specular.png')],
  },
  {
    "selected": false,
    "loading": LoadingConstants.NONE,
    "icon_img":require("../res/icon_portal_pyramid.png"),
    "obj": require("../res/object_pyramid/object_pyramid.vrx"),
    "materials": null,
    "animation":{name:"Take 001", delay:0, loop:true, run:true},
    "scale": [.25, .25, .25],
    "scalePivot" : [0, -0.290760, 0],
    "position" : [0, .7 + POSITION_OFFSET, 0],
    "physics": undefined,
    "ref_pointer": undefined,
    "resources": [require('../res/object_pyramid/pyramid_diffuse.png'), require('../res/object_pyramid/pyramid_specular.png')],
  }
]

module.exports = {
  getModelArray: function() {
    return ModelItems;
  }
};
