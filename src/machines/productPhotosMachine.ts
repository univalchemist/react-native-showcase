import { navigationRef } from '../App';
import { createMachine } from "xstate";

type ScreenName = 'Start' | 'TakePictureScreen' | 'ConfirmPictureScreen' | 'Finish';

const navigate = (screenName: ScreenName) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screenName);
  }
};
export type PhotosVariants = 'FrontPhoto' | 'SidePhoto' | 'SerialNumberPhoto';
export interface ContextI {
  FrontPhoto: string;
  SidePhoto: string;
  SerialNumberPhoto: string;
  description: string;
  hints: string[];
  currentConfirmPhoto: PhotosVariants | null;
}

export const productPhotosMachine = createMachine({
  id: 'productsPhotos',
  initial: 'Start',
  schema: {
    context: {} as ContextI,
  },
  context: {
    FrontPhoto: '',
    SidePhoto: '',
    SerialNumberPhoto: '',
    description: 'You will need to take 3 photos of the item',
    hints: [],
    currentConfirmPhoto: null,
  },
  states: {
    Start: {
      on: {
        NEXT: { 
          target: 'FrontPhoto', actions: ['navigateToFrontPhoto', 'navigateToTakePictureScreen'],
        },
      },
    },
    FrontPhoto: {
      on: {
        VERIFY: {
          target: 'ConfirmFrontPhoto', actions: ['navigateToConfirmScreen'],
        },
      },
    },
    ConfirmFrontPhoto: {
      on: {
        CONFIRM: { 
          target: 'SidePhoto', actions: ['navigateToSidePhoto', 'navigateToTakePictureScreen'],
        },
        RETAKE: {
          target: 'FrontPhoto', actions: ['navigateToFrontPhoto', 'navigateToTakePictureScreen'],
        },
      },
    },
    SidePhoto: {
      on: { 
        VERIFY: {
          target: 'ConfirmSidePhoto', actions: ['navigateToConfirmScreen'],
        },
      },
    },
    ConfirmSidePhoto: {
      on: {
        CONFIRM: { 
          target: 'SerialNumberPhoto', actions: ['navigateToSerialNumber', 'navigateToTakePictureScreen'],
        },
        RETAKE: {
          target: 'SidePhoto', actions: ['navigateToSidePhoto', 'navigateToTakePictureScreen'],
        },
      },
    },
    SerialNumberPhoto: {
      on: { 
        VERIFY: {
          target: 'ConfirmSerialNumberPhoto', actions: ['navigateToConfirmScreen'],
        },
      },
    },
    ConfirmSerialNumberPhoto: {
      on: {
        CONFIRM: {
          target: 'Finish', actions: ['navigateToFinish'],
        },
        RETAKE: {
          target: 'SerialNumberPhoto', actions: ['navigateToSerialNumber', 'navigateToTakePictureScreen'],
        },
      }
    },
    Finish: {
      on: {
        RESET: {
          target: 'Start', actions: ['resetMachine']
        }
      }
    },
  },
},
{
  actions: {
    navigateToConfirmScreen: (ctx, e) => {
      const pictureVariant = Object.keys(e.data)[0] as 'FrontPhoto' | 'SidePhoto' | 'SerialNumberPhoto';
      ctx[pictureVariant] = e.data[pictureVariant];
      navigate('ConfirmPictureScreen');
    },
    navigateToTakePictureScreen: () => {
      navigate('TakePictureScreen');
    },
    navigateToFrontPhoto: (context) => {
      context.description = 'Take picture of the front';
      context.hints = ['take picture of the whole item'];
      context.currentConfirmPhoto = 'FrontPhoto';
    },
    navigateToSidePhoto: (context) => {
      context.description = 'Take a picture from the side';
      context.hints = ['take picture of the whole item', 'try to capture the entire object'];
      context.currentConfirmPhoto = 'SidePhoto';
    },
    navigateToSerialNumber: (context) => {
      context.description = 'Take a picture of the serial number badge';
      context.hints = ['try to include only the badge in the photo', 'make sure that serial numbers are readable', 'try not to make the photo too dark'];
      context.currentConfirmPhoto = 'SerialNumberPhoto';
    },
    navigateToFinish: (context) => {
      context.description = 'Thanks for taking photos!';
      context.hints = [];
      navigate('Finish');
    },
    resetMachine: (context) => {
      context.FrontPhoto = '';
      context.SidePhoto = '';
      context.SerialNumberPhoto = '';
      context.description = 'You will need to take 3 photos of the item';
      context.hints = [];
      context.currentConfirmPhoto = null;
    }
  }
})